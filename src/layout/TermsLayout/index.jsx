import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../../components/Loading'

function TermsLayout() {
  return (
    <div className="w-full lg:w-4/5 mx-auto my-10">
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default TermsLayout
