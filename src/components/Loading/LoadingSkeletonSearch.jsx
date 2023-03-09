const LoadingSkeletonSearch = () => {
  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-col w-full items-start px-4">
        <div className="flex items-center h-16">
          <div className="mt-4 text-xl font-semibold py-4 bg-slate-200 w-56"></div>
        </div>

        <div className="w-full my-2">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 pb-4">
            <div className="grid justify-self-center items-self-center relative w-full">
              <div className="flex w-full justify-center drop-shadow-md mt-3 cursor-pointer h-56 md:h-72 bg-slate-200"></div>

              <div className="w-full py-3 px-4 mt-2 bg-slate-200"></div>
              <div className="w-full py-3 px-4 mt-2 bg-slate-200"></div>
              <div className="flex justify-between items-center font-medium w-full px-4 bg-slate-200"></div>

              <div className="flex w-full mt-2 mb-4 rounded-sm bg-slate-200 py-6"></div>
            </div>
            <div className="grid justify-self-center items-self-center relative w-full">
              <div className="flex w-full justify-center drop-shadow-md mt-3 cursor-pointer h-56 md:h-72 bg-slate-200"></div>

              <div className="w-full py-3 px-4 mt-2 bg-slate-200"></div>
              <div className="w-full py-3 px-4 mt-2 bg-slate-200"></div>
              <div className="flex justify-between items-center font-medium w-full px-4 bg-slate-200"></div>

              <div className="flex w-full mt-2 mb-4 rounded-sm bg-slate-200 py-6"></div>
            </div>
            <div className="hidden lg:grid lg:justify-self-center lg:items-self-center lg:relative lg:w-full">
              <div className="flex w-full justify-center drop-shadow-md mt-3 cursor-pointer h-56 md:h-72 bg-slate-200"></div>

              <div className="w-full py-3 px-4 mt-2 bg-slate-200"></div>
              <div className="w-full py-3 px-4 mt-2 bg-slate-200"></div>
              <div className="flex justify-between items-center font-medium w-full px-4 bg-slate-200"></div>

              <div className="flex w-full mt-2 mb-4 rounded-sm bg-slate-200 py-6"></div>
            </div>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 pb-4">
            <div className="grid justify-self-center items-self-center relative w-full">
              <div className="flex w-full justify-center drop-shadow-md mt-3 cursor-pointer h-56 md:h-72 bg-slate-200"></div>

              <div className="w-full py-3 px-4 mt-2 bg-slate-200"></div>
              <div className="w-full py-3 px-4 mt-2 bg-slate-200"></div>
              <div className="flex justify-between items-center font-medium w-full px-4 bg-slate-200"></div>

              <div className="flex w-full mt-2 mb-4 rounded-sm bg-slate-200 py-6"></div>
            </div>
            <div className="grid justify-self-center items-self-center relative w-full">
              <div className="flex w-full justify-center drop-shadow-md mt-3 cursor-pointer h-56 md:h-72 bg-slate-200"></div>

              <div className="w-full py-3 px-4 mt-2 bg-slate-200"></div>
              <div className="w-full py-3 px-4 mt-2 bg-slate-200"></div>
              <div className="flex justify-between items-center font-medium w-full px-4 bg-slate-200"></div>

              <div className="flex w-full mt-2 mb-4 rounded-sm bg-slate-200 py-6"></div>
            </div>
            <div className="hidden lg:grid lg:justify-self-center lg:items-self-center lg:relative lg:w-full">
              <div className="flex w-full justify-center drop-shadow-md mt-3 cursor-pointer h-56 md:h-72 bg-slate-200"></div>

              <div className="w-full py-3 px-4 mt-2 bg-slate-200"></div>
              <div className="w-full py-3 px-4 mt-2 bg-slate-200"></div>
              <div className="flex justify-between items-center font-medium w-full px-4 bg-slate-200"></div>

              <div className="flex w-full mt-2 mb-4 rounded-sm bg-slate-200 py-6"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSkeletonSearch
