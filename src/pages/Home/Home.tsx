import { News, Render, Spinner } from "@/components"
import { useNewsList } from "@/hooks"
import { ITEM_HEIGHT } from "@/models"
import InfiniteScroll from "react-infinite-scroll-component"
import RenderIfVisible from "react-render-if-visible"

const Home = () => {
  const { news, error, condition, length, hasMore, next } = useNewsList()
  return (
    <Render when={condition} error={error} loader={<Spinner />}>
      <div className="flex justify-center">
        <div className="w-full">
          <InfiniteScroll
            loader={<Spinner />}
            dataLength={length}
            hasMore={hasMore}
            next={next}
            className="grid 2xl:grid-cols-5 sm:grid-cols-3 gap-4 p-4"
          >
            {news.map((id) => (
              <RenderIfVisible
                key={id}
                defaultHeight={ITEM_HEIGHT}
                stayRendered={true}
              >
                <News id={id} />
              </RenderIfVisible>
            ))}
          </InfiniteScroll>
        </div>
      </div>
    </Render>
  )
}
export default Home
