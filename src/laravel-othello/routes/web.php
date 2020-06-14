<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Auth::routes();

Route::get('/', 'HomeController@index')->name('home');
Route::get('/home', 'HomeController@index')->name('home');

Route::get('/othello', 'OthelloController@index')->name('othello.index');
Route::get('/othello/gamelog', 'OthelloController@gamelog')->name('othello.gamelog');
Route::get('/othello/matching', 'OthelloController@matching')->name('othello.mathing');
Route::get('/othello/watching', 'OthelloController@watching')->name('othello.wathing');
Route::get('/othello/game/{game_id}', 'OthelloController@game')->name('othello.game');

Route::post('/othello/game/{game_id}/get/chatlogs', 'OthelloController@getChatLogs')->name('othello.chatlogs');
Route::get('/othello/game/{game_id}/get/gamestatus', 'OthelloController@getGameStatus')->name('othello.gamestatus');
Route::get('/othello/game/{game_id}/get/logs', 'OthelloController@getLogs')->name('othello.logs');

Route::post('/othello/post/createroom', 'OthelloController@postCreateRoom')->name('othello.createroom');
Route::post('/othello/post/joinroom/{game_id}', 'OthelloController@postJoinRoom')->name('othello.joinroom');
Route::post('/othello/game/{game_id}/post/sendchat', 'OthelloController@postSendChat')->name('othello.sendchat');
Route::post('/othello/game/{game_id}/post/putstone', 'OthelloController@postPutStone')->name('othello.putstone');
Route::post('/othello/game/{game_id}/post/pass', 'OthelloController@postPass')->name('othello.pass');
Route::post('/othello/game/{game_id}/post/surrender', 'OthelloController@postSurrender')->name('othello.surrender');