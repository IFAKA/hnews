import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import NewsSkeleton from "./NewsSkeleton"

describe("NewsSkeleton", () => {
  it("renders a NewsSkeleton", () => {
    const { container } = render(<NewsSkeleton />)

    const skeleton = container.firstChild

    expect(skeleton).toBeInTheDocument()
  })
})
