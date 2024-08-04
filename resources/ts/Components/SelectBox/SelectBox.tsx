import React from "react"

type Props = {
  name: string
  onChange: (any) => void
  className: string
  selectValue: string
  values: { value: string; text: string }[]
}

export const SelectBox = ({ name, onChange, className, selectValue, values }: Props) => (
  <select name={name} onChange={onChange} className={className} value={selectValue}>
    {values.map((content) => (
      <option value={content.value}>{content.text}</option>
    ))}
  </select>
)
