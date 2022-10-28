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
        'Content-Type': 'application/json'
    }
})
// luồng gọi chỉ 1 lần
const useEffectOnce = (effect) => {

    const destroyFunc = useRef();
    const effectCalled = useRef(false);
    const renderAfterCalled = useRef(false);
    if (effectCalled.current) {
        renderAfterCalled.current = true;
    }
    useEffect(() => {
        if (!effectCalled.current) {
            destroyFunc.current = effect();
            effectCalled.current = true;
        }

        return () => {
            if (!renderAfterCalled.current) { return; }
            if (destroyFunc.current) { destroyFunc.current(); }
        };
    }, []);
};

const AxiosInterceptor = ({ children }) => {
    const { setUser } = useContext(Context);
    const navigate = useNavigate();


    useEffect(() => {
        const logOut = async () => {
            try {
                await axiosConfig.delete(API.LOGOUT);
            } catch (error) { }
            finally {
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                setUser(false);
                navigate(PATH.login, { replace: true });
            }
        }
        const refreshToken = async () => {
            try {
                const res = await axiosConfig.get(API.REFESHTOKEN);
                return res.data;
            } catch (error) {
                logOut();
                return false;
            }
        }
        const reqInterceptor = async (config) => {
            const date = new Date();
            const token = localStorage.getItem("token");
            let decodedToken;
            try {
                decodedToken = jwtDecode(token);
            } catch (error) {
                decodedToken = false;
            }
            if (decodedToken.exp < date.getTime() / 1000 || !decodedToken) {
                const newToken = await refreshToken();
                if (newToken) localStorage.setItem("token", newToken?.data?.accessToken);
            }
            config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
            return config;
        }

        const errInterceptorReq = error => {
            return Promise.reject(error);
        }

        const resInterceptor = async (response) => {
            return response.data;
        }

        const errInterceptorRes = error => {
            if (error.response?.status === 400 || error.response?.status === 403 || error.response?.status === 401) {
            }
            return Promise.reject(error);
        }

        const interceptorRequest = axiosJWT.interceptors.request.use(reqInterceptor, errInterceptorReq);
        const interceptorResponse = axiosJWT.interceptors.response.use(resInterceptor, errInterceptorRes);

        return () => {
            axiosJWT.interceptors.request.eject(interceptorRequest);
            axiosJWT.interceptors.response.eject(interceptorResponse);
        }

    }, []);

    return children;
}

export default axiosJWT;
export { AxiosInterceptor, useEffectOnce };
