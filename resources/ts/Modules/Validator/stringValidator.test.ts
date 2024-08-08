import { stringValidator } from "./stringValidator"

describe("stringValidator", () => {
  test("文字列の場合trueが返る", () => {
    expect(stringValidator("テスト")).toBeTruthy()
  })
  test("undefinedの場合falseが返る", () => {
    expect(stringValidator(undefined)).toBeFalsy()
  })
})
