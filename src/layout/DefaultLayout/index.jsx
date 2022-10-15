import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loading from "../../components/Loading";

function DefaultLayout() {
    return (
        <>
            <Header />
            <Suspense fallback={<Loading />}><Outlet /></Suspense>
            <Footer />
        </>
    );
}

export default DefaultLayout;