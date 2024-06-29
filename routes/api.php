<?php

use App\Http\Controllers\TaskController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('api')->group(function () {
    Route::post('/task', [TaskController::class, 'createTask'])->name('task.create');
});
