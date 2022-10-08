import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useCallback } from 'react';
import { PATH } from '../constants/path';
import Loading from '../components/Loading';

// Phần Main
const DefaultLayout = lazy(() => import('../layout/DefaultLayout'));
const Main = lazy(() => import('../page/Main'));
const NotFound = lazy(() => import('../page/NotFound'));

// Phần Auth
const AuthLayout = lazy(() => import('../layout/AuthLayout'));
const Login = lazy(() => import('../page/Login'));
const Register = lazy(() => import('../page/Register'));
const ForgotPassword = lazy(() => import('../page/Forgotpassword'));

// Phần Admin
const AdminLayout = lazy(() => import('../layout/AdminLayout'));
const Dashboard = lazy(() => import('../page/Admin/Dashboard'));
const ProductManagement = lazy(() => import('../page/Admin/ProductManagement'));
const AddProduct = lazy(() => import('../page/Admin/AddProduct'));
const UserManagement = lazy(() => import('../page/Admin/UserManagement'));


function MainRoutes() {
    const DefaultLayoutAuth = useCallback((Container) => <Suspense fallback={<Loading center={true} />}><AuthLayout><Container /></AuthLayout></Suspense>, [])
    return (

        <Routes>
            <Route path={PATH.main} element={<Suspense fallback={<Loading center={true} />}><DefaultLayout /></Suspense>}>
                <Route path={PATH.main} element={<Main />}></Route>
                <Route path={PATH.cart} element></Route>
                <Route path={PATH.notfound} element={<NotFound />}></Route>
            </Route>

            <Route path={PATH.login} element={DefaultLayoutAuth(Login)}></Route>
            <Route path={PATH.forgotpassword} element={DefaultLayoutAuth(ForgotPassword)}></Route>
            <Route path={PATH.register} element={DefaultLayoutAuth(Register)}></Route>

            <Route path={PATH.admin.dashboard} element={<Suspense fallback={<Loading center={true} />}><AdminLayout /></Suspense>}>
                <Route index element={<Dashboard />} />
                <Route path={PATH.admin.product_management} element={<ProductManagement />} />
                <Route path={PATH.admin.add_product} element={<AddProduct />} />
                <Route path={PATH.admin.user_management} element={<UserManagement />} />
            </Route>
        </Routes>

    );
}

export default MainRoutes;
