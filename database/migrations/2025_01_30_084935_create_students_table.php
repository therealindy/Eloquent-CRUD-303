<?php
//ทำหน้าที่กำหนดการย้ายข้อมูล (migration) สำหรับการสร้างและลบตาราง students
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

// คืนค่าคลาสใหม่ที่ขยายจาก Migration
return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        // สร้างตาราง 'students'
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('StudentName',100); // เพิ่มคอลัมน์ StudentName ขนาด 100 ตัวอักษร
            $table->string('Major',100);
            $table->string('Email',100);
            $table->string('Phone',10);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // ลบตาราง 'students' ถ้ามีอยู่ ออกจากฐานข้อมูล
        Schema::dropIfExists('students');
    }
};
