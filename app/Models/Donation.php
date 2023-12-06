<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Donation extends Model
{

    protected $fillable = ['city', 'type', 'full_name', 'phone', 'description', 'created_at'];
    public $timestamps = true;


    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function bloodType()
    {
        return $this->belongsTo(BloodType::class, 'type');
    }

    use HasFactory;
}
