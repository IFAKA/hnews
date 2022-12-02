import "@testing-library/jest-dom"
import { getByRole, render } from "@testing-library/react"
import Render from "./Render"

describe("Render", () => {
  it("renders what is inside the wrapper", () => {
    const { container } = render(
      <Render when={true}>
        <h1>Hi</h1>
      </Render>,
    )

    const title = getByRole(container, "heading")

    expect(title).toBeInTheDocument()
  })
  it("doesn't renders when condition is false", () => {
    const { container } = render(
      <Render when={false}>
        <h1>Hi</h1>
      </Render>,
    )

    const afterRender = container.firstChild

    expect(afterRender).toBeNull()
  })
})
