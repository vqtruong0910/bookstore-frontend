import React, { useContext } from 'react'
import { useState } from 'react'
import { BsArrowLeftShort } from 'react-icons/bs'
import { AiOutlineSmile } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { PATH } from '../../../constants/path'
import Notify from '../../../components/Notify'
import Context from '../../../store/Context'
import InputPassword from '../../../components/Input/InputPassword'
import { VALIDATE } from '../../../constants/validate'
import Swal from 'sweetalert2'
import axiosConfig from '../../../config/axiosConfig'
import { API } from '../../../constants/api'
import axiosJWT from '../../../config/axiosJWT'

function UserChangePassword() {
  const token = localStorage.getItem('accessToken')
  const { user } = useContext(Context)
  const email = user.Email
  const navigate = useNavigate()
  const { darkTheme } = useContext(Context)
  const [notify, setNotify] = useState(false)

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
        title: 'Cập nhật mật khẩu thành công',
        icon: 'success',
        showCancelButton: false,
      }).then(navigate(PATH.dashboard))
    } catch (error) {
      if (error.response.status === 400) {
        Swal.fire({
          title: 'Vui lòng nhập đúng mật khẩu hiện tại!',
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
          <span className="w-full text-lg font-medium mb-5 lg:text-xl">Đổi mật khẩu</span>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center w-full bg-white">
          <div className="w-full lg:w-500">
            <div className="flex flex-wrap w-full border border-gray-200 p-4">
              <InputPassword
                control={control}
                name="current_password"
                placeholder="Nhập mật khẩu hiện tại"
                rules={VALIDATE.password}
              >
                Mật khẩu hiện tại
              </InputPassword>

              <InputPassword
                control={control}
                name="new_password"
                placeholder="Nhập mật khẩu mới"
                rules={VALIDATE.newPassword}
              >
                Mật khẩu mới
              </InputPassword>

              <InputPassword
                control={control}
                name="retype_new_password"
                placeholder="Nhập lại mật khẩu mới"
                rules={VALIDATE.confirmPassword('new_password', watch)}
              >
                Nhập lại mật khẩu mới
              </InputPassword>

              <div className="w-full flex justify-center py-3 cursor-pointer">
                <button
                  type="submit"
                  className=" px-4 py-2 flex text-white items-center justify-center bg-green-600 hover:bg-green-500 transition rounded-md"
                >
                  Lưu thay đổi
                </button>
              </div>
            </div>
          </div>

          {notify ? (
            <Notify
              close="true"
              message="Chúc mừng bạn lưu thay đổi thành công"
              icon={<AiOutlineSmile className="w-5 h-5 md:w-7 md:h-7 text-slate-700" />}
              textMessage="text-slate-700"
              notify={notify}
              setNotify={(data) => setNotify(data)}
            />
          ) : (
            <></>
          )}
        </form>

        <div
          onClick={() => navigate(PATH.profile.dashboard)}
          className={`flex w-full px-4 items-center pt-5 pb-4 ${
            darkTheme ? 'text-white' : 'text-slate-700'
          }`}
        >
          <BsArrowLeftShort className="w-5 h-5 lg:w-8 lg:h-8 cursor-pointer" />
          <span className="text-sm cursor-pointer lg:text-base">
            Quay lại thông tin tài khoản của tôi
          </span>
        </div>
      </div>
    </div>
  )
}

export default UserChangePassword
