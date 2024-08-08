import { Task } from "../../Types/Task"
import { stringValidator, numberValidator } from "../Validator"

export const formValidate = (form: Task) => {
  if (!numberValidator(form.id) || !stringValidator(form.title)) {
    return false
  }
  if (form.description && !stringValidator(form.description)) {
    return false
  }
  if (form.status && !numberValidator(Number(form.status))) {
    return false
  }
  if (form.point && !numberValidator(Number(form.point))) {
    return false
  }
  return true
}
