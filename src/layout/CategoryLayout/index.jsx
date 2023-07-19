import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../../components/Menu'

function CategoryLayout() {
  return (
    <div className="flex w-full flex-col md:flex-row md:px-4 md:space-x-4 xl:w-4/5 xl:px-0 mx-auto">
      <Menu />

      <div className="w-full py-10 px-4 md:px-0">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default CategoryLayout
