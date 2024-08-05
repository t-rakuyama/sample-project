import { Task } from "../../Types/Task"
import { formValidate } from "./formValidate"

describe("formValidate", () => {
  test("すべてのデータがある場合バリデーションが通る", () => {
    const task: Task = {
      id: 1,
      title: "hoge",
      description: "test",
      status: "1",
      point: "2",
    }
    expect(formValidate(task)).toBeTruthy()
  })

  test("idとtitleがある場合バリデーションが通る", () => {
    const task: Task = {
      id: 1,
      title: "hoge",
    }
    expect(formValidate(task)).toBeTruthy()
  })

  test("statusがnumberにキャストできない場合バリデーションが通らない", () => {
    const task: Task = {
      id: 1,
      title: "hoge",
      status: "hoge",
    }
    expect(formValidate(task)).toBeFalsy()
  })

  test("statusがnumberにキャストできない場合バリデーションが通らない", () => {
    const task: Task = {
      id: 1,
      title: "hoge",
      point: "hoge",
    }
    expect(formValidate(task)).toBeFalsy()
  })
})
