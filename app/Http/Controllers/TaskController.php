<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Repositories\TaskRepository;
use App\Http\Requests\TaskCreateRequest;
use App\Http\Requests\TaskUpdateRequest;

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

    public function update(TaskUpdateRequest $request)
    {
        $taskRepository = new TaskRepository();
        $taskRepository->update($request->id, $request->title, $request->description, (int)$request->status, (int)$request->point);
        return response()->json('ok', 200);
    }

    public function delete(string $id) {
        $taskRepository = new TaskRepository();
        $taskRepository->delete((int) $id);
        return response()->json('delete', 200);
    }
}
