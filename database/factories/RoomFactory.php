<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Room;
use App\Models\RoomType;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Room>
 */
class RoomFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'Room_Number' => $this->faker->numberBetween(1, 100),
            'Status' => $this->faker->randomElement(['Available', 'Unavailable']),
            'roomtype_id' => RoomType::factory()
        ];
    }
}
