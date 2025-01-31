<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Booking extends Model
{
    use HasFactory;
    protected $fillable = [
        'amount',
        'customer_id',
        'room_id'
    ];
    public function room()
    {
        return $this->belongsTo(Room::class);
    }
}
