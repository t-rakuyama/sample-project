import { validate } from "./formValidator"
describe("validate", () => {
    test("titleがある場合バリデーションが通る", () => {
      expect(validate("test")).toBeTruthy()
    })
    test("タイトルがない場合バリデーションが通らない", () => {
        expect(validate()).toBeFalsy()
    })
})