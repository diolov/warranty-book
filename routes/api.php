<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/register', 'ApiController@register');
Route::post('/login', 'ApiController@login');

Route::group(['middleware' => ['auth:api']], function () {

    Route::post('/logout', 'ApiController@logout');

    Route::get('/user', function (Request $request) {
        return $request->user();
    });

    Route::get('/products', 'ProductsController@index');
    Route::get('/products/{product}', 'ProductsController@show');
    Route::post('/products', 'ProductsController@store');
    Route::put('/products/{product}', 'ProductsController@update');
    Route::delete('/products/{product}', 'ProductsController@delete');
});
