import { Link } from 'react-router-dom'
import { PATH } from '../../constants/path'
import { TbTruck } from 'react-icons/tb'
import { useTranslation } from 'react-i18next'
import emptyOrder from '../../assets/images/empty-order.png'
import { useEffect, useState } from 'react'

const BeingShippedOrder = ({ data }) => {
  const { t } = useTranslation()
  const [beingShipped, setBeingShipped] = useState(false)
  const changeCostWithDots = (item) => {
    return item.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
  }

  useEffect(() => {
    if (data.length > 0) {
      data?.map((item) => {
        if (item.TrangThai === 2) {
          setBeingShipped(true)
        }
      })
    }
  }, [])

  return (
    <>
      {data.length > 0 &&
        data?.map((item, index) => {
          const time = item?.NgayDat ? new Date(item?.NgayDat) : new Date()
          const bookingDate = new Date(time).toLocaleDateString('vi-VI')

          if (item.TrangThai === 2) {
            return (
              <div
                key={index}
                className="bg-white w-full mt-4 border border-gray-100 drop-shadow-lg"
              >
                <div className="flex text-slate-700 gap-1 py-3 items-center mx-4 font-medium">
                  <TbTruck className="w-5 h-5"></TbTruck>
                  <span>
                    {t(`ID đơn đặt hàng :`)} {item.IDDonHang}
                  </span>
                </div>

                <div className="w-full border-t-2 flex-row flex">
                  <div className="my-4 mx-4 flex flex-col">
                    <div>{t(`Số lượng đặt mua`)}</div>
                    <div>{t(`Ngày đặt hàng`)}</div>
                    <div>{t(`Ngày giao`)}</div>
                  </div>

                  <div className="my-4 flex flex-col mx-4">
                    <div>{item.SoLuong}</div>
                    <div>{bookingDate}</div>
                    <div>
                      {item.NgayGiao === null ? (
                        <span className="italic text-gray-500">{t(`Chưa giao`)}</span>
                      ) : (
                        item.NgayGiao
                      )}
                    </div>
                  </div>
                </div>

                <div className="w-full border-t-2">
                  <div className="w-full pt-2 flex justify-end px-4">
                    <span className="text-sm md:text-base lg:text-lg">
                      {t(`Tổng tiền:`)} {changeCostWithDots(item.Tong + 30000)}đ
                    </span>
                  </div>
                  <Link
                    to={PATH.profile.user_order_detail}
                    state={item.IDDonHang}
                    className="w-full pb-4 pt-1 flex justify-end px-4"
                  >
                    <span className="border-blue-500 text-blue-500 cursor-pointer border px-2 py-1 text-xs md:text-sm lg:text-base font-normal rounded-sm">
                      {t(`Xem chi tiết`)}
                    </span>
                  </Link>
                </div>
              </div>
            )
          }
        })}

      {!beingShipped && (
        <div className="bg-white w-full mt-4 h-[400px] flex flex-col justify-center border text-center border-gray-100 drop-shadow-lg">
          <img src={emptyOrder} alt="img" className="w-40 h-40 mx-auto" />
          <span className="text-lg text-gray-400">{t(`Chưa có đơn hàng`)}</span>
        </div>
      )}
    </>
  )
}

export default BeingShippedOrder
