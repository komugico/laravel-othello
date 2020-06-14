<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddUserIdOthelloChatsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::table('othello_chats', function (Blueprint $table) {
            $table->unsignedInteger('user_id')->nullable();
            $table->unsignedInteger('game_id')->nullable();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('set null');
            $table->foreign('game_id')->references('id')->on('othello_games')->onDelete('set null');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::table('othello_chats', function (Blueprint $table) {
            $table->dropForeign('othello_chats_user_id_foreign');
            $table->dropForeign('othello_chats_geme_id_foreign');
        });
    }
}
