import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Loading from "../../components/Loading";
import Menu from "../../components/Menu";

function CategoryLayout() {
    return (
        <div className="flex bg-gray-100 md:px-4 md:space-x-4">
                <Menu />

            <div className="w-full hidden">
                <Suspense fallback={<Loading />}><Outlet /></Suspense>
            </div>


        </div>
    )
}

export default CategoryLayout;