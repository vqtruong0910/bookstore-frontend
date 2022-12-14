import { HiMail } from "react-icons/hi";
import { FiPhoneCall } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { GrFacebookOption } from "react-icons/gr";
import { BsInstagram, BsPersonCircle } from "react-icons/bs";
import { FaPinterestP } from "react-icons/fa"
import { AiOutlineYoutube } from "react-icons/ai";
import { TiSocialTumbler } from "react-icons/ti";
import { FiTwitter, FiHelpCircle } from "react-icons/fi";
import { IoMdContacts } from "react-icons/io";
import { ImNewspaper } from "react-icons/im";
import { PATH } from "../../constants/path";
import { useNavigate } from "react-router-dom";

function Footer() {
    const navigate = useNavigate(); 
    const serviceData = [
        { id: 1, name: "Điều khoản sử dụng", link: PATH.terms.using },
        { id: 2, name: "Chính sách bảo mật thông tin cá nhân", link: PATH.terms.user_infor_privacy },
        { id: 3, name: "Chính sách bảo mật thanh toán", link: PATH.terms.payment_privacy },
    ];

    const helpData = [
        { id: 1, name: "Chính sách vận chuyển", link: PATH.terms.transport },
        { id: 2, name: "Chính sách khách sỉ", link: PATH.terms.wholesale_customer_policy },
    ];

    const accountData = [
        { id: 1, name: "Đăng nhập/Tạo mới tài khoản", link: PATH.login },
    ];

    const contactData = [
        { id: 1, name: "273 An Dương Vương, Quận 5, TP.HCM", icon: <GoLocation className="w-5 h-5 mt-1 mr-1" /> },
        { id: 2, name: "BookStoreCSKH@gmail.com", icon: <HiMail className="w-5 h-5 mt-1 mr-1" /> },
        { id: 3, name: "19002712", icon: <FiPhoneCall className="w-5 h-5 mt-1 mr-1" /> },
    ];

    const iconData = [
        { id: 1, icon: <GrFacebookOption className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 px-1" /> },
        { id: 2, icon: <BsInstagram className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 px-1"/> },
        { id: 3, icon: <AiOutlineYoutube className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 px-1" /> },
        { id: 4, icon: <FiTwitter className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 px-1"/> },
        { id: 5, icon: <TiSocialTumbler className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 px-1" /> },
        { id: 6, icon: <FaPinterestP className="w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 px-1" /> }
    ]
    return (
        <footer className="text-white shadow inline-block md:items-center md:justify-between bg-slate-700 w-full">
            <div className="flex w-full px-4 pt-4">
                <div className="items-center text-sm md:text-base text-gray-400 mr-3">© 2022
                    <span className="hover:underline ml-2">Book Store™ </span>
                </div>
            </div>
            <p className="w-full text-sm md:text-base mt-2 leading-6 px-4">
                Book Store nhận đặt hàng trực tuyến và giao hàng tận nơi.
                KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng.
            </p>

            <div className="mt-3 w-full flex items-center px-4">
                <div className=" flex justify-center items-center">
                    {iconData.map((item, index) => {
                        return (
                            <div key={index} className="cursor-pointer mr-3 border-2 border-slate-500 rounded-full text-white bg-slate-500 transition ease-in-out delay-100 hover:scale-95 duration-100">
                                {item.icon}
                            </div>
                        )
                    })}
                </div>

            </div>

            <div className="w-full md:grid md:grid-cols-2 lg:grid-cols-4 px-4">
                <ul className="flex">
                    <li className="w-full mt-10 ">
                        <div className="flex w-full">
                            <ImNewspaper className="w-6 h-6 my-0.5 mr-1" />
                            <span className="mr-4 md:mr-6 text-lg md:text-xl font-semibold">DỊCH VỤ</span>
                        </div>
                        <ul className="flex flex-col my-2">
                            {serviceData.map((item, index) => {
                                return (
                                    <li onClick={() => navigate(item.link)} key={index} className="my-2 cursor-pointer hover:text-white text-gray-400 transition">{item.name}</li>
                                )
                            })}
                        </ul>
                    </li>
                </ul>
                <ul className="flex">
                    <li className="w-full mt-10">
                        <div className="flex w-full">
                            <FiHelpCircle className="w-6 h-6 my-0.5 mr-1" />
                            <span className="mr-4 md:mr-6 text-lg md:text-xl font-semibold">HỖ TRỢ</span>
                        </div>

                        <ul className="flex flex-col my-2">
                            {helpData.map((item, index) => {
                                return (
                                    <li onClick={() => navigate(item.link)} key={index} className="my-2 cursor-pointer hover:text-white text-gray-400 transition">{item.name}</li>
                                )
                            })}
                        </ul>
                    </li>
                </ul>
                <ul className="flex">
                    <li className="w-full mt-10 ">
                        <div className="flex w-full">
                            <BsPersonCircle className="w-6 h-6 my-0.5 mr-1" />
                            <span className="mr-4 md:mr-6 text-lg md:text-xl font-semibold">TÀI KHOẢN CỦA TÔI</span>
                        </div>
                        <ul className="flex flex-col my-2">
                            {accountData.map((item, index) => {
                                return (

                                    <li onClick={() => navigate(item.link)} key={index} className="my-2 cursor-pointer hover:text-white text-gray-400 transition">{item.name}</li>

                                )

                            })}
                        </ul>
                    </li>
                </ul>
                <ul className="flex items-stretch">
                    <li className="w-full mt-10">
                        <div className="flex w-full cursor-pointer">
                            <IoMdContacts className="w-6 h-6 my-0.5 mr-1" />
                            <span className="mr-4 md:mr-6 text-lg md:text-xl font-semibold">LIÊN HỆ</span>
                        </div>
                        <ul className="flex flex-col my-2">
                            {contactData.map((item, index) => {
                                return (
                                    <li key={index} className="flex my-2 md:h-7 items-center text-gray-400">
                                        {item.icon}
                                        {item.name}
                                    </li>
                                )
                            })}
                        </ul>
                    </li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;