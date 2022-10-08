import { useEffect } from "react";

function LoginSuccess() {
    useEffect(() => {
        setTimeout(() => {
            window.close()
        }, 500)
    }, []);
    return (
        <h1 className="text-center text-2xl font-bold">Bạn đã đăng nhập thành công</h1>
    );
}

export default LoginSuccess;