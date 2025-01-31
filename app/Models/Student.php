<?php
//ทำหน้าที่กำหนดโมเดล Student และความสัมพันธ์กับโมเดล Register
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

// สร้างคลาส Student ที่ขยายจาก Model
class Student extends Model
{
    use HasFactory;  // ใช้ trait HasFactory
    // กำหนดฟิลด์ที่สามารถกรอกข้อมูลได้
    protected $fillable = [
        'StudentName',
        'Major',
        'Email',
        'Phone',
    ];
    public function registers() // กำหนดความสัมพันธ์กับโมเดล Register
    {
        return $this->hasMany(Register::class); // ความสัมพันธ์แบบหนึ่งต่อหลาย (one-to-many) กับโมเดล Register
    }
}
