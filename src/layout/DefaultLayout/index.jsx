import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Loading from "../../components/Loading";

function DefaultLayout() {
    return (
        <>
            <Header />
            <div className="w-full bg-gray-100">
                <Suspense fallback={<Loading />}><Outlet /></Suspense>
            </div>
            <Footer />
        </>
    );
}

export default DefaultLayout;