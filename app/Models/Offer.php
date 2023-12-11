<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Offer extends Model
{

    protected $collection = 'offers';

    protected $fillable = ['city', 'type', 'full_name', 'phone', 'description'];
    public $timestamps = true;

    use HasFactory;

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function bloodType()
    {
        return $this->belongsTo(BloodType::class, 'type');
    }
}
