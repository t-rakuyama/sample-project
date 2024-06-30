import React from "react"
import { Head } from "@inertiajs/react"
import { Header } from "../Components/Header/Header"

type Props = {
  title: string
  auth: any
  children: React.ReactNode
}

const DefaultLayout = ({ title, auth, children }) => (
  <>
    <Head title={title} />
    <div className="bg-gray-50 text-black/50 dark:bg-black dark:text-white/50">
      <Header auth={auth} />
      <div className="relative min-h-screen flex flex-col items-center selection:bg-[#FF2D20] selection:text-white">
        <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">{children}</div>
      </div>
    </div>
  </>
)

export default DefaultLayout
