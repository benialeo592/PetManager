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
        Schema::create('pets', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('pet_type_id');
            $table->unsignedBigInteger('user_id');
            $table->enum('gender', ['M','F']);
            $table->text('name');
            $table->date('date_of_birth');
            $table->text('microchip')->nullable();
            $table->text('img_url')->nullable();
            $table->timestamps();

            $table->foreign('pet_type_id')->references('id')->on('pet_types')->onDelete('cascade');
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pets');
    }
};
