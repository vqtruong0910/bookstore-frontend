import { Suspense, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Context from '../../store/Context'

function DefaultLayout() {
  const { darkTheme } = useContext(Context)

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <div className="bg-[#efefef]">
        <Header />
      </div>

      <div
        className={`w-full rounded-sm flex flex-col mx-auto justify-center ${
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
