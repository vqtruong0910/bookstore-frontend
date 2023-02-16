import axios from "axios";

const axiosConfig = axios.create({
    baseURL: process.env.REACT_APP_API_URI,
    withCredentials: true,
    headers: {
        'Origin': 'https://bookstore-self.vercel.app',
        'Content-Type': 'application/json'
    }
})

export default axiosConfig;
