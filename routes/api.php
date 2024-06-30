<?php

use App\Http\Controllers\TaskController;
use App\Http\Controllers\TaskDetailController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware('api')->group(function () {
    Route::post('/task', [TaskController::class, 'create']);
    Route::get('/task', [TaskController::class, 'index']);
    Route::get("/task/{id}", [TaskDetailController::class, 'index']);
});
