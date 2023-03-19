const LoadingSkeletonPersonInfo = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-wrap w-full">
        <div className="flex w-full px-4 md:px-0">
          <span className="w-48 text-lg font-semibold mb-5 lg:text-xl bg-slate-200 py-3"></span>
        </div>

        <div className="flex w-full flex-wrap lg:flex-nowrap md:mx-0 bg-white shadow-md">
          <div className="w-full px-4 lg:w-2/3">
            <div className="w-full flex flex-wrap">
              <span className="flex bg-slate-200 py-3 w-40 lg:text-lg"></span>

              <div className="flex flex-col w-full justify-center">
                <form>
                  <div className="flex flex-col items-center py-4 w-full">
                    <div className="flex relative justify-end items-end">
                      <div name="user_image" className="flex justify-center items-center">
                        <div
                          alt="Avatar"
                          className="border-2 rounded-full w-24 h-24 bg-slate-200"
                        ></div>
                      </div>

                      <div className="flex flex-col absolute w-6 h-6 items-center justify-center rounded-full border bg-gray-200"></div>
                    </div>
                  </div>
                </form>

                <div>
                  <div className="flex w-full py-2">
                    <div className="w-1/3 lg:w-4/12 items-center flex">
                      <div className="flex text-sm lg:text-base w-28 py-3 bg-slate-200"></div>
                    </div>

                    <div className="w-2/3 lg:w-8/12 flex flex-col">
                      <input className="w-full rounded-sm px-2 py-1 lg:py-2 bg-slate-200" />
                    </div>
                  </div>

                  <div className="flex w-full py-2">
                    <div className="w-1/3 lg:w-4/12 items-center flex">
                      <div className="flex text-sm lg:text-base bg-slate-200 w-28 py-3"></div>
                    </div>

                    <div className="w-2/3 lg:w-8/12 flex flex-col">
                      <input className="w-full rounded-sm px-2 py-1 lg:py-2 bg-slate-200" />
                    </div>
                  </div>

                  <div className="flex w-full py-2">
                    <div className="w-1/3 lg:w-4/12 items-center flex">
                      <span className="flex text-sm lg:text-base"></span>
                    </div>

                    <div className="flex flex-col w-2/3 lg:w-8/12 py-2 md:py-3">
                      <div className="flex w-full">
                        <div className="w-full">
                          <div className="bg-slate-200 py-3 flex w-20"></div>
                        </div>
                        <div className="w-full">
                          <div className="bg-slate-200 py-3 flex w-20"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full flex justify-center py-5 cursor-pointer">
                    <button
                      type="submit"
                      className="w-40 h-10 flex bg-slate-200 rounded-sm"
                    ></button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/3 flex flex-wrap lg:flex-col px-4 lg:border-l lg:my-5 border-gray-300 py-5 lg:py-0">
            <div className="w-full flex flex-wrap lg:flex-col border-t lg:border-t-0 pt-5 lg:pt-0">
              <div className="w-20 flex bg-slate-200 lg:text-lg py-5"></div>
              <div className="w-full flex lg:flex-col">
                <div className="w-full flex py-2">
                  <div className="w-full flex bg-slate-200">
                    <div className="flex items-center"></div>
                    <div className="w-full text-sm whitespace-nowrap mx-1 flex items-center mt-1 lg:text-base"></div>
                  </div>

                  <div className="w-full flex justify-end cursor-pointer">
                    <div className="border-2 w-20 h-8 flex justify-center rounded-md bg-slate-200"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoadingSkeletonPersonInfo
