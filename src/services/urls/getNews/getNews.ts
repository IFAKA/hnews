import { API_URL } from "../urls"

export const getNews = (id: number) => `${API_URL}item/${id}.json`
