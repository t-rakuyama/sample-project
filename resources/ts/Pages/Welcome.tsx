import { List } from "../Components/List"
import { Button } from "../Components/Button"
import { Header } from "../Components/Header/Header"
import { Link, Head } from "@inertiajs/react"
import React from "react"
import { ListItem } from "../Components/List/ListItem"

export default function Welcome({ auth, laravelVersion, phpVersion }) {
  const handleImageError = () => {
    document.getElementById("screenshot-container")?.classList.add("!hidden")
    document.getElementById("docs-card")?.classList.add("!row-span-1")
    document.getElementById("docs-card-content")?.classList.add("!flex-row")
    document.getElementById("background")?.classList.add("!hidden")
  }

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

  return (
    <>
      <Head title="Welcome" />
      <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
        <Header auth={auth} />
        <div className="relative min-h-screen flex flex-col items-center selection:bg-[#FF2D20] selection:text-white">
          <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
            <main className="mt-6">
              <Button className={""} text={"add"} />
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
