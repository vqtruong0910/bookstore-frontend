import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { API } from "../../constants/api";

function AccuracyGoogle() {
    const [searchParams] = useSearchParams();
    useEffect(() => {
        const paramURL = {};
        searchParams.forEach((value, key) => {
            paramURL[key] = value;
        })
        axios.get(API.AUTH_CALLBACK_GOOGLE, { params: paramURL })
            .then((res) => {
                console.log(res.data);
                window.close();
            })
            .catch((err) => {
                console.log("Failed", err);
            })
    }, []);
    return (
        <Loading center={true} />
    );
}

export default AccuracyGoogle;