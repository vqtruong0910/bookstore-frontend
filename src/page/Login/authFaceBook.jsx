import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { API } from "../../constants/api";

function AccuracyFaceBook() {
    const [searchParams] = useSearchParams();
    useEffect(() => {
        const paramURL = {};
        searchParams.forEach((value, key) => {
            paramURL[key] = value;
        })
        axios.get(API.AUTH_CALLBACK_FACEBOOK, { params: paramURL })
            .then((res) => {
                localStorage.setItem('auth-user', res.data);
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