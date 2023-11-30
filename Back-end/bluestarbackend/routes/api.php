<?php

use App\Http\Controllers\CustomerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

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

Route::post('customer/addCustomer',[CustomerController::class, 'addCustomer']);
Route::get('customer/getCustomers', [CustomerController::class, 'getCustomers']);
Route::get('customer/getCustomerDetails', [CustomerController::class, 'getCustomerDetails']);
Route::put('customer/updateCustomer', [CustomerController::class, 'updateCustomer']);
Route::delete('customer/deleteCustomer/{cId}', [CustomerController::class, 'deleteCustomer']);

