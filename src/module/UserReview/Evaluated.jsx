import { useTranslation } from 'react-i18next'
import { BsStarFill } from 'react-icons/bs'
import star from '../../assets/images/star.png'

function Evaluated() {
  const { t } = useTranslation()

  return (
    <>
      <div className="bg-white w-full mt-4 h-[400px] flex flex-col justify-center border text-center border-gray-100 drop-shadow-lg">
        <img src={star} alt="img" className="w-40 h-40 mx-auto" />
        <span className="text-lg text-gray-400">{t(`Chưa có đánh giá`)}</span>
      </div>

      {/* <div className="w-full lg:min-h-[400px]">
        <div className="bg-white w-full py-4">
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
                      {t(`Đánh giá của bạn`)}
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
      </div> */}
    </>
  )
}

export default Evaluated
