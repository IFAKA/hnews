import { isValidElement } from "react"
import { ErrorWrapper } from "../ErrorWrapper"

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

  const throwError = () => {
    throw new (Error as ErrorConstructor)("Wrong parameters")
  }

  return (
    <>
      {error ? (
        <ErrorWrapper error={error} />
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
        throwError()
      )}
    </>
  )
}
export default Render
