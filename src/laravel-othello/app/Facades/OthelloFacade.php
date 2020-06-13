<?php
namespace App\Facades;

use Illuminate\Support\Facades\Facade;


class OthelloFacade extends Facade
{
  protected static function getFacadeAccessor() {
    return 'othello';
  }
}