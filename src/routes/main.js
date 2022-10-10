import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useCallback } from 'react';
import { PATH } from '../constants/path';
import Loading from '../components/Loading';

// Phần Main
const DefaultLayout = lazy(() => import('../layout/DefaultLayout'));
const Main = lazy(() => import('../page/Main'));
const DetailProduct = lazy(() => import('../page/DetailProduct'));
const NotFound = lazy(() => import('../page/NotFound'));

// Phần Auth
const AuthLayout = lazy(() => import('../layout/AuthLayout'));
const Login = lazy(() => import('../page/Login'));
const Register = lazy(() => import('../page/Register'));
const ForgotPassword = lazy(() => import('../page/Forgotpassword'));
const AccuracyGoogle = lazy(() => import('../page/Login/authGoogle'));
const AccuracyFaceBook = lazy(() => import('../page/Login/authFaceBook'));

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
            <Route element={<Suspense fallback={<Loading center={true} />}><DefaultLayout /></Suspense>}>
                <Route path={PATH.main} element={<Main />}></Route>
                <Route path={PATH.detail_book} element={<DetailProduct />} ></Route>
                <Route path={PATH.cart} element></Route>
                <Route path={PATH.notfound} element={<NotFound />}></Route>
            </Route>

            <Route path={PATH.login} element={DefaultLayoutAuth(Login)}></Route>
            <Route path={PATH.forgotpassword} element={DefaultLayoutAuth(ForgotPassword)}></Route>
            <Route path={PATH.register} element={DefaultLayoutAuth(Register)}></Route>
            <Route path={PATH.login_google} element={<Suspense fallback={<Loading center={true} />}><AccuracyGoogle /></Suspense>} />
            <Route path={PATH.login_facebook} element={<Suspense fallback={<Loading center={true} />}><AccuracyFaceBook /></Suspense>} />

            <Route element={<Suspense fallback={<Loading center={true} />}><AdminLayout /></Suspense>}>
                <Route path={PATH.admin.dashboard} element={<Dashboard />} />
                <Route path={PATH.admin.product_management} element={<ProductManagement />} />
                <Route path={PATH.admin.add_product} element={<AddProduct />} />
                <Route path={PATH.admin.user_management} element={<UserManagement />} />
            </Route>
        </Routes>
    );
}

export default MainRoutes;
