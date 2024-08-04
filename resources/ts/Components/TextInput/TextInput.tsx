import React from "react"

type Props = {
  name: string
  className: string
  defaultValue: string
}

export const TextInput = ({ name, className, defaultValue }: Props) => (
  <input type="text" name={name} className={className} defaultValue={defaultValue} />
)
