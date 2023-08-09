function LoadingSkeletonCard({}) {
  return (
    <div className="w-full hover:cursor-pointer hover:drop-shadow-xl px-4 transition">
      <div className="flex w-full justify-center mb-4 cursor-pointer">
        <div className="w-full h-[300px] bg-slate-200"></div>
      </div>

      <div className="flex bg-slate-200 py-3 transition rounded-lg items-center justify-center">
        <div className="w-5 h-5"></div>
        <span className=""></span>
      </div>
    </div>
  )
}

export default LoadingSkeletonCard
