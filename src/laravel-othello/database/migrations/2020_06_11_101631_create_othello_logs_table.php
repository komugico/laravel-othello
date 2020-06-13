<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateOthelloLogsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('othello_logs', function (Blueprint $table) {
            $table->increments('id');
            $table->tinyInteger('turn');
            $table->boolean('is_pass')->default(false);
            $table->boolean('is_surrender')->default(false);
            $table->tinyInteger('pos_x')->nullable();
            $table->tinyInteger('pos_y')->nullable();
            $table->char('stones', 64);
            $table->char('flips', 64);
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
        Schema::dropIfExists('othello_logs');
    }
}
