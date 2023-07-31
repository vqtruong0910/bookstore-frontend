import { Suspense, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Loading from '../../components/Loading'

function TermsLayout() {
  const location = useLocation()

  useEffect(() => {
    const topOfElement = document.querySelector('#scroll') - 500
    window.scroll({ top: topOfElement, behavior: 'smooth' })
  }, [location.pathname])

  return (
    <div className="w-full lg:w-4/5 mx-auto my-10">
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  )
}

export default TermsLayout
