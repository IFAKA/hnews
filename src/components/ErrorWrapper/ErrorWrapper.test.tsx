import "@testing-library/jest-dom"
import { getByRole, render } from "@testing-library/react"
import ErrorWrapper from "./ErrorWrapper"

const error = { name: "Name", message: "Message" }

describe("Error", () => {
  it("renders a Error", () => {
    const { container } = render(<ErrorWrapper error={error} />)

    const title = getByRole(container, "heading")

    expect(title).toBeInTheDocument()
  })
})
