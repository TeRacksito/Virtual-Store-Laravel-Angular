<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('roles')->updateOrInsert(
            ['name' => 'client'],
            ['name' => 'client', 'display_name' => 'Client', 'description' => 'Client', 'level' => 1]
        );

        DB::table('roles')->updateOrInsert(
            ['name' => 'admin'],
            ['name' => 'admin', 'display_name' => 'Admin', 'description' => 'Admin', 'level' => 4]
        );
    }
}
