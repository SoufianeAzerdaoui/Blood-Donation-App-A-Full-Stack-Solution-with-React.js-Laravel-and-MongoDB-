<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\DonationsController;
use App\Http\Controllers\OfferController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Health_check;


/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/


Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/signup' , [AuthController::class , 'signup']);
Route::post('/login' , [AuthController::class , 'login']);

Route::post('/donateblood', [OfferController::class, 'donateblood']);

Route::post('/healthcheck', [Health_check::class, 'healthcheck']);

// Route::get('/search/{city}', [DonationsController::class, 'search']);
Route::get('/search/{city}', [OfferController::class, 'search']);
Route::get('/data_as_excel', [OfferController::class, 'index']);


Route::get('offers/export', [OfferController::class, 'export']);

