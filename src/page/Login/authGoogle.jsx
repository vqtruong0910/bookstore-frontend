import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading";
import axiosConfig from "../../config/axiosConfig";
import { API } from "../../constants/api";

function AccuracyGoogle() {
    const [searchParams] = useSearchParams();
    useEffect(() => {
        const paramURL = {};
        searchParams.forEach((value, key) => {
            paramURL[key] = value;
        })
        axiosConfig.get(API.AUTH_CALLBACK_GOOGLE, { params: paramURL })
            .then((res) => {
                localStorage.setItem('auth-user', res.data);
                window.close();
            })
            .catch((err) => {
                console.log("Failed", err.response);
                // Khi failed
            })
    }, []);
    return (
        <Loading center={true} />
    );
}

export default AccuracyGoogle;