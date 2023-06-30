import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../../components/Loading'
import MenuUser from '../../components/MenuUser'

function ProfileLayout() {
  return (
    <div className="flex my-10 w-full justify-center">
      <div className="flex w-full px-4 lg:px-0 lg:w-4/5 gap-10">
        <div className="hidden md:block h-full">
          <MenuUser />
        </div>

        <div className="w-full">
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default ProfileLayout
