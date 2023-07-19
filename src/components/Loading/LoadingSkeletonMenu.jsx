function LoadingSkeletonMenu() {
  return (
    <div className="hidden md:flex flex-col py-10 animate-pulse">
      <div className="flex flex-col w-auto gap-10">
        <div className="hidden md:flex md:flex-col md:items-center md:w-64 lg:w-80 md:shadow-md rounded-sm bg-white">
          <div className="hidden md:bg-slate-200 md:flex md:flex-col md:items-center h-[410px] md:w-64 lg:w-80 md:shadow-md"></div>
        </div>
        <div className="hidden md:flex md:flex-col md:items-center md:w-64 lg:w-80 md:shadow-md rounded-sm bg-white">
          <div className="hidden md:bg-slate-200 md:flex md:flex-col md:items-center h-[410px] md:w-64 lg:w-80 md:shadow-md"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSkeletonMenu
