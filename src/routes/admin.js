import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { PATH } from "../constants/path";

const AdminLayout = lazy(() => import('../layout/AdminLayout'));
const Dashboard = lazy(() => import('../page/Admin/Dashboard'));
const ProductManagement = lazy(() => import('../page/Admin/ProductManagement'));

function AdminRoutes() {
    return (
        <Routes>
            <Route path={PATH.admin.dashboard} element={<AdminLayout />}>
                <Route index element={<Suspense fallback={<></>}><Dashboard /></Suspense>} />
                <Route path={PATH.admin.product_management} element={<Suspense fallback={<></>}><ProductManagement /></Suspense>} />
            </Route>
        </Routes>
    );
}

export default AdminRoutes;