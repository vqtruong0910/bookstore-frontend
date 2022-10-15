import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Textfield from "../../components/Textfield";
import { PATH } from "../../constants/path";
import { VALIDATE } from "../../constants/validate";

function Forgotpassword() {
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
            <h3 className="text-center p-5 text-lg font-normal">Xác nhận Email</h3>
            <form action="" method="post" onSubmit={handleSubmit(onSubmit)} className="space-y-2">
                <Textfield type="text" marginX="mx-4" placeholder="Email" control={control} name="Email" rules={VALIDATE.email} />
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

export default Forgotpassword;