import axios from "axios";

const axiosConfig = axios.create({
    baseURL: process.env.REACT_APP_API_URI,
    withCredentials: true,
    credentials: 'same-origin',
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
    }
})

export default axiosConfig;
