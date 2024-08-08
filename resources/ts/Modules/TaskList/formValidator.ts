import { stringValidator } from "../Validator"

export const validate = (title?: string) => {
    if (!stringValidator(title)) {
        return false
    }
    return true
}