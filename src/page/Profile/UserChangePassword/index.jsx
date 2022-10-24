import React from "react";
import { useState, useCallback } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { BsArrowLeftShort } from "react-icons/bs";
import { FaRegSmileBeam } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../constants/path";
import Notify from "../../../components/Notify";

function UserChangePassword() {
    const navigate = useNavigate();
    const [change, setChange] = useState(false);
    const [shown, setShown] = useState({
        1: false,   // Mat khau cu
        2: false,   // Mat khau moi
        3: false,   // Nhap lai mat khau moi
    });

    const showShown = useCallback((location) => {
        setShown({ ...shown, [location]: !shown[location] })
    }, [shown])

    return (
        <div className="flex w-full">
            <div className="flex flex-wrap w-full bg-gray-100 py-5">
                <div className="flex w-full px-4">
                    <span className="w-full text-lg font-normal mb-5 lg:text-xl">Đổi mật khẩu</span>
                </div>

                <div className="mx-2 flex justify-center w-full bg-white">
                    <div className="w-full lg:w-500 px-5 py-5">
                        <div className="flex flex-wrap w-full border border-gray-200 px-4 py-4">
                            <div className="w-full flex flex-wrap">
                                <div className="text-base">Mật khẩu hiện tại</div>

                                <div className="flex w-full relative items-center justify-end">
                                    <input type={shown[1] ? "text" : "password"} placeholder="Nhập mật khẩu hiện tại"
                                        className="w-full flex border rounded-sm px-2 py-2 my-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm" />
                                    <div className="absolute flex px-2" onClick={() => showShown(1)}>
                                        {shown[1] ? <FiEyeOff className="w-5 h-5 text-gray-500" /> : <FiEye className="w-5 h-5 text-gray-500" />}
                                    </div>
                                </div>
                            </div>

                            <div className="flex w-full flex-wrap py-3">
                                <div className="text-base">Mật khẩu mới</div>

                                <div className="flex w-full relative items-center justify-end">
                                    <input type={shown[2] ? "text" : "password"} placeholde="Nhập mật khẩu mới"
                                        className="w-full flex border rounded-sm px-2 py-2 my-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm" />
                                    <div className="absolute flex px-2" onClick={() => showShown(2)}>
                                        {shown[2] ? <FiEyeOff className="w-5 h-5 text-gray-500" /> : <FiEye className="w-5 h-5 text-gray-500" />}
                                    </div>
                                </div>

                                <div className="text-xs">Mật khẩu phải từ 8 kí tự trở lên, bao gồm chữ và số và 1 kí tự in hoa</div>
                            </div>

                            <div className="flex w-full flex-wrap pt-3">
                                <div className="text-base">Nhập lại mật khẩu mới</div>

                                <div className="flex w-full relative items-center justify-end">
                                    <input type={shown[3] ? "text" : "password"} placeholde="Nhập lại mật khẩu mới"
                                        className="w-full flex border rounded-sm px-2 py-2 my-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm" />
                                    <div className="absolute flex px-2" onClick={() => showShown(3)}>
                                        {shown[3] ? <FiEyeOff className="w-5 h-5 text-gray-500" /> : <FiEye className="w-5 h-5 text-gray-500" />}
                                    </div>
                                </div>
                            </div>

                            <div onClick={() => setChange(!change)} className="flex justify-center w-full bg-blue-600 py-2 rounded-sm mt-3 cursor-pointer">
                                <span className="text-white font-normal">Lưu thay đổi</span>
                            </div>
                        </div>

                    </div>
                    {change ?
                       <Notify message="Chúc mừng bạn lưu thay đổi thành công" icon={<FaRegSmileBeam className="w-5 h-5 text-blue-600" />} textMessage="text-blue-600" />
                        :
                        <></>
                    }
                </div>

                <div onClick={() => navigate(PATH.profile.dashboard)} className="flex w-full px-4 items-center pt-5">
                    <BsArrowLeftShort className="w-5 h-5 lg:w-8 lg:h-8 text-blue-600 cursor-pointer" />
                    <span className="text-sm text-blue-600 cursor-pointer lg:text-base">Quay lại thông tin tài khoản của tôi</span>
                </div>
            </div>
        </div>

    )
}

export default UserChangePassword;