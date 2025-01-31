<?php
//ทำหน้าที่สร้างข้อมูลจำลองสำหรับโมเดล Student 
namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Student;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Student>
 */
class StudentFactory extends Factory    // สร้างคลาส StudentFactory ที่ขยายจาก Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array // กำหนดสถานะเริ่มต้นของโมเดล
    {
        return [
            'StudentName' => $this->faker->name, // สร้างชื่อจำลอง
            'Major' => $this->faker->word,  //คำจำลอง
            'Email' => $this->faker->unique()->safeEmail(), // อีเมลล์จำลอง
            'Phone' => $this->faker->numerify(str_repeat('#', 10)), // หมายเลขโทรศัพท์จำลอง
        ];
    }
}
