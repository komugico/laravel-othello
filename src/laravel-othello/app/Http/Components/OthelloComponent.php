<?php
namespace App\Http\Components;

use App\OthelloPlayer;
use App\OthelloGame;

class OthelloComponent
{
    public function get_player($user) {
        if (!OthelloPlayer::where("user_id", $user->id)->exists()) {
            $new_player = new OthelloPlayer();
            $new_player->user_id = $user->id;
            $new_player->save();
        }

        $player = OthelloPlayer::from("othello_players as op")
                    ->select()
                    ->join("users as u", "op.user_id", "=", "u.id")
                    ->where("u.id", $user->id)
                    ->select(
                        "op.id as id",
                        "op.rating as rating",
                        "u.name as name")
                    ->get()
                    ->first();
        
        return $player;
    }
    
    public function find_player($player_id) {
        $player = OthelloPlayer::from("othello_players as op")
                    ->select()
                    ->where("op.id", $player_id)
                    ->join("users as u", "op.user_id", "=", "u.id")
                    ->select(
                        "op.id as id",
                        "op.rating as rating",
                        "u.name as name"
                    )
                    ->get()
                    ->first();
        
        return $player;
    }

    public function create_room($player) {
        $game = new OthelloGame();
        $game->player1_id = $player->id;
        $game->status = "WAITING";
        $game->save();

        return $game;
    }

    public function find_gamelog($player) {
        return;
    }

    public function find_waiting_room() {
        $games = OthelloGame::from("othello_games as og")
                    ->select()
                    ->where("og.status", "WAITING")
                    ->join("othello_players as op1", "og.player1_id", "=", "op1.id")
                    ->join("users as u1", "op1.user_id", "=", "u1.id")
                    ->select(
                        "og.id as id",
                        "u1.name as player1_name",
                        "op1.rating as player1_rating",
                    )
                    ->orderBy("id", "asc")
                    ->get();
        
        return $games;
    }

    public function find_ongame_room() {
        $games = OthelloGame::from("othello_games as og")
                    ->select()
                    ->where("og.status", "ONGAME")
                    ->join("othello_players as op1", "og.player1_id", "=", "op1.id")
                    ->join("othello_players as op2", "og.player2_id", "=", "op2.id")
                    ->join("users as u1", "op1.user_id", "=", "u1.id")
                    ->join("users as u2", "op2.user_id", "=", "u2.id")
                    ->select(
                        "og.id as id",
                        "u1.name as player1_name",
                        "u2.name as player2_name",
                        "op1.rating as player1_rating",
                        "op2.rating as player2_rating",
                    )
                    ->orderBy("id", "asc")
                    ->get();
        
        return $games;
    }

    public function join_room($game, $player) {
        $PLAYERS = array("PLAYER1", "PLAYER2");
        shuffle($PLAYERS);
        
        $game->player2_id = $player->id;
        $game->status = "ONGAME";
        $game->first_player = $PLAYERS[0];
        $game->save();

        return $game;
    }

    public function get_game_info($game_id) {
        $game = OthelloGame::find($game_id);
        if ($game->status == "WAITING") {
            $player1 = $this->find_player($game->player1_id);
            $player2 = [
                "id" => "",
                "rating" => "",
                "name" => ""
            ];
            $first_player = null;
        }
        else {
            $player1 = $this->find_player($game->player1_id);
            $player2 = $this->find_player($game->player2_id);
            $first_player = $game->first_player == "PLAYER1" ? 0 : 1;
        }
        return [
            "game" => $game,
            "player1" => $player1,
            "player2" => $player2,
            "first_player" => $first_player
        ];
    }
}