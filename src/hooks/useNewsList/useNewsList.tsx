import { NEWS_PER_PAGE } from "@/models"
import { fetcher, getNewsList } from "@/services"
import { useEffect, useState } from "react"
import useSWR from "swr"

const useNewsList = () => {
  const [news, setNews] = useState<number[]>([])
  const { data, error } = useSWR<number[]>(getNewsList(), fetcher)

  useEffect(() => data && setNews(data.slice(0, NEWS_PER_PAGE)), [data])

  const length = news.length
  const condition = !!news.length
  const hasMore = !!data?.slice(news.length, news.length + NEWS_PER_PAGE).length

  const next = () =>
    data &&
    setNews((prev) => [
      ...prev,
      ...data.slice(prev.length, prev.length + NEWS_PER_PAGE),
    ])

  return { news, error, condition, length, hasMore, next }
}
export default useNewsList
