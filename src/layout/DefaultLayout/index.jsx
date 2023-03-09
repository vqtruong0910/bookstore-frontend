import { Suspense } from 'react'
import { Outlet, useParams } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

function DefaultLayout() {
  return (
    <>
      <Header />
      <div className="w-full bg-gray-100">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  )
}

export default DefaultLayout
