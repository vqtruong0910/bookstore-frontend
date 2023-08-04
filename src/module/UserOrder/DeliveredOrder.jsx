import { BsFillCartCheckFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { PATH } from '../../constants/path'
import { useEffect } from 'react'
import { addDoc, collection, doc, setDoc } from 'firebase/firestore'
import { db } from '../../firebase/firebase-config'
import { v4 as uuidv4 } from 'uuid'
import { useTranslation } from 'react-i18next'

const DeliveredOrder = ({ data }) => {
  const { t } = useTranslation()
  const changeCostWithDots = (item) => {
    return item.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
  }

  useEffect(() => {
    const dataRes = data ? data.filter((item) => item.TrangThai === 3) : undefined

    console.log('check', ...dataRes)
    ;(() => {
      dataRes.map(async (item) => {
        await setDoc(doc(db, 'orders', item.IDDonHang.toString()), { ...item })
      })
    })()
  }, [])

  return (
    <>
      {data.length > 0 &&
        data?.map((item, index) => {
          const bookingTime = item?.NgayDat ? new Date(item?.NgayDat) : new Date()
          const deliveryTime = item?.NgayGiao ? new Date(item?.NgayGiao) : new Date()
          const bookingDate = new Date(bookingTime).toLocaleDateString('vi-VI')
          const deliveryDate = new Date(deliveryTime).toLocaleDateString('vi-VI')

          if (item.TrangThai === 3) {
            return (
              <div
                key={index}
                className="bg-white w-full mt-4 border border-gray-100 drop-shadow-lg"
              >
                <div className="flex gap-1 text-slate-700 py-3 items-center mx-4 font-medium">
                  <BsFillCartCheckFill className="w-5 h-5"></BsFillCartCheckFill>
                  <span>
                    {t(`ID đơn đặt hàng :`)}
                    {item.IDDonHang}
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
                    <div className="italic text-gray-500">{deliveryDate}</div>
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

export default DeliveredOrder
