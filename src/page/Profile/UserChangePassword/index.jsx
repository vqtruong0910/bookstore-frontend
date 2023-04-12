import React, { useContext } from 'react'
import { useState, useCallback } from 'react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
import { BsArrowLeftShort } from 'react-icons/bs'
import { AiOutlineSmile } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { PATH } from '../../../constants/path'
import Notify from '../../../components/Notify'
import Context from '../../../store/Context'

function UserChangePassword() {
  const navigate = useNavigate()
  const { darkTheme } = useContext(Context)
  const [notify, setNotify] = useState(false)
  const [shown, setShown] = useState({
    1: false, // Mat khau cu
    2: false, // Mat khau moi
    3: false, // Nhap lai mat khau moi
  })

  const showShown = useCallback(
    (location) => {
      setShown({ ...shown, [location]: !shown[location] })
    },
    [shown]
  )

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      current_password: '',
      new_password: '',
      retype_new_password: '',
    },
  })

  const onSubmit = (data) => {
    // console.log(data);
    return setNotify(true)
  }

  return (
    <div className="flex w-full">
      <div className="flex flex-wrap w-full">
        <div className={`flex w-full px-4 ${darkTheme ? 'text-white' : 'text-slate-700'}`}>
          <span className="w-full text-lg font-medium mb-5 lg:text-xl">Đổi mật khẩu</span>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="mx-2 flex justify-center w-full bg-white shadow-md"
        >
          <div className="w-full lg:w-500 px-5 py-5">
            <div className="flex flex-wrap w-full border border-gray-200 px-4 py-4">
              <div className="w-full flex flex-wrap">
                <div className="text-base">Mật khẩu hiện tại</div>

                <div className="flex w-full relative items-center justify-end">
                  <input
                    name="current_password"
                    {...register('current_password', { required: true })}
                    type={shown[1] ? 'text' : 'password'}
                    placeholder="Nhập mật khẩu hiện tại"
                    className="w-full flex border rounded-sm px-2 py-2 my-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm"
                  />
                  <div className="absolute flex px-2" onClick={() => showShown(1)}>
                    {shown[1] ? (
                      <FiEyeOff className="w-5 h-5 text-gray-500" />
                    ) : (
                      <FiEye className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </div>
                {errors.current_password?.type === 'required' && (
                  <div className="text-xs text-red-500 md:text-sm">
                    Vui lòng nhập mật khẩu hiện tại
                  </div>
                )}
              </div>

              <div className="flex w-full flex-wrap py-3">
                <div className="text-base">Mật khẩu mới</div>

                <div className="flex w-full relative items-center justify-end">
                  <input
                    name="new_password"
                    {...register('new_password', { required: true })}
                    type={shown[2] ? 'text' : 'password'}
                    placeholder="Nhập mật khẩu mới"
                    className="w-full flex border rounded-sm px-2 py-2 my-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm"
                  />
                  <div className="absolute flex px-2" onClick={() => showShown(2)}>
                    {shown[2] ? (
                      <FiEyeOff className="w-5 h-5 text-gray-500" />
                    ) : (
                      <FiEye className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </div>

                <div className="text-xs">
                  Mật khẩu phải từ 8 kí tự trở lên, bao gồm chữ và số và 1 kí tự in hoa
                </div>
                {errors.new_password?.type === 'required' && (
                  <div className="text-xs text-red-500 md:text-sm">Vui lòng nhập mật khẩu mới</div>
                )}
              </div>

              <div className="flex w-full flex-wrap pt-3">
                <div className="text-base">Nhập lại mật khẩu mới</div>

                <div className="flex w-full relative items-center justify-end">
                  <input
                    name="retype_new_password"
                    {...register('retype_new_password', { required: true })}
                    type={shown[3] ? 'text' : 'password'}
                    placeholder="Nhập lại mật khẩu mới"
                    className="w-full flex border rounded-sm px-2 py-2 my-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm"
                  />
                  <div className="absolute flex px-2" onClick={() => showShown(3)}>
                    {shown[3] ? (
                      <FiEyeOff className="w-5 h-5 text-gray-500" />
                    ) : (
                      <FiEye className="w-5 h-5 text-gray-500" />
                    )}
                  </div>
                </div>

                {errors.retype_new_password?.type === 'required' && (
                  <div className="text-xs text-red-500 md:text-sm">
                    Vui lòng nhập lại mật khẩu mới
                  </div>
                )}
              </div>

              <div className="flex justify-center w-full bg-slate-700 hover:bg-slate-500 transition py-2 rounded-sm mt-3 cursor-pointer">
                <button className="text-white font-normal">Lưu thay đổi</button>
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
