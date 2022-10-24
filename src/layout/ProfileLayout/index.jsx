import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import Loading from "../../components/Loading"
import MenuUser from "../../components/MenuUser"

function ProfileLayout() {
    return (
        <div className="flex bg-gray-100 md:px-4 md:space-x-4">
            <div className="hidden md:block">
                <MenuUser />
            </div>

            <div className="w-full">
                <Suspense fallback={<Loading />}><Outlet /></Suspense>
            </div>


        </div>

    )

}

export default ProfileLayout
