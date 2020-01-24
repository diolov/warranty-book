<?php

use App\Product;
use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = \Faker\Factory::create();

        for ($i = 0; $i < 10; $i++) {
            Product::create([
                'userId' => 1,
                'name' => $faker->sentence(3),
                'categoryId' => $faker->randomDigitNot(0),
                'purchaseDate' => $faker->date(),
                'warrantyMonths' => $faker->randomNumber(2),
                'notes' => $faker->paragraph()
            ]);
        }
    }
}
