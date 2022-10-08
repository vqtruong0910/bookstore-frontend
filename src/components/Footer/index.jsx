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
            {id:1, name:"Điều khoản sử dụng"},
            {id:2, name:"Chính sách bảo mật thông tin cá nhân"},
            {id:3, name:"Chính sách bảo mật thanh toán"},
            {id:4, name:"Giới thiệu Book Store"},
            {id:5, name:"Hệ thống trung tâm nhà sách"},
        ];
    
    const helpData = [
            {id:1, name:"Chính sách đổi - trả - hoàn tiền"},
            {id:2, name:"Chính sách bảo hành - bồi hoàn"},
            {id:3, name:"Chính sách vận chuyển"},
            {id:4, name:"Chính sách khách sỉ"},
            {id:5, name:"Phương thức thanh toán và xuất HĐ"},
        ];

    const accountData = [
            {id:1, name:"Đăng nhập/Tạo mới tài khoản"},
            {id:2, name:"Thay đổi địa chỉ khách hàng"},
            {id:3, name:"Chi tiết tài khoản"},
            {id:4, name:"Lịch sử mua hàng"},
        ];

    const contactData = [
            {id:1, name:"273 An Dương Vương, Quận 5, TP.HCM", icon: <GoLocation className="w-5 h-5 mt-1 mr-1" />},
            {id:2, name:"BookStoreCSKH@gmail.com.vn", icon: <HiMail className="w-5 h-5 mt-1 mr-1" />},
            {id:3, name:"19002712", icon:<FiPhoneCall className="w-5 h-5 mt-1 mr-1" /> },
        ];

    return (
        <footer className="p-4 bg-white text-white rounded-lg shadow inline-block md:items-center md:justify-between md:p-6 dark:bg-gray-800 mt-28 w-full">
            <div className="flex w-full lg:px-4 ">
                <div className="items-center text-base text-gray-500 dark:text-gray-400 mx-3">© 2022
                    <a href="" className="hover:underline ml-2">Book Store™ </a>
                </div>
            </div>
            <p className="mx-2 w-full text-sm mt-2 lg:px-4 leading-6">
                Book Store nhận đặt hàng trực tuyến và giao hàng tận nơi.
                KHÔNG hỗ trợ đặt mua và nhận hàng trực tiếp tại văn phòng.
            </p>

            <div className="mt-3 w-full flex lg:px-4 ">
                <GrFacebookOption className="w-8 h-8 mx-2 border-2 border-slate-500 rounded-full text-white bg-slate-500 transition ease-in-out delay-100 hover:scale-95 duration-100 md:h-7" />
                <BsInstagram className="w-8 h-8 mx-2 border-2 border-slate-500 rounded-full text-white bg-slate-500 transition ease-in-out delay-100 hover:scale-95 duration-100 md:h-7" />
                <AiOutlineYoutube className="w-8 h-8 mx-2 border-2 border-slate-500 rounded-full text-white bg-slate-500 transition ease-in-out delay-100 hover:scale-95 duration-100 md:h-7" />
                <FiTwitter className="w-8 h-8 mx-2 border-2 border-slate-500 rounded-full text-white bg-slate-500 transition ease-in-out delay-100 hover:scale-95 duration-100 md:h-7" />
                <TiSocialTumbler className="w-8 h-8 mx-2 border-2 border-slate-500 rounded-full text-white bg-slate-500 transition ease-in-out delay-100 hover:scale-95 duration-100 md:h-7" />
                <FaPinterestP className="w-8 h-8 mx-2 border-2 border-slate-500 rounded-full text-white bg-slate-500 transition ease-in-out delay-100 hover:scale-95 duration-100 md:h-7" />
            </div>

            <div className="w-full md:grid md:grid-cols-2 lg:grid-cols-4 lg:px-4">
                <ul className="flex mx-2">
                    <li className="w-full mt-10 ">
                        <div className="flex w-full cursor-pointer">
                            <ImNewspaper className="w-6 h-6 my-0.5 mr-1" />
                            <a href="#" className="mr-4 hover:underline md:mr-6 text-lg font-semibold">DỊCH VỤ</a>
                        </div>
                        <ul className="flex flex-col my-2 text-sm">
                            {serviceData.map((item,index) => {
                                return (
                                    <li key={index} className="my-2 cursor-pointer transition ease-in-out delay-100 hover:scale-95 duration-100 md:h-7">{item.name}</li>
                                )
                            })}
                        </ul>
                    </li>
                </ul>
                <ul className="flex mx-2">
                    <li className="w-full mt-10">
                        <div className="flex w-full cursor-pointer">
                            <FiHelpCircle className="w-6 h-6 my-0.5 mr-1" />
                            <a href="#" className="mr-4 hover:underline md:mr-6 text-lg font-semibold">HỖ TRỢ</a>
                        </div>
            
                        <ul className="flex flex-col my-2 text-sm">
                            {helpData.map((item, index) => {
                                return (
                                    <li key={index} className="my-2 cursor-pointer transition ease-in-out delay-100 hover:scale-95 duration-100 md:h-7">{item.name}</li>
                                )
                            })}
                        </ul>
                    </li>
                </ul>
                <ul className="flex mx-2">
                    <li className="w-full mt-10 ">
                        <div className="flex w-full cursor-pointer">
                            <BsPersonCircle className="w-6 h-6 my-0.5 mr-1" />
                            <a href="#" className="mr-4 hover:underline md:mr-6 text-lg font-semibold">TÀI KHOẢN CỦA TÔI</a>
                        </div>
                        <ul className="flex flex-col my-2 text-sm">
                            {accountData.map((item,index) => {
                                return (
                                    <li key={index} className="my-2 cursor-pointer transition ease-in-out delay-100 hover:scale-95 duration-100 md:h-7">{item.name}</li> 
                                )
                               
                            })}
                        </ul>
                    </li>
                </ul>
                <ul className="flex mx-2 items-stretch">
                    <li className="w-full mt-10">
                        <div className="flex w-full cursor-pointer">
                            <IoMdContacts className="w-6 h-6 my-0.5 mr-1" />
                            <a href="#" className="mr-4 hover:underline md:mr-6 text-lg font-semibold">LIÊN HỆ</a>
                        </div>
                        <ul className="flex flex-col my-2 text-sm">
                            {contactData.map((item,index) => {
                                return(
                                    <li className="flex my-2 cursor-pointer transition ease-in-out delay-100 hover:scale-95 duration-100 md:h-7">
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