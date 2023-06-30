import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Menu from '../../components/Menu'

function CategoryLayout() {
  return (
    <div className="flex flex-col md:flex-row md:px-4 md:space-x-4">
      <Menu />

      <div className="w-full px-4 py-10">
        <Suspense>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default CategoryLayout
