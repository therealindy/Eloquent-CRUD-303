<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\CustomerHoteldel;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\CustomerHoteldel>
 */
class CustomerHoteldelFactory extends Factory
{
    protected $model = CustomerHoteldel::class;
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            //
            'Customername' => $this->faker->name,
            'Customeremail' => $this->faker->unique()->safeEmail(),
            'Customerphone' => $this->faker->numerify(str_repeat('#', 10)),
            'address' => $this->faker->lexify(),
        ];
    }
}
