<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('tasks', function (Blueprint $table) {
            $table->text('description')->nullable(true)->change();
            $table->integer('status')->nullable(true)->change();
            $table->integer('point')->nullable(true)->change();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('tasks', function (Blueprint $table) {
            $table->text('description')->nullable(false)->change();
            $table->integer('status')->nullable(false)->change();
            $table->integer('point')->nullable(false)->change();
        });
    }
};
