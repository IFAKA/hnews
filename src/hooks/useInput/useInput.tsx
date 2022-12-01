import { useData } from "@/context"
import { IContext } from "@/models"
import { useEffect, useState } from "react"

const useInput = () => {
  const { search, setSearch } = useData() as IContext
  const [value, setValue] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value)

  useEffect(() => {
    const timer = setTimeout(() => setSearch(value), 500)
    return () => {
      clearInterval(timer)
    }
  }, [value])

  useEffect(() => {
    !search && setValue("")
  }, [search])

  return { value, handleChange }
}
export default useInput
