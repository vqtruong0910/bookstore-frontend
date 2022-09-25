import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useCallback } from 'react';
import { PATH } from '../constants/path';

const AdminLayout = lazy(() => import('../layout/AdminLayout'));
const AuthLayout = lazy(() => import('../layout/AuthLayout'));
const DefaultLayout = lazy(() => import('../layout/DefaultLayout'));
const Main = lazy(() => import('../page/Main'));
const NotFound = lazy(() => import('../page/NotFound'));
const Login = lazy(() => import('../page/Login'));
const Register = lazy(() => import('../page/Register'));
const ForgotPassword = lazy(() => import('../page/Forgotpassword'));
const Dashboard = lazy(() => import('../page/Admin/Dashboard'));

function MainRoutes() {
    const DefaultLayoutRouter = useCallback(Container => <DefaultLayout><Container /></DefaultLayout>, [])
    const DefaultLayoutAuth = useCallback(Container => <AuthLayout><Container /></AuthLayout>, [])
    return (
        <Suspense fallback={<></>}>
            <Routes>
                <Route path={PATH.main} element={DefaultLayoutRouter(Main)}></Route>
                <Route path={PATH.cart} element></Route>
                <Route path={PATH.admin} element={<AdminLayout />}>
                    <Route index element={<Dashboard />} />
                </Route>
                <Route path={PATH.login} element={DefaultLayoutAuth(Login)}></Route>
                <Route path={PATH.register} element={DefaultLayoutAuth(Register)}></Route>
                <Route path={PATH.forgotpassword} element={DefaultLayoutAuth(ForgotPassword)}></Route>
                <Route path={PATH.notfound} element={DefaultLayoutRouter(NotFound)}></Route>
            </Routes>
        </Suspense>
    );
}

export default MainRoutes;
