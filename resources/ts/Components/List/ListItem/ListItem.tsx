import { Task } from "../../../Types/Task"
import React from "react"

type Props = {
  task: Task
}

export const ListItem = ({ task }: Props) => {
  return (
    <article className="flex items-start space-x-6 p-6">
      <div className="min-w-0 relative flex-auto">
        <a href={`task/${task.id}`} className="font-semibold truncate pr-20">
          {task.title}
        </a>
      </div>
    </article>
  )
}
