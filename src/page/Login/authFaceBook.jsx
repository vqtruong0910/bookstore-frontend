import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading";
import axiosConfig from "../../config/axiosConfig";
import { API } from "../../constants/api";

function AccuracyFaceBook() {
    const [searchParams] = useSearchParams();
    useEffect(() => {
        const paramURL = {};
        searchParams.forEach((value, key) => {
            paramURL[key] = value;
        })
        axiosConfig.get(API.AUTH_CALLBACK_FACEBOOK, { params: paramURL })
            .then((res) => {
                const { accessToken, ...user } = res.data.data;
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', accessToken);
                window.close();
            })
            .catch((err) => {
                console.log("Failed", err.response);
            })
    }, []);
    return (
        <Loading center="true" />
    );
}

export default AccuracyFaceBook;