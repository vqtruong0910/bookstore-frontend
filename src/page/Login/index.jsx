import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Textfield from "../../components/Textfield";
import { PATH } from "../../constants/path";
import { VALIDATE } from "../../constants/validate";
import { BsFacebook, BsGoogle } from "react-icons/bs";

function Login() {
    const { control, handleSubmit } = useForm({ mode: 'onBlur' });
    const onSubmit = useCallback((data) => {
        console.log(data);
    }, []);

    return (
        <>
            <h3 className="text-center p-5 text-lg font-normal">Đăng nhập BOOKSTORE</h3>
            <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
                <Textfield type="text" marginX="mx-4" placeholder="Email" control={control} name="email" rules={VALIDATE.email} />
                <Textfield type="password" marginX="mx-4" marginT="mt-4" marginB="mb-2" placeholder="Mật khẩu" control={control} name="password" rules={VALIDATE.password} />
                <Button marginY="my-2" marginX="mx-4">Đăng nhập</Button>
            </form>
            <span className="text-xs p-5 block text-center text-slate-600">Hoặc Đăng Nhập Bằng</span>
            <div className="flex justify-center items-center space-x-4 mb-5">
                <div className="cursor-pointer"><BsFacebook size={30} color="blue" /></div>
                <div className="cursor-pointer"><BsGoogle size={30} color="red" /></div>
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