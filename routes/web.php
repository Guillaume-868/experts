<?php

use Illuminate\Support\Facades\Route;

$pages = ['home', 'contact', 'creations'];

foreach ($pages as $page) {
    Route::get("/$page", fn() => view($page))->name($page);
}