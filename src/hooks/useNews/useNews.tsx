import { emptyNews } from "@/models"
import { fetcher, getNews, POST_URL } from "@/services"
import { formatNews } from "@/utils"
import { useMemo } from "react"
import useSWR from "swr"

const useNews = (id: number) => {
  const { data, error } = useSWR(getNews(id), fetcher)
  const { title, author, url } = useMemo(
    () => (data ? formatNews(data) : emptyNews),
    [data],
  )
  const postUrl = `${POST_URL}${id}`

  const goToUrl = () => window.open(url ? url : postUrl, "_blank")

  return { title, author, isLoaded: !!data, error, goToUrl }
}
export default useNews
