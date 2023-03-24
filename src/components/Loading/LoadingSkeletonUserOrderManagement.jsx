const LoadingSkeletonUserOrderManagement = () => {
  return (
    <div className="flex flex-wrap md:flex-col w-full">
      <div className="flex w-full px-4 md:px-0">
        <span className="w-full text-lg font-semibold mb-5 lg:text-xl"></span>
      </div>
      <form className="w-full px-4 md:px-0 pb-4">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        ></label>
        <div className="relative w-full">
          <div className="flex absolute inset-y-0 left-0 items-center px-3 h-full rounded-sm">
            <button type="submit">
              <div className="w-5 h-5 bg-slate-200"></div>
            </button>
          </div>
          <input type="search" className=" block py-2 pl-12 w-full bg-slate-200 " />
        </div>
      </form>
      <div className="flex justify-center w-full mx-4 md:mx-0 rounded-sm bg-white shadow-md">
        <div className="w-full flex flex-wrap md:flex-nowrap md:cursor-pointer md:px-0 md:py-5 bg-slate-200">
          <div className="px-4 w-full flex justify-between items-center py-4 bg-slate-200">
            <div className="text-sm font-medium flex items-center w-full md:justify-center">
              <div className="w-5 h-5 md:hidden bg-slate-200"></div>
              <span className="flex px-0.5 bgslate-500"></span>
            </div>
            <div className="w-28 flex justify-center border bg-slate-200 rounded-sm py-2 cursor-pointer md:hidden"></div>
          </div>
          <div className="px-4 w-full flex justify-between items-center py-4">
            <div className="text-sm bg-slate-200 font-medium flex items-center w-full md:justify-center">
              <div className="w-5 h-5 md:hidden bg-slate-200"></div>
              <span className="flex px-0.5 bg-slate-200"></span>
            </div>
            <div className="w-28 flex justify-center border rounded-sm py-2 cursor-pointer md:hidden"></div>
          </div>
          <div className="px-4 w-full flex justify-between items-center py-4 whitespace-nowrap">
            <div className="text-sm  font-medium flex items-center w-full md:justify-center">
              <div className="w-5 h-5 md:hidden"></div>
              <span className="flex px-0.5 bg-slate-200"></span>
            </div>
            <div className="w-28 flex justify-center border bg-slate-200 rounded-sm py-2 md:hidden"></div>
          </div>
          <div className="px-4 w-full flex justify-between items-center py-4">
            <div className="flex items-center w-full md:justify-center">
              <div className="w-5 h-5 md:hidden"></div>
              <span className="flex px-0.5"></span>
            </div>
            <div className="w-28 flex justify-center rounded-sm py-2 cursor-pointer md:hidden"></div>
          </div>
          <div className="px-4 w-full flex justify-between items-center py-4">
            <div className="flex items-center w-full md:justify-center">
              <div className="w-5 h-5 md:hidden"></div>
              <span className="flex px-0.5"></span>
            </div>
            <div className="w-28 flex justify-center borderrounded-sm py-2 cursor-pointer md:hidden">
              <span className="text-xs"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-0">
        <div className="bg-slate-200 w-full my-4">
          <div className="flex py-3 items-center mx-4"></div>

          <div className="w-full border-t-2 flex-row flex">
            <div className="my-4 mx-4 flex flex-col">
              <div className="py-1"></div>
              <div className="py-1"></div>
              <div className="py-1"></div>
            </div>

            <div className="my-4 flex flex-col mx-4">
              <div className="py-1"></div>
              <div className="py-1"></div>
              <div className="py-1"></div>
            </div>
          </div>

          <div className="w-full border-t-2 bg-slate-200 py-6">
            <div className="w-full pt-2 flex justify-end px-4">
              <span className="text-sm md:text-base lg:text-lg"></span>
            </div>
            <div className="w-full pb-4 pt-1 flex justify-end px-4">
              <span className="px-2 py-1 text-xs md:text-sm lg:text-base rounded-sm"></span>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-0">
        <div className="bg-slate-200 w-full my-4">
          <div className="flex py-3 items-center mx-4"></div>

          <div className="w-full border-t-2 flex-row flex">
            <div className="my-4 mx-4 flex flex-col">
              <div className="py-1"></div>
              <div className="py-1"></div>
              <div className="py-1"></div>
            </div>

            <div className="my-4 flex flex-col mx-4">
              <div className="py-1"></div>
              <div className="py-1"></div>
              <div className="py-1"></div>
            </div>
          </div>

          <div className="w-full border-t-2 bg-slate-200 py-6">
            <div className="w-full pt-2 flex justify-end px-4">
              <span className="text-sm md:text-base lg:text-lg"></span>
            </div>
            <div className="w-full pb-4 pt-1 flex justify-end px-4">
              <span className="px-2 py-1 text-xs md:text-sm lg:text-base rounded-sm"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSkeletonUserOrderManagement
