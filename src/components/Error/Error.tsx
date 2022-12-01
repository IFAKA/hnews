const Error = ({ error }: { error: Error }) => {
  return (
    <div className="h-full w-full flex justify-center items-center">
      <div className="grid gap-4 p-4">
        <div className="font-semibold text-lg">{error.name}</div>
        <div>{error.message}</div>
      </div>
    </div>
  )
}
export default Error
