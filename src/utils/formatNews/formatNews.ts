import { News, NewsApi } from "@/models"

const formatNews = (data: NewsApi): News => ({
  id: data.id,
  title: data.title,
  author: data.by,
  url: data.url,
})
export default formatNews
