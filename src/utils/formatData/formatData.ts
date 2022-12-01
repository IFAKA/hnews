import { emptyNews, News, NewsApi } from "@/models"

const formatData = (data: NewsApi): News =>
  data
    ? {
        id: data.id,
        title: data.title,
        author: data.by,
        url: data.url,
      }
    : emptyNews
export default formatData
