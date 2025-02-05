<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Tag>
 */
class TagFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name' => $this->faker->unique()->word,
            'tooltip' => $this->faker->optional(0.5)->text,
            'color' => $this->faker->hexColor,
            'background_color' => $this->faker->hexColor,
            'border_color' => $this->faker->hexColor,
        ];
    }
}
