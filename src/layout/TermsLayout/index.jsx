import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../../components/Loading'

function TermsLayout() {
  return (
    <div className="w-full pb-8">
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default TermsLayout
