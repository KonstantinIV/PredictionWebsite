<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStarvotesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('starvotes', function (Blueprint $table) {
            $table->id();
            
            $table->tinyInteger('points');


            $table->bigInteger('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users');

            $table->bigInteger('post_id')->unsigned();
            $table->foreign('post_id')->references('id')->on('posts');

        });
    }

    /**
     * create table starVote(

     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('starvotes');
    }
}
