export interface IChild {
  children: React.ReactNode
}

export interface Data {
  search: string
}

export type Partial<T> = {
  [P in keyof T]?: T[P]
}
export interface IContext {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

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
