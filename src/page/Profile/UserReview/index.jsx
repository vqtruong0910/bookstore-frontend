import { useContext, useEffect, useState } from 'react'
import { IoReload } from 'react-icons/io5'
import { BiMessageRoundedCheck } from 'react-icons/bi'
import LoadingSkeletonUserReview from '../../../components/Loading/LoadingSkeletonUserReview'
import Context from '../../../store/Context'
import { useTranslation } from 'react-i18next'
import { doc, getDoc, setDoc } from 'firebase/firestore'
import { db } from '../../../firebase/firebase-config'
import Evaluated from '../../../module/UserReview/Evaluated'
import NotEvaluated from '../../../module/UserReview/NotEvaluated'

function UserReview() {
  const { t } = useTranslation()
  const { darkTheme, user } = useContext(Context)
  const [loading, isLoading] = useState(true)
  const [showDiv, setShowDiv] = useState(1)
  const [orderDetail, setOrderDetail] = useState([])

  const handleDiv = (e) => {
    setShowDiv(e)
  }

  useEffect(() => {
    isLoading(true)
    setTimeout(() => {
      isLoading(false)
    }, 250)
  }, [])

  useEffect(() => {
    let result = []
    const getDataFirebase = async () => {
      const docRef = await getDoc(doc(db, 'DonHang-ChiTiet', user.Email))
      Object.keys(docRef.data()).forEach((key) => {
        result.push(docRef.data()[key])
      })
      setOrderDetail(result)
    }

    getDataFirebase()
  }, [])

  useEffect(() => {
    orderDetail?.map((item) => {
      item.map(async (item1) => {
        await setDoc(doc(db, 'SanPham-BinhLuan', item1.IDChiTietDonHang.toString()), {
          IDChiTietDonHang: item1.IDChiTietDonHang,
          IDSanPham: item1.IDSanPham,
          TenSanPham: item1.TenSanPham,
          TenDanhMuc: item1.TenDanhMuc,
          TenTheLoai: item1.TenTheLoai,
          GiaBan: item1.GiaBan,
          HinhAnh: item1.HinhAnh,
          User: user.HoTen,
          BinhLuan: '',
          ThoiGianBinhLuan: '',
          SoLuongSao: '',
        })
      })
    })
  }, [orderDetail])

  return (
    <>
      {loading && <LoadingSkeletonUserReview></LoadingSkeletonUserReview>}
      {!loading && (
        <div className="flex flex-wrap md:flex-col w-full min-h-[500px]">
          <div className="flex w-full">
            <span
              className={`w-full text-lg font-semibold mb-5 lg:text-xl ${
                darkTheme ? 'text-white' : 'text-slate-700'
              }`}
            >
              {t(`Đánh giá sản phẩm`)}
            </span>
          </div>

          <div className="flex justify-center w-full rounded-sm bg-white drop-shadow-lg border">
            <div className="w-full flex flex-wrap md:flex-nowrap md:cursor-pointer md:px-0 md:py-0">
              <div
                onClick={() => handleDiv(1)}
                className={
                  showDiv === 1
                    ? 'px-4 w-full flex justify-between items-center py-4 bg-slate-300'
                    : 'px-4 w-full flex justify-between items-center py-4'
                }
              >
                <div className="text-sm text-gray-700 font-medium flex items-center w-full md:justify-center">
                  <IoReload className="w-5 h-5 md:hidden" />
                  <span
                    className={
                      showDiv === 1
                        ? 'flex px-0.5 md:text-xs lg:text-base md:text-slate-600 font-semibold lg:font-normal'
                        : 'flex px-0.5 md:text-xs lg:text-base font-semibold md:text-slate-600 lg:font-normal'
                    }
                  >
                    {t(`Chờ đánh giá`)}
                  </span>
                </div>
                <div className="w-28 flex justify-center border bg-blue-500 rounded-sm py-2 cursor-pointer md:hidden">
                  <span className="text-xs font-normal text-white px-2">{t(`Xem chi tiết`)}</span>
                </div>
              </div>
              <div
                onClick={() => handleDiv(2)}
                className={
                  showDiv === 2
                    ? 'px-4 w-full flex justify-between items-center py-4 md:py-2 bg-slate-300'
                    : 'px-4 w-full flex justify-between items-center py-4 md:py-2'
                }
              >
                <div className="text-sm text-gray-700 font-medium flex items-center w-full md:justify-center">
                  <BiMessageRoundedCheck className=" w-5 h-5 md:hidden" />
                  <span
                    className={
                      showDiv === 2
                        ? 'flex px-0.5 md:text-xs lg:text-base md:text-slate-600 font-semibold lg:font-normal'
                        : 'flex px-0.5 md:text-xs lg:text-base font-semibold lg:font-normal'
                    }
                  >
                    {t(`Đã đánh giá`)}
                  </span>
                </div>
                <div className="w-28 flex justify-center border bg-blue-500 rounded-sm py-2 cursor-pointer md:hidden">
                  <span className="text-xs font-normal text-white px-2">{t(`Xem chi tiết`)}</span>
                </div>
              </div>
            </div>
          </div>

          {showDiv === 1 && <NotEvaluated />}

          {showDiv === 2 && <Evaluated />}
        </div>
      )}
    </>
  )
}

export default UserReview
