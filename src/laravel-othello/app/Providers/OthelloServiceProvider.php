<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class OthelloServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->bind(
          'othello',
          'App\Http\Components\OthelloComponent'
        );
    }
}
