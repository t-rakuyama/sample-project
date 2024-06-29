<?php
declare(strict_types=1);

namespace App\Repositories;

use App\Models\Task;

class TaskRepository
{
    public function createTask(string $title)
    {
        $task = new Task();
        $task->fill(['title' => $title])->save();
    }

    public function findAll()
    {
        return Task::all();
    }

    public function find(int $id)
    {
        return Task::find($id);
    }

    public function delete(int $id)
    {
        Task::destroy($id);
    }

    public function update(int $id, ?string $title, ?string $description, ?int $status, ?int $point)
    {
        $task = Task::find($id);
        $task->title = $title;
        $task->description = $description;
        $task->status = $status;
        $task->point = $point;
        $task->save();
    }
}
