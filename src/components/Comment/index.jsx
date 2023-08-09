import { createPortal } from 'react-dom'
import { useTranslation } from 'react-i18next'
import Textarea from '../Textarea'
import { VALIDATE } from '../../constants/validate'
import { useForm } from 'react-hook-form'
import IconClose from '../../assets/svg/IconClose'
import { BiPencil } from 'react-icons/bi'
import { AiFillStar } from 'react-icons/ai'

function Comment({ open, item, setOpen }) {
  const { t } = useTranslation()

  const {
    handleSubmit,
    control,
    formState: { isValid },
  } = useForm({ mode: 'onBlur' })

  const onSubmit = (data) => {
    console.log(data)
  }

  return createPortal(
    <>
      {open && item && (
        <>
          <div className="fixed inset-0 bg-slate-900 bg-opacity-70 z-30 transition-opacity duration-200"></div>

          <div className="absolute h-screen z-50 flex w-full top-1/2 -translate-y-[50%] justify-center items-center overflow-y-auto">
            <div className="relative w-full max-w-xl max-h-full">
              <div className="relative bg-white rounded-none shadow">
                <div className="flex items-start justify-between p-4 rounded-t relative">
                  <div className="flex gap-1">
                    <img src={item?.HinhAnh} alt="Book_Image" className="w-32 h-32" />
                    <div className="flex gap-1 flex-col px-2">
                      <span className="text-lg whitespace-normal ml-2">{item?.TenSanPham}</span>

                      <div className="flex gap-0.5 cursor-pointer">
                        <AiFillStar className="text-yellow-500 w-10 h-10" />
                        <AiFillStar className="text-yellow-500 w-10 h-10" />
                        <AiFillStar className="text-yellow-500 w-10 h-10" />
                        <AiFillStar className="text-yellow-500 w-10 h-10" />
                        <AiFillStar className="text-yellow-500 w-10 h-10" />
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setOpen(false)}
                    type="button"
                    className="text-white absolute right-1 bg-transparent bg-gray-500 hover:bg-gray-400 rounded-lg text-sm w-8 h-8 flex flex-1 justify-center items-center transition-all"
                    data-modal-hide="staticModal"
                  >
                    <IconClose />
                  </button>
                </div>

                <div className="p-6 space-y-6">
                  <form onSubmit={handleSubmit(onSubmit)} className="w-full border-t-2 px-4">
                    <div className="w-full flex flex-col gap-10 py-2">
                      <div>
                        <div className="w-full">
                          <span className="font-semibold text-blue-500">
                            {t(`Điều gì làm bạn hài lòng?`)}
                          </span>
                        </div>

                        <Textarea
                          control={control}
                          name={`review-book-${item.IDSanPham}`}
                          id={`review-book-${item.IDSanPham}`}
                          placeholder={t(
                            'Hãy chia sẻ cảm nhận, đánh giá của bạn về sản phẩm này nhé.'
                          )}
                          rules={VALIDATE.review}
                        />
                      </div>

                      <div className="w-full flex justify-center cursor-pointer">
                        <button
                          type="submit"
                          className="text-white flex gap-1 items-center bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                        >
                          <BiPencil className="text-white" />
                          {t(`Gửi đánh giá`)}
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>,

    document.getElementById('root')
  )
}

export default Comment
