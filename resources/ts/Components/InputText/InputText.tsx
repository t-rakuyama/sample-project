import React from "react"

type Props = {
  name: string
  className: string
  defaultValue: string
}

export const InputText = ({ name, className, defaultValue }: Props) => (
  <input type="text" name={name} className={className} defaultValue={defaultValue}></input>
)
