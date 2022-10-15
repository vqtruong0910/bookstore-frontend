import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Textfield from "../../components/Textfield";
import { PATH } from "../../constants/path";
import { VALIDATE } from "../../constants/validate";

function ChangePassword() {
    const [loading, setLoading] = useState(false);
    const { control, handleSubmit } = useForm({
        mode: 'onBlur',
        defaultValues: {
            Email: ""
        }
    });

    const onSubmit = useCallback(async (data) => {
        console.log(data);
    }, []);

    return (
        <>
            <h3 className="text-center p-5 text-lg font-normal">Nhập lại mật khẩu mới</h3>
            <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
                <Textfield type="text" marginX="mx-4" placeholder="Email" control={control} name="Email" rules={VALIDATE.email} />
                <Textfield type="password" marginX="mx-4" marginT="mt-4" marginB="mb-2" placeholder="Mật khẩu" control={control} name="MatKhauDeXuat" rules={VALIDATE.password} />
                <Textfield type="password" marginX="mx-4" marginT="mt-4" marginB="mb-2" placeholder="Nhập lại mật khẩu" control={control} name="MatKhau" rules={VALIDATE.password} />
                <Button marginY="my-2" marginX="mx-4" loading={loading}>Xác nhận</Button>
            </form>
            <div className="text-center text-base p-2 mb-4">
                <Link to={PATH.login} className="text-slate-700 hover:underline">Đăng nhập</Link>
                <span> · </span>
                <Link to={PATH.register} className="text-slate-700 hover:underline">Đăng ký Bookstore</Link>
            </div>
        </>
    );
}

export default ChangePassword;