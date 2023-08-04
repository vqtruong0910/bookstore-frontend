import { Link } from 'react-router-dom'
import { PATH } from '../../constants/path'
import { MdCancel } from 'react-icons/md'
import { useTranslation } from 'react-i18next'

const CancelledOrder = ({ data }) => {
  const { t } = useTranslation()
  const changeCostWithDots = (item) => {
    return item.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
  }

  return (
    <>
      {data.length > 0 &&
        data?.map((item, index) => {
          const time = item?.NgayDat ? new Date(item?.NgayDat) : new Date()
          const bookingDate = new Date(time).toLocaleDateString('vi-VI')
          const cancelDate = new Date().toLocaleDateString('vi-VI')

          if (item.TrangThai === 1) {
            return (
              <div
                key={index}
                className="bg-white w-full mt-4 border border-gray-100 drop-shadow-lg"
              >
                <div className="flex gap-1 text-slate-700 py-3 items-center mx-4 font-medium">
                  <MdCancel className="w-5 h-5"></MdCancel>
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
                    <div>{cancelDate}</div>
                  </div>
                </div>

                <div className="w-full border-t-2">
                  <div className="w-full pt-2 flex justify-end px-4">
                    <span className="text-sm md:text-base lg:text-lg">
                      {t(`Tổng tiền: `)} {changeCostWithDots(item.Tong + 30000)}đ
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

          return null
        })}
    </>
  )
}

export default CancelledOrder
