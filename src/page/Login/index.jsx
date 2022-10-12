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
import jwtDecode from "jwt-decode";
import { useContext } from "react";
import Context from "../../store/Context";
import axios from "axios";
import { useState } from "react";

function Login() {
    const navigate = useNavigate();
    const { control, handleSubmit } = useForm({ mode: 'onBlur' });
    const [loading, setLoading] = useState(false);
    const { setUser } = useContext(Context);

    const onSubmit = useCallback(async (data) => {
        try {
            setLoading(true);
            const result = await axios.post(API.LOGIN, data);
            const user = await result.data;
            // setUser(user);
            navigate(PATH.main);
            console.log(user);
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    }, []);
    const Config = useCallback((URL) => {
        const w = 500;
        const h = 600;
        const y = window.top.outerHeight / 2 + window.top.screenY - (h / 2);
        const x = window.top.outerWidth / 2 + window.top.screenX - (w / 2);
        const openWindow = window.open(URL, '_blank', `width=${w}, height=${h}, top=${y}, left=${x}`);
        if (openWindow) {
            const timer = setInterval(() => {
                if (openWindow.closed) {
                    if (timer) clearInterval(timer);
                    const token = localStorage.getItem('token');
                    if (token) {
                        try {
                            const decoded = jwtDecode(token);
                            setUser(decoded);
                            navigate(PATH.main);
                        } catch (error) {
                            localStorage.removeItem('token');
                            navigate(PATH.login);
                        }
                    }
                }
            }, 500);
        }
    }, [])
    const loginGoogle = useCallback(() => {
        Config(API.LOGIN_GOOGLE);
    }, []);
    const loginFaceBook = useCallback(() => {
        Config(API.LOGIN_FACEBOOK);
    }, [])

    return (
        <>
            <h3 className="text-center p-5 text-lg font-normal">Đăng nhập BOOKSTORE</h3>
            <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
                <Textfield type="text" marginX="mx-4" placeholder="Email" control={control} name="email" rules={VALIDATE.email} />
                <Textfield type="password" marginX="mx-4" marginT="mt-4" marginB="mb-2" placeholder="Mật khẩu" control={control} name="password" rules={VALIDATE.password} />
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
        </>
    );
}

export default Login;