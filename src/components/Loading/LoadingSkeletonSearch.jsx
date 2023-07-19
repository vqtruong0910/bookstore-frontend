function LoadingSkeletonSearch() {
  return (
    <>
      <div className="flex flex-row w-full animate-pulse py-10">
        <div className="flex flex-col w-full items-start px-4">
          <div className="flex flex-col gap-2 items-center">
            <div className="text-xl font-semibold py-3 bg-slate-200 w-56"></div>
            <div className="text-xl font-semibold py-3 bg-slate-200 w-56"></div>
          </div>

          <div className="w-full my-5">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5">
              <div className="mb-8">
                <div className="w-full hover:cursor-pointer hover:drop-shadow-xl transition">
                  <div className="flex w-full justify-center mb-4 cursor-pointer">
                    <div className="w-full h-[300px] bg-slate-200"></div>
                  </div>

                  <div className="flex bg-slate-200 py-3 transition rounded-lg items-center justify-center mx-2">
                    <div className="w-5 h-5"></div>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <div className="w-full hover:cursor-pointer hover:drop-shadow-xl transition">
                  <div className="flex w-full justify-center mb-4 cursor-pointer">
                    <div className="w-full h-[300px] bg-slate-200"></div>
                  </div>

                  <div className="flex bg-slate-200 py-3 transition rounded-lg items-center justify-center mx-2">
                    <div className="w-5 h-5"></div>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <div className="w-full hover:cursor-pointer hover:drop-shadow-xl transition">
                  <div className="flex w-full justify-center mb-4 cursor-pointer">
                    <div className="w-full h-[300px] bg-slate-200"></div>
                  </div>

                  <div className="flex bg-slate-200 py-3 transition rounded-lg items-center justify-center mx-2">
                    <div className="w-5 h-5"></div>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <div className="w-full hover:cursor-pointer hover:drop-shadow-xl transition">
                  <div className="flex w-full justify-center mb-4 cursor-pointer">
                    <div className="w-full h-[300px] bg-slate-200"></div>
                  </div>

                  <div className="flex bg-slate-200 py-3 transition rounded-lg items-center justify-center mx-2">
                    <div className="w-5 h-5"></div>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <div className="w-full hover:cursor-pointer hover:drop-shadow-xl transition">
                  <div className="flex w-full justify-center mb-4 cursor-pointer">
                    <div className="w-full h-[300px] bg-slate-200"></div>
                  </div>

                  <div className="flex bg-slate-200 py-3 transition rounded-lg items-center justify-center mx-2">
                    <div className="w-5 h-5"></div>
                  </div>
                </div>
              </div>
              <div className="mb-8">
                <div className="w-full hover:cursor-pointer hover:drop-shadow-xl transition">
                  <div className="flex w-full justify-center mb-4 cursor-pointer">
                    <div className="w-full h-[300px] bg-slate-200"></div>
                  </div>

                  <div className="flex bg-slate-200 py-3 transition rounded-lg items-center justify-center mx-2">
                    <div className="w-5 h-5"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default LoadingSkeletonSearch
