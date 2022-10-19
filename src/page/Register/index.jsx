import { useMemo, useState } from "react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Textfield from "../../components/Textfield";
import axiosConfig from "../../config/axiosConfig";
import { API } from "../../constants/api";
import { PATH } from "../../constants/path";
import { VALIDATE } from "../../constants/validate";

function Register() {
    const date = useMemo(() => {
        const today = new Date();
        return today.getFullYear() + '-' + ("0" + (today.getMonth() + 1)).slice(-2) + '-' + ("0" + today.getDate()).slice(-2);
    }, []);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { register, control, handleSubmit, setError, formState: { errors } } = useForm({
        mode: 'onBlur',
        defaultValues: {
            HoTen: "",
            Email: "",
            MatKhau: "",
            NgaySinh: date,
            GioiTinh: "1" // nam là 1 nữ là 0
        }
    });

    const onSubmit = useCallback(async (data) => {
        console.log(data);
        try {
            setLoading(true);
            const result = await axiosConfig.post(API.REGISTER, data);
            const authUser = await result.data;
            if (!authUser.error) {
                axiosConfig.post(API.SENDVERIFYEMAIL, { Email: data.Email }); // gửi xong chuyển liền không đợi hoàn thành chuyển mail rồi mới chuyển trang
                navigate(PATH.verifyemail, { state: { Email: data.Email } });
            }
        } catch (error) {
            const result = error?.response?.data?.message;
            if (result === "0" || result === "Email already use") {
                setError("Email", { type: "custom", message: "Email này đã tồn tại" }, { shouldFocus: true });
            } else {
                window.alert("Đăng ký thất bại!!!");
            }
        } finally {
            setLoading(false);
        }
    }, []);

    return (
        <div className="flex flex-col rounded-lg bg-white shadow-xl border">
            <h2 className="text-center pt-2 text-2xl font-bold">Tạo tài khoản mới</h2>
            <h3 className="text-center pb-2 text-base font-normal text-slate-600">Nhanh chóng và dễ dàng.</h3>
            <hr />
            <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
                <Textfield marginX="mx-4" marginT="mt-4" placeholder="Họ và tên" control={control} name="HoTen" rules={{ required: "Xin nhập vào đầy đủ họ tên" }} />
                <Textfield marginX="mx-4" marginT="mt-4" placeholder="Email" control={control} name="Email" rules={VALIDATE.email} />
                <Textfield type="password" marginX="mx-4" marginT="mt-4" marginB="mb-2" placeholder="Mật khẩu mới" control={control} name="MatKhau" rules={VALIDATE.password} />

                <div className="flex">
                    <div className="basis-1/2 mx-4">
                        <label htmlFor="date" className="pt-2 hover:cursor-pointer block text-xs text-slate-600">Ngày tháng năm sinh</label>
                        <input type="date" name="date" className="p-3 my-2 text-base border rounded-lg transition-colors focus:outline-none block w-full" {...register('NgaySinh', VALIDATE.date)} />
                        {errors['NgaySinh'] && <span className="px-2 italic text-xs text-red-600">{errors['NgaySinh'].message}*</span>}
                    </div>
                    <div className="basis-1/2 mx-4">
                        <label htmlFor="" className="pt-2 hover:cursor-pointer block text-xs text-slate-600">Giới tính</label>
                        <select className="p-3 my-2 border rounded-lg text-base transition-colors focus:outline-none focus:placeholder-slate-300 block w-full" {...register("GioiTinh", VALIDATE.gender)}>
                            <option value="1">Nam</option>
                            <option value="0">Nữ</option>
                        </select>
                        {errors["GioiTinh"] && <span className="px-2 italic text-sm text-red-500">{errors["GioiTinh"].message}*</span>}
                    </div>
                </div>

                <Button marginY="my-2" marginX="mx-4" loading={loading}>Đăng ký</Button>
                <div className="text-center text-base p-2 mb-4">
                    <Link to={PATH.login} className="text-slate-700 hover:underline">Bạn đã có tài khoản ư?</Link>
                </div>
            </form>
        </div>
    );
}

export default Register;