// Rules react-form-hook

export const VALIDATE = {
    email: {
        required: "Xin nhập vào email của bạn",
        pattern: {
            value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
            message: 'Email sai định dạng'
        }
    },
    password: {
        required: "Xin nhập vào mật khẩu",
        pattern: {
            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
            message: 'Tối thiểu tám ký tự, ít nhất một chữ hoa, một chữ thường và một số'
        }
    },
    date: { required: "Please select date month year !" },
    gender: { required: "Giới tính của bạn là gì ?" }
}
