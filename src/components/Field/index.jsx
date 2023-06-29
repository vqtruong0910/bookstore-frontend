function Field({ children, title }) {
  return (
    <div className="flex w-full p-2">
      <div className="w-1/3 items-center flex">
        <span className="flex text-sm font-medium lg:text-base">{title}</span>
      </div>

      <div className="w-2/3 lg:w-8/12 flex flex-col">{children}</div>
    </div>
  )
}

export default Field
