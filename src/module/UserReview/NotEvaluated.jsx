import { Fragment, useContext, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Context from '../../store/Context'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebase-config'
import { BiPencil } from 'react-icons/bi'
import Comment from '../../components/Comment'
import star from '../../assets/images/star.png'

function NotEvaluated() {
  const { t } = useTranslation()
  const { user } = useContext(Context)
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(null)

  const changeCostWithDots = (item) => {
    return item.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
  }

  const handleClick = (item) => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    })
    setOpen(true)
    setSelected(item)
  }

  useEffect(() => {
    const getDataFirebase = async () => {
      const docRef = await getDocs(collection(db, 'SanPham-BinhLuan'))

      let result = []
      docRef.forEach((item) => {
        if (item.data().User === user.HoTen && item.data().BinhLuan === '') {
          result.push(item.data())
        }
        setData(result)
      })
    }

    getDataFirebase()
  }, [data])

  return (
    <>
      {data.length === 0 && (
        <div className="bg-white w-full mt-4 h-[400px] flex flex-col justify-center border text-center border-gray-100 drop-shadow-lg">
          <img src={star} alt="img" className="w-40 h-40 mx-auto" />
          <span className="text-lg text-gray-400">{t(`Chưa có sản phẩm nào chờ đánh giá`)}</span>
        </div>
      )}

      {data.length > 0 &&
        data?.map((item, index) => (
          <Fragment key={index}>
            <div className="bg-white w-full mt-4 py-4 border border-gray-100 drop-shadow-lg">
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

              <div className="w-full flex justify-center py-2 cursor-pointer">
                <button
                  onClick={() => handleClick(item)}
                  type="button"
                  className="px-3 py-2 gap-1 rounded-md flex items-center justify-center border-blue-500 border-2 transition"
                >
                  <BiPencil className="text-blue-500" />
                  <span className="font-normal text-blue-500">{t(`Thêm nhận xét/đánh giá`)}</span>
                </button>
              </div>
            </div>
          </Fragment>
        ))}

      <Comment open={open} item={selected} setOpen={setOpen} />
    </>
  )
}

export default NotEvaluated
