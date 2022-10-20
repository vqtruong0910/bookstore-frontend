import { AiOutlineUser, AiOutlineCreditCard } from "react-icons/ai";
import { TbTruck } from "react-icons/tb";
import { BiMessageEdit } from "react-icons/bi";
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { PATH } from "../../constants/path";

function MenuUser({ children }) {
    let location = useLocation();

    const activeLink = 'bg-gray-300 w-full';

    const navigate = useNavigate();


    return (
        <div className="flex">
            <div className="flex flex-wrap items-center justify-center w-full md:w-64 bg-gray-100">
                <div className="flex items-end justify-end">
                    <div className="mt-5 items-center justify-center flex relative">
                        <div className="flex justify-center items-center rounded-full border-2 w-24 h-24 border-blue-300 bg-blue-100">
                            <img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/avatar.png" alt="Avatar" className=" w-12 h-12 text-blue-500" />
                        </div>
                    </div>
                </div>

                <h1 className="text-gray-800 font-semibold text-xl mt-3 text-center w-full">Họ và tên</h1>
                <h1 className="text-gray-500 text-sm w-full text-center mt-2">Địa chỉ</h1>

                <div className="mt-5 w-full flex flex-wrap">
                    <div onClick={() => navigate(PATH.profile.person_info)} className={`flex w-full focus:bg-gray-300 items-center py-3 cursor-pointer ${location.pathname === "/profile/person_info" && activeLink} `}>
                        <div className="w-full flex items-center px-5 md:px-10">
                            <AiOutlineUser className="w-9 h-9 text-slate-700" />
                            <div className="text-gray-800 font-semibold text-sm w-full mx-1 whitespace-nowrap">Thông tin tài khoản</div>
                        </div>
                    </div>
                    <div onClick={() => navigate(PATH.profile.user_order_management)} className={`flex w-full focus:bg-gray-300 items-center py-3 cursor-pointer ${location.pathname === "/profile/user_order_management" && activeLink} `}>
                        <div className="w-full flex items-center px-5 md:px-10">
                            <TbTruck className="w-9 h-9 text-slate-700 rounded-full" />
                            <div className="text-gray-800 font-semibold text-sm w-full mx-1 whitespace-nowrap">Quản lý đơn hàng</div>
                        </div>
                    </div>
                    <div onClick={() => navigate(PATH.profile.user_review)} className={`flex w-full focus:bg-gray-300 items-center py-3 cursor-pointer ${location.pathname === "/profile/user_review" && activeLink} `}>
                        <div className="w-full flex items-center px-5 md:px-10">
                            <BiMessageEdit className="flex w-9 h-9 text-slate-700 rounded-full" />
                            <div className="flex text-gray-800 font-semibold text-sm w-full mx-1 whitespace-nowrap">Đánh giá sản phẩm</div>
                        </div>
                    </div>
                    <div onClick={() => navigate(PATH.profile.user_payment_information)} className={`flex w-full focus:bg-gray-300 items-center py-3 cursor-pointer ${location.pathname === "/profile/user_payment_information" && activeLink} `}>
                        <div className="w-full flex items-center px-5 md:px-10">
                            <AiOutlineCreditCard className="w-9 h-9 text-slate-700 rounded-full" />
                            <div className="text-gray-800 font-semibold text-sm w-full mx-1 whitespace-nowrap">Thông tin thanh toán</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}



export default MenuUser;