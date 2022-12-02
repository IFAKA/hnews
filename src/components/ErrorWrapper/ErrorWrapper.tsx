const ErrorWrapper = ({ error }: { error: Error }) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="grid gap-4 p-4">
        <h1 className="font-semibold text-lg">{error.name}</h1>
        <div>{error.message}</div>
      </div>
    </div>
  )
}
export default ErrorWrapper
