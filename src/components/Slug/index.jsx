import { BsFillGiftFill, BsShieldFillCheck } from 'react-icons/bs'
import { FaPhoneVolume } from 'react-icons/fa'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'

function Slug() {
  return (
    <div className="px-4 hidden xl:px-0 xl:w-4/5 mx-auto mt-10 lg:flex w-full">
      <table className="border-2 border-gray-200 flex w-full">
        <tr className="flex w-full">
          <th className="flex gap-2 justify-start items-center my-3 w-4/5 mx-auto border-r-2">
            <RiMoneyDollarCircleLine className="w-8 h-8 text-orange-400" />
            <div className="flex flex-col">
              <div className="text-left font-bold cursor-pointer hover:text-orange-400 transition-all text-[13px]">
                THANH TOÁN
              </div>
              <div className="font-normal text-sm text-left text-gray-400 text-[13px]">
                Khi Nhận Hàng
              </div>
            </div>
          </th>
        </tr>
        <tr className="flex w-full">
          <th className="flex gap-2 justify-start items-center my-3 w-4/5 mx-auto border-r-2">
            <BsFillGiftFill className="w-8 h-8 text-orange-400" />
            <div className="flex flex-col">
              <div className="text-left font-bold cursor-pointer hover:text-orange-400 transition-all text-[13px]">
                QUÀ TẶNG
              </div>
              <div className="font-normal text-sm text-left text-gray-400 text-[13px]">
                Miễn Phí
              </div>
            </div>
          </th>
        </tr>
        <tr className="flex w-full">
          <th className="flex gap-2 justify-start items-center my-3 w-4/5 mx-auto border-r-2">
            <BsShieldFillCheck className="w-8 h-8 text-orange-400" />
            <div className="flex flex-col">
              <div className="text-left font-bold cursor-pointer hover:text-orange-400 transition-all text-[13px]">
                THANH TOÁN
              </div>
              <div className="font-normal text-sm text-left text-gray-400 text-[13px]">Bảo Mật</div>
            </div>
          </th>
        </tr>
        <tr className="flex w-full">
          <th className="flex gap-2 justify-start items-center my-3 w-4/5 mx-auto">
            <FaPhoneVolume className="w-8 h-8 text-orange-400" />
            <div className="flex flex-col">
              <div className="text-left font-bold cursor-pointer hover:text-orange-400 transition-all text-[13px]">
                HỖ TRỢ
              </div>
              <div className="font-normal text-sm text-left text-gray-400 text-[13px]">24/7</div>
            </div>
          </th>
        </tr>
      </table>
    </div>
  )
}

export default Slug
