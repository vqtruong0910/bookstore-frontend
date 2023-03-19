const LoadingSkeletonCart = () => {
  return (
    <div className="flex flex-wrap w-full px-4 animate-pulse">
      <div className="flex flex-wrap w-full py-5">
        <div className="flex w-full">
          <div className="w-full text-lg font-medium py-4 bg-slate-200"></div>
        </div>

        <div className="w-full flex flex-wrap lg:flex-row">
          <div className="w-full lg:w-8/12">
            <div className="hidden md:flex md:flex-row md:w-full md:justify-between md:bg-slate-200 md:py-5 mt-4 shadow-md"></div>

            <div className="w-full bg-white shadow-md flex flex-col mt-4 ">
              <div className="bg-slate-200 md:h-[400px]">
                <div className="hidden md:px-4 md:py-1 md:block"></div>
                <div className="hidden md:flex md:flex-row md:mx-2 md:my-7 md:justify-between md:w-full md:lg:h-[400px]"></div>
                <div className="w-full my-7 flex flex-col bg-slate-200 h-[250px] md:hidden"></div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-4/12 lg:pl-4">
            <div className="w-full flex flex-col bg-slate-200 shadow-md mt-4 items-end lg:justify-between p-3 h-[176px]"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSkeletonCart
