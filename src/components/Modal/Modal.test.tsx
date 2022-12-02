import "@testing-library/jest-dom"
import { getByRole, render } from "@testing-library/react"
import Modal from "./Modal"

describe("Modal", () => {
  it("renders a Modal", () => {
    const { container } = render(
      <Modal>
        <h1>Hi</h1>
      </Modal>,
    )

    const title = getByRole(container, "heading")

    expect(title).toBeInTheDocument()
  })
})
