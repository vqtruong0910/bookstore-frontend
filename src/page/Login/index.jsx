import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Textfield from "../../components/Textfield";
import { PATH } from "../../constants/path";
import { VALIDATE } from "../../constants/validate";
import { MdFacebook } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { API } from "../../constants/api";
import { useContext } from "react";
import Context from "../../store/Context";
import { useState } from "react";
import axiosConfig from "../../config/axiosConfig";

function Login() {
    const { control, handleSubmit, setError } = useForm({
        mode: 'onBlur',
        defaultValues: {
            Email: "",
            MatKhau: ""
        }
    });
    const [loading, setLoading] = useState(false);
    const { setUser } = useContext(Context);
    const navigate = useNavigate();

    const sendEmailAgain = useCallback(async (Email) => {
        try {
            await axiosConfig.post(API.SENDVERIFYEMAIL, { Email });
            window.alert("Chúng tôi vừa gửi 1 link xác nhận email đến tài khoản email của bạn!");
        } catch (error) {
            window.alert("Gửi mail thất bại bạn hãy thử lại!");
        }
    }, []);

    const onSubmit = useCallback(async (data) => {
        try {
            setLoading(true);
            const result = await axiosConfig.post(API.LOGIN, data);
            const authUser = await result.data;
            const { accessToken, ...user } = authUser.data;
            localStorage.setItem("user", JSON.stringify(user));
            localStorage.setItem("token", accessToken);
            setUser(user);
            navigate(PATH.main, { replace: true });
        } catch (error) {
            const result = error?.response?.data?.message;
            if (result === "0") {
                setError("Email", { type: "custom", message: "Tài khoản không tồn tại" }, { shouldFocus: true });
            } else if (result === "1") {
                setError("MatKhau", { type: "custom", message: "Mật khẩu sai xin nhập lại" }, { shouldFocus: true });
            } else if (result === "2") {
                setError("Email", { type: "custom", message: "Tài khoản của bạn chưa được xác thực email" }, { shouldFocus: true });
                sendEmailAgain(data.Email);
            } else if (result === "3") {
                window.alert("Tài khoản của bạn đã bị khóa/n Vui lòng liên hệ Admin để hiểu rõ thêm.");
            } else {
                window.alert("Đăng nhập thất bại!!!");
            }
        } finally {
            setLoading(false);
        }
    }, []);
    const openAuth = useCallback((URL) => {
        const w = 500;
        const h = 600;
        const y = window.top.outerHeight / 2 + window.top.screenY - (h / 2);
        const x = window.top.outerWidth / 2 + window.top.screenX - (w / 2);
        const openWindow = window.open(process.env.REACT_APP_API_URI + URL, '_blank', `width=${w}, height=${h}, top=${y}, left=${x}`);
        if (openWindow) {
            const timer = setInterval(() => {
                try {
                    const authUser = JSON.parse(localStorage.getItem('user'));
                    if (authUser) {
                        if (timer) clearInterval(timer);
                        setUser(authUser);
                        navigate(PATH.main, { replace: true });
                    }
                } catch (error) {
                    localStorage.removeItem('user');
                }
            }, 500);
        }
    }, []);
    const loginGoogle = useCallback(() => {
        openAuth(API.LOGIN_GOOGLE);
    }, []);
    const loginFaceBook = useCallback(() => {
        openAuth(API.LOGIN_FACEBOOK);
    }, []);

    return (
        <div className="flex flex-col rounded-lg bg-white shadow-xl border">
            <h3 className="text-center p-5 text-lg font-normal">Đăng nhập BOOKSTORE</h3>
            <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
                <Textfield type="text" marginX="mx-4" placeholder="Email" control={control} name="Email" rules={VALIDATE.email} />
                <Textfield type="password" marginX="mx-4" marginT="mt-4" marginB="mb-2" placeholder="Mật khẩu" control={control} name="MatKhau" rules={VALIDATE.password} />
                <Button marginY="my-2" marginX="mx-4" loading={loading}>Đăng nhập</Button>
            </form>
            <span className="text-xs p-5 block text-center text-slate-600 select-none">Hoặc Đăng Nhập Bằng</span>
            <div className="flex justify-center items-center space-x-2 mb-5">
                <div className="cursor-pointer" onClick={loginFaceBook}><MdFacebook size={40} color="blue" /></div>
                <div className="cursor-pointer" onClick={loginGoogle}><FcGoogle size={40} /></div>
            </div>
            <div className="text-center text-base p-2 mb-4">
                <Link to={PATH.forgotpassword} className="text-slate-700 hover:underline">Quên mật khẩu?</Link>
                <span> · </span>
                <Link to={PATH.register} className="text-slate-700 hover:underline">Đăng ký Bookstore</Link>
            </div>
        </div>
    );
}

export default Login;