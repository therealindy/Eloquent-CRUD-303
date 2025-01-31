<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class CustomerHoteldel extends Model
{
    use HasFactory;
    protected $fillable = [
        'Customername',
        'Customeremail',
        'Customerphone',
        'address'
    ];
    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }
}
