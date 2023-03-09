import LoadingSkeletonSearch from './LoadingSkeletonSearch'

const LoadingSkeleton = () => {
  return (
    <div className="w-full bg-white animate-pulse">
      {/* New Book */}
      <div className="w-full pt-10">
        <div className=" rounded-sm">
          <div className="flex w-full justify-start items-center lg:mb-10 border-b-2 py-2 border-gray-300">
            <div className="flex mx-4 bg-slate-200 w-12 h-12 rounded"></div>
            <div className="flex bg-slate-200 w-48 h-12 rounded"></div>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="mx-7">
                <div className="px-2 w-full hover:cursor-pointer hover:drop-shadow-xl transition">
                  <div className="w-full my-2 h-64 bg-slate-200">
                    <div className="w-full object-cover h-full"></div>
                  </div>

                  <div className="flex w-full px-4 py-2">
                    <span className=" whitespace-normal w-full text-sm md:text-base lg:text-lg font-medium"></span>
                  </div>

                  <div className="flex justify-between items-center font-medium text-center md:text-md lg:text-xl w-full px-4">
                    <div className="text-slate-400 md:text-lg lg:text-xl"></div>
                  </div>

                  <div className="flex bg-slate-200 transition rounded-sm py-2 mt-2 items-center justify-center mx-2">
                    <div className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-slate-200" />
                    <span className=" text-sm md:text-base lg:text-lg mx-1"></span>
                  </div>
                </div>
              </div>
              <div className="mx-7">
                <div className="px-2 w-full hover:cursor-pointer hover:drop-shadow-xl transition">
                  <div className="w-full my-2 h-64 bg-slate-200">
                    <div className="w-full object-cover h-full"></div>
                  </div>

                  <div className="flex w-full px-4 py-2">
                    <span className=" whitespace-normal w-full text-sm md:text-base lg:text-lg font-medium"></span>
                  </div>

                  <div className="flex justify-between items-center font-medium text-center md:text-md lg:text-xl w-full px-4">
                    <div className="text-slate-400 md:text-lg lg:text-xl"></div>
                  </div>

                  <div className="flex bg-slate-200 transition rounded-sm py-2 mt-2 items-center justify-center mx-2">
                    <div className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-slate-200" />
                    <span className=" text-sm md:text-base lg:text-lg mx-1"></span>
                  </div>
                </div>
              </div>
              <div className="hidden md:mx-7 md:block">
                <div className="px-2 w-full hover:cursor-pointer hover:drop-shadow-xl transition">
                  <div className="w-full my-2 h-64 bg-slate-200">
                    <div className="w-full object-cover h-full"></div>
                  </div>

                  <div className="flex w-full px-4 py-2">
                    <span className=" whitespace-normal w-full text-sm md:text-base lg:text-lg font-medium"></span>
                  </div>

                  <div className="flex justify-between items-center font-medium text-center md:text-md lg:text-xl w-full px-4">
                    <div className="text-slate-400 md:text-lg lg:text-xl"></div>
                  </div>

                  <div className="flex bg-slate-200 transition rounded-sm py-2 mt-2 items-center justify-center mx-2">
                    <div className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-slate-200" />
                    <span className=" text-sm md:text-base lg:text-lg mx-1"></span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block lg:mx-7">
                <div className="px-2 w-full hover:cursor-pointer hover:drop-shadow-xl transition">
                  <div className="w-full my-2 h-64 bg-slate-200">
                    <div className="w-full object-cover h-full"></div>
                  </div>

                  <div className="flex w-full px-4 py-2">
                    <span className=" whitespace-normal w-full text-sm md:text-base lg:text-lg font-medium"></span>
                  </div>

                  <div className="flex justify-between items-center font-medium text-center md:text-md lg:text-xl w-full px-4">
                    <div className="text-slate-400 md:text-lg lg:text-xl"></div>
                  </div>

                  <div className="flex bg-slate-200 transition rounded-sm py-2 mt-2 items-center justify-center mx-2">
                    <div className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-slate-200" />
                    <span className=" text-sm md:text-base lg:text-lg mx-1"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center mt-10">
              <div className="font-semibold text-md hover:drop-shadow-lg bg-slate-200 rounded-full py-5 px-24 lg:px-28"></div>
            </div>
          </div>
        </div>
      </div>

      {/* BestSeller Book */}
      <div className="w-full pt-10">
        <div className="rounded-sm">
          <div className="flex w-full justify-start items-center lg:mb-10 border-b-2 py-2 border-gray-300">
            <div className="flex mx-4 bg-slate-200 w-12 h-12 rounded"></div>
            <div className="flex bg-slate-200 w-48 h-12 rounded"></div>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="mx-7">
                <div className="px-2 w-full hover:cursor-pointer hover:drop-shadow-xl transition">
                  <div className="w-full my-2 h-64 bg-slate-200">
                    <div className="w-full object-cover h-full"></div>
                  </div>

                  <div className="flex w-full px-4 py-2">
                    <span className=" whitespace-normal w-full text-sm md:text-base lg:text-lg font-medium"></span>
                  </div>

                  <div className="flex justify-between items-center font-medium text-center md:text-md lg:text-xl w-full px-4">
                    <div className="text-slate-400 md:text-lg lg:text-xl"></div>
                  </div>

                  <div className="flex bg-slate-200 transition rounded-sm py-2 mt-2 items-center justify-center mx-2">
                    <div className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-slate-200" />
                    <span className=" text-sm md:text-base lg:text-lg mx-1"></span>
                  </div>
                </div>
              </div>
              <div className="mx-7">
                <div className="px-2 w-full hover:cursor-pointer hover:drop-shadow-xl transition">
                  <div className="w-full my-2 h-64 bg-slate-200">
                    <div className="w-full object-cover h-full"></div>
                  </div>

                  <div className="flex w-full px-4 py-2">
                    <span className=" whitespace-normal w-full text-sm md:text-base lg:text-lg font-medium"></span>
                  </div>

                  <div className="flex justify-between items-center font-medium text-center md:text-md lg:text-xl w-full px-4">
                    <div className="text-slate-400 md:text-lg lg:text-xl"></div>
                  </div>

                  <div className="flex bg-slate-200 transition rounded-sm py-2 mt-2 items-center justify-center mx-2">
                    <div className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-slate-200" />
                    <span className=" text-sm md:text-base lg:text-lg mx-1"></span>
                  </div>
                </div>
              </div>
              <div className="hidden md:mx-7 md:block">
                <div className="px-2 w-full hover:cursor-pointer hover:drop-shadow-xl transition">
                  <div className="w-full my-2 h-64 bg-slate-200">
                    <div className="w-full object-cover h-full"></div>
                  </div>

                  <div className="flex w-full px-4 py-2">
                    <span className=" whitespace-normal w-full text-sm md:text-base lg:text-lg font-medium"></span>
                  </div>

                  <div className="flex justify-between items-center font-medium text-center md:text-md lg:text-xl w-full px-4">
                    <div className="text-slate-400 md:text-lg lg:text-xl"></div>
                  </div>

                  <div className="flex bg-slate-200 transition rounded-sm py-2 mt-2 items-center justify-center mx-2">
                    <div className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-slate-200" />
                    <span className=" text-sm md:text-base lg:text-lg mx-1"></span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block lg:mx-7">
                <div className="px-2 w-full hover:cursor-pointer hover:drop-shadow-xl transition">
                  <div className="w-full my-2 h-64 bg-slate-200">
                    <div className="w-full object-cover h-full"></div>
                  </div>

                  <div className="flex w-full px-4 py-2">
                    <span className=" whitespace-normal w-full text-sm md:text-base lg:text-lg font-medium"></span>
                  </div>

                  <div className="flex justify-between items-center font-medium text-center md:text-md lg:text-xl w-full px-4">
                    <div className="text-slate-400 md:text-lg lg:text-xl"></div>
                  </div>

                  <div className="flex bg-slate-200 transition rounded-sm py-2 mt-2 items-center justify-center mx-2">
                    <div className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-slate-200" />
                    <span className=" text-sm md:text-base lg:text-lg mx-1"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center mt-10">
              <div className="font-semibold text-md hover:drop-shadow-lg bg-slate-200 rounded-full py-5 px-24 lg:px-28"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Popular Book */}
      <div className="w-full pt-10">
        <div className="rounded-sm">
          <div className="flex w-full justify-start items-center lg:mb-10 border-b-2 py-2 border-gray-300">
            <div className="flex mx-4 bg-slate-200 w-12 h-12 rounded"></div>
            <div className="flex bg-slate-200 w-48 h-12 rounded"></div>
          </div>

          <div className="w-full">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div className="mx-7">
                <div className="px-2 w-full hover:cursor-pointer hover:drop-shadow-xl transition">
                  <div className="w-full my-2 h-64 bg-slate-200">
                    <div className="w-full object-cover h-full"></div>
                  </div>

                  <div className="flex w-full px-4 py-2">
                    <span className=" whitespace-normal w-full text-sm md:text-base lg:text-lg font-medium"></span>
                  </div>

                  <div className="flex justify-between items-center font-medium text-center md:text-md lg:text-xl w-full px-4">
                    <div className="text-slate-400 md:text-lg lg:text-xl"></div>
                  </div>

                  <div className="flex bg-slate-200 transition rounded-sm py-2 mt-2 items-center justify-center mx-2">
                    <div className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-slate-200" />
                    <span className=" text-sm md:text-base lg:text-lg mx-1"></span>
                  </div>
                </div>
              </div>
              <div className="mx-7">
                <div className="px-2 w-full hover:cursor-pointer hover:drop-shadow-xl transition">
                  <div className="w-full my-2 h-64 bg-slate-200">
                    <div className="w-full object-cover h-full"></div>
                  </div>

                  <div className="flex w-full px-4 py-2">
                    <span className=" whitespace-normal w-full text-sm md:text-base lg:text-lg font-medium"></span>
                  </div>

                  <div className="flex justify-between items-center font-medium text-center md:text-md lg:text-xl w-full px-4">
                    <div className="text-slate-400 md:text-lg lg:text-xl"></div>
                  </div>

                  <div className="flex bg-slate-200 transition rounded-sm py-2 mt-2 items-center justify-center mx-2">
                    <div className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-slate-200" />
                    <span className=" text-sm md:text-base lg:text-lg mx-1"></span>
                  </div>
                </div>
              </div>
              <div className="hidden md:mx-7 md:block">
                <div className="px-2 w-full hover:cursor-pointer hover:drop-shadow-xl transition">
                  <div className="w-full my-2 h-64 bg-slate-200">
                    <div className="w-full object-cover h-full"></div>
                  </div>

                  <div className="flex w-full px-4 py-2">
                    <span className=" whitespace-normal w-full text-sm md:text-base lg:text-lg font-medium"></span>
                  </div>

                  <div className="flex justify-between items-center font-medium text-center md:text-md lg:text-xl w-full px-4">
                    <div className="text-slate-400 md:text-lg lg:text-xl"></div>
                  </div>

                  <div className="flex bg-slate-200 transition rounded-sm py-2 mt-2 items-center justify-center mx-2">
                    <div className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-slate-200" />
                    <span className=" text-sm md:text-base lg:text-lg mx-1"></span>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block lg:mx-7">
                <div className="px-2 w-full hover:cursor-pointer hover:drop-shadow-xl transition">
                  <div className="w-full my-2 h-64 bg-slate-200">
                    <div className="w-full object-cover h-full"></div>
                  </div>

                  <div className="flex w-full px-4 py-2">
                    <span className=" whitespace-normal w-full text-sm md:text-base lg:text-lg font-medium"></span>
                  </div>

                  <div className="flex justify-between items-center font-medium text-center md:text-md lg:text-xl w-full px-4">
                    <div className="text-slate-400 md:text-lg lg:text-xl"></div>
                  </div>

                  <div className="flex bg-slate-200 transition rounded-sm py-2 mt-2 items-center justify-center mx-2">
                    <div className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-slate-200" />
                    <span className=" text-sm md:text-base lg:text-lg mx-1"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex justify-center my-10">
              <div className="font-semibold text-md hover:drop-shadow-lg bg-slate-200 rounded-full py-5 px-24 lg:px-28"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSkeletonSearch
