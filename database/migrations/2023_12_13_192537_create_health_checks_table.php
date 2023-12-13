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
        Schema::create('health_checks', function (Blueprint $collection) {
            $collection->id();
            $collection->string('offer_id')->index();
            $collection->foreign('offer_id')->references('_id')->on('offers');
            $collection->string('offer_full_name')->index();
            $collection->string('offer_full_name')->index();
            $collection->boolean('situation');
            $collection->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('health_checks');
    }
};
