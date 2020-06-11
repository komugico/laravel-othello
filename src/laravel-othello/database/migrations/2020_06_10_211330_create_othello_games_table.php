<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOthelloGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('othello_games', function (Blueprint $table) {
            $table->increments('id');
            $table->enum('status', ['WAITING', 'ONGAME', 'FINISHED', 'CANCELLED']);
            $table->enum('first_player', ['PLAYER1', 'PLAYER2']);
            $table->enum('winner', ['PLAYER1', 'PLAYER2']);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('othello_games');
    }
}
