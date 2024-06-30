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
      {children}
    </div>
  </>
)

export default DefaultLayout
