const Modal = ({
  children,
  close,
}: {
  children: React.ReactNode
  close?: () => void
}) => {
  return (
    <div
      className="z-10 p-4 fixed inset-0 justify-center items-center flex overflow-x-hidden overflow-y-auto outline-none focus:outline-none"
      style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      onClick={close}
    >
      <div
        className="grid gap-4 place-items-center select-none rounded-xl max-w-xs relative dark:bg-slate-800 bg-white p-5"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  )
}
export default Modal
