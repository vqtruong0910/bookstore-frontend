function LoadingSkeletonPayment() {
  return (
    <div className="flex flex-wrap w-full px-4 lg:px-0 xl:w-4/5 mx-auto py-10 animate-pulse">
      <div className="w-full flex flex-wrap lg:flex-nowrap">
        <div className="flex flex-wrap w-full">
          <div className="flex flex-wrap w-full py-5">
            <div className="flex w-full lg:mx-4 bg-slate-200 py-3"></div>

            <div className="flex flex-wrap justify-center w-full bg-slate-200 rounded-sm mt-2 lg:mx-4 h-[347px] lg:h[289px]"></div>
          </div>

          <div className="flex flex-wrap w-full py-5">
            <div className="flex w-full lg:px-4">
              <div className="w-full py-3 bg-slate-200"></div>
            </div>

            <div className="flex justify-center items-center w-full bg-slate-200 shadow-md mt-2 lg:mx-4 h-[40px]"></div>
          </div>

          <div className="flex flex-wrap w-full py-5">
            <div className="flex w-full lg:px-4">
              <div className="w-full py-3 bg-slate-200"></div>
            </div>

            <div className="flex justify-center items-center w-full bg-slate-200 shadow-md mt-2 lg:mx-4 h-[40px]"></div>
          </div>
        </div>

        <div className="w-full lg:py-14 py-5 lg:w-6/12 lg:mx-4 ">
          <div className="w-full flex flex-col shadow-md lg:mt-0 items-end p-3 bg-slate-200 h-[188px]"></div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSkeletonPayment
