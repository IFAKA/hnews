import { useNews } from "@/hooks"
import { NewsProps } from "@/models"
import ArrowSquareOut from "phosphor-react/src/icons/ArrowSquareOut"
import { NewsSkeleton } from "../NewsSkeleton"
import { Render } from "../Render"
import { motion } from "framer-motion"

const News = ({ id }: NewsProps) => {
  const { title, author, goToUrl, isLoaded, error } = useNews(id)
  return (
    <Render when={isLoaded} error={error} loader={<NewsSkeleton />}>
      <motion.button
        className="text-left rounded-xl w-full h-full flex flex-col justify-between px-4 py-3 cursor-pointer border dark:border-none hover:bg-slate-50 dark:bg-slate-800 dark:hover:bg-slate-700"
        onClick={goToUrl}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 15,
          duration: 0.15,
        }}
      >
        <div className="font-semibold text-lg mb-4 w-full">{title}</div>
        <div className="flex items-center w-full">
          <div className="flex-1 mr-4">{author}</div>
          <ArrowSquareOut />
        </div>
      </motion.button>
    </Render>
  )
}
export default News
