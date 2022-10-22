import { useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import Button from "../../components/Button";
import Textfield from "../../components/Textfield";
import axiosConfig from "../../config/axiosConfig";
import { API } from "../../constants/api";
import { PATH } from "../../constants/path";
import { VALIDATE } from "../../constants/validate";

function ChangePassword() {
    const [loading, setLoading] = useState(false);
    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const EmailVerify = useMemo(() => {
        const email = searchParams.get("email");
        return email ? email : "";
    }, [searchParams]);
    const { control, watch, handleSubmit } = useForm({
        mode: 'onBlur',
        defaultValues: {
            Email: EmailVerify,
            Password: "",
            newPassword: ""
        }
    });

    const onSubmit = useCallback(async (data) => {
        try {
            setLoading(true);
            const resetPasswordToken = searchParams.get("token");
            const { newPassword } = data;
            const res = await axiosConfig.post(API.RESETPASSWORD, { newPassword, resetPasswordToken });
            const result = await res.data;
            if (result) {
                navigate(PATH.login, { replace: true });
            }
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false)
        }
    }, [searchParams]);

    if (!searchParams.get("token") && !searchParams.get("email")) {
        return (
            <Navigate replace to={PATH.forgotpassword} />
        )
    }

    return (
        <div className="flex flex-col rounded-lg bg-white shadow-xl border">
            <h3 className="text-center p-5 text-lg font-normal">Nhập lại mật khẩu mới</h3>
            <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
                <Textfield marginX="mx-4" placeholder="Email" disabled control={control} name="Email" rules={VALIDATE.email} />
                <Textfield type="password" marginX="mx-4" marginT="mt-4" marginB="mb-2" placeholder="Mật khẩu" control={control} name="Password" rules={VALIDATE.password} />
                <Textfield type="password" marginX="mx-4" marginT="mt-4" marginB="mb-2" placeholder="Nhập lại mật khẩu" control={control} name="newPassword" rules={VALIDATE.confirmPassword("Password", watch)} />
                <Button marginY="my-2" marginX="mx-4" loading={loading}>Xác nhận</Button>
            </form>
            <div className="text-center text-base p-2 mb-4">
                <Link to={PATH.login} className="text-slate-700 hover:underline">Đăng nhập</Link>
                <span> · </span>
                <Link to={PATH.register} className="text-slate-700 hover:underline">Đăng ký Bookstore</Link>
            </div>
        </div>
    );
}

export default ChangePassword;