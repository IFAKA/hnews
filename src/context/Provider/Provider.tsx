import { IChild, IContext } from "@/models"
import { createContext, useContext, useState } from "react"

const Context = createContext<IContext | null>(null)

export const useData = () => useContext(Context)

export const Provider = ({ children }: IChild) => {
  const [search, setSearch] = useState("")
  return (
    <Context.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </Context.Provider>
  )
}
