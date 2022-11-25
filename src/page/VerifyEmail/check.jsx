import { useEffect, useState } from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import axiosConfig from "../../config/axiosConfig";
import { API } from "../../constants/api";
import { PATH } from "../../constants/path";

function CheckVerifyEmail() {
    const [searchParams] = useSearchParams();
    const [error, setError] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const token = searchParams.get("token");
        if (token) {
            axiosConfig.post(API.AUTHVERIFYEMAIL, { token })
                .then(res => {
                    if (res.status === 200) setError(false);
                })
                .catch(() => {
                    setError(true);
                })
        } else {
            navigate(PATH.notfound, { replace: true });
        }
    }, []);

    if (error) {
        return (
            <div className="flex flex-col rounded-lg bg-white shadow-xl border">
                <h3 className="text-center p-5 text-lg font-normal text-red-600">Xác thực thất bại</h3>
                <p className="p-4 text-slate-500">Oh no!!! Đã có lỗi khiến tài khoản bạn xác thực không thành công :(((</p>
                <div className="text-center text-base p-2 mb-4">
                    <Link to={PATH.login} className="text-slate-700 hover:underline">Đăng nhập</Link>
                    <span> · </span>
                    <Link to={PATH.register} className="text-slate-700 hover:underline">Đăng ký Bookstore</Link>
                </div>
            </div>
        )
    }
    return (
        <div className="flex flex-col rounded-lg bg-white shadow-xl border">
            <h3 className="text-center p-5 text-lg font-normal text-lime-600">Chúc mừng bạn đã xác thực email thành công!</h3>
            <p className="p-4 text-slate-500">Nhấp vào link đăng nhập ở phía dưới để trải nghiệm tủ sách của chúng mình nhé :3</p>
            <div className="text-center text-base p-2 mb-4">
                <Link to={PATH.login} className="text-slate-700 hover:underline">Đăng nhập</Link>
                <span> · </span>
                <Link to={PATH.register} className="text-slate-700 hover:underline">Đăng ký Bookstore</Link>
            </div>
        </div>
    );
}

export default CheckVerifyEmail;
