<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Room;

class RoomSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //สำหรับแต่ละคนให้สร้างข้อมูลสินค้าที่ซื้อ
        Room::factory(100)->create();
    }
}
