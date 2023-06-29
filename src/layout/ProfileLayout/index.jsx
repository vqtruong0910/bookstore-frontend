import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../../components/Loading'
import MenuUser from '../../components/MenuUser'

function ProfileLayout() {
  return (
    <div className="flex md:pb-0 md:px-4 md:space-x-4">
      <div className="hidden md:block h-full">
        <MenuUser />
      </div>

      <div className="w-full">
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  )
}

export default ProfileLayout
