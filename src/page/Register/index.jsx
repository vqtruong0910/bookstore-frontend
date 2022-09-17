import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Textfield from "../../components/Textfield";
import { PATH } from "../../constants/path";

function Register() {
    return (
        <div className="w-screen h-screen bg-slate-50">
            <div className="w-400 mx-auto">
                <h1 className="text-center font-lobster text-slate-700 font-bold text-5xl pt-12 pb-5 select-none">Book Store</h1>
                <div className="flex flex-col rounded-lg bg-white shadow-xl border">
                    <h2 className="text-center pt-2 text-2xl font-bold">Tạo tài khoản mới</h2>
                    <h3 className="text-center pb-2 text-base font-normal text-slate-600">Nhanh chóng và dễ dàng.</h3>
                    <hr />
                    <Textfield marginX="mx-4" marginT="mt-4" placeholder="Họ và tên" />
                    <Textfield type="email" marginX="mx-4" marginT="mt-4" placeholder="Email" />
                    <Textfield type="password" marginX="mx-4" marginT="mt-4" marginB="mb-2" placeholder="Mật khẩu mới" />

                    <div className="flex">
                        <div className="basis-1/2 mx-4">
                            <label htmlFor="date" className="pt-2 hover:cursor-pointer block text-xs text-slate-600">Ngày tháng năm sinh</label>
                            <input type="date" name="date" className="p-3 my-2 text-base border rounded-lg transition-colors focus:outline-none block w-full" />
                        </div>
                        <div className="basis-1/2 mx-4">
                            <label htmlFor="" className="pt-2 hover:cursor-pointer block text-xs text-slate-600">Giới tính</label>
                            <select className="p-3 my-2 border rounded-lg text-base transition-colors focus:outline-none focus:placeholder-slate-300 block w-full">
                                <option className="" selected value="Nam">Nam</option>
                                <option value="Nữ">Nữ</option>
                            </select>
                        </div>
                    </div>

                    <Button marginY="my-2" marginX="mx-4">Đăng ký</Button>
                    <div className="text-center text-base p-2 mb-4">
                        <Link to={PATH.login} className="text-slate-700 hover:underline">Bạn đã có tài khoản ư?</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;