import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Loading from "../../components/Loading";

function AccuracyFaceBook() {
    const [searchParams] = useSearchParams();
    useEffect(() => {

    }, []);
    return (
        <Loading center="true" />
    );
}

export default AccuracyFaceBook;