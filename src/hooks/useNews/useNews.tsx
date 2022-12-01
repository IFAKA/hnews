import { useData } from "@/context"
import { IContext } from "@/models"
import { API_URL, fetcher, POST_URL } from "@/services"
import { formatData } from "@/utils"
import { useMemo } from "react"
import useSWR from "swr"

const useNews = (id: number) => {
  const { search, setSearch } = useData() as IContext
  const { data, error } = useSWR(`${API_URL}item/${id}.json`, fetcher)
  const { title, author, url } = useMemo(() => formatData(data), [data])
  const isSearched = useMemo(
    () =>
      (title.toLowerCase().includes(search.toLowerCase()) ||
        author.toLowerCase().includes(search.toLowerCase())) ??
      "",
    [search],
  )
  const postUrl = `${POST_URL}${id}`

  const goToUrl = () => {
    window.open(url ? url : postUrl, "_blank")
    setSearch("")
  }

  return { title, author, isSearched, isLoaded: !!data, error, goToUrl }
}
export default useNews
