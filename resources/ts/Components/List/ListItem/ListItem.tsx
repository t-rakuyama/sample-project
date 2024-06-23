import { Task } from "../../../Types/Task"
import React from "react"

type Props = {
  task: Task
}

export const ListItem = ({ task }: Props) => {
  return (
    <>
      <article className="flex items-start space-x-6 p-6">
        <div className="min-w-0 relative flex-auto">
          <p className="font-semibold truncate pr-20">{task.title}</p>
          <p className="text-black/50 dark:text-white">{task.point}</p>
        </div>
      </article>
    </>
  )
}
