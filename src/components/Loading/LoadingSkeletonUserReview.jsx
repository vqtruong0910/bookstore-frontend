const LoadingSkeletonUserReview = () => {
  return (
    <div className="flex flex-wrap md:flex-col w-full">
      <div className="flex w-full px-4 md:px-0">
        <span className="mb-5 lg:text-xl bg-slate-200 py-3 w-44"></span>
      </div>

      <div className="flex justify-center w-full mx-4 md:mx-0 rounded-sm">
        <div className="w-full flex flex-wrap md:flex-nowrap md:cursor-pointer md:px-0 md:py-4 bg-slate-200">
          <div className="px-4 w-full flex justify-between items-center py-4 md:py-2 bg-slate-200">
            <div className=" flex items-center w-full md:justify-center">
              <div className="w-5 h-5 md:hidden"></div>
              <span className="flex px-0.5 bg-slate-200"></span>
            </div>
            <div className="w-28 flex justify-center rounded-sm py-2 cursor-pointer md:hidden"></div>
          </div>
          <div className="px-4 w-full flex justify-between items-center py-4 md:py-2 bg-slate-200">
            <div className="flex items-center w-full md:justify-center">
              <div className=" w-5 h-5 md:hidden"></div>
              <span className="flex px-0.5 bg-slate-200"></span>
            </div>
            <div className="w-28 flex justify-centerrounded-sm py-2 cursor-pointer md:hidden"></div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 md:px-0">
        <div className="bg-slate-200 w-full my-4">
          <div className="w-full px-4 md:px-0">
            <div className="bg-slate-200 w-full my-4">
              <div className="w-full border-t-2">
                <div className="w-full mx-4">
                  <div className="w-full my-4 flex">
                    <div className="w-24 h-24 lg:w-28 lg:h-28 relative border flex items-center"></div>

                    <div className="flex w-full flex-col mx-3">
                      <span className="w-full text-sm lg:text-base font-normal text-gray-600"></span>
                      <span className="w-full my-0.5 text-sm lg:text-base font-normal text-gray-600"></span>
                    </div>
                  </div>
                </div>
              </div>

              <form className="w-full border-t-2 px-4">
                <div className="w-full py-2">
                  <div className="w-full"></div>
                  <div className="w-full flex my-2">
                    <input className="w-full border rounded-sm px-2 py-7 bg-slate-200" />
                  </div>

                  <div className="w-full flex justify-center py-5 cursor-pointer">
                    <button
                      type="submit"
                      className="w-40 h-10 flex items-center justify-center bg-slate-200 hover:bg-slate-500 transition rounded-sm"
                    ></button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSkeletonUserReview
