<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Repositories\TaskRepository;
use App\Http\Requests\TaskCreateRequest;

class TaskController
{
    public function create(TaskCreateRequest $request)
    {
        $taskRepository = new TaskRepository();
        $taskRepository->createTask($request->title);
        return response()->json('ok', 200);
    }

    public function index()
    {
        $taskRepository = new TaskRepository();
        return json_encode($taskRepository->findAll());
    }
}
