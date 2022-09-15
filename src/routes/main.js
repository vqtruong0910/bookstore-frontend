import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useCallback } from 'react';
import { PATH } from '../constants/path';

const DefaultLayout = lazy(() => import('../layout/DefaultLayout'))
const Main = lazy(() => import('../page/Main'));
const NotFound = lazy(() => import('../page/NotFound'));
const Login = lazy(() => import('../page/Login'));
const Register = lazy(() => import('../page/Register'));
const ForgotPassword = lazy(() => import('../page/Forgotpassword'));

function MainRoutes() {
    const defaultLayoutMain = useCallback(() => <DefaultLayout><Main /></DefaultLayout>, [])
    const defaultLayoutNotFound = useCallback(() => <DefaultLayout><NotFound /></DefaultLayout>, [])
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route index path={PATH.main} element={defaultLayoutMain()}></Route>
                <Route path={PATH.login} element={<Login />}></Route>
                <Route path={PATH.register} element={<Register />}></Route>
                <Route path={PATH.forgotpassword} element={<ForgotPassword />}></Route>
                <Route path={PATH.notfound} element={defaultLayoutNotFound()}></Route>
            </Routes>
        </Suspense>
    );
}

export default MainRoutes;