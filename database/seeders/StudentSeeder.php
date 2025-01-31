<?php
// ทำหน้าที่สร้างข้อมูลจำลองสำหรับโมเดล Student 
namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Student;

class StudentSeeder extends Seeder  // สร้างคลาส StudentSeeder ที่ขยายจาก Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void // รันการสร้างข้อมูลจำลอง
    {
        //สำหรับแต่ละคนให้สร้างข้อมูลสินค้าที่ซื้อ
        Student::factory(100)->create();
    }
}
