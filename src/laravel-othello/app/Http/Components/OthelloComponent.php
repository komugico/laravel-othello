<?php
namespace App\Http\Components;

use App\OthelloPlayer;
use App\OthelloGame;

class OthelloComponent
{
    public function get_player($user) {
        if (!OthelloPlayer::where('user_id', $user->id)->exists()) {
            $new_player = new OthelloPlayer();
            $new_player->user_id = $user->id;
            $new_player->save();
        }
        $player = OthelloPlayer::select()
                    ->join('users', 'othello_players.user_id', '=', 'users.id')
                    ->where('users.id', $user->id)
                    ->select('othello_players.id', 'othello_players.rating', 'users.name')
                    ->get()
                    ->first();
        
        return $player;
    }

    public function create_room($player) {
        $game = new OthelloGame();
        $game->player1_id = $player->id;
        $game->status = 'WAITING';
        $game->save();

        return $game;
    }

    public function find_waiting_room() {
        $games = OthelloGame::from('othello_games as og')
                    ->select()
                    ->where('og.status', "WAITING")
                    ->join('othello_players as op1', 'og.player1_id', '=', 'op1.id')
                    ->join('users as u1', 'op1.user_id', '=', 'u1.id')
                    ->select(
                        'og.id as id',
                        'u1.name as player1_name',
                        'op1.rating as player1_rating',
                    )
                    ->get();
        
        return $games;
    }

    public function find_ongame_room() {
        $games = OthelloGame::from('othello_games as og')
                    ->select()
                    ->where('og.status', "ONGAME")
                    ->join('othello_players as op1', 'og.player1_id', '=', 'op1.id')
                    ->join('othello_players as op2', 'og.player2_id', '=', 'op2.id')
                    ->join('users as u1', 'op1.user_id', '=', 'u1.id')
                    ->join('users as u2', 'op2.user_id', '=', 'u2.id')
                    ->select(
                        'og.id as id',
                        'u1.name as player1_name',
                        'u2.name as player2_name',
                        'op1.rating as player1_rating',
                        'op2.rating as player2_rating',
                    )
                    ->get();
        
        return $games;
    }

    public function join_room($game, $player) {
        $PLAYERS = array('PLAYER1', 'PLAYER2');
        shuffle($PLAYERS);
        
        $game->player2_id = $player->id;
        $game->status = "ONGAME";
        $game->first_player = $PLAYERS[0];
        $game->save();

        return $game;
    }
}