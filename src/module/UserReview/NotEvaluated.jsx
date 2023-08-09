import { Fragment, useContext, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import Context from '../../store/Context'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../../firebase/firebase-config'
import Textarea from '../../components/Textarea'
import { VALIDATE } from '../../constants/validate'
import { BiPencil } from 'react-icons/bi'
import Comment from '../../components/Comment'

function NotEvaluated() {
  const { t } = useTranslation()
  const { user } = useContext(Context)
  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)

  const changeCostWithDots = (item) => {
    return item.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
  }

  const onSubmit = (data) => {
    console.log(data)
  }

  const {
    register,
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({ mode: 'onBlur' })

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
  }, [])

  console.log(data)

  return (
    <>
      {data.length > 0 &&
        data?.map((item) => (
          <Fragment key={item.IDChiTietDonHang}>
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
                      Danh mục: {item.TenDanhMuc}
                    </span>

                    <span className="w-full my-0.5 font-normal text-red-500 lg:text-lg">
                      {changeCostWithDots(item.GiaBan)}đ
                    </span>
                  </div>
                </div>
              </div>

              <div className="w-full flex justify-center py-2 cursor-pointer">
                <button
                  onClick={() => setOpen(!open)}
                  type="button"
                  className="px-3 py-2 gap-1 rounded-md flex items-center justify-center border-blue-500 border-2 transition"
                >
                  <BiPencil className="text-blue-500" />
                  <span className="font-normal text-blue-500">{t(`Thêm nhận xét/đánh giá`)}</span>
                </button>
              </div>

              <Comment id={item.IDSanPham} open={open} />

              {/* <form onSubmit={handleSubmit(onSubmit)} className="w-full border-t-2 px-4">
                <div className="w-full py-2">
                  <div className="w-full">
                    <span className="font-semibold text-blue-500">
                      {t(`Điều gì làm bạn hài lòng?`)}
                    </span>
                  </div>

                  <Textarea
                    control={control}
                    name={`review-book-${item.IDSanPham}`}
                    id={`review-book-${item.IDSanPham}`}
                    placeholder={t('Hãy chia sẻ cảm nhận, đánh giá của bạn về sản phẩm này nhé.')}
                    rules={VALIDATE.review}
                  />

                  <div className="w-full flex justify-center py-2 cursor-pointer">
                    <button
                      type="submit"
                      className="px-3 py-2 gap-1 rounded-md flex items-center justify-center border-blue-500 border-2 transition"
                    >
                      <BiPencil className="text-blue-500" />
                      <span className="font-normal text-blue-500">
                        {t(`Thêm nhận xét/đánh giá`)}
                      </span>
                    </button>
                  </div>
                </div>
              </form> */}
            </div>
          </Fragment>
        ))}
    </>
  )
}

export default NotEvaluated
