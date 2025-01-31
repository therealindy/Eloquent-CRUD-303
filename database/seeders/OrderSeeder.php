<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Order;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //สำหรับแต่ละคนให้สร้างข้อมูลสินค้าที่ซื้อ
        Order::factory(100)->create();
    }
}
