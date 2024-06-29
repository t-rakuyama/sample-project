import axios from "axios"
import { List } from "../Components/List"
import { Button } from "../Components/Button"
import { Header } from "../Components/Header/Header"
import { Link, Head } from "@inertiajs/react"
import React, { useRef, useState } from "react"
import { ListItem } from "../Components/List/ListItem"

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  const taskList = [
    {
      id: 1,
      title: "test",
      description: "jpge",
      status: "now",
      point: 1,
    },
    {
      id: 2,
      title: "test",
      description: "jpge",
      status: "now",
      point: 1,
    },
    {
      id: 3,
      title: "test",
      description: "jpge",
      status: "now",
      point: 1,
    },
  ]

  const displayTextArea = () => {
    let inputDom = document.getElementById("taskInput")
    if (!inputDom) {
      return
    }
    inputDom.style.display = "block"
  }

  const [data, setData] = useState({ title: "" })

  const onSubmit = async () => {
    await axios
      .post("/api/task", data)
      .then((res) => {
        setData({ title: "" })
        console.log(res)
        location.href = "/"
      })
      .catch((e) => {
        console.log(e.response)
      })
  }

  const onChange = () => {
    let taskForm = document.forms["task"]

    setData({
      title: taskForm.elements.title.value,
    })
  }

  return (
    <>
      <Head title="Welcome" />
      <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
        <Header auth={auth} />
        <div className="relative min-h-screen flex flex-col items-center selection:bg-[#FF2D20] selection:text-white">
          <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
            <main className="mt-6">
              <div className="flex">
                <Button className={""} text={"add"} onClick={displayTextArea} />
                <form name="task" onSubmit={onSubmit}>
                  <input
                    id="taskInput"
                    name="title"
                    className="flex items-start space-x-6 text-black"
                    type="text"
                    style={{ display: "none" }}
                    onChange={onChange}
                  />
                </form>
              </div>
              <List>
                {taskList.map((task, index) => (
                  <ListItem task={task} key={index} />
                ))}
              </List>
            </main>
            <footer className="py-16 text-center text-sm text-black dark:text-white/70">
              Laravel v{laravelVersion} (PHP v{phpVersion})
            </footer>
          </div>
        </div>
      </div>
    </>
  )
}
