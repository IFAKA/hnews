const NewsSkeleton = () => {
  return (
    <div className="animate-pulse h-full w-full rounded-xl grid gap-4 p-4 border dark:border-none dark:bg-slate-800">
      <div className="h-7 rounded-full bg-slate-100 dark:bg-slate-700"></div>
      <div className="flex items-center">
        <div className="flex-1 mr-4 h-6 rounded-full bg-slate-100 dark:bg-slate-700"></div>
        <div className="h-6 w-6 rounded-full bg-slate-100 dark:bg-slate-700"></div>
      </div>
    </div>
  )
}
export default NewsSkeleton
