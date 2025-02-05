<?php

namespace Database\Seeders;

use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class OrderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $orders = Order::factory(100)->create();

        $users = User::all();

        if (!$users->isEmpty()) {
            $orders->each(function ($order) use ($users) {
                $order->user()->associate(
                    $users->random()
                )->save();
            });
        }

        $products = Product::all();

        if ($products->isEmpty()) {
            return;
        }

        $orders->each(function ($order) use ($products) {
            $order->products()->attach(
                $products->random(rand(1, 3))->mapWithKeys(function ($product) {
                    return [
                        $product->id => [
                            'quantity' => rand(1, 3),
                            'unit_price' => $product->price
                        ]
                    ];
                })->toArray()
            );
        });
    }
}
