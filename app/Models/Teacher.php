<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Teacher extends Model
{
    use HasFactory;
    protected $fillable = [
        'TeacherName',
        'Department',
        'email',
    ];
    public function courses()
    {
        return $this->hasMany(Course::class);
    }
}
