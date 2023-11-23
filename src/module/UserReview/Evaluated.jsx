import { useTranslation } from 'react-i18next'
import { AiFillStar } from 'react-icons/ai'
import star from '../../assets/images/star.png'
import { useContext, useEffect, useState } from 'react'
import { db } from '../../firebase/firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import Context from '../../store/Context'
import { BiMessageRoundedEdit } from 'react-icons/bi'

function Evaluated() {
  const { t } = useTranslation()
  const { user } = useContext(Context)
  const [data, setData] = useState([])

  const changeCostWithDots = (item) => {
    return item.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
  }

  useEffect(() => {
    const getDataFirebase = async () => {
      const docRef = await getDocs(collection(db, 'SanPham-BinhLuan'))

      let result = []
      docRef.forEach((item) => {
        if (item.data().User === user.HoTen && item.data().BinhLuan !== '') {
          result.push(item.data())
        }
        setData(result)
      })
    }

    getDataFirebase()
  }, [])

  return (
    <>
      {data.length === 0 && (
        <div className="bg-white w-full mt-4 h-[400px] flex flex-col justify-center border text-center border-gray-100 drop-shadow-lg">
          <img src={star} alt="img" className="w-40 h-40 mx-auto" />
          <span className="text-lg text-gray-400">{t(`Chưa có đánh giá`)}</span>
        </div>
      )}

      {data.length > 0 &&
        data?.map((item, index) => {
          const stars = Array(item.SoLuongSao).fill(0)

          return (
            <div
              key={index}
              className="bg-white w-full mt-4 py-4 border border-gray-100 drop-shadow-lg"
            >
              <div className="w-full mx-4">
                <div className="w-full flex">
                  <div className="w-40 h-40 lg:w-36 lg:h-36 relative flex items-center">
                    <img src={item.HinhAnh} className="relative" alt="Book_Image" />
                  </div>

                  <div className="flex w-full flex-col mx-3 justify-center gap-1">
                    <span className="w-full text-gray-500 lg:text-lg font-medium">
                      {item.TenSanPham}
                    </span>

                    <span className="w-full text-gray-500 text-sm lg:text-base">
                      {t(`Danh mục`)}: {item.TenDanhMuc}
                    </span>

                    <span className="w-full my-0.5 font-normal text-red-500 lg:text-lg">
                      {changeCostWithDots(item.GiaBan)}đ
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full border-t-2 px-4">
                <div className="w-full py-2">
                  <div className="w-full flex-wrap flex">
                    <div className="w-full flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="font-medium text-blue-500 lg:text-lg">
                          {t(`Đánh giá của bạn`)}
                          <div className="flex cursor-pointer">
                            {stars?.map((index) => (
                              <AiFillStar key={index} className="text-yellow-500 w-7 h-7" />
                            ))}
                          </div>
                        </span>
                      </div>
                      <div>
                        <span className="text-xs md:text-sm font-semibold">11:30 27/12/2022</span>
                      </div>
                    </div>

                    <div className="flex mt-5 gap-1 items-center">
                      <BiMessageRoundedEdit className="w-7 h-7" />
                      <span className="font-normal w-full lg:text-lg">{item.BinhLuan}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
        })}
    </>
  )
}

export default Evaluated
