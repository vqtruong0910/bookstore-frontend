import axios from "axios";

const axiosConfig = axios.create({
    baseURL: process.env.REACT_APP_API_URI,
    headers: {
        'Content-Type': 'application/json'
    }
})

export default axiosConfig;
