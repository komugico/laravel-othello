<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddForeignKeysOthelloLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('othello_logs', function (Blueprint $table) {
            $table->unsignedInteger('game_id')->nullable();
            $table->unsignedInteger('player_id')->nullable();
            $table->foreign('game_id')->references('id')->on('othello_games')->onDelete('set null');
            $table->foreign('player_id')->references('id')->on('othello_players')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('othello_logs', function (Blueprint $table) {
            $table->dropForeign('othello_logs_game_id_foreign');
            $table->dropForeign('othello_logs_player_id_foreign');
        });
    }
}
