import LoadingSkeletonCard from './LoadingSkeletonCard'

function LoadingSkeletonMain() {
  return (
    <div className="flex-col flex gap-10 w-full px-4 xl:px-0 justify-center py-10">
      <div className="w-full px-4 xl:w-4/5 mx-auto rounded-md border border-gray-200 drop-shadow-md bg-white py-10">
        <div className="flex w-full justify-center items-center pb-2">
          <div className="flex items-center">
            <div className="flex w-20 h-10 mx-2 bg-slate-200"></div>
            <div className="w-full px-10 h-10 bg-slate-200"></div>
          </div>
        </div>
        <div className="flex py-2 px-7 gap-x-3 items-center">
          <div className="w-12 h-12 rounded-full bg-slate-200"></div>
          <div className="px-4 py-1 bg-slate-200"></div>
        </div>

        <div className="w-full">
          <div className="mx-7">
            <div>
              <LoadingSkeletonCard />
            </div>
          </div>

          <div className="w-full flex justify-center mt-10">
            <div className="bg-slate-200 rounded-full px-20 py-5"></div>
          </div>
        </div>
      </div>

      <div className="w-full px-4 xl:w-4/5 mx-auto rounded-md border border-gray-200 drop-shadow-md bg-white py-10">
        <div className="flex w-full justify-center items-center pb-2">
          <div className="flex items-center">
            <div className="flex w-20 h-10 mx-2 bg-slate-200"></div>
            <div className="w-full px-10 h-10 bg-slate-200"></div>
          </div>
        </div>
        <div className="flex py-2 px-7 gap-x-3 items-center">
          <div className="w-12 h-12 rounded-full bg-slate-200"></div>
          <div className="px-4 py-1 bg-slate-200"></div>
        </div>

        <div className="w-full">
          <div className="mx-7">
            <div className="w-full hover:cursor-pointer hover:drop-shadow-xl transition">
              <div className="flex w-full justify-center mb-4 cursor-pointer">
                <div className="w-full h-[300px] bg-slate-200"></div>
              </div>

              <div className="flex bg-slate-200 py-3 transition rounded-lg items-center justify-center mx-2">
                <div className="w-5 h-5"></div>
                <span className=""></span>
              </div>
            </div>
            <div>
              <LoadingSkeletonCard />
            </div>
          </div>

          <div className="w-full flex justify-center mt-10">
            <div className="bg-slate-200 rounded-full px-20 py-5"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSkeletonMain
