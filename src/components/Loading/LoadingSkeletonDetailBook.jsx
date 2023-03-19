const LoadingSkeletonDetailBook = () => {
  return (
    <div className="w-full flex py-6 flex-col items-center animate-pulse">
      <div className="w-4/5 bg-white rounded-sm flex shadow-md">
        <div className="w-full my-3 flex flex-wrap lg:flex-nowrap">
          <div className="flex flex-wrap w-full lg:w-4/12">
            <div className="w-full flex justify-center">
              <div className="w-52 h-72 lg:w-72 lg:h-96 bg-slate-200"></div>
            </div>
          </div>

          <div className="w-full flex-col flex lg:w-8/12">
            <div className="w-9/12 lg:w-600 flex-wrap justify-center py-3 px-4 bg-slate-200 mx-4 my-5 lg:my-0"></div>

            <div className="hidden lg:flex lg:flex-wrap ml-4">
              <div className="flex flex-col pt-6 gap-y-2">
                <div className="py-2 bg-slate-200 w-24"></div>
                <div className="py-2 bg-slate-200 w-24"></div>
                <div className="py-2 bg-slate-200 w-24"></div>
                <div className="py-2 bg-slate-200 w-24"></div>
                <div className="py-2 bg-slate-200 w-24"></div>
              </div>
              <div className="flex flex-col mx-4 pt-6 gap-y-2">
                <div className="py-2 bg-slate-200 w-24"></div>
                <div className="py-2 bg-slate-200 w-24"></div>
                <div className="py-2 bg-slate-200 w-24"></div>
                <div className="py-2 bg-slate-200 w-24"></div>
                <div className="py-2 bg-slate-200 w-24"></div>
              </div>
            </div>

            <div className="flex flex-row items-center w-80 py-4 lg:py-5 bg-slate-200 lg:my-6 mx-4"></div>

            <div className="lg:w-7/12 flex flex-row items-center mt-4 mx-4">
              <div className="rounded-sm cursor-pointer w-36 lg:w-1/2">
                <div className="py-3 px-1 flex flex-row lg:justify-center bg-slate-200 rounded-sm"></div>
              </div>
              <div className="flex flex-wrap items-center justify-end lg:w-1/2 lg:justify-center ">
                <div className="px-8 py-2 mx-3 bg-slate-200"></div>
                <div className="flex flex-row items-center w-24 rounded-sm bg-slate-200 justify-between">
                  <button className="w-full border-r-2 flex justify-center cursor-pointer">
                    <div className="w-5 h-7 text-gray-600"></div>
                  </button>
                  <div className="w-full flex justify-center">
                    <div className="text-gray-800"></div>
                  </div>

                  <button className="w-full border-l-2 flex justify-center cursor-pointer">
                    <div className="w-5 h-7 text-gray-600"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap w-4/5 bg-slate-200 h-52 my-4 shadow-md"></div>
    </div>
  )
}

export default LoadingSkeletonDetailBook
