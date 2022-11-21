import { AiOutlineUser } from "react-icons/ai";
import { TbTruck } from "react-icons/tb";
import { BiMessageEdit } from "react-icons/bi";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PATH } from "../../constants/path";

function MenuUser({ children }) {
    let location = useLocation();

    const activeLink = 'bg-slate-700 w-full';

    const navigate = useNavigate();


    return (
        <div className="w-full h-full md:w-64 bg-gray-100">
            <div className="flex items-end justify-center">
                <div className="mt-5 items-center justify-center flex relative">
                    <div className="flex justify-center items-center">
                        <img src="https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=yk93IQ_5_XkAX-s-OzS&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBOf2W262cuu5MxtuaJUvcfuiNVfxU3F7xPh1JhNjpNeg&oe=63A194B8" 
                        alt="Avatar" className="border-1 rounded-full w-24 h-24" />
                    </div>
                </div>
            </div>

            <h1 className="text-gray-800 font-semibold text-xl mt-3 text-center w-full">Họ và tên</h1>
            <h1 className="text-gray-500 text-sm w-full text-center mt-2">Khách hàng</h1>

            <div className="mt-5 w-full flex flex-wrap">
                <div onClick={() => navigate(PATH.profile.dashboard)} className={`flex w-full focus:bg-gray-300 items-center py-3 cursor-pointer ${location.pathname === PATH.profile.dashboard && activeLink} `}>
                    <div className="w-full flex items-center px-5 md:px-10">
                        <AiOutlineUser className={`w-8 h-8 ${location.pathname === PATH.profile.dashboard && 'text-white'} `} />
                        <div className={`font-semibold text-sm w-full mx-1 whitespace-nowrap ${location.pathname === PATH.profile.dashboard && 'text-white'} `}>Thông tin tài khoản</div>
                    </div>
                </div>
                <div onClick={() => navigate(PATH.profile.user_order_management)} className={`flex w-full focus:bg-gray-300 items-center py-3 cursor-pointer ${location.pathname === PATH.profile.user_order_management && activeLink} `}>
                    <div className="w-full flex items-center px-5 md:px-10">
                        <TbTruck className={`w-8 h-8 ${location.pathname === PATH.profile.user_order_management && 'text-white'} `} />
                        <div className={`font-semibold text-sm w-full mx-1 whitespace-nowrap ${location.pathname === PATH.profile.user_order_management && 'text-white'} `}>Quản lý đơn hàng</div>
                    </div>
                </div>
                <div onClick={() => navigate(PATH.profile.user_review)} className={`flex w-full focus:bg-gray-300 items-center py-3 cursor-pointer ${location.pathname === PATH.profile.user_review && activeLink} `}>
                    <div className="w-full flex items-center px-5 md:px-10">
                        <BiMessageEdit className={`w-8 h-8 ${location.pathname === PATH.profile.user_review && 'text-white'} `} />
                        <div className={`font-semibold text-sm w-full mx-1 whitespace-nowrap ${location.pathname === PATH.profile.user_review && 'text-white'} `}>Đánh giá sản phẩm</div>
                    </div>
                </div>
            </div>
        </div>

    )
}



export default MenuUser;