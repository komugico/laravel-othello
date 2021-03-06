<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Log;

use App\OthelloPlayer;
use App\OthelloGame;
use App\Facades\OthelloFacade;

class OthelloController extends Controller
{
    public function __construct()
    {
        $this->middleware("auth");
    }

    public function index() {
        $user = Auth::user();
        $player = OthelloFacade::get_player($user);

        return view("othello.index", [
            "player" => $player
        ]);
    }

    public function gamelog() {
        $user = Auth::user();
        $player = OthelloFacade::get_player($user);
        // FIXME:連想配列ではなくeloquentのCollectionsを使う必要がある
        if (0) {
            $games = [
                [
                "id" => 1,
                "status" => "ONGAME",
                "player1_name" => "decant",
                "player1_rating" => "530000",
                "player2_name" => "komugico",
                "player2_rating" => "5",
                "first_player" => "player2",
                "winner" => "player1"
                ]
            ];
        }
        else {
            $games = OthelloFacade::find_gamelog($player);
        }

        return view("othello.gamelog",[
            "player" => $player,
            "games" =>$games
        ]);
    }

    public function matching() {
        $user = Auth::user();
        $player = OthelloFacade::get_player($user);
        $games = OthelloFacade::find_waiting_room();

        return view("othello.matching", [
            "player" => $player,
            "games" => $games
        ]);
    }

    public function watching() {
        $user = Auth::user();
        $player = OthelloFacade::get_player($user);
        $games = OthelloFacade::find_ongame_room();

        return view("othello.watching", [
            "player" => $player,
            "games" => $games
        ]);
    }

    public function game($game_id) {
        $user = Auth::user();
        $player = OthelloFacade::get_player($user);

        return view("othello.game", [
            "player" => $player
        ]);
    }

    public function postCreateRoom() {
        $user = Auth::user();
        $player = OthelloFacade::get_player($user);
        $game = OthelloFacade::create_room($player);

        return redirect("/othello/game/".$game->id);
    }

    public function postJoinRoom($game_id) {
        $user = Auth::user();
        $player = OthelloFacade::get_player($user);
        $game = OthelloGame::find($game_id);

        if ($game->player1_id != $player->id) {
            if ($game->player2_id == null) {
                if ($game->status == "WAITING") {
                    $game = OthelloFacade::join_room($game, $player);
                    return response()->json([
                        "success" => true,
                        "url" => "/othello/game/".$game->id
                    ]);
                }
                else {
                    return response()->json([
                        "success" => false,
                        "message" => "このルームはすでに閉鎖されました．"
                    ]);
                }
            }
            else {
                return response()->json([
                    "success" => false,
                    "message" => "このルームにはすでに他の対局者がいます．"
                ]);
            }
        }
        else {
            return response()->json([
                "success" => false,
                "message" => "同じプレイヤー同士の対局はできません．"
            ]);
        }
    }

    public function getChatLogs($game_id) {
        return;
    }

    public function getGameInfo($game_id) {
        $info = OthelloFacade::get_game_info($game_id);

        return response()->json([
            "success" => true,
            "info" => $info
        ]);
    }

    public function getLogs($game_id) {
        return;
    }

    public function postSendChat($game_id) {
        return;
    }

    public function postPutStone($game_id) {
        return;
    }

    public function postPass($game_id) {
        return;
    }

    public function postSurrender($game_id) {
        return;
    }
}
