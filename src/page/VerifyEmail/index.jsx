import { Link, Navigate, useLocation } from "react-router-dom";
import { PATH } from "../../constants/path";

function VerifyEmail() {
    const location = useLocation();

    if (!location?.state?.Email) {
        return (
            <Navigate replace to={PATH.notfound} />
        )
    }

    return (
        <div className="flex flex-col rounded-lg bg-white shadow-xl border">
            <h3 className="text-center p-5 text-lg font-normal text-lime-600">Chúc mừng bạn đã đăng ký thành công!</h3>
            <p className="p-4 text-slate-500">Trước khi trải nghiệm cửa hàng sách của chúng tôi bạn cần phải vào email trước đó đăng ký để xác minh nhé :3</p>
            <div className="text-center text-base p-2 mb-4">
                <Link to={PATH.login} className="text-slate-700 hover:underline">Đăng nhập</Link>
                <span> · </span>
                <Link to={PATH.register} className="text-slate-700 hover:underline">Đăng ký Bookstore</Link>
            </div>
        </div>
    );
}

export default VerifyEmail;