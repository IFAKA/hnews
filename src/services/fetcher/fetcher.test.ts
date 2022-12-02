const fetcher = (url: string) => fetch(url).then((r) => r.json())
export default fetcher

import "@testing-library/jest-dom"
const URL = "https://jsonplaceholder.typicode.com/posts/1"
const RES = {
  userId: 1,
  id: 1,
  title:
    "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
  body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
}

describe("fetcher", () => {
  it("returns a object fetched", async () => {
    vi.spyOn(fetcher(URL), "then").mockResolvedValue(RES)
    const result = await fetcher(URL)
    expect(result).toEqual(RES)
  })
})
