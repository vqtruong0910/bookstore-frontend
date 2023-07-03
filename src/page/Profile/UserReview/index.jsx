import { useContext, useEffect, useState } from 'react'
import { IoReload } from 'react-icons/io5'
import { BiMessageRoundedCheck } from 'react-icons/bi'
import { AiOutlineSmile } from 'react-icons/ai'
import { BsStarFill } from 'react-icons/bs'
import Notify from '../../../components/Notify'
import { useForm } from 'react-hook-form'
import LoadingSkeletonUserReview from '../../../components/Loading/LoadingSkeletonUserReview'
import Context from '../../../store/Context'
import { collection, onSnapshot, query } from 'firebase/firestore'
import { db } from '../../../firebase/firebase-config'

function UserReview() {
  const [notify, setNotify] = useState(false)
  const [loading, isLoading] = useState(true)
  const [showDiv, setShowDiv] = useState(1)
  const { darkTheme } = useContext(Context)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: 'onBlur' })

  const handleDiv = (e) => {
    setShowDiv(e)
  }

  const onSubmit = (data) => {
    console.log(data)
    return setNotify(true)
  }

  useEffect(() => {
    const docRef = query(collection(db, 'comments'))
    onSnapshot(docRef, (snapshot) => {
      let results = []
      snapshot.docs.forEach((doc) => {
        results.push({
          id: doc.id,
          ...doc.data(),
        })
      })

      console.log('results >> ', results)
    })

    const topOfElement = document.querySelector('#user-review-management') - 200
    window.scroll({ top: topOfElement, behavior: 'smooth' })

    isLoading(true)
    setTimeout(() => {
      isLoading(false)
    }, 250)
  }, [])

  return (
    <>
      {loading && <LoadingSkeletonUserReview></LoadingSkeletonUserReview>}
      {!loading && (
        <div className="flex flex-wrap md:flex-col w-full border p-4" id="user-review-management">
          <div className="flex w-full">
            <span
              className={`w-full text-lg font-semibold mb-5 lg:text-xl ${
                darkTheme ? 'text-white' : 'text-slate-700'
              }`}
            >
              Đánh giá sản phẩm
            </span>
          </div>

          <div className="flex justify-center w-full rounded-sm bg-white ">
            <div className="w-full flex flex-wrap md:flex-nowrap md:cursor-pointer md:px-0 md:py-0">
              <div
                onClick={() => handleDiv(1)}
                className={
                  showDiv === 1
                    ? 'px-4 w-full flex justify-between items-center py-4 md:py-2 bg-slate-300'
                    : 'px-4 w-full flex justify-between items-center py-4 md:py-2'
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
                    Chờ đánh giá
                  </span>
                </div>
                <div className="w-28 flex justify-center border bg-blue-500 rounded-sm py-2 cursor-pointer md:hidden">
                  <span className="text-xs font-normal text-white px-2">Xem chi tiết</span>
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
                    Đã đánh giá
                  </span>
                </div>
                <div className="w-28 flex justify-center border bg-blue-500 rounded-sm py-2 cursor-pointer md:hidden">
                  <span className="text-xs font-normal text-white px-2">Xem chi tiết</span>
                </div>
              </div>
            </div>
          </div>

          {showDiv === 1 && (
            <div className="w-full">
              <div className="bg-white w-full my-4">
                <div className="w-full border-t-2">
                  <div className="w-full mx-4">
                    <div className="w-full my-4 flex">
                      <div className="w-24 h-24 lg:w-28 lg:h-28 relative border flex items-center">
                        <img
                          src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935246933497.jpg"
                          className="relative"
                          alt="Book_Image"
                        />
                      </div>

                      <div className="flex w-full flex-col mx-3">
                        <span className="w-full text-sm lg:text-base font-normal text-gray-600">
                          Xé vài trang thanh xuân, đổi lấy một bản thân nỗ lực
                        </span>
                        <span className="w-full my-0.5 text-sm lg:text-base font-normal text-gray-600">
                          83.000đ
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="w-full border-t-2 px-4">
                  <div className="w-full py-2">
                    <div className="w-full">
                      <span className="font-semibold text-orange-400">
                        Điều gì làm bạn hài lòng?
                      </span>
                    </div>
                    <div className="w-full flex my-2">
                      <input
                        name="review"
                        {...register('review', { required: true })}
                        className="w-full border rounded-sm px-2 py-7 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base"
                        type="text"
                        placeholder="Hãy chia sẻ cảm nhận, đánh giá của bạn về sản phẩm này nhé."
                      />
                    </div>
                    {errors.review?.type === 'required' && (
                      <div className="text-xs text-red-500 md:text-sm">
                        Vui lòng nhập đánh giá cho sản phẩm
                      </div>
                    )}

                    <div className="w-full flex justify-center py-5 cursor-pointer">
                      <button
                        type="submit"
                        className="w-40 h-10 flex items-center justify-center bg-slate-700 hover:bg-slate-500 transition rounded-sm"
                      >
                        <span className="font-normal text-white">Gửi đánh giá</span>
                      </button>
                    </div>

                    {notify ? (
                      <Notify
                        close="true"
                        message="Cám ơn bạn vì đã đánh giá"
                        icon={<AiOutlineSmile className="w-5 h-5 md:w-7 md:h-7 text-slate-700" />}
                        textMessage="text-slate-700"
                        notify={notify}
                        setNotify={(data) => setNotify(data)}
                      />
                    ) : (
                      <></>
                    )}
                  </div>
                </form>
              </div>
            </div>
          )}

          {showDiv === 2 && (
            <div className="w-full">
              <div className="bg-white w-full my-4">
                <div className="w-full border-t-2">
                  <div className="w-full mx-4">
                    <div className="w-full my-4 flex">
                      <div className="w-24 h-24 lg:w-28 lg:h-28 relative border flex items-center">
                        <img
                          src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_244718_1_5098.jpg"
                          className="relative"
                          alt="Book_Image"
                        />
                      </div>

                      <div className="flex w-full flex-col mx-3">
                        <span className="w-full text-sm lg:text-base font-normal text-gray-600">
                          Hoàng tử bé
                        </span>
                        <span className="w-full my-0.5 text-sm lg:text-base font-normal text-gray-600">
                          109.000đ
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full border-t-2 px-4">
                  <div className="w-full py-2">
                    <div className="w-full flex-wrap flex">
                      <div className="w-full flex items-center justify-between">
                        <div className="flex items-center">
                          <BsStarFill className="w-4 h-4 md:w-5 md:h-5 text-orange-400" />
                          <span className="font-medium mx-1 text-orange-400 md:text-lg">
                            Đánh giá của bạn
                          </span>
                        </div>
                        <div>
                          <span className="text-xs md:text-sm font-semibold">11:30 27/12/2022</span>
                        </div>
                      </div>
                      <span className="font-normal w-full md:text-lg">
                        Nội dung rất hay, sâu sắc, chạm đến trái tim người đọc.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default UserReview
