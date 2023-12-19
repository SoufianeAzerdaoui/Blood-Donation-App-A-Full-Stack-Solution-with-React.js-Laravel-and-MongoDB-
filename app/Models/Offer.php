<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
// use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Carbon;
use MongoDB\Laravel\Eloquent\Model;
class Offer extends Model
{

    protected $collection = 'offers';

    protected $fillable = ['city', 'type', 'full_name','age' , 'phone', 'email' ,'description'];
    public $timestamps = true;


    protected $casts = [
        'type' => 'array',
    ];


    use HasFactory;

    public function city()
    {
        return $this->belongsTo(City::class);
    }

    public function bloodType()
    {
        return $this->belongsTo(BloodType::class, 'type');
    }


    public function getCreatedAtAttribute($value)
    {
        return Carbon::createFromFormat('Y-m-d\TH:i:s.u\Z', $value)->format('Y-m-d');
    }

    public function getUpdatedAtAttribute($value)
    {
        return Carbon::createFromFormat('Y-m-d\TH:i:s.u\Z', $value)->format('Y-m-d');
    }

}
