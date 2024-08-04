import React from "react"

type Props = {
  name: string
  className: string
  defaultValue: string
}

export const TextArea = ({ name, className, defaultValue }: Props) => (
  <textarea name={name} rows={4} className={className} defaultValue={defaultValue} />
)
