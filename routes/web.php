<?php

use App\Http\Controllers\PostsController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});


Route::get('/test-mongodb-connection', function () {
    try {
        $connection = DB::connection('mongodb')->getPdo();
        echo "Connected to MongoDB successfully!";
    } catch (\Exception $e) {
        echo "Error connecting to MongoDB: " . $e->getMessage();
    }
});






