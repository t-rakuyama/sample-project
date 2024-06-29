import React from "react"

type Props = {
  className: string
  text: string
  onClick?: () => void
}

export const Button = ({ text, onClick }: Props) => {
  return (
    <button
      type="button"
      className="bg-transparent hover:bg-white text-white font-semibold hover:text-black py-2 px-4 border border-white hover:border-transparent rounded"
      onClick={onClick}
    >
      {text}
    </button>
  )
}
