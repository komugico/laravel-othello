<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddPlayerIdOthelloGamesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('othello_games', function(Blueprint $table) {
            $table->unsignedInteger('player1_id')->nullable();
            $table->unsignedInteger('player2_id')->nullable();
            $table->foreign('player1_id')->references('id')->on('othello_players')->onDelete('set null');
            $table->foreign('player2_id')->references('id')->on('othello_players')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('othello_games', function (Blueprint $table) {
            $table->dropForeign('othello_games_player1_id_foreign');
            $table->dropForeign('othello_games_player2_id_foreign');
        });
    }
}
