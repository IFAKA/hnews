import { useNews } from "@/hooks"
import { NewsProps } from "@/models"
import ArrowSquareOut from "phosphor-react/src/icons/ArrowSquareOut"
import { Error } from "../Error"
import { NewsSkeleton } from "../NewsSkeleton"

const News = ({ id }: NewsProps) => {
  const { title, author, goToUrl, isSearched, isLoaded, error } = useNews(id)
  return (
    <>
      {isSearched &&
        (error ? (
          <Error error={error} />
        ) : isLoaded ? (
          <button
            className="text-left rounded-xl w-full h-full flex flex-col justify-between px-4 py-3  cursor-pointer border dark:border-none hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700 hover:scale-105 duration-150"
            onClick={goToUrl}
          >
            <div className="font-semibold text-lg mb-4 w-full">{title}</div>
            <div className="flex items-center w-full">
              <div className="flex-1 mr-4">{author}</div>
              <ArrowSquareOut />
            </div>
          </button>
        ) : (
          <NewsSkeleton />
        ))}
    </>
  )
}
export default News