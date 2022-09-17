import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Textfield from "../../components/Textfield";
import { PATH } from "../../constants/path";

function Login() {
    return (
        <div className="w-screen h-screen bg-slate-50">
            <div className="w-400 mx-auto">
                <h1 className="text-center font-lobster text-slate-700 font-bold text-5xl pt-12 pb-5 select-none">Book Store</h1>
                <div className="flex flex-col rounded-lg bg-white shadow-xl border">
                    <h3 className="text-center p-5 text-lg font-normal">Đăng nhập BOOKSTORE</h3>
                    <Textfield type="email" marginX="mx-4" placeholder="Email" />
                    <Textfield type="password" marginX="mx-4" marginT="mt-4" marginB="mb-2" placeholder="Mật khẩu" />
                    <Button marginY="my-2" marginX="mx-4">Đăng nhập</Button>
                    <div className="text-center text-base p-2 mb-4">
                        <Link to={PATH.forgotpassword} className="text-slate-700 hover:underline">Quên mật khẩu?</Link>
                        <span> · </span>
                        <Link to={PATH.register} className="text-slate-700 hover:underline">Đăng ký Bookstore</Link>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default Login;