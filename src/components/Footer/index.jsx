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

function Footer() {
    const serviceData = [
        { id: 1, name: "Điều khoản sử dụng" },
        { id: 2, name: "Chính sách bảo mật thông tin cá nhân" },
        { id: 3, name: "Chính sách bảo mật thanh toán" },
        { id: 4, name: "Giới thiệu Book Store" },
    ];

    const helpData = [
        { id: 1, name: "Chính sách đổi - trả - hoàn tiền" },
        { id: 2, name: "Chính sách vận chuyển" },
        { id: 3, name: "Phương thức thanh toán và xuất HĐ" },
    ];

    const accountData = [
        { id: 1, name: "Đăng nhập/Tạo mới tài khoản" },
        { id: 3, name: "Chi tiết tài khoản" },
        { id: 4, name: "Lịch sử mua hàng" },
    ];

    const contactData = [
        { id: 1, name: "273 An Dương Vương, Quận 5, TP.HCM", icon: <GoLocation className="w-5 h-5 mt-1 mr-1" /> },
        { id: 2, name: "BookStoreCSKH@gmail.com.vn", icon: <HiMail className="w-5 h-5 mt-1 mr-1" /> },
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
        <footer className="text-white shadow inline-block md:items-center md:justify-between bg-gray-800 w-full">
            <div className="flex w-full px-4 pt-4">
                <div className="items-center text-base text-gray-500 dark:text-gray-400 mr-3">© 2022
                    <span className="hover:underline ml-2">Book Store™ </span>
                </div>
            </div>
            <p className="w-full text-sm mt-2 leading-6 px-4">
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
                            <span className="mr-4 md:mr-6 text-lg font-semibold">DỊCH VỤ</span>
                        </div>
                        <ul className="flex flex-col my-2 text-sm">
                            {serviceData.map((item, index) => {
                                return (
                                    <li key={index} className="my-2 cursor-pointer hover:underline md:h-7">{item.name}</li>
                                )
                            })}
                        </ul>
                    </li>
                </ul>
                <ul className="flex">
                    <li className="w-full mt-10">
                        <div className="flex w-full">
                            <FiHelpCircle className="w-6 h-6 my-0.5 mr-1" />
                            <span className="mr-4 md:mr-6 text-lg font-semibold">HỖ TRỢ</span>
                        </div>

                        <ul className="flex flex-col my-2 text-sm">
                            {helpData.map((item, index) => {
                                return (
                                    <li key={index} className="my-2 cursor-pointer hover:underline md:h-7">{item.name}</li>
                                )
                            })}
                        </ul>
                    </li>
                </ul>
                <ul className="flex">
                    <li className="w-full mt-10 ">
                        <div className="flex w-full">
                            <BsPersonCircle className="w-6 h-6 my-0.5 mr-1" />
                            <span className="mr-4 md:mr-6 text-lg font-semibold">TÀI KHOẢN CỦA TÔI</span>
                        </div>
                        <ul className="flex flex-col my-2 text-sm">
                            {accountData.map((item, index) => {
                                return (
                                    <li key={index} className="my-2 cursor-pointer hover:underline md:h-7">{item.name}</li>
                                )

                            })}
                        </ul>
                    </li>
                </ul>
                <ul className="flex items-stretch">
                    <li className="w-full mt-10">
                        <div className="flex w-full cursor-pointer">
                            <IoMdContacts className="w-6 h-6 my-0.5 mr-1" />
                            <span className="mr-4 md:mr-6 text-lg font-semibold">LIÊN HỆ</span>
                        </div>
                        <ul className="flex flex-col my-2 text-sm">
                            {contactData.map((item, index) => {
                                return (
                                    <li key={index} className="flex my-2 md:h-7 items-center">
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