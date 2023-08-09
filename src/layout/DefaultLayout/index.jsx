import { Suspense, useContext, useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Context from '../../store/Context'

function DefaultLayout() {
  const { darkTheme } = useContext(Context)
  const { pathname } = useLocation()

  useEffect(() => {
    try {
      window.scroll({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    } catch (error) {
      window.scrollTo(0, 0)
    }
  }, [pathname])

  return (
    <div className="layout flex flex-col min-h-screen justify-between">
      <div className="bg-[#efefef]">
        <Header />
      </div>

      <div
        className={`w-full mt-[120px] lg:mt-[138px] rounded-sm flex flex-col mx-auto justify-center min-h-[500px] ${
          darkTheme ? 'bg-black/70' : 'bg-white'
        }`}
      >
        <Suspense>
          <Outlet />
        </Suspense>
      </div>

      <div className="flex flex-1">
        <Footer />
      </div>
    </div>
  )
}

export default DefaultLayout
