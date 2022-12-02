export interface News {
  id: number
  title: string
  author: string
  url: string
}

export interface NewsProps {
  id: number
}

export interface NewsApi {
  by: string
  descendants: number
  id: number
  kids: number[]
  score: number
  time: number
  title: string
  type: string
  url: string
}
