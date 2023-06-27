import { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import Button from '../../components/Button'
import Textfield from '../../components/Textfield'
import axiosConfig from '../../config/axiosConfig'
import { API } from '../../constants/api'
import { PATH } from '../../constants/path'
import { VALIDATE } from '../../constants/validate'

function ForgotPassword() {
  const [loading, setLoading] = useState(false)
  const { control, setError, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: {
      Email: '',
    },
  })

  const onSubmit = useCallback(async (data) => {
    try {
      setLoading(true)
      const res = await axiosConfig.post(API.SENDEMAILRESETPASSWORD, data)
      const result = await res.data
      if (!result.error) {
        window.alert(
          'Chúng tôi đã gửi 1 email xác thực đến tài khoản email của bạn\n Lưu ý bạn không được gửi đường link này cho bất cứ ai!!!'
        )
      }
    } catch (error) {
      if (error?.response?.data?.error) {
        setError(
          'Email',
          { type: 'custom', message: 'Tài khoản email không tồn tại' },
          { shouldFocus: true }
        )
      } else {
        window.alert('Xác nhận thất bại!')
      }
    } finally {
      setLoading(false)
    }
  }, [])

  return (
    <div className="flex flex-col rounded-lg bg-white shadow-xl border">
      <h3 className="text-center p-5 text-lg font-normal">Xác nhận Email</h3>
      <form method="post" onSubmit={handleSubmit(onSubmit)} className="space-y-2">
        <Textfield
          type="text"
          marginX="mx-4"
          placeholder="Email"
          control={control}
          name="Email"
          rules={VALIDATE.email}
        />
        <Button marginY="my-2" marginX="mx-4" loading={loading}>
          Xác nhận
        </Button>
      </form>
      <div className="text-center text-base p-2 mb-4">
        <Link to={PATH.login} className="text-slate-700 hover:underline">
          Đăng nhập
        </Link>
        <span> · </span>
        <Link to={PATH.register} className="text-slate-700 hover:underline">
          Đăng ký Bookstore
        </Link>
      </div>
    </div>
  )
}

export default ForgotPassword
