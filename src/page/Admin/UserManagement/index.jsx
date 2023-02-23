import clsx from 'clsx'
import { useId } from 'react'
import { useMemo } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BsCardImage, BsPencilSquare } from 'react-icons/bs'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import Loading from '../../../components/Loading'
import axiosJWT from '../../../config/axiosJWT'
import { API } from '../../../constants/api'
import {
  gender,
  permission,
  status,
  verifyEmail,
} from '../../../constants/statusUser'
import style from './style.module.scss'
import Avartar from '../../../assets/images/—Pngtree—camera icon photography_4015139.png'
import imageAvailable from '../../../assets/images/no-image-found.b1edc35f0fa6.png'

function UserManagement() {
  const id = useId()
  const queryClient = useQueryClient()
  const [page, setPage] = useState(1)
  const [formUpdate, setFormUpdate] = useState(false)
  const [user, setUser] = useState({})
  const {
    data: users,
    isLoading,
    isError,
  } = useQuery(
    ['users', page],
    async () => {
      const result = await axiosJWT.get(`${API.GET_LIST_USER_IN_PAGE}/${page}`)
      return result.data
    },
    { keepPreviousData: true }
  )
  const { mutateAsync } = useMutation(
    async (data) => {
      const result = await axiosJWT.put(
        `${API.GET_LIST_ALL_USER}/${user.IDNguoiDung}`,
        data
      )
      return result.data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('users')
      },
    }
  )
  const { register, handleSubmit, setValue, watch } = useForm({
    mode: 'onBlur',
    defaultValues: {
      HoTen: '',
      Email: '',
      GioiTinh: '',
      SoDienThoai: '',
      NgaySinh: '',
      TrangThai: '',
      XacThuc: '',
      Quyen: '',
    },
  })
  const nextPage = useCallback(() => {
    setPage((currentPage) =>
      currentPage >= users.SoLuongTrang ? users.SoLuongTrang : ++currentPage
    )
  }, [page, users])

  const prevPage = useCallback(() => {
    setPage((currentPage) => (currentPage > 1 ? --currentPage : 1))
  }, [page])

  const firstPage = useCallback(() => {
    setPage(1)
  }, [])
  const lastPage = useCallback(() => {
    setPage(users.SoLuongTrang)
  }, [users])
  const changePage = useCallback(
    (e) => {
      const value = parseInt(e.target.value)
      if (value > 0 && value <= users.SoLuongTrang) setPage(value)
    },
    [users]
  )

  const updateUser = useCallback((data) => {
    setValue('HoTen', data.HoTen)
    setValue('Email', data.Email)
    setValue('GioiTinh', data.GioiTinh)
    setValue('NgaySinh', data.NgaySinh)
    setValue('SoDienThoai', data.SoDienThoai)
    setValue('Quyen', data.Quyen)
    setValue('XacThuc', data.XacThuc)
    setValue('TrangThai', data.TrangThai)
    setUser(data)
    setFormUpdate(true)
  }, [])

  const checkVerify = useMemo(() => {
    if (watch('XacThuc') === 0) return false
    return true
  }, [watch('XacThuc')])

  const onSubmit = useCallback((data) => {
    if (data.Quyen === user.Quyen && data.TrangThai === user.TrangThai) {
      return window.alert('Không có sự thay đổi nào xảy ra !')
    }
    console.log(data.Quyen, data.TrangThai)
    mutateAsync({ Quyen: data.Quyen, TrangThai: data.TrangThai })
      .then((res) => {
        console.log(res)
        window.alert('Cập nhật thành công')
      })
      .catch(() => {
        window.alert('Cập nhật thất bại')
      })
  }, [])
  const handleImageError = useCallback((e) => {
    e.target.src = imageAvailable
  }, [])

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <h1>Không thể tải được dữ liệu 😥</h1>
  }

  return (
    <>
      <div className="flex space-x-2">
        <h2 className="text-xl font-semibold">Tài khoản người dùng ✨</h2>
      </div>

      <div className="py-2 space-y-1">
        {/* <div className="hidden md:flex">
                    <div className="flex space-x-3">
                        <input type="text" className="rounded-sm border" />
                        <input type="submit" className="rounded-sm border px-2 py-1 text-sm cursor-pointer bg-white" value="Tìm" />
                    </div>
                </div> */}

        <div className="flex justify-end space-x-2 py-1 select-none">
          <div className="px-2 border rounded-sm cursor-pointer">
            {users?.TongNguoiDung} mục
          </div>
          <div
            className="px-2 border rounded-sm cursor-pointer"
            onClick={firstPage}
          >
            &#171;
          </div>
          <div
            className="px-2 border rounded-sm cursor-pointer"
            onClick={prevPage}
          >
            &#60;
          </div>
          <div>
            <input
              type="number"
              className={clsx(
                style['none-spin'],
                'px-2 border rounded-sm cursor-pointer w-14 text-center'
              )}
              value={page}
              onChange={(e) => changePage(e)}
            />{' '}
            &#47; {users?.SoLuongTrang}
          </div>
          <div
            className="px-2 border rounded-sm cursor-pointer"
            onClick={nextPage}
          >
            &#62;
          </div>
          <div
            className="px-2 border rounded-sm cursor-pointer"
            onClick={lastPage}
          >
            &#187;
          </div>
        </div>
      </div>

      <table className="border-collapse border rounded-sm w-full bg-white">
        <thead>
          <tr className="border bg-slate-800 text-slate-200">
            {/* <th className="p-2 w-8"><input type="checkbox" /></th> */}
            <th className="p-2 hidden md:table-cell">
              <BsCardImage className="mx-auto w-full" />
            </th>
            <th className="p-2 text-left">Tên</th>
            <th className="p-2 text-left">Email</th>
            <th className="p-2 text-left hidden md:table-cell">Giới tính</th>
            <th className="p-2 text-left hidden md:table-cell">Ngày Sinh</th>
            <th className="p-2 text-left hidden md:table-cell">Quyền</th>
            <th className="p-2">Trạng thái</th>
            <th className="p-2 hidden md:table-cell">Xác thực</th>
            <th className="p-2 md:table-cell"></th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users?.DanhSach.map((item, index) => (
              <tr key={id + index} className="odd:bg-slate-100 border">
                <td className="p-2 hidden md:table-cell w-24 h-24">
                  <img
                    className="object-contain mx-auto"
                    src={item.Anh ? item.Anh : Avartar}
                    alt="book"
                    onError={(e) => {
                      handleImageError(e)
                    }}
                  />
                </td>
                <td className="p-2">{item.HoTen}</td>
                <td className="p-2">{item.Email}</td>
                <td className="p-2 hidden md:table-cell">
                  {gender[item.GioiTinh]}
                </td>
                <td className="p-2 hidden md:table-cell">{item.NgaySinh}</td>
                <td className="p-2 hidden md:table-cell">
                  {permission[item.Quyen]}
                </td>
                <td className="p-2 text-center">
                  <span
                    className={clsx(
                      'py-1 px-2 rounded-xl bg-opacity-20 text-center text-sm w-24',
                      item.TrangThai
                        ? 'text-lime-500 bg-lime-300'
                        : 'text-red-500 bg-red-300'
                    )}
                  >
                    {status[item.TrangThai]}
                  </span>
                </td>
                <td className="p-2 hidden md:table-cell text-center">
                  <span
                    className={clsx(
                      'py-1 px-2 items-center rounded-xl bg-opacity-20 text-center text-sm w-28',
                      item.XacThuc
                        ? 'text-lime-500 bg-lime-300'
                        : 'text-red-500 bg-red-300'
                    )}
                  >
                    {verifyEmail[item.XacThuc]}
                  </span>
                </td>
                <td className="p-2 text-indigo-500 font-semibold align-middle">
                  <span className="w-full">
                    <BsPencilSquare
                      onClick={() => updateUser(item)}
                      size={20}
                      className="cursor-pointer mx-auto"
                    />
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div
        className={clsx(
          formUpdate ? 'z-30' : '-z-30',
          'fixed flex justify-center items-center inset-0 bg-slate-900 bg-opacity-20'
        )}
      >
        <div
          className={clsx(
            !formUpdate && 'scale-0',
            style['hide-scrollbar'],
            'flex w-full flex-col bg-white rounded-sm overflow-y-scroll sm:w-1/2 max-h-screen transition-all duration-200'
          )}
        >
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="w-full flex flex-col py-4 px-4 sm:p-6"
          >
            <span className="w-full flex text-slate-600 lg:text-lg">
              Thông tin cá nhân
            </span>
            <div className="flex flex-col w-full justify-center h-full sm:px-10">
              <div className="flex relative py-4 justify-center">
                <div className="flex justify-center items-center">
                  <img
                    src={user.Anh ? user.Anh : Avartar}
                    alt="Avatar"
                    className="rounded-full border-2 w-24 h-24 text-blue-500"
                  />
                </div>
              </div>

              <div className="flex w-full py-2">
                <div className="w-1/3 lg:w-4/12 items-center flex">
                  <span className="flex text-sm lg:text-base font-semibold text-slate-800">
                    Họ & Tên
                  </span>
                </div>

                <div className="w-2/3 lg:w-8/12 flex">
                  <input
                    {...register('HoTen')}
                    className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base"
                    type="text"
                    disabled
                    placeholder="Họ tên"
                  />
                </div>
              </div>

              <div className="flex w-full py-2">
                <div className="w-1/3 lg:w-4/12 items-center flex">
                  <span className="flex text-sm lg:text-base font-semibold text-slate-800">
                    Email
                  </span>
                </div>

                <div className="w-2/3 lg:w-8/12 flex">
                  <input
                    {...register('Email')}
                    className={clsx(
                      !checkVerify
                        ? 'border-red-600 bg-red-100'
                        : 'border-green-600 bg-green-100',
                      'w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base'
                    )}
                    type="email"
                    disabled
                    placeholder="Email"
                  />
                </div>
              </div>

              <div className="flex w-full py-2">
                <div className="w-1/3 lg:w-4/12 items-center flex">
                  <span className="flex text-sm lg:text-base font-semibold text-slate-800">
                    Ngày sinh
                  </span>
                </div>

                <div className="w-2/3 lg:w-8/12 flex">
                  <input
                    {...register('NgaySinh')}
                    className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base"
                    disabled
                    placeholder="Ngày sinh"
                  />
                </div>
              </div>

              <div className="flex w-full py-2">
                <div className="w-1/3 lg:w-4/12 items-center flex">
                  <span className="flex text-sm lg:text-base font-semibold text-slate-800">
                    Giới tính
                  </span>
                </div>
                <div className="w-2/3 lg:w-8/12 flex">
                  <input
                    {...register('GioiTinh')}
                    className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base"
                    disabled
                    placeholder="Giới tính"
                  />
                </div>
              </div>
              <div className="flex w-full py-2">
                <div className="w-1/3 lg:w-4/12 items-center flex">
                  <span className="flex text-sm lg:text-base font-semibold text-slate-800">
                    Số điện thoại
                  </span>
                </div>

                <div className="w-2/3 lg:w-8/12 flex">
                  <input
                    {...register('SoDienThoai')}
                    type="tel"
                    disabled
                    placeholder="Số điện thoại"
                    className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base"
                  />
                </div>
              </div>

              <div className="flex w-full py-2">
                <div className="w-1/3 lg:w-4/12 items-center flex">
                  <span className="flex text-sm lg:text-base font-semibold text-slate-800">
                    Quyền
                  </span>
                </div>

                <div className="w-2/3 lg:w-8/12 flex">
                  <select
                    {...register('Quyen')}
                    className="border border-sky-200 w-full px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 text-sm lg:text-base"
                  >
                    <option value="0">Admin</option>
                    <option value="1">Khách hàng</option>
                  </select>
                </div>
              </div>
              <div className="flex w-full py-2">
                <div className="w-1/3 lg:w-4/12 items-center flex">
                  <span className="flex text-sm lg:text-base font-semibold text-slate-800">
                    Trạng thái
                  </span>
                </div>

                <div className="w-2/3 lg:w-8/12 flex">
                  <select
                    {...register('TrangThai')}
                    className="border border-sky-200 w-full px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 text-sm lg:text-base"
                  >
                    <option value="0">Khóa tài khoản</option>
                    <option value="1">Hoạt động</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full flex pt-8">
              <div className="ml-auto space-x-3">
                <button
                  type="button"
                  onClick={() => setFormUpdate(false)}
                  className="py-2 px-3 text-slate-700 hover:bg-slate-100 shadow-sm border transition rounded-sm"
                >
                  Trở lại
                </button>
                <button
                  type="submit"
                  className="py-2 px-3 bg-slate-700 hover:bg-slate-500 shadow-sm border transition rounded-sm text-white"
                >
                  Cập nhật
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default UserManagement
