import { numberValidator } from "./numberValidator"

describe("numberValidator", () => {
  test("数値の場合trueが返る", () => {
    expect(numberValidator(1)).toBeTruthy()
  })
  test("undefinedの場合falseが返る", () => {
    expect(numberValidator(undefined)).toBeFalsy()
  })
  test("NaNの場合falseが返る", () => {
    expect(numberValidator(NaN)).toBeFalsy
  })
})
