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
    // name -> thuộc tính cần confirm
    // watch -> hàm xem thuộc tính của reac hook form truyền vào
    confirmPassword: (name, watch) => {
        return {
            required: "Xin nhập lại mật khẩu",
            validate: value => {
                if (value !== watch(name)) return "Mật khẩu không trùng khớp";
            }
        }
    },
    date: {
        required: "Ngày sinh của bạn ?",
        pattern: {
            value: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
            message: 'DD/MM/YYYY'
        }
    },
    gender: { required: "Giới tính của bạn là gì ?" }
}
