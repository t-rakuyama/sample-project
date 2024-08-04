import axios from "axios"
import React, { useCallback, useEffect, useState } from "react"
import { Task } from "../Types/Task"
import { Button } from "../Components/Button"
import DefaultLayout from "../Layouts/DefaultLayout"
import { Label } from "../Components/Label"
import { InputText } from "../Components/InputText"
import { TextArea } from "../Components/TextArea"

const TaskDetail = ({ auth, id }) => {
  const initialTask: Task = { id: id, title: "" }
  const [task, setTask] = useState<Task>(initialTask)
  const fetchTask = useCallback(async () => {
    await axios
      .get(`/api/task/${id}`)
      .then((res) => {
        setTask(res.data)
        setStatusSelected(res.data.status ?? "1")
        setPointSelected(res.data.point ?? "1")
      })
      .catch((e) => {
        console.log(e)
      })
  }, [])

  useEffect(() => {
    fetchTask()
    if (task === undefined) {
      return
    }
  }, [])

  const onChange = () => {
    let form = document.forms["task"].elements
    let title = form.title.value
    let description = form.description.value
    let status = form.status.value
    let point = form.point.value

    task.title = title
    task.description = description
    task.status = status
    task.point = point
  }

  const onSubmit = async () => {
    await axios
      .patch("/api/task", task)
      .then((res) => {
        console.log(res)
        location.href = `/task/${task.id}`
      })
      .catch((e) => {
        console.log(e.response)
      })
  }
  const [statusSelected, setStatusSelected] = useState<string>()
  const [pointSelected, setPointSelected] = useState<string>()

  const changeSelect = (newSelect: string, type: "status" | "point") => {
    switch (type) {
      case "status":
        setStatusSelected(newSelect)
        break
      case "point":
        setPointSelected(newSelect)
        break
    }
  }

  return (
    <DefaultLayout title={"タスク一覧画面"} auth={auth}>
      <main>
        <div>
          <form name="task" onChange={onChange}>
            <div className="w-200">
              <Label className="text-sm" text="Task Name" />
              <div className="mt-1">
                <InputText name="title" className="rounded text-black" defaultValue={task.title} />
              </div>
            </div>

            <div className="w-200">
              <Label className="text-sm" text="Description" />
              <div className="mt-1">
                <TextArea
                  name="description"
                  className="rounded p-2 w-full h-full border border-gray-400 focus:outline-0 focus:ring-1 focus:ring-offset-1 text-sm focus:ring-offset-sky-200 text-black"
                  defaultValue={task.description}
                />
              </div>
            </div>
            <div className="mx-auto w-full max-w-xs">
              <Label className="text-sm" text="Status" />
              <div className="mt-1">
                <select
                  name="status"
                  onChange={(event) => changeSelect(event.target.value, "status")}
                  value={statusSelected}
                  className="mt-1 text-black block w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="1">未着手</option>
                  <option value="2">進行中</option>
                  <option value="3">完了</option>
                </select>
              </div>
            </div>
            <div className="mx-auto w-full max-w-xs">
              <Label className="text-sm" text="Point" />
              <div className="mt-1">
                <select
                  name="point"
                  onChange={(event) => changeSelect(event.target.value, "point")}
                  value={pointSelected}
                  className="mt-1 text-black block w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className="w-200">
              <Button className={""} text={"更新する"} onClick={onSubmit} />
            </div>
          </form>
        </div>
      </main>
    </DefaultLayout>
  )
}

export default TaskDetail
