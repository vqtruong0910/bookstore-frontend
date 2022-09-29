import { Suspense } from "react";
import { Link } from "react-router-dom";
import Loading from "../../components/Loading";
import { PATH } from "../../constants/path";

function AuthLayout({ children }) {
    return (
        <div className="flex justify-center h-screen bg-slate-50">
            <div className="basis-400 sm:w-400">
                <Link to={PATH.main} className="block text-center font-lobster text-slate-700 font-bold text-5xl pt-12 pb-5 select-none">Book Store</Link>
                <div className="flex flex-col rounded-lg bg-white shadow-xl border">
                    <Suspense fallback={<Loading />}>{children}</Suspense>
                </div>
            </div>
        </div >
    );
}

export default AuthLayout;