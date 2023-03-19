import { BiPencil, BiLock } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../../constants/path'
import Notify from '../../../components/Notify'
import { AiOutlineSmile, AiOutlineUser } from 'react-icons/ai'
import React, { useState, useCallback, useContext, useEffect } from 'react'
import Context from '../../../store/Context'
import { useForm } from 'react-hook-form'
import axiosJWT from '../../../config/axiosJWT'
import LoadingSkeletonPersonInfo from '../../../components/Loading/LoadingSkeletonPersonInfo'

function PersonInfo() {
  const { user, setUser } = useContext(Context)
  const [notify, setNotify] = useState(false)
  const [loading, isLoading] = useState(true)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    trigger,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      gender: '',
      fullName: user?.HoTen,
      email: user?.Email,
    },
  })

  const [fileImage, setFileImage] = useState()

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
              return setNotify(true)
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
    let person_info = {
      fullName: data.fullName,
      gender: data.gender,
    }
    return setNotify(true)
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
        <div className="flex flex-row">
          <div className="flex flex-wrap w-full">
            <div className="flex w-full px-4 md:px-0">
              <span className="w-full text-lg font-semibold mb-5 lg:text-xl">
                Thông tin tài khoản
              </span>
            </div>

            <div className="flex w-full flex-wrap lg:flex-nowrap md:mx-0 bg-white shadow-md">
              <div className="w-full px-4 lg:w-2/3">
                <div className="w-full flex flex-wrap">
                  <span className="w-full flex text-slate-600 lg:text-lg">Thông tin cá nhân</span>

                  <div className="flex flex-col w-full justify-center">
                    <form>
                      <div className="flex flex-col items-center py-4 w-full">
                        <div className="flex relative justify-end items-end">
                          <div name="user_image" className="flex justify-center items-center">
                            {user.Anh ? (
                              <img
                                src={user.Anh}
                                alt="Avatar"
                                className="border-2 rounded-full w-24 h-24 border-blue-200"
                              />
                            ) : (
                              <AiOutlineUser className="border-2 border-blue-200 text-blue-300 rounded-full w-24 h-24"></AiOutlineUser>
                            )}
                          </div>

                          <div className="flex flex-col absolute w-6 h-6 items-center justify-center rounded-full border bg-gray-600">
                            <input
                              type="file"
                              accept=".gif, .jpg, .png, .jpeg"
                              onChange={(event) => onChangeImage(event)}
                              className="hidden"
                              id="file"
                            />
                            <label htmlFor="file">
                              <BiPencil className="w-4 h-4 text-white cursor-pointer" />
                            </label>
                          </div>
                        </div>
                        {errors.user_image && (
                          <div className="text-xs text-red-500 md:text-sm">
                            {errors.user_image.message}
                          </div>
                        )}
                      </div>
                    </form>

                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className="flex w-full py-2">
                        <div className="w-1/3 lg:w-4/12 items-center flex">
                          <span className="flex text-sm lg:text-base">Họ & Tên</span>
                        </div>

                        <div className="w-2/3 lg:w-8/12 flex flex-col">
                          <input
                            name="fullName"
                            type="text"
                            defaultValue={user?.HoTen}
                            {...register('fullName', { required: 'Họ tên không được để trống' })}
                            placeholder="VD: Nguyễn Văn A"
                            className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base"
                          />

                          {errors.fullName && (
                            <div className="text-xs text-red-500 md:text-sm">
                              {errors.fullName.message}
                            </div>
                          )}
                        </div>
                      </div>

                      <div className="flex w-full py-2">
                        <div className="w-1/3 lg:w-4/12 items-center flex">
                          <span className="flex text-sm lg:text-base">Email</span>
                        </div>

                        <div className="w-2/3 lg:w-8/12 flex flex-col">
                          <input
                            name="email"
                            type="email"
                            value={user?.Email}
                            className="w-full border rounded-sm px-2 py-1 text-black/50 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base"
                            placeholder="VD: nguyenvana@gmail.com"
                            disabled
                          />
                        </div>
                      </div>

                      <div className="flex w-full py-2">
                        <div className="w-1/3 lg:w-4/12 items-center flex">
                          <span className="flex text-sm lg:text-base">Giới tính</span>
                        </div>

                        <div className="flex flex-col w-2/3 lg:w-8/12 py-2 md:py-3">
                          <div className="flex w-full">
                            {user?.GioiTinh === 1 ? (
                              <>
                                <div className="w-full">
                                  <input name="gender" type="radio" value="Male" />
                                  <label htmlFor="Male" className="mx-2">
                                    Nam
                                  </label>
                                </div>
                                <div className="w-full">
                                  <input name="gender" type="radio" value="Female" disabled />
                                  <label htmlFor="Female" className="mx-2">
                                    Nữ
                                  </label>
                                </div>
                              </>
                            ) : (
                              <>
                                <div className="w-full">
                                  <input name="gender" type="radio" value="Male" />
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
                      </div>
                      <div className="w-full flex justify-center py-5 cursor-pointer">
                        <button
                          type="submit"
                          className="w-40 h-10 flex text-white items-center justify-center bg-slate-700 hover:bg-slate-500 transition rounded-sm"
                        >
                          Lưu thay đổi
                        </button>
                      </div>
                    </form>
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
                        <div className="border-2 w-20 h-8 flex justify-center rounded-md bg-slate-700 hover:bg-slate-500 transition">
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
