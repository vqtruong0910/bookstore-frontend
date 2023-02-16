import axios from "axios";
import jwtDecode from "jwt-decode";
import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "../constants/api";
import { PATH } from "../constants/path";
import Context from "../store/Context";
import axiosConfig from "./axiosConfig";


const axiosJWT = axios.create({
    baseURL: process.env.REACT_APP_API_URI,
    withCredentials: true,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
})
// luồng gọi chỉ 1 lần
// const useEffectOnce = (effect) => {

//     const destroyFunc = useRef();
//     const effectCalled = useRef(false);
//     const renderAfterCalled = useRef(false);
//     if (effectCalled.current) {
//         renderAfterCalled.current = true;
//     }
//     useEffect(() => {
//         if (!effectCalled.current) {
//             destroyFunc.current = effect();
//             effectCalled.current = true;
//         }

//         return () => {
//             if (!renderAfterCalled.current) { return; }
//             if (destroyFunc.current) { destroyFunc.current(); }
//         };
//     }, []);
// };

const AxiosInterceptor = ({ children }) => {
    const { setUser } = useContext(Context)
    const navigate = useNavigate()

    useEffect(() => {
        const logOut = async () => {
            try {
                await axiosConfig.delete(API.LOGOUT);
            } catch (error) { throw error }
            finally {
                localStorage.removeItem("user")
                localStorage.removeItem("token")
                setUser(false)
                navigate(PATH.login, { replace: true })
            }
        }
        const refreshToken = async () => {
            const res = await axiosConfig.get(API.REFESHTOKEN);
            return res.data
        }
        const reqInterceptor = async (config) => {
            try {
                const date = new Date()
                const decodedToken = jwtDecode(localStorage.getItem("token"))
                if (decodedToken.exp < date.getTime() / 1000) {
                    const newToken = await refreshToken()
                    localStorage.setItem("token", newToken?.data?.accessToken)
                }
            } catch (error) {
                try {
                    const newToken = await refreshToken()
                    localStorage.setItem("token", newToken?.data?.accessToken)
                } catch (error) {
                    logOut()
                }
            }
            config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`
            return config
        }

        const errInterceptorReq = error => {
            return Promise.reject(error)
        }

        const resInterceptor = async (response) => {
            return response.data
        }

        const errInterceptorRes = error => {
            if (error?.response?.data?.message == "Token not found")
                logOut().catch(error => Promise.reject(error))
            return Promise.reject(error)
        }

        const interceptorRequest = axiosJWT.interceptors.request.use(reqInterceptor, errInterceptorReq)
        const interceptorResponse = axiosJWT.interceptors.response.use(resInterceptor, errInterceptorRes)

        return () => {
            axiosJWT.interceptors.request.eject(interceptorRequest)
            axiosJWT.interceptors.response.eject(interceptorResponse)
        }

    }, []);

    return children;
}

export default axiosJWT;
export { AxiosInterceptor };
