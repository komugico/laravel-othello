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

    public function find_room($status) {
        $games = OthelloGame::select()
                    ->where('othello_games.status', $status)
                    ->join('othello_players', 'othello_games.player1_id', '=', 'othello_players.id')
                    ->join('users', 'othello_players.user_id', '=', 'users.id')
                    ->select('othello_games.id', 'users.name', 'othello_players.rating')
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