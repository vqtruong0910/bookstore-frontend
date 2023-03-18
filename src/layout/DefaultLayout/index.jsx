import { Suspense } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function DefaultLayout() {
  return (
    <>
      <Header />
      <div className="w-full rounded-sm block mt-40 lg:mt-8 mx-auto">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  )
}

export default DefaultLayout
