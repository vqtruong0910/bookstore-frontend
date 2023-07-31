function LoadingSkeletonDetailBook() {
  return (
    <div className="w-full flex flex-col items-center animate-pulse gap-5">
      <div className="w-full xl:w-4/5 bg-white rounded-sm flex flex-col lg:flex-row gap-5">
        <div className="w-full flex items-center flex-wrap lg:flex-nowrap drop-shadow-lg">
          <div className="flex w-full justify-center cursor-pointer">
            <div className="w-full h-[450px] bg-slate-200"></div>
          </div>
        </div>

        <div className="flex flex-col w-full bg-slate-200 lg:max-w-[300px] animate-pulse drop-shadow-lg">
          <div className="gap-3 flex flex-col py-5 px-5 w-full"></div>
          <div className="gap-3 flex flex-col py-5 px-5 w-full"></div>
          <div className="gap-3 flex flex-col py-5 px-5 w-full"></div>
        </div>
      </div>

      <div className="flex flex-row w-full xl:w-4/5 h-[200px] py-4 lg:py-5 bg-slate-200 lg:my-6 mx-4 animate-pulse drop-shadow-lg"></div>

      <div className="flex flex-row w-full xl:w-4/5 h-[400px] lg:py-5 bg-slate-200 mx-4 animate-pulse drop-shadow-lg"></div>
    </div>
  )
}

export default LoadingSkeletonDetailBook
