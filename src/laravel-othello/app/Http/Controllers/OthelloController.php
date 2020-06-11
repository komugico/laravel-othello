<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\OthelloPlayer;

class OthelloController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth');
    }

    public function index() {
        $user = Auth::user();

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

        return view('othello.index', [
            "player" => $player
        ]);
    }
}
