import React, { useContext } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { PATH } from '../../../constants/path'
import Context from '../../../store/Context'
import InputPassword from '../../../components/Input/InputPassword'
import { VALIDATE } from '../../../constants/validate'
import Swal from 'sweetalert2'
import { API } from '../../../constants/api'
import axiosJWT from '../../../config/axiosJWT'
import { useTranslation } from 'react-i18next'

function UserChangePassword() {
  const { t } = useTranslation()
  const { user } = useContext(Context)
  const email = user.Email
  const navigate = useNavigate()
  const { darkTheme } = useContext(Context)

  const {
    watch,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      current_password: '',
      new_password: '',
      retype_new_password: '',
    },
  })

  const onSubmit = async (data) => {
    const { new_password, current_password } = data
    if (!isValid) return
    try {
      await axiosJWT.put(API.CHANGEPASSWORD, {
        Email: email,
        oldPassword: current_password,
        newPassword: new_password,
      })
      Swal.fire({
        title: t('Cập nhật mật khẩu thành công'),
        icon: 'success',
        showCancelButton: false,
      })
      return navigate('/')
    } catch (error) {
      if (error.response.status === 400) {
        Swal.fire({
          title: t('Vui lòng nhập đúng mật khẩu hiện tại!'),
          icon: 'warning',
          showCancelButton: false,
        })
      }
    }
  }

  return (
    <div className="flex w-full border">
      <div className="flex flex-wrap w-full p-4">
        <div className={`flex w-full ${darkTheme ? 'text-white' : 'text-slate-700'}`}>
          <span className="w-full text-lg font-medium mb-5 lg:text-xl">{t(`Đổi mật khẩu`)}</span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center w-full bg-white">
          <div className="w-full lg:w-500">
            <div className="flex flex-wrap w-full border border-gray-200 p-4">
              <InputPassword
                control={control}
                name="current_password"
                placeholder={t('Nhập mật khẩu hiện tại')}
                rules={VALIDATE.password}
              >
                {t(`Mật khẩu hiện tại`)}
              </InputPassword>

              <InputPassword
                control={control}
                name="new_password"
                placeholder={t('Nhập mật khẩu mới')}
                rules={VALIDATE.newPassword}
              >
                {t(`Mật khẩu mới`)}
              </InputPassword>

              <InputPassword
                control={control}
                name="retype_new_password"
                placeholder={t('Nhập lại mật khẩu mới')}
                rules={VALIDATE.confirmPassword('new_password', watch)}
              >
                {t(`Nhập lại mật khẩu mới`)}
              </InputPassword>

              <div className="w-full flex justify-center py-3 cursor-pointer">
                <button
                  type="submit"
                  className=" px-4 py-2 flex text-white items-center justify-center bg-green-600 hover:bg-green-500 transition rounded-md"
                >
                  {t(`Lưu thay đổi`)}
                </button>
              </div>
            </div>
          </div>
        </form>

        <div
          onClick={() => navigate(PATH.profile.dashboard)}
          className={`flex w-full px-4 items-center pt-5 pb-4 ${
            darkTheme ? 'text-white' : 'text-slate-700'
          }`}
        >
          <BsArrowLeftShort className="w-5 h-5 lg:w-8 lg:h-8 cursor-pointer" />
          <span className="text-sm cursor-pointer lg:text-base">
            {t(`Quay lại thông tin tài khoản của tôi`)}
          </span>
        </div>
      </div>
    </div>
  )
}

export default UserChangePassword
