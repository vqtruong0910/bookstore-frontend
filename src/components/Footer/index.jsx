import { HiMail } from 'react-icons/hi'
import { FiPhoneCall } from 'react-icons/fi'
import { GoLocation } from 'react-icons/go'
import { GrFacebookOption } from 'react-icons/gr'
import { BsInstagram, BsPersonCircle } from 'react-icons/bs'
import { FaPinterestP } from 'react-icons/fa'
import { AiOutlineYoutube } from 'react-icons/ai'
import { TiSocialTumbler } from 'react-icons/ti'
import { FiTwitter, FiHelpCircle } from 'react-icons/fi'
import { IoMdContacts } from 'react-icons/io'
import { ImNewspaper } from 'react-icons/im'
import { PATH } from '../../constants/path'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const serviceData = [
    { id: 1, name: t('Điều khoản sử dụng'), link: PATH.terms.using },
    { id: 2, name: t('Chính sách bảo mật thông tin cá nhân'), link: PATH.terms.user_infor_privacy },
    { id: 3, name: t('Chính sách bảo mật thanh toán'), link: PATH.terms.payment_privacy },
  ]

  const helpData = [
    { id: 1, name: t('Chính sách vận chuyển'), link: PATH.terms.transport },
    { id: 2, name: t('Chính sách khách sỉ'), link: PATH.terms.wholesale_customer_policy },
  ]

  const accountData = [{ id: 1, name: t('Đăng nhập/Tạo mới tài khoản'), link: PATH.login }]

  const contactData = [
    {
      id: 1,
      name: t('273 An Dương Vương, Quận 5, TP.HCM'),
      icon: <GoLocation className="w-5 h-5 mt-1 mr-1" />,
    },
    { id: 2, name: 'BookStoreCSKH@gmail.com', icon: <HiMail className="w-5 h-5 mt-1 mr-1" /> },
    { id: 3, name: '19002712', icon: <FiPhoneCall className="w-5 h-5 mt-1 mr-1" /> },
  ]

  const iconData = [
    { id: 1, icon: <GrFacebookOption className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 px-1" /> },
    { id: 2, icon: <BsInstagram className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 px-1" /> },
    { id: 3, icon: <AiOutlineYoutube className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 px-1" /> },
    { id: 4, icon: <FiTwitter className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 px-1" /> },
    { id: 5, icon: <TiSocialTumbler className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 px-1" /> },
    { id: 6, icon: <FaPinterestP className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 px-1" /> },
  ]
  return (
    <footer className="text-black shadow inline-block md:items-center md:justify-between bg-[#efefef] w-full">
      <div className="w-full mx-auto flex justify-center flex-col xl:w-4/5">
        <div className="flex px-4 pt-4">
          <div className="items-center text-sm md:text-base text-black mr-3">
            © 2022
            <span className="hover:underline ml-2">Book Store™ </span>
          </div>
        </div>

        <p className="w-full text-sm md:text-base mt-2 leading-6 px-4">
          {t(`Book Store nhận đặt hàng trực tuyến và giao hàng tận nơi. `)}
          {t(`KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng.`)}
        </p>

        <div className="mt-3 w-full flex items-center px-4">
          <div className=" flex justify-center items-center">
            {iconData.map((item, index) => {
              return (
                <div
                  key={index}
                  className="cursor-pointer mr-3 border-2 border-slate-500 rounded-full text-white bg-slate-500 transition ease-in-out delay-100 hover:scale-95 duration-100"
                >
                  {item.icon}
                </div>
              )
            })}
          </div>
        </div>

        <div className="md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 mx-4">
          <ul className="flex">
            <li className="w-full mt-10 ">
              <div className="flex w-full">
                <ImNewspaper className="w-6 h-6 my-0.5 mr-1" />
                <span className="mr-4 md:mr-6 md:text-base lg:text-lg font-semibold">
                  {t(`DỊCH VỤ`)}
                </span>
              </div>
              <ul className="flex flex-col my-2">
                {serviceData.map((item, index) => {
                  return (
                    <li
                      onClick={() => navigate(item.link)}
                      key={index}
                      className="my-2 cursor-pointer text-sm hover:text-orange-500 text-black transition"
                    >
                      {item.name}
                    </li>
                  )
                })}
              </ul>
            </li>
          </ul>
          <ul className="flex">
            <li className="w-full mt-10">
              <div className="flex w-full">
                <FiHelpCircle className="w-6 h-6 my-0.5 mr-1" />
                <span className="mr-4 md:mr-6 md:text-base lg:text-lg font-semibold">
                  {t(`HỖ TRỢ`)}
                </span>
              </div>

              <ul className="flex flex-col my-2">
                {helpData.map((item, index) => {
                  return (
                    <li
                      onClick={() => navigate(item.link)}
                      key={index}
                      className="my-2 cursor-pointer text-sm hover:text-orange-500 text-black transition"
                    >
                      {item.name}
                    </li>
                  )
                })}
              </ul>
            </li>
          </ul>
          <ul className="flex">
            <li className="w-full mt-10 ">
              <div className="flex w-full">
                <BsPersonCircle className="w-6 h-6 my-0.5 mr-1" />
                <span className="mr-4 md:mr-6 md:text-base lg:text-lg font-semibold">
                  {t(`TÀI KHOẢN CỦA TÔI`)}
                </span>
              </div>
              <ul className="flex flex-col my-2">
                {accountData.map((item, index) => {
                  return (
                    <li
                      onClick={() => navigate(item.link)}
                      key={index}
                      className="my-2 cursor-pointer text-sm hover:text-orange-500 text-black transition"
                    >
                      {item.name}
                    </li>
                  )
                })}
              </ul>
            </li>
          </ul>
          <ul className="flex items-stretch">
            <li className="w-full mt-10">
              <div className="flex w-full cursor-pointer">
                <IoMdContacts className="w-6 h-6 my-0.5 mr-1" />
                <span className="mr-4 md:mr-6 md:text-base lg:text-lg font-semibold">
                  {t(`LIÊN HỆ`)}
                </span>
              </div>
              <ul className="flex flex-col my-2">
                {contactData.map((item, index) => {
                  return (
                    <li key={index} className="flex my-2 text-sm md:h-7 items-center text-black">
                      {item.icon}
                      {item.name}
                    </li>
                  )
                })}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer
