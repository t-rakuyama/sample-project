<?php
declare(strict_types=1);

namespace App\Http\Controllers;

use App\Repositories\TaskRepository;

class TaskDetailController
{
    public function index(string $id)
    {
        $taskRepository = new TaskRepository();
        $task = $taskRepository->find((int)$id);
        return json_encode($task);
    }
}
