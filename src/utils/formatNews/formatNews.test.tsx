import { News, NewsApi } from "@/models"
import "@testing-library/jest-dom"
import formatNews from "./formatNews"

const data: NewsApi = {
  by: "",
  descendants: 0,
  id: 0,
  kids: [],
  score: 0,
  time: 0,
  title: "",
  type: "",
  url: "",
}

const formatedData: News = {
  id: 0,
  title: "",
  author: "",
  url: "",
}

describe("formatNews", () => {
  it("format the object News from API", async () => {
    const formatResult = formatNews(data)
    expect(formatResult).toEqual(formatedData)
  })
})
