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
    name: {
        required: "Nhập tên sản phẩm"
    },
    gender: { required: "Giới tính của bạn là gì ?" },
    unit: {
        required: "Nhập đơn vị tính của sản phẩm",
        min: {
            value: 1,
            message: "Xin vui lòng nhập giá lớn hơn 1"
        }
    },
    price: {
        required: "Nhập giá bán sản phẩm thêm vào"
    },
    count: {
        required: "Nhập số lượng sản phẩm thêm vào",
        min: {
            value: 1,
            message: "Xin vui lòng nhập số lượng lớn hơn 1"
        }
    },
    content: {
        required: "Viết vài dòng mô tả ngắn về nội dung"
    },
    image: {
        required: "Thêm 1 ảnh cho sản phẩm",
        validate: {
            acceptedFormats: files =>
                ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(
                    files?.type
                ) || 'Định dạng ảnh là PNG, JPEG, JPG, GIF',
            lessThan10MB: files => files?.size < 10485760 || 'Kích thước ảnh tối đa là 10MB',
        }
    }
}
