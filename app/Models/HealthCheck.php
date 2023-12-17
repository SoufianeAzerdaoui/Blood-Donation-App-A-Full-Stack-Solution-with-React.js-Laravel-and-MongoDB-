<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model;
use MongoDB\Laravel\Eloquent\Model;

class HealthCheck extends Model
{

    protected $collection = 'health_checks';

    protected $fillable = ['offer_id', 'offer_full_name', 'situation'];
    public $timestamps = true;

    public function offer()
    {
        return $this->belongsTo(Offer::class, 'offer_id');
    }
    use HasFactory;
}
