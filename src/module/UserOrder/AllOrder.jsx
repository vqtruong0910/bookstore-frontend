import { BiTimeFive } from 'react-icons/bi'
import { BsFillCartCheckFill } from 'react-icons/bs'
import { MdCancel } from 'react-icons/md'
import { TbTruck } from 'react-icons/tb'
import { Link } from 'react-router-dom'
import { PATH } from '../../constants/path'
import { useTranslation } from 'react-i18next'

const AllOrder = ({ data }) => {
  const { t } = useTranslation()
  const changeCostWithDots = (item) => {
    return item.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
  }

  return (
    <>
      {data.length > 0 &&
        data?.map((item, index) => {
          const bookingTime = item?.NgayDat ? new Date(item?.NgayDat) : new Date()
          const deliveryTime = item?.NgayGiao ? new Date(item?.NgayGiao) : new Date()
          const bookingDate = new Date(bookingTime).toLocaleDateString('vi-VI')
          const deliveryDate = new Date(deliveryTime).toLocaleDateString('vi-VI')

          return (
            <div key={index} className="bg-white w-full mt-4 border border-gray-100 drop-shadow-lg">
              <div className="flex gap-1 text-slate-700 py-3 items-center mx-4 font-medium">
                {item.TrangThai === 0 && <BiTimeFive className="w-5 h-5"></BiTimeFive>}
                {item.TrangThai === 2 && <TbTruck className="w-5 h-5"></TbTruck>}
                {item.TrangThai === 3 && (
                  <BsFillCartCheckFill className="w-5 h-5"></BsFillCartCheckFill>
                )}
                {item.TrangThai === 1 && <MdCancel className="w-5 h-5"></MdCancel>}
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
                    <span className="italic text-gray-500">
                      {item.NgayGiao === null ? t('Chưa giao') : deliveryDate}
                    </span>
                  </div>
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
        })}
    </>
  )
}

export default AllOrder
