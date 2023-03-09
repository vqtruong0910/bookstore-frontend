const LoadingSkeletonMenu = () => {
  return (
    <div className="flex flex-col md:pb-4 animate-pulse">
      <div className="flex flex-col w-full bg-gray-100">
        <div className="hidden md:bg-slate-200 md:flex md:flex-col md:items-center h-[480px] md:mt-16 md:w-64 lg:w-80 md:shadow-md"></div>
      </div>
      <div className="flex flex-col w-full bg-gray-100">
        <div className="hidden md:bg-slate-200 md:flex md:flex-col md:items-center h-[480px] md:mt-16 md:w-64 lg:w-80 md:shadow-md"></div>
      </div>
    </div>
  )
}

export default LoadingSkeletonMenu
