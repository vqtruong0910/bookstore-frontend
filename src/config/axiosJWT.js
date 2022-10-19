import axios from "axios";
import jwtDecode from "jwt-decode";
import { API } from "../constants/api";
import axiosConfig from "./axiosConfig";

const axiosJWT = axios.create({
    baseURL: process.env.REACT_APP_API_URI,
    headers: {
        'Content-Type': 'application/json'
    }
})

const refeshToken = async () => {
    try {
        const res = await axiosConfig.post(API.REFESHTOKEN, { withCredentials: true });
        return res.data;
    } catch (error) {
        console.log(error);
    }
}

axiosJWT.interceptors.request.use(config => {
    let token;
    try {
        token = JSON.parse(localStorage.getItem("auth-user"));
    } catch (error) {
        token = false;
    }
    const date = new Date();
    const decodedToken = jwtDecode(token?.AccessToken);
    if (decodedToken.exp < date.getTime() / 1000 || !token) {
        const newToken = refeshToken();
        console.log(newToken);
        config.headers.Authorization = `Bearer ${token?.AccessToken}`;
    }
    return config;
}, function (error) {
    return Promise.reject(error);
});

export default axiosJWT;
