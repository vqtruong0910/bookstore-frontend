import { useMemo } from "react";
import { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Textfield from "../../components/Textfield";
import { PATH } from "../../constants/path";
import { VALIDATE } from "../../constants/validate";

function Register() {
    const date = useMemo(() => {
        const today = new Date();
        return today.getFullYear() + '-' + ("0" + (today.getMonth() + 1)).slice(-2) + '-' + ("0" + today.getDate()).slice(-2);
    }, []);
    const { register, control, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            date: date
        },
        mode: 'onBlur'
    });
    const onSubmit = useCallback((data) => {
        console.log(data);
    }, []);

    return (
        <>
            <h2 className="text-center pt-2 text-2xl font-bold">Tạo tài khoản mới</h2>
            <h3 className="text-center pb-2 text-base font-normal text-slate-600">Nhanh chóng và dễ dàng.</h3>
            <hr />
            <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
                <Textfield marginX="mx-4" marginT="mt-4" placeholder="Họ và tên" control={control} name="fullname" rules={{ required: "Xin nhập vào đầy đủ họ tên" }} />
                <Textfield type="email" marginX="mx-4" marginT="mt-4" placeholder="Email" control={control} name="email" rules={VALIDATE.email} />
                <Textfield type="password" marginX="mx-4" marginT="mt-4" marginB="mb-2" placeholder="Mật khẩu mới" control={control} name="password" rules={VALIDATE.password} />

                <div className="flex">
                    <div className="basis-1/2 mx-4">
                        <label htmlFor="date" className="pt-2 hover:cursor-pointer block text-xs text-slate-600">Ngày tháng năm sinh</label>
                        <input type="date" name="date" className="p-3 my-2 text-base border rounded-lg transition-colors focus:outline-none block w-full" {...register('date', VALIDATE.date)} />
                        {errors["date"] && <span className="px-2 italic text-xs text-red-600">{errors.message}*</span>}
                    </div>
                    <div className="basis-1/2 mx-4">
                        <label htmlFor="" className="pt-2 hover:cursor-pointer block text-xs text-slate-600">Giới tính</label>
                        <select className="p-3 my-2 border rounded-lg text-base transition-colors focus:outline-none focus:placeholder-slate-300 block w-full" {...register("gender", VALIDATE.gender)}>
                            <option selected value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </select>
                        {errors["gender"] && <span className="px-2 italic text-sm text-red-500">{errors.message}*</span>}
                    </div>
                </div>

                <Button marginY="my-2" marginX="mx-4">Đăng ký</Button>
                <div className="text-center text-base p-2 mb-4">
                    <Link to={PATH.login} className="text-slate-700 hover:underline">Bạn đã có tài khoản ư?</Link>
                </div>
            </form>
        </>
    );
}

export default Register;