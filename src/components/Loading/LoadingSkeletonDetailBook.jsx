function LoadingSkeletonDetailBook() {
  return (
    <div className="w-full flex flex-col items-center drop-shadow-lg animate-pulse">
      <div className="w-full xl:w-4/5 bg-white rounded-sm flex shadow-md border border-gray-200">
        <div className="w-full flex items-center flex-wrap lg:flex-nowrap">
          <div className="flex w-full justify-center cursor-pointer">
            <div className="w-full h-[300px] bg-slate-200"></div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center w-full xl:w-4/5 h-[200px] py-4 lg:py-5 bg-slate-200 lg:my-6 mx-4 animate-pulse"></div>

      <div className="flex flex-row items-center w-full xl:w-4/5 h-[400px] lg:py-5 bg-slate-200 lg:my-6 mx-4 animate-pulse"></div>
    </div>
  )
}

export default LoadingSkeletonDetailBook
