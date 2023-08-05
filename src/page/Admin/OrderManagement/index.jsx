import { TbListDetails } from 'react-icons/tb'
import { BsPencilSquare } from 'react-icons/bs'
import { useCallback, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import axiosJWT from '../../../config/axiosJWT'
import { API } from '../../../constants/api'
import Loading from '../../../components/Loading'
import clsx from 'clsx'
import style from './style.module.scss'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../../constants/path'
import { statusOrder } from '../../../constants/statusOrder'
import { useTranslation } from 'react-i18next'

function OrderManagement() {
  const { t } = useTranslation()
  const queryClient = useQueryClient()
  const [page, setPage] = useState(1)
  const [formUpdate, setFormUpdate] = useState(false)
  const [order, setOrder] = useState({})
  const navigate = useNavigate()

  const {
    data: orders,
    isLoading: isLoadingOrders,
    isError: isErrorOrders,
  } = useQuery(
    ['orders', page],
    async () => {
      const result = await axiosJWT.get(`${API.GET_LIST_ORDER_IN_PAGE}?p=${page}&s=12`)
      console.log(result.data.DanhSach)
      return result.data
    },
    { keepPreviousData: true }
  )

  const { mutateAsync } = useMutation(
    async (data) => {
      const result = await axiosJWT.put(`${API.MANAGE_ORDER}/${order.IDDonHang}`, data)
      return result.data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('orders')
      },
    }
  )
  const { register, handleSubmit, setValue, watch } = useForm({
    mode: 'onBlur',
    defaultValues: {
      HoTen: '',
      DiaChi: '',
      NgayDat: '',
      NgayGiao: '',
      SoLuong: '',
      SoDienThoai: '',
      TongTien: '',
      TrangThai: '',
    },
  })

  const checkDate = useCallback((data) => {
    if (data !== null) {
      const date = new Date(data)
      return (
        ('0' + date.getDate()).slice(-2) +
        '/' +
        ('0' + (date.getMonth() + 1)).slice(-2) +
        '/' +
        date.getFullYear()
      )
    }
  }, [])

  const updateOrder = useCallback((data) => {
    setValue('HoTen', data.HoTen)
    setValue('DiaChi', data.DiaChi)
    setValue('NgayDat', checkDate(data.NgayDat))
    setValue('NgayGiao', checkDate(data.NgayGiao))
    setValue('SoDienThoai', data.SoDienThoai)
    setValue('SoLuong', data.SoLuong)
    setValue('TongTien', data.Tong)
    setValue('TrangThai', data.TrangThai)
    setOrder(data)
    setFormUpdate(true)
  }, [])

  const nextPage = useCallback(() => {
    setPage((currentPage) =>
      currentPage >= orders.SoLuongTrang ? orders.SoLuongTrang : ++currentPage
    )
  }, [page, orders])

  const prevPage = useCallback(() => {
    setPage((currentPage) => (currentPage > 1 ? --currentPage : 1))
  }, [page])

  const firstPage = useCallback(() => {
    setPage(1)
  }, [])
  const lastPage = useCallback(() => {
    setPage(orders.SoLuongTrang)
  }, [orders])
  const changePage = useCallback(
    (e) => {
      const value = parseInt(e.target.value)
      if (value > 0 && value <= orders.SoLuongTrang) setPage(value)
    },
    [orders]
  )

  const transferOrderDetail = useCallback((idOrder) => {
    navigate(`${PATH.admin.order_detail_transfer_page}/${idOrder}`)
  }, [])

  const statusOrderCSS = useCallback((data) => {
    if (data == '-1' || data == '1') return 'text-red-500 bg-red-300'
    if (data == '0') return 'text-amber-500 bg-amber-300'
    if (data == '2') return 'text-sky-500 bg-sky-300'
    if (data == '3') return 'text-lime-500 bg-lime-300'
    return ''
  }, [])

  const onSubmit = useCallback((data) => {
    if (data.TrangThai === order.TrangThai) {
      return window.alert(t('Không có sự thay đổi nào xảy ra!'))
    }
    mutateAsync({ TrangThai: data.TrangThai })
      .then((res) => {
        console.log(res)
        window.alert(t('Cập nhật đơn hàng thành công'))
        setFormUpdate(false)
      })
      .catch(() => {
        window.alert(t('Cập nhật đơn hàng thất bại'))
      })
  }, [])

  if (isLoadingOrders) {
    return <Loading />
  }
  if (isErrorOrders) {
    return <h1>{t(`Không thể tải được dữ liệu `)}😥</h1>
  }
  return (
    <>
      <h2 className="text-xl font-semibold">{t(`Đơn hàng`)} ✨</h2>
      <div className="py-2 space-y-1">
        {/* <div className="hidden md:flex">
                    <div className="flex space-x-3">
                        <input type="text" className="rounded-sm border" />
                        <input type="submit" className="rounded-sm border px-2 py-1 text-sm cursor-pointer bg-white" value="Tìm" />
                    </div>
                    <div className="flex ml-auto space-x-3">
                        <select className="rounded-sm border cursor-pointer">
                            <option value="">Chọn danh mục</option>
                            <option value="">Sách giáo khoa</option>
                            <option value="">Sách kinh tế</option>
                            <option value="">Khoa học viễn tưởng</option>
                            <option value="">Truyện tranh</option>
                        </select>
                        <select className="rounded-sm border cursor-pointer">
                            <option value="">Thể loại</option>
                            <option value="">Comic</option>
                            <option value="">Hành động</option>
                            <option value="">Trinh thám</option>
                        </select>
                        <select className="rounded-sm border cursor-pointer">
                            <option value="">Tất cả các ngày</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <input type="submit" className="rounded-sm border px-2 py-1 text-sm cursor-pointer bg-white" value="Lọc" />
                    </div>
                </div> */}

        <div className="flex justify-end space-x-2 py-1 select-none">
          <div className="px-2 border rounded-sm cursor-pointer">
            {orders?.TongDon} {t(` mục`)}
          </div>
          <div className="px-2 border rounded-sm cursor-pointer" onClick={firstPage}>
            &#171;
          </div>
          <div className="px-2 border rounded-sm cursor-pointer" onClick={prevPage}>
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
            &#47; {orders.SoLuongTrang}
          </div>
          <div className="px-2 border rounded-sm cursor-pointer" onClick={nextPage}>
            &#62;
          </div>
          <div className="px-2 border rounded-sm cursor-pointer" onClick={lastPage}>
            &#187;
          </div>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="border-collapse border rounded-sm w-full bg-white">
          <thead>
            <tr className="border bg-slate-800 text-slate-200">
              <th className="p-2 text-left min-w-[8rem] whitespace-nowrap">{t(`Tên người đặt`)}</th>
              <th className="p-2 text-left whitespace-nowrap">{t(`Địa chỉ`)}</th>
              <th className="p-2 text-left min-w-[6rem] whitespace-nowrap">{t(`Ngày đặt`)}</th>
              <th className="p-2 text-left min-w-[6rem] whitespace-nowrap">{t(`Ngày giao`)}</th>
              <th className="p-2 text-center min-w-[6rem] whitespace-nowrap">{t(`Số lượng`)}</th>
              <th className="p-2 text-left whitespace-nowrap">{t(`Tổng`)}</th>
              <th className="p-2 text-center min-w-[8rem] whitespace-nowrap">{t(`Trạng thái`)}</th>
              <th className="p-2 w-16"></th>
              <th className="p-2 w-16"></th>
            </tr>
          </thead>
          <tbody className="font-medium text-slate-700">
            {orders.DanhSach.map((item) => {
              return (
                <tr key={item.IDDonHang} className="odd:bg-slate-100 border">
                  <td className="p-2">{item.HoTen}</td>
                  <td className="p-2">{item.DiaChi}</td>
                  <td className="p-2">{checkDate(item.NgayDat)}</td>
                  <td className="p-2">{checkDate(item.NgayGiao)}</td>
                  <td className="p-2 text-center">{item.SoLuong}</td>
                  <td className="p-2">{item.Tong}</td>
                  <td className="p-2 text-center">
                    <span
                      className={clsx(
                        'py-1 px-2 rounded-xl bg-opacity-20 text-center text-sm w-24',
                        statusOrderCSS(item.TrangThai)
                      )}
                    >
                      {statusOrder[item.TrangThai]}
                    </span>
                  </td>
                  <td className="p-2 text-indigo-500 font-semibold w-16 align-middle">
                    <span className="w-full">
                      <TbListDetails
                        onClick={() => transferOrderDetail(item.IDDonHang)}
                        size={20}
                        className="cursor-pointer mx-auto"
                      />
                    </span>
                  </td>
                  <td className="p-2 text-indigo-500 font-semibold w-16 align-middle">
                    <span className="w-full">
                      <BsPencilSquare
                        onClick={() => updateOrder(item)}
                        size={20}
                        className="cursor-pointer mx-auto"
                      />
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <div
        className={clsx(
          formUpdate ? 'z-30' : '-z-30',
          'fixed flex justify-center items-center inset-0 bg-slate-900 bg-opacity-20'
        )}
      >
        <div
          className={clsx(
            !formUpdate ? 'scale-90 opacity-0' : 'scale-100 opacity-100',
            style['hide-scrollbar'],
            'flex w-full flex-col bg-white rounded-sm overflow-y-scroll sm:w-1/2 max-h-screen transition-all duration-200'
          )}
        >
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-col py-4 px-4 sm:p-6">
            <span className="w-full flex text-slate-600 lg:text-lg">{t(`Thông tin đơn hàng`)}</span>
            <div className="flex flex-col w-full justify-center h-full sm:px-10">
              <div className="flex w-full py-2">
                <div className="w-1/3 lg:w-4/12 items-center flex">
                  <span className="flex text-sm lg:text-base font-semibold text-slate-800">
                    {t(`Tên người đặt`)}
                  </span>
                </div>

                <div className="w-2/3 lg:w-8/12 flex">
                  <input
                    {...register('HoTen')}
                    className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base"
                    type="text"
                    disabled
                    placeholder={t('Họ & tên')}
                  />
                </div>
              </div>

              <div className="flex w-full py-2">
                <div className="w-1/3 lg:w-4/12 items-center flex">
                  <span className="flex text-sm lg:text-base font-semibold text-slate-800">
                    {t(`Địa chỉ`)}
                  </span>
                </div>

                <div className="w-2/3 lg:w-8/12 flex">
                  <input
                    {...register('DiaChi')}
                    className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base"
                    type="text"
                    disabled
                    placeholder={t('Địa chỉ')}
                  />
                </div>
              </div>

              <div className="flex w-full py-2">
                <div className="w-1/3 lg:w-4/12 items-center flex">
                  <span className="flex text-sm lg:text-base font-semibold text-slate-800">
                    {t(`Ngày đặt`)}
                  </span>
                </div>

                <div className="w-2/3 lg:w-8/12 flex">
                  <input
                    {...register('NgayDat')}
                    className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base"
                    disabled
                    placeholder={t('Ngày đặt')}
                  />
                </div>
              </div>

              <div className="flex w-full py-2">
                <div className="w-1/3 lg:w-4/12 items-center flex">
                  <span className="flex text-sm lg:text-base font-semibold text-slate-800">
                    {t(`Ngày giao`)}
                  </span>
                </div>

                <div className="w-2/3 lg:w-8/12 flex">
                  <input
                    {...register('NgayGiao')}
                    className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base"
                    disabled
                    placeholder={t('Ngày giao')}
                  />
                </div>
              </div>

              <div className="flex w-full py-2">
                <div className="w-1/3 lg:w-4/12 items-center flex">
                  <span className="flex text-sm lg:text-base font-semibold text-slate-800">
                    {t(`Số lượng`)}
                  </span>
                </div>
                <div className="w-2/3 lg:w-8/12 flex">
                  <input
                    {...register('SoLuong')}
                    className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base"
                    disabled
                    placeholder={t('Số lượng')}
                  />
                </div>
              </div>
              <div className="flex w-full py-2">
                <div className="w-1/3 lg:w-4/12 items-center flex">
                  <span className="flex text-sm lg:text-base font-semibold text-slate-800">
                    {t(`Số điện thoại`)}
                  </span>
                </div>

                <div className="w-2/3 lg:w-8/12 flex">
                  <input
                    {...register('SoDienThoai')}
                    type="tel"
                    disabled
                    placeholder={t('Số điện thoại')}
                    className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base"
                  />
                </div>
              </div>

              <div className="flex w-full py-2">
                <div className="w-1/3 lg:w-4/12 items-center flex">
                  <span className="flex text-sm lg:text-base font-semibold text-slate-800">
                    {t(`Tổng tiền`)}
                  </span>
                </div>

                <div className="w-2/3 lg:w-8/12 flex">
                  <input
                    {...register('TongTien')}
                    type="number"
                    disabled
                    placeholder={t('Tổng tiền')}
                    className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base"
                  />
                </div>
              </div>

              <div className="flex w-full py-2">
                <div className="w-1/3 lg:w-4/12 items-center flex">
                  <span className="flex text-sm lg:text-base font-semibold text-slate-800">
                    {t(`Trạng thái`)}
                  </span>
                </div>

                <div className="w-2/3 lg:w-8/12 flex">
                  <select
                    {...register('TrangThai')}
                    className="border border-sky-200 w-full px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 text-sm lg:text-base"
                  >
                    <option value="0">{t(`Chưa xử lý`)}</option>
                    <option value="1">{t(`Hủy đơn hàng`)}</option>
                    <option value="2">{t(`Đang giao`)}</option>
                    <option value="3">{t(`Giao thành công`)}</option>
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
                  {t(`Trở lại`)}
                </button>
                <button
                  type="submit"
                  className="py-2 px-3 bg-slate-700 hover:bg-slate-500 shadow-sm border transition rounded-sm text-white"
                >
                  {t(`Cập nhật`)}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default OrderManagement
