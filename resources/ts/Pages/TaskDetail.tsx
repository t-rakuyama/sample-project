import axios from "axios"
import React, { useCallback, useEffect, useState } from "react"
import { Task } from "../Types/Task"
import { Button } from "../Components/Button"
import DefaultLayout from "../Layouts/DefaultLayout"

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
        console.log(res.data)
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
        location.href = "/"
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
              <label className="text-sm">Task Name</label>
              <div className="mt-1">
                <input
                  type="text"
                  name="title"
                  className="rounded text-black"
                  defaultValue={task.title}
                ></input>
              </div>
            </div>

            <div className="w-200">
              <label className="text-sm">Description</label>
              <div className="mt-1">
                <textarea
                  name="description"
                  rows={4}
                  className="rounded p-2 w-full h-full border border-gray-400 focus:outline-0 focus:ring-1 focus:ring-offset-1 text-sm focus:ring-offset-sky-200 text-black"
                  defaultValue={task.description}
                ></textarea>
              </div>
            </div>
            <div className="mx-auto w-full max-w-xs">
              <label className="text-sm text-gray-800">Status</label>
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
              <label className="text-sm text-gray-800">Point</label>
              <div className="mt-1">
                <select
                  name="point"
                  onChange={(event) => changeSelect(event.target.value, "point")}
                  defaultValue={pointSelected}
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
