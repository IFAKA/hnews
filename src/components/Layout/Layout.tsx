import { IChild } from "@/models"
import { Navbar } from "../Navbar"

const Layout = ({ children }: IChild) => {
  return (
    <>
      <Navbar />
      <div className="w-full flex justify-center">{children}</div>
    </>
  )
}
export default Layout
