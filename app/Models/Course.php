<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Course extends Model
{
    use HasFactory;
    protected $fillable = [
        'course_name',
        'credits',
        'teacher_id',
    ];
    public function teacher()
    {
        return $this->belongsTo(Teacher::class);
    }
}
