import { isValidElement } from "react"

interface RenderProps {
  children: JSX.Element | JSX.Element[]
  when: boolean | boolean[]
  error?: Error
  loader?: JSX.Element
}

/**
 * @author FAKA
 * @description It renders JSX conditionally in a clean way instead of ternaries or early returns.
 * @param when Array of rendering conditions
 * @param children JSX to conditionally render
 * @returns JSX conditionally rendered
 * @example
 * const conditions = [
 *  navCondition,
 *  bodyCondition,
 *  footyCondition
 * ]
 * <Render when={conditions}>
 *   <Nav />
 *   <Body />
 *   <Footy />
 * </Render>
 * @example
 * const condition = boolean
 * <Render when={condition}>
 *   <Nav />
 * </Render>
 */

const Render = ({ children, when, error, loader }: RenderProps) => {
  const MultipleElements =
    Array.isArray(children) &&
    children.every((children) => isValidElement(children)) &&
    Array.isArray(when) &&
    when.every((condition) => typeof condition === "boolean")
  const SingleElement = isValidElement(children) && typeof when === "boolean"

  function err() {
    throw new Error("Wrong parameters")
  }

  return (
    <>
      {error ? (
        <div className="h-full w-full flex justify-center items-center">
          <div className="grid gap-4 p-4">
            <div className="font-semibold text-lg">{error.name}</div>
            <div>{error.message}</div>
          </div>
        </div>
      ) : MultipleElements ? (
        children.map((child, i) => when[i] && child)
      ) : SingleElement ? (
        when ? (
          children
        ) : isValidElement(loader) ? (
          loader
        ) : (
          <></>
        )
      ) : (
        err()
      )}
    </>
  )
}
export default Render
