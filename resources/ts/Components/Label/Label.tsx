import React from "react"

type Props = {
  className: string
  text: string
}

export const Label = ({ className, text }: Props) => <label className={className}>{text}</label>
