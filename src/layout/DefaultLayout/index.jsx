import { Suspense, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Context from '../../store/Context'

function DefaultLayout() {
  const { darkTheme } = useContext(Context)

  return (
    <>
      <Header />
      <div
        className={`w-full rounded-sm block mx-auto my-10 ${
          darkTheme ? 'bg-black/70' : 'bg-white'
        }`}
      >
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
      <Footer />
    </>
  )
}

export default DefaultLayout
