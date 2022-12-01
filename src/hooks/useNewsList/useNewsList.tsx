import { useData } from "@/context"
import { IContext, NEWS_PER_PAGE } from "@/models"
import { API_URL, fetcher } from "@/services"
import { useEffect, useState } from "react"
import useSWR from "swr"

const useNewsList = () => {
  const { search } = useData() as IContext
  const [news, setNews] = useState<number[]>([])
  const { data, error } = useSWR<number[]>(`${API_URL}topstories.json`, fetcher)

  useEffect(() => data && setNews(data.slice(0, NEWS_PER_PAGE)), [data])

  const length = news.length
  const condition = !!news.length
  const hasMore =
    !!data?.slice(news.length, news.length + NEWS_PER_PAGE).length && !search

  const next = () =>
    data &&
    setNews((prev) => [
      ...prev,
      ...data.slice(prev.length, prev.length + NEWS_PER_PAGE),
    ])

  return { news, error, condition, length, hasMore, next }
}
export default useNewsList
