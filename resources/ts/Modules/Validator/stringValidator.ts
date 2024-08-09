export const stringValidator = (value?: string): value is string => typeof value === "string" && value !== ''
