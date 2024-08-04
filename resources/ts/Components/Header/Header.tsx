import { Link } from "@inertiajs/react"
import React from "react"

type Props = {
  auth
}

export const Header = ({ auth }: Props) => {
  return (
    <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3 ">
      <div className="flex lg:justify-center lg:col-start-2 sticky top-0">
        <a href="/">
          <svg
            width="100"
            height="100"
            viewBox="0 0 300 300"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M181.25 250.106L122.636 144.602H142.5L193.5 236.5H212.5L161.875 144.602H181.25L239.863 250.106H181.25Z"
              fill="white"
            />
            <rect x="78" y="40" width="25" height="211" fill="white" />
            <rect x="90" y="40" width="85" height="21" fill="white" />
            <path
              d="M200.037 91.641C199.673 74.6085 190.933 60.8376 175 60.8376L175 40C201.635 40 225.376 62.5343 225.984 90.4056C226.681 122.28 203.918 146 175 146V125.162C192.298 125.162 200.453 111.12 200.037 91.641Z"
              fill="white"
            />
            <rect x="90" y="125" width="85" height="21" fill="white" />
          </svg>
        </a>
      </div>
      <nav className="-mx-3 flex flex-1 justify-end">
        {auth.user ? (
          <Link
            href={route("dashboard")}
            className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
          >
            Dashboard
          </Link>
        ) : (
          <>
            <Link
              href={route("login")}
              className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
            >
              Log in
            </Link>
            <Link
              href={route("register")}
              className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
            >
              Register
            </Link>
          </>
        )}
      </nav>
    </header>
  )
}
