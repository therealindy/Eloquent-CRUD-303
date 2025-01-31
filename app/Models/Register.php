<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Register extends Model
{
    use HasFactory;
    protected $fillable = [
        'student_id',
        'course_id',
        'grade'
    ];
    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}
