import axios from "axios"
import React, { useCallback, useEffect, useState } from "react"
import { Task } from "../Types/Task"
import { Button } from "../Components/Button"
import DefaultLayout from "../Layouts/DefaultLayout"
import { Label } from "../Components/Label"
import { InputText } from "../Components/InputText"
import { TextArea } from "../Components/TextArea"
import { SelectBox } from "../Components/SelectBox"
import { formValidate } from "../Modules/TaskDetail"

const TaskDetail = ({ auth, id }) => {
  const initialTask: Task = { id: id, title: "" }
  const [task, setTask] = useState<Task>(initialTask)
  const [statusSelected, setStatusSelected] = useState<string | undefined>(undefined)
  const [pointSelected, setPointSelected] = useState<string | undefined>(undefined)
  const fetchTask = useCallback(async () => {
    await axios
      .get(`/api/task/${id}`)
      .then((res) => {
        setTask(res.data)
        if (res.data.status) {
          setStatusSelected(res.data.status)
        }
        if (res.data.point) {
          setPointSelected(res.data.point)
        }
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
    const form = document.forms["task"].elements

    task.title = form.title.value
    task.description = form.description.value
    task.status = form.status.value
    task.point = form.point.value
  }

  const onSubmit = async () => {
    if (formValidate(task)) {
      await axios
        .patch("/api/task", task)
        .then((res) => {
          console.log(res)
          location.href = `/task/${task.id}`
        })
        .catch((e) => {
          console.log(e.response)
        })
    } else {
      setErrorMessage("入力値に誤りがあります")
    }
  }

  const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined)

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
    <DefaultLayout title={"タスク詳細画面"} auth={auth}>
      <main>
        <div>
          {errorMessage ?? <span>{errorMessage}</span>}

          <form name="task" onInput={onChange}>
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

            <div className=" w-full max-w-xs">
              <Label className="text-sm" text="Status" />
              <div className="mt-1">
                <SelectBox
                  name="status"
                  onChange={(event) => changeSelect(event.target.value, "status")}
                  className="mt-1 text-black block w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  selectValue={statusSelected}
                  values={[
                    { value: "1", text: "未着手" },
                    { value: "2", text: "進行中" },
                    { value: "3", text: "完了" },
                  ]}
                />
              </div>
            </div>
            <div className="w-full max-w-xs">
              <Label className="text-sm" text="Point" />
              <div className="mt-1">
                <SelectBox
                  name="point"
                  onChange={(event) => changeSelect(event.target.value, "point")}
                  className="mt-1 text-black block w-full rounded-md border border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  selectValue={pointSelected}
                  values={[
                    { value: "1", text: "1" },
                    { value: "2", text: "2" },
                    { value: "3", text: "3" },
                  ]}
                />
              </div>
            </div>

            <div className="w-200 my-10">
              <Button className={""} text={"更新する"} onClick={onSubmit} />
            </div>
          </form>
        </div>
      </main>
    </DefaultLayout>
  )
}

export default TaskDetail
