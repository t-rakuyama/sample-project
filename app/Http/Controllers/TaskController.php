<?php
declare(strict_types=1);

namespace App\Http\Controller;

use App\Repositories\TaskRepository;

class TaskController extends Controller
{
    public function createTask(Request $request)
    {
        $taskRepository = new TaskRepository();
        $taskRepository->createTask($request->title);
        return response()->json('ok', 200);
    }
}
