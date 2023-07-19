// Rules react-form-hook

export const VALIDATE = {
  email: {
    required: 'Xin nhập vào email của bạn',
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
      message: 'Email sai định dạng',
    },
  },
  password: {
    required: 'Xin nhập vào mật khẩu',
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      message: 'Tối thiểu tám ký tự, ít nhất một chữ hoa, một chữ thường và một số',
    },
  },
  newPassword: {
    required: 'Xin nhập vào mật khẩu mới',
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
      message: 'Tối thiểu tám ký tự, ít nhất một chữ hoa, một chữ thường và một số',
    },
  },
  // name -> thuộc tính cần confirm
  // watch -> hàm xem thuộc tính của reac hook form truyền vào
  confirmPassword: (name, watch) => {
    return {
      required: 'Xin nhập lại mật khẩu',
      validate: (value) => {
        if (value !== watch(name)) return 'Mật khẩu không trùng khớp'
      },
    }
  },
  date: {
    required: 'Ngày sinh của bạn ?',
    pattern: {
      value: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
      message: 'DD/MM/YYYY',
    },
  },
  name: {
    required: 'Nhập tên sản phẩm',
  },
  gender: { required: 'Giới tính của bạn là gì ?' },
  unit: {
    required: 'Nhập đơn vị tính của sản phẩm',
    min: {
      value: 1,
      message: 'Xin vui lòng nhập giá lớn hơn 1',
    },
  },
  price: {
    required: 'Nhập giá bán sản phẩm thêm vào',
  },
  count: {
    required: 'Nhập số lượng sản phẩm thêm vào',
    min: {
      value: 1,
      message: 'Xin vui lòng nhập số lượng lớn hơn 0',
    },
  },
  category: {
    required: 'Chọn danh mục cho sản phẩm',
  },
  typeof: {
    required: 'Chọn thể loại cho sản phẩm',
  },
  publishing: {
    required: 'Chọn nhà xuất bản cho sản phẩm',
  },
  author: {
    required: 'Chọn tác giả cho sản phẩm',
  },
  discount: {
    required: 'Nhập phầm trăm giá giảm cho sản phẩm',
    min: {
      value: 0,
      message: 'Xin vui lòng nhập giá lớn hơn hoặc bằng 0',
    },
  },
  numberPage: {
    required: 'Nhập số trang của sản phẩm',
    min: {
      value: 1,
      message: 'Xin vui lòng nhập giá lớn hơn 0',
    },
  },
  content: {
    required: 'Viết vài dòng mô tả ngắn về nội dung',
  },
  image: {
    required: 'Thêm 1 ảnh cho sản phẩm',
    validate: {
      acceptedFormats: (files) => {
        if (files?.type)
          return (
            ['image/jpeg', 'image/jpg', 'image/png', 'image/gif'].includes(files?.type) ||
            'Định dạng ảnh là PNG, JPEG, JPG, GIF'
          )
      },
      lessThan10MB: (files) => {
        if (files?.size) return files?.size < 10485760 || 'Kích thước ảnh tối đa là 10MB'
      },
    },
  },
  filterDate: {
    pattern: {
      value: /^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/,
      message: 'DD/MM/YYYY',
    },
  },
  fullname: {
    required: 'Xin nhập vào nhập họ và tên của bạn',
  },
  phone: {
    required: 'Xin nhập vào số điện thoại của bạn',
    pattern: {
      value: /[0]{1}[0-9]{9}/,
      message: 'Xin nhập vào số điện thoại bao gồm 10 số (đầu số 0)',
    },
  },
  address: {
    required: 'Xin nhập vào địa chỉ của bạn',
  },
  province: {
    required: true,
  },
  district: {
    required: true,
  },
  ward: {
    required: true,
  },
}
