const LoadingSkeletonMenu = () => {
  return (
    <div className="flex flex-col md:pb-4 animate-pulse">
      <div className="flex flex-col w-full">
        <div className="hidden md:bg-slate-200 md:flex md:flex-col md:items-center h-[410px] md:w-64 lg:w-80 md:shadow-md"></div>
      </div>
      <div className="flex flex-col w-full">
        <div className="hidden md:bg-slate-200 md:flex md:flex-col md:items-center h-[410px] md:w-64 lg:w-80 md:shadow-md mt-16"></div>
      </div>
    </div>
  )
}

export default LoadingSkeletonMenu
