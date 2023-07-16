import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../../components/Menu'

const SearchLayout = () => {
  return (
    <div className="flex flex-col md:flex-row md:px-4 md:space-x-4 xl:w-4/5 xl:px-0 mx-auto">
      <Menu />

      <div className="w-full px-4">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default SearchLayout
