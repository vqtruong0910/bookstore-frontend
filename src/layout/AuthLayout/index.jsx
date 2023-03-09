import { useContext } from 'react'
import { Suspense } from 'react'
import { Link, Navigate } from 'react-router-dom'
import Loading from '../../components/Loading'
import { PATH } from '../../constants/path'
import Context from '../../store/Context'

function AuthLayout({ children }) {
  const { user } = useContext(Context)
  return (
    <>
      <div className="flex justify-center h-screen bg-slate-50">
        <div className="basis-400 sm:w-400">
          <div className="text-center pt-12 pb-5">
            <Link
              to={PATH.main}
              className="font-lobster text-slate-700 font-bold text-5xl select-none"
            >
              Book Store
            </Link>
          </div>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </div>
      </div>
      {user && <Navigate replace to={PATH.main} />}
    </>
  )
}

export default AuthLayout
