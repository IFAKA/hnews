import "@testing-library/jest-dom"
import { render } from "@testing-library/react"
import ServiceWorkerModal from "./ServiceWorkerModal"

describe("ServiceWorkerModal", () => {
  it("returns null", () => {
    const { container } = render(<ServiceWorkerModal />)

    const value = container.firstChild

    expect(value).toBe(null)
  })
})
