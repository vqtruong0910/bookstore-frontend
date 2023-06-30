import { BiLock } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../../constants/path'
import { AiOutlineUser } from 'react-icons/ai'
import React, { useState, useCallback, useContext, useEffect } from 'react'
import Context from '../../../store/Context'
import { useForm } from 'react-hook-form'
import axiosJWT from '../../../config/axiosJWT'
import LoadingSkeletonPersonInfo from '../../../components/Loading/LoadingSkeletonPersonInfo'
import Input from '../../../components/Input'
import { VALIDATE } from '../../../constants/validate'
import Field from '../../../components/Field'
import InputImage from '../../../components/Input/inputImage'
import Swal from 'sweetalert2'

function PersonInfo() {
  const navigate = useNavigate()
  const { user, setUser, darkTheme } = useContext(Context)
  const [loading, isLoading] = useState(true)
  const [fileImage, setFileImage] = useState()
  const {
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    trigger,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      gender: '',
      fullName: user?.HoTen,
      email: user?.Email,
    },
  })

  const onChangeImage = useCallback(
    async (e) => {
      if (!['image/jpeg', 'image/png', 'image/gif'].includes(e.target.files[0]?.type)) {
        return window.alert('Định dạng ảnh là jpg, jpeg, png, gif')
      }

      const fileImage = e.target.files[0]

      if (fileImage) {
        setValue('user_image', fileImage)
        if (await trigger('user_image')) {
          const fileReader = new FileReader()
          fileReader.readAsDataURL(fileImage)
          fileReader.onloadend = () => {
            setFileImage(fileReader.result)
          }
          if (window.confirm('Bạn có chắc là muốn thay đổi avatar của mình?')) {
            try {
              const response = await axiosJWT.post(
                'users/avatar',
                { image: fileImage },
                { headers: { 'Content-Type': 'multipart/form-data' } }
              )
              if (response)
                localStorage.setItem('user', JSON.stringify({ ...user, Anh: response.data.Anh }))
              setUser({ ...user, Anh: response.data.Anh })
              return Swal.fire({
                title: 'Chúc mừng bạn đã thay đổi ảnh thành công',
                icon: 'success',
                showCancelButton: false,
                confirmButtonColor: 'rgb(29, 192, 113)',
              })
            } catch (error) {
              console.log(error)
            }
          }
        } else setFileImage(null)
      }
    },
    [fileImage]
  )

  const onSubmit = (data) => {
    return Swal.fire({
      title: 'Chúc mừng bạn đã lưu thay đổi thành công',
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: 'rgb(29, 192, 113)',
    })
  }

  useEffect(() => {
    const topOfElement = document.querySelector('#user-order-management') - 200
    window.scroll({ top: topOfElement, behavior: 'smooth' })

    isLoading(true)
    setTimeout(() => {
      isLoading(false)
    }, 250)
  }, [])

  return (
    <>
      {loading && <LoadingSkeletonPersonInfo></LoadingSkeletonPersonInfo>}
      {!loading && (
        <div className="flex flex-row border">
          <div className="flex flex-wrap w-full">
            <div className="flex w-full p-4">
              <span
                className={`w-full text-lg font-semibold lg:text-xl ${
                  darkTheme ? 'text-white' : 'text-slate-700'
                }`}
              >
                Thông tin tài khoản
              </span>
            </div>

            <div className="flex w-full flex-wrap xl:flex-nowrap md:mx-0 bg-white">
              <div className="w-full px-4 xl:w-2/3">
                <div className="w-full flex flex-wrap">
                  <span className="w-full flex text-slate-600 lg:text-lg">Thông tin cá nhân</span>

                  <div className="flex flex-col w-full justify-center">
                    <form>
                      <div className="flex flex-col items-center py-4 w-full">
                        <div className="flex relative justify-end items-end">
                          <div name="user_image" className="flex justify-center items-center">
                            {user?.Anh ? (
                              <img
                                src={user?.Anh}
                                alt="Avatar"
                                className="border-2 rounded-full w-24 h-24 border-blue-200"
                              />
                            ) : (
                              <AiOutlineUser className="border-2 border-blue-200 text-blue-300 rounded-full w-24 h-24"></AiOutlineUser>
                            )}
                          </div>

                          <InputImage onChange={(e) => onChangeImage(e)} />
                        </div>
                        {errors.user_image && (
                          <div className="text-xs text-red-500 md:text-sm">
                            {errors.user_image.message}
                          </div>
                        )}
                      </div>
                    </form>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <Field title="Họ & tên">
                        <Input
                          type="text"
                          name="fullName"
                          control={control}
                          rules={VALIDATE.fullname}
                          placeholder="Nhập họ và tên"
                        />
                      </Field>

                      <Field title="Email">
                        <Input
                          type="text"
                          name="email"
                          control={control}
                          rules={VALIDATE.email}
                          placeholder="Nhập email"
                        />
                      </Field>

                      <Field title="Giới tính">
                        <div className="flex flex-col w-2/3 lg:w-8/12 py-2 md:py-3">
                          <div className="flex w-full">
                            {user?.GioiTinh === 0 && (
                              <>
                                <div className="w-full">
                                  <input name="gender" type="radio" value="Male" />
                                  <label htmlFor="Male" className="mx-2">
                                    Nam
                                  </label>
                                </div>
                                <div className="w-full">
                                  <input name="gender" type="radio" value="Female" checked />
                                  <label htmlFor="Female" className="mx-2">
                                    Nữ
                                  </label>
                                </div>
                              </>
                            )}
                            {user?.GioiTinh === 1 && (
                              <>
                                <div className="w-full">
                                  <input name="gender" type="radio" value="Male" checked />
                                  <label htmlFor="Male" className="mx-2">
                                    Nam
                                  </label>
                                </div>
                                <div className="w-full">
                                  <input name="gender" type="radio" value="Female" />
                                  <label htmlFor="Female" className="mx-2">
                                    Nữ
                                  </label>
                                </div>
                              </>
                            )}
                          </div>
                        </div>
                      </Field>

                      <Field title="Số điện thoại">
                        <Input
                          type="phone"
                          name="phone"
                          control={control}
                          rules={VALIDATE.phone}
                          placeholder="Nhập số điện thoại"
                        />
                      </Field>

                      <Field title="Ngày sinh">
                        <Input type="date" name="dob" control={control} />
                      </Field>

                      <div className="w-full flex justify-center py-5 cursor-pointer">
                        <button
                          type="submit"
                          className=" px-4 py-2 flex text-white items-center justify-center bg-green-600 hover:bg-green-500 transition rounded-md"
                        >
                          Lưu thay đổi
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/3 flex flex-wrap lg:flex-col px-4 lg:border-l lg:my-5 border-gray-300 py-5 lg:py-0">
                <div className="w-full flex flex-wrap lg:flex-col border-t lg:border-t-0">
                  <span className="w-full flex text-slate-600  border-gray-300 pt-5 lg:pt-0 lg:text-lg">
                    Bảo mật
                  </span>
                  <div className="w-full flex lg:flex-col">
                    <div className="w-full flex py-2">
                      <div className="w-full flex">
                        <div className="flex items-center">
                          <BiLock className="w-6 h-6" />
                        </div>

                        <div className="w-full text-sm whitespace-nowrap mx-1 flex items-center mt-1 lg:text-base">
                          Đổi mật khẩu
                        </div>
                      </div>

                      <div
                        onClick={() => navigate(PATH.profile.user_change_password)}
                        className="w-full flex justify-end cursor-pointer"
                      >
                        <div className="border-2 w-20 h-8 flex justify-center rounded-md bg-yellow-500 hover:bg-yellow-400 transition">
                          <span className="text-white flex items-center">Cập nhật</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default PersonInfo
