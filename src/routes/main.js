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
    const DefaultLayoutRouter = useCallback(Container => <DefaultLayout><Container /></DefaultLayout>, [])
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path={PATH.main} element={DefaultLayoutRouter(Main)}></Route>
                <Route path={PATH.cart} element></Route>
                <Route path={PATH.login} element={<Login />}></Route>
                <Route path={PATH.register} element={<Register />}></Route>
                <Route path={PATH.forgotpassword} element={<ForgotPassword />}></Route>
                <Route path={PATH.notfound} element={DefaultLayoutRouter(NotFound)}></Route>
            </Routes>
        </Suspense>
    );
}

export default MainRoutes;