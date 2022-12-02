import "@testing-library/jest-dom"
import { API_URL } from "../urls"
import { getNews } from "./getNews"

const NEWS_ID = 33818037
const URL = `${API_URL}item/33818037.json`

describe("getNews", () => {
  it("returns the item news url", async () => {
    const result = getNews(NEWS_ID)
    expect(result).toBe(URL)
  })
})
