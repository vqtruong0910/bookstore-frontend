import { Suspense } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function DefaultLayout() {
  return (
    <>
      <Header />
      <div className="w-full rounded-sm block mt-56 lg:mt-0 mx-auto">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  )
}

export default DefaultLayout
