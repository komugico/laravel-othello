<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class OthelloController extends Controller
{
    //
    public function index() {
        return view('othello.index');
    }
}
