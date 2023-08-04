import { BsArrowLeftShort } from 'react-icons/bs'
import { useLocation, useNavigate } from 'react-router-dom'
import { PATH } from '../../../constants/path'
import { useState, useEffect, useContext } from 'react'
import axiosJWT from '../../../config/axiosJWT'
import Context from '../../../store/Context'
import Image from '../../../components/Image'
import { API } from '../../../constants/api'
import { useTranslation } from 'react-i18next'

function UserOrderDetail() {
  let orderDetailID = ''
  let costArr = []
  let total = 0
  const navigate = useNavigate()
  const { t } = useTranslation()
  const { state } = useLocation()
  const { darkTheme } = useContext(Context)

  const [orderDetail, setOrderDetail] = useState([])
  useEffect(() => {
    const fetchOrderDetailData = async () => {
      const response = await axiosJWT.get(`${API.ORDER_DETAIL}/${state}`)
      setOrderDetail(response.data)
    }
    fetchOrderDetailData()
  }, [state])

  const changeCostWithDots = (item) => {
    return item.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
  }

  orderDetail?.forEach((item) => {
    costArr.push({
      giaBan: item.GiaBan,
      soLuong: item.SoLuong,
    })
    orderDetailID = item.IDDonHang
  })

  costArr?.forEach((item) => {
    total = total + item.giaBan * item.soLuong
    return total
  })

  return (
    <div className="flex flex-col w-full">
      <div className="flex w-full px-4 md:px-0">
        <span
          className={`w-full text-lg font-semibold mb-2 lg:text-xl ${
            darkTheme ? 'text-white' : 'text-slate-700'
          }`}
        >
          {t(`Chi tiết đơn hàng`)} #{orderDetailID}
        </span>
      </div>

      <div>
        <div className="flex flex-wrap w-full md:mx-0 md:rounded-sm md:bg-white md:shadow-md">
          <div className="hidden md:flex md:flex-row md:justify-between md:w-full md:py-2 md:mx-1">
            <div className="w-full flex justify-center">
              <span className="md:text-xs lg:text-base md:font-semibold lg:font-normal text-gray-500">
                {t(`Sản phẩm`)}
              </span>
            </div>
            <div className="w-full flex justify-center">
              <span className="md:text-xs lg:text-base md:font-semibold lg:font-normal text-gray-500">
                {t(`Giá`)}
              </span>
            </div>
            <div className="w-full flex justify-center">
              <span className="md:text-xs lg:text-base md:font-semibold lg:font-normal text-gray-500">
                {t(`Số lượng`)}
              </span>
            </div>
            <div className="w-full flex justify-center">
              <span className="md:text-xs lg:text-base md:font-semibold lg:font-normal text-gray-500">
                {t(`Thành tiền`)}
              </span>
            </div>
          </div>
          {orderDetail.map((item, index) => (
            <div key={index} className="hidden md:w-full md:flex md:flex-wrap md:justify-between ">
              <div className="w-full justify-center flex flex-row border-t-2">
                <div className="w-full flex justify-center flex-wrap mx-1 my-3">
                  <Image item={item} className="w-40 h-40" />
                  <div className="w-full flex justify-center my-1">
                    <span className="text-sm md:text-base lg:text-lg">{item.TenSanPham}</span>
                  </div>
                </div>
                <div className="w-full flex justify-center items-center my-3">
                  <span className="text-sm md:text-base lg:text-lg">
                    {changeCostWithDots(item.GiaBan)}đ
                  </span>
                </div>
                <div className="w-full flex justify-center items-center my-3">
                  <span className="text-sm md:text-base lg:text-lg">{item.SoLuong}</span>
                </div>
                <div className="w-full flex justify-center items-center my-3">
                  <span className="text-sm md:text-base lg:text-lg">
                    {changeCostWithDots(item.GiaBan * item.SoLuong)}đ
                  </span>
                </div>
              </div>
            </div>
          ))}

          <div className="hidden md:w-full md:border-t-2 md:flex md:flex-row md:py-2">
            <div className="flex flex-col w-9/12 items-end">
              <span className="text-base py-1 text-slate-500">{t(`Tạm tính`)}</span>
              <span className="text-base py-1 text-slate-500">{t(`Phí vận chuyển`)}</span>
              <span className="text-base py-1 text-slate-500">{t(`Tổng cộng`)}</span>
            </div>
            <div className="flex flex-col w-3/12 items-end px-4">
              <span className="py-1 text-base">{changeCostWithDots(total)}đ</span>
              <span className="py-1 text-base">30.000đ</span>
              <span className="text-xl text-red-600 font-semibold">
                {changeCostWithDots(total + 30000)}đ
              </span>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex flex-wrap w-full justify-between bg-white shadow-md mx-4 md:hidden">
            <div className="w-full">
              {orderDetail.map((item, index) => (
                <div key={index} className="w-full my-1 flex border-b-2">
                  <div className="relative items-center m-4">
                    <Image item={item} />
                    <div className="absolute border bg-slate-300 rounded-tl-xl px-2 right-0 bottom-0 flex items-center py-1">
                      <span className="text-xs lg:text-base">x{item.SoLuong}</span>
                    </div>
                  </div>

                  <div className="flex w-full flex-col justify-center">
                    <span className="w-full text-base font-medium text-slate-700">
                      {item.TenSanPham}
                    </span>
                    <span className="w-full my-0.5 text-base font-medium text-red-600">
                      {changeCostWithDots(item.GiaBan)}đ
                    </span>
                    <div className="flex justify-between items-center">
                      <span className="my-5 text-sm text-slate-500 whitespace-nowrap">
                        {t(`Thành tiền`)}
                      </span>
                      <span className="px-4 font-normal">
                        {changeCostWithDots(item.GiaBan * item.SoLuong)}đ
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full flex py-2 justify-end">
              <div className="flex flex-col items-end mx-5">
                <span className="text-sm py-1 text-slate-500">{t(`Tạm tính`)}</span>
                <span className="text-sm py-1 text-slate-500">{t(`Phí vận chuyển`)}</span>
                <span className="text-sm py-1 text-slate-500">{t(`Tổng cộng`)}</span>
              </div>
              <div className="flex flex-col items-end px-4">
                <span className="text-sm py-1">{changeCostWithDots(total)}đ</span>
                <span className="text-sm py-1">30.000đ</span>
                <span className="text-base py-1 text-red-600 font-semibold">
                  {changeCostWithDots(total + 30000)}đ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        onClick={() => navigate(PATH.profile.user_order_management)}
        className={`flex w-full px-4 items-center pt-5 mb-6 ${
          darkTheme ? 'text-white' : 'text-slate-700'
        }`}
      >
        <BsArrowLeftShort className="w-5 h-5 lg:w-8 lg:h-8 cursor-pointer" />
        <span className="text-sm cursor-pointer lg:text-base">
          {t(`Quay lại đơn hàng của tôi`)}
        </span>
      </div>
    </div>
  )
}

export default UserOrderDetail
