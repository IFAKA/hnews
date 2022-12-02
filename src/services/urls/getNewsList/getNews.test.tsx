import "@testing-library/jest-dom"
import { API_URL } from "../urls"
import { getNewsList } from "./getNewsList"

const URL = `${API_URL}topstories.json`

describe("getNewsList", () => {
  it("returns the news list url", async () => {
    const result = getNewsList()
    expect(result).toBe(URL)
  })
})
