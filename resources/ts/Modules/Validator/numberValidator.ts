export const numberValidator = (value?: number): value is number =>
  typeof value === "number" && !isNaN(value)
