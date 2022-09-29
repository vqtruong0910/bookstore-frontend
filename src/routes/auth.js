import { lazy, Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "../components/Loading";
import { PATH } from "../constants/path";

const AuthLayout = lazy(() => import('../layout/AuthLayout'));
const Login = lazy(() => import('../page/Login'));
const Register = lazy(() => import('../page/Register'));
const ForgotPassword = lazy(() => import('../page/Forgotpassword'));

function AuthRoutes() {
    const DefaultLayoutAuth = useCallback((Container) => <Suspense fallback={<Loading />}><AuthLayout><Container /></AuthLayout></Suspense>, [])
    return (
        <Routes>
            <Route path={PATH.login} element={DefaultLayoutAuth(Login)}></Route>
            <Route path={PATH.forgotpassword} element={DefaultLayoutAuth(ForgotPassword)}></Route>
            <Route path={PATH.register} element={DefaultLayoutAuth(Register)}></Route>
        </Routes>
    );
}

export default AuthRoutes;
