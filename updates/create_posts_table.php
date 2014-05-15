<?php namespace RainLab\Forum\Updates;

use Schema;
use October\Rain\Database\Updates\Migration;

class CreatePostsTable extends Migration
{

    public function up()
    {
        Schema::create('rainlab_forum_posts', function($table)
        {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->string('subject')->nullable();
            $table->text('content');
            $table->text('content_html');
            $table->integer('topic_id')->unsigned()->index()->nullable();
            $table->integer('member_id')->unsigned()->index()->nullable();
            $table->integer('time')->nullable();
            $table->integer('edit_time')->nullable();
            $table->integer('edit_user_id')->nullable();
            $table->integer('delete_user_id')->nullable();
            $table->integer('delete_time')->nullable();
            $table->index(['topic_id', 'time'], 'topic_time');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop('rainlab_forum_posts');
    }

}
