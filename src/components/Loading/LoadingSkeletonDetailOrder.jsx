function LoadingSkeletonDetailOrder() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full px-4 md:px-0 bg-slate-200 mb-5 py-5">
        <span className="w-full text-lg font-semibold mb-2 lg:text-xl"></span>
      </div>

      <div>
        <div className="w-full">
          <div className="hidden md:block h-[450px] bg-slate-200 animate-pulse"></div>

          {/* Mobile */}
          <div className="w-full shadow-md md:hidden h-[300px] animate-pulse bg-slate-200"></div>
        </div>
      </div>

      <div className="w-full px-4 items-center h-10 bg-slate-200 animate-pulse mt-5 mb-6 "></div>
    </div>
  )
}

export default LoadingSkeletonDetailOrder
