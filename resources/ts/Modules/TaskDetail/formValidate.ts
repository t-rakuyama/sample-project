import { Task } from "../../Types/Task"

export const formValidate = (form: Task) => {
  if (!form.id || !form.title) {
    return false
  }
  if (!validateNumber(form.id)) {
    return false
  }
  if (!validateString(form.title)) {
    return false
  }
  if (form.description && !validateString(form.description)) {
    return false
  }
  if (form.status && !validateNumber(Number(form.status))) {
    return false
  }
  if (form.point && !validateNumber(Number(form.point))) {
    return false
  }
  return true
}

const validateString = (value?: string) => {
  return typeof value === "string"
}

const validateNumber = (value: number) => {
  return !isNaN(value)
}
