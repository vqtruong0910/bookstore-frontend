import React, { useState, useEffect } from "react";
import { RiFileListLine } from "react-icons/ri";
import { IoReload } from "react-icons/io5";
import { HiOutlineTruck } from "react-icons/hi";
import { FiCheckSquare } from "react-icons/fi";
import { BiTaskX } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";
import { UserAllOrderData } from "./UserAllOrderData";
import { useNavigate, Link } from "react-router-dom";
import { PATH } from "../../../constants/path";
import axiosJWT from "../../../config/axiosJWT";

function UserOrderManagement() {
    const navigate = useNavigate();

    const [showDiv, setShowDiv] = useState(1);

    const handleDiv = (e) => {
        setShowDiv(e);
    }

    const [order, setOrder] = useState([]);
    useEffect(() => {
        const fetchAllOrderData = async () => {
            const response = await axiosJWT.get('order/user_id');
            setOrder(response.data);
        }
        fetchAllOrderData();

    }, []);

    const changeCostWithDots = (item) => {
        return item.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    }

    return (
        <div className="flex flex-wrap md:flex-col w-full bg-gray-100 py-5">
            <div className="flex w-full px-4 md:px-0">
                <span className="w-full text-lg font-normal mb-5 lg:text-xl">Quản lý đơn hàng</span>
            </div>

            <form className="w-full px-4 md:px-0 pb-4">
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
                <div className="relative w-full">
                    <div className="flex absolute inset-y-0 left-0 items-center px-3 h-full hover:bg-blue-100 cursor-pointer rounded-sm">
                        <button type="submit"><AiOutlineSearch className="w-5 h-5" /></button>
                    </div>
                    <input type="search" className="focus:outline-none focus:ring-1 focus:ring-blue-200 block py-2 pl-12 w-full text-sm lg:text-base lg:placeholder:text-lg text-gray-900 bg-gray-50 border border-gray-300" placeholder="Tìm kiếm theo Mã đơn hàng hoặc Tên sản phẩm" />

                </div>
            </form>

            <div className="flex justify-center w-full mx-4 md:mx-0 rounded-sm bg-white shadow-md">
                <div className="w-full flex flex-wrap md:flex-nowrap md:cursor-pointer md:px-0 md:py-0">
                    <div onClick={() => handleDiv(1)} className={showDiv === 1 ? "px-4 w-full flex justify-between items-center py-4 md:py-2 bg-slate-300 cursor-pointer" : "px-4 w-full flex justify-between items-center py-4 md:py-2 cursor-pointer"}>
                        <div className="text-sm text-gray-700 font-medium flex items-center w-full md:justify-center">
                            <RiFileListLine className="w-5 h-5 md:hidden" />
                            <span className="flex px-0.5 md:text-xs lg:text-base font-semibold lg:font-normal">Tất cả đơn</span>
                        </div>
                        <div className="w-28 flex justify-center border bg-slate-700 rounded-sm py-2 cursor-pointer md:hidden">
                            <span className="text-xs font-normal text-white px-2">Xem chi tiết</span>
                        </div>
                    </div>
                    <div onClick={() => handleDiv(2)} className={showDiv === 2 ? "px-4 w-full flex justify-between items-center py-4 md:py-2 bg-slate-300 cursor-pointer" : "px-4 w-full flex justify-between items-center py-4 md:py-2 cursor-pointer"}>
                        <div className="text-sm text-gray-700 font-medium flex items-center w-full md:justify-center">
                            <IoReload className="w-5 h-5 md:hidden" />
                            <span className="flex px-0.5 md:text-xs lg:text-base font-semibold lg:font-normal">Đang xử lý</span>
                        </div>
                        <div className="w-28 flex justify-center border bg-slate-700 rounded-sm py-2 cursor-pointer md:hidden">
                            <span className="text-xs font-normal text-white">Xem chi tiết</span>
                        </div>
                    </div>
                    <div onClick={() => handleDiv(3)} className={showDiv === 3 ? "px-4 w-full flex justify-between items-center py-4 md:py-2 bg-slate-300 cursor-pointer" : "px-4 w-full flex justify-between items-center py-4 md:py-2 cursor-pointer"}>
                        <div className="text-sm text-gray-700 font-medium flex items-center w-full md:justify-center">
                            <HiOutlineTruck className="w-5 h-5 md:hidden" />
                            <span className="flex px-0.5 md:text-xs lg:text-base whitespace-nowrap font-semibold lg:font-normal">Đang vận chuyển</span>
                        </div>
                        <div className="w-28 flex justify-center border bg-slate-700 rounded-sm py-2 cursor-pointer md:hidden">
                            <span className="text-xs font-normal text-white">Xem chi tiết</span>
                        </div>
                    </div>
                    <div onClick={() => handleDiv(4)} className={showDiv === 4 ? "px-4 w-full flex justify-between items-center py-4 md:py-2 bg-slate-300 cursor-pointer" : "px-4 w-full flex justify-between items-center py-4 md:py-2 cursor-pointer"}>
                        <div className="text-sm text-gray-700 font-medium flex items-center w-full md:justify-center">
                            <FiCheckSquare className="w-5 h-5 md:hidden" />
                            <span className="flex px-0.5 md:text-xs lg:text-base font-semibold lg:font-normal">Đã giao</span>
                        </div>
                        <div className="w-28 flex justify-center border bg-slate-700 rounded-sm py-2 cursor-pointer md:hidden">
                            <span className="text-xs font-normal text-white">Xem chi tiết</span>
                        </div>
                    </div>
                    <div onClick={() => handleDiv(5)} className={showDiv === 5 ? "px-4 w-full flex justify-between items-center py-4 md:py-2 bg-slate-300 cursor-pointer" : "px-4 w-full flex justify-between items-center py-4 md:py-2 cursor-pointer"}>
                        <div className="text-sm text-gray-700 font-medium flex items-center w-full md:justify-center">
                            <BiTaskX className="w-5 h-5 md:hidden" />
                            <span className="flex px-0.5 md:text-xs lg:text-base font-semibold lg:font-normal">Đã hủy</span>
                        </div>
                        <div className="w-28 flex justify-center border bg-slate-700 rounded-sm py-2 cursor-pointer md:hidden">
                            <span className="text-xs font-normal text-white">Xem chi tiết</span>
                        </div>
                    </div>
                </div>
            </div>

            {showDiv === 1 &&
                <div className="w-full px-4 md:px-0">
                    {order.map((item, index) => {
                        return (
                            <div key={index} className="bg-white w-full my-4">
                                <div className="flex py-3 items-center mx-4 font-medium">
                                    ID Đơn Đặt Hàng : {item.IDDonHang}
                                </div>

                                <div className="w-full border-t-2 flex-row flex">
                                    <div className="my-4 mx-4 flex flex-col">
                                        <div>Số lượng đặt mua</div>
                                        <div>Ngày đặt hàng</div>
                                        <div>Ngày giao</div>
                                    </div>

                                    <div className="my-4 flex flex-col mx-4">
                                        <div>{item.SoLuong}</div>
                                        <div>{item.NgayDat}</div>
                                        <div>{item.NgayGiao === null ? <span className="italic text-gray-500">Chưa giao</span> : item.NgayGiao}</div>
                                    </div>
                                </div>

                                <div className="w-full border-t-2">
                                    <div className="w-full pt-2 flex justify-end px-4">
                                        <span className="text-sm md:text-base lg:text-lg">Tổng tiền: {changeCostWithDots(item.Tong)}đ</span>
                                    </div>
                                    <Link
                                        to={PATH.profile.user_order_detail}
                                        state={item.IDDonHang}
                                        className="w-full pb-4 pt-1 flex justify-end px-4">
                                        <span className="border-blue-500 text-blue-500 cursor-pointer border px-2 py-1 text-xs md:text-sm lg:text-base font-normal rounded-sm">Xem chi tiết</span>
                                    </Link>
                                </div>
                            </div>
                        )

                    })}
                </div>
            }

            {showDiv === 2 &&
                <div className="w-full px-4 md:px-0">
                    {UserAllOrderData.map((item, index) => {
                        if (item.status_id === 1)
                            return (
                                <div key={index} className="bg-white w-full my-4">
                                    <div className="flex py-3 items-center">
                                        {item.icon}
                                        <span className="mx-1 text-slate-500 text-sm lg:text-base font-semibold">{item.status}</span>
                                    </div>

                                    <div className="w-full border-t-2">
                                        <div className="w-full mx-4">
                                            <div className="w-full my-4 flex">
                                                <div className="border w-24 h-24 lg:w-28 lg:h-28 relative flex items-center">
                                                    <img src={item.img} className="relative" alt="Book_Image" />
                                                    <div className="absolute border bg-slate-300 rounded-tl-xl px-2 right-0 bottom-0 flex items-center py-1">
                                                        <span className="text-xs lg:text-base">x{item.quantity}</span>
                                                    </div>
                                                </div>

                                                <div className="flex w-full flex-col mx-3">
                                                    <span className="w-full text-sm lg:text-base font-normal text-gray-600">{item.name}</span>
                                                    <span className="w-full my-0.5 text-sm lg:text-base font-normal text-gray-600">{item.cost}.000đ</span>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    <div className="w-full border-t-2">
                                        <div className="w-full pt-2 flex justify-end px-4">
                                            <span className="text-sm md:text-base lg:text-lg">Tổng tiền: {item.cost}.000đ</span>
                                        </div>
                                        <div onClick={() => navigate(PATH.profile.user_order_detail)} className="w-full pb-4 pt-1 flex justify-end px-4">
                                            <span className="border-blue-500 text-blue-500 cursor-pointer border px-2 py-1 text-xs md:text-sm lg:text-base font-normal rounded-sm">Xem chi tiết</span>
                                        </div>
                                    </div>
                                </div>
                            )
                    })}

                </div>
            }

            {showDiv === 3 &&
                <div className="w-full px-4 md:px-0">
                    {UserAllOrderData.map((item, index) => {
                        if (item.status_id === 2)
                            return (
                                <div key={index} className="bg-white w-full my-4">
                                    <div className="flex py-3 items-center">
                                        {item.icon}
                                        <span className="mx-1 text-slate-500 text-sm lg:text-base font-semibold">{item.status}</span>
                                    </div>

                                    <div className="w-full border-t-2">
                                        <div className="w-full mx-4">
                                            <div className="w-full my-4 flex">
                                                <div className="w-28 h-28 relative border flex items-center">
                                                    <img src={item.img} className="relative" alt="Book_Image" />
                                                    <div className="absolute border bg-slate-300 rounded-tl-xl px-2 right-0 bottom-0 flex items-center py-1">
                                                        <span className="text-xs lg:text-base">x{item.quantity}</span>
                                                    </div>
                                                </div>

                                                <div className="flex w-full flex-col mx-3">
                                                    <span className="w-full text-sm lg:text-base font-normal text-gray-600">{item.name}</span>
                                                    <span className="w-full my-0.5 text-sm lg:text-base font-normal text-gray-600">{item.cost}.000đ</span>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    <div className="w-full border-t-2">
                                        <div className="w-full pt-2 flex justify-end px-4">
                                            <span className="text-sm md:text-base lg:text-lg">Tổng tiền: {item.cost}.000đ</span>
                                        </div>
                                        <div onClick={() => navigate(PATH.profile.user_order_detail)} className="w-full pb-4 pt-1 flex justify-end px-4">
                                            <span className="border-blue-500 text-blue-500 cursor-pointer border px-2 py-1 text-xs md:text-sm lg:text-base font-normal rounded-sm">Xem chi tiết</span>
                                        </div>
                                    </div>
                                </div>
                            )
                    })}

                </div>
            }

            {showDiv === 4 &&
                <div className="w-full px-4 md:px-0">
                    {UserAllOrderData.map((item, index) => {
                        if (item.status_id === 3)
                            return (
                                <div key={index} className="bg-white w-full my-4">
                                    <div className="flex py-3 items-center">
                                        {item.icon}
                                        <span className="mx-1 text-slate-500 text-sm lg:text-base font-semibold">{item.status}</span>
                                    </div>

                                    <div className="w-full border-t-2">
                                        <div className="w-full mx-4">
                                            <div className="w-full my-4 flex">
                                                <div className="w-28 h-28 relative border flex items-center">
                                                    <img src={item.img} className="relative" alt="Book_Image" />
                                                    <div className="absolute border bg-slate-300 rounded-tl-xl px-2 right-0 bottom-0 flex items-center py-1">
                                                        <span className="text-xs lg:text-base">x{item.quantity}</span>
                                                    </div>
                                                </div>

                                                <div className="flex w-full flex-col mx-3">
                                                    <span className="w-full text-sm lg:text-base font-normal text-gray-600">{item.name}</span>
                                                    <span className="w-full my-0.5 text-sm lg:text-base font-normal text-gray-600">{item.cost}.000đ</span>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    <div className="w-full border-t-2">
                                        <div className="w-full pt-2 flex justify-end px-4">
                                            <span className="text-sm md:text-base lg:text-lg">Tổng tiền: {item.cost}.000đ</span>
                                        </div>
                                        <div onClick={() => navigate(PATH.profile.user_order_detail)} className="w-full pb-4 pt-1 flex justify-end px-4">
                                            <span className="border-blue-500 text-blue-500 cursor-pointer border px-2 py-1 text-xs md:text-sm lg:text-base font-normal rounded-sm">Xem chi tiết</span>
                                        </div>
                                    </div>
                                </div>
                            )
                    })}

                </div>
            }

            {showDiv === 5 &&
                <div className="w-full px-4 md:px-0">
                    {UserAllOrderData.map((item, index) => {
                        if (item.status_id === 4)
                            return (
                                <div key={index} className="bg-white w-full my-4">
                                    <div className="flex py-3 items-center">
                                        {item.icon}
                                        <span className="mx-1 text-slate-500 text-sm lg:text-base font-semibold">{item.status}</span>
                                    </div>

                                    <div className="w-full border-t-2">
                                        <div className="w-full mx-4">
                                            <div className="w-full my-4 flex">
                                                <div className="w-28 h-28 relative border flex items-center">
                                                    <img src={item.img} className="relative" alt="Book_Image" />
                                                    <div className="absolute border bg-slate-300 rounded-tl-xl px-2 right-0 bottom-0 flex items-center py-1">
                                                        <span className="text-xs lg:text-base">x{item.quantity}</span>
                                                    </div>
                                                </div>

                                                <div className="flex w-full flex-col mx-3">
                                                    <span className="w-full text-sm lg:text-base font-normal text-gray-600">{item.name}</span>
                                                    <span className="w-full my-0.5 text-sm lg:text-base font-normal text-gray-600">{item.cost}.000đ</span>
                                                </div>

                                            </div>

                                        </div>
                                    </div>

                                    <div className="w-full border-t-2">
                                        <div className="w-full pt-2 flex justify-end px-4">
                                            <span className="text-sm md:text-base lg:text-lg">Tổng tiền: {item.cost}.000đ</span>
                                        </div>
                                        <div onClick={() => navigate(PATH.profile.user_order_detail)} className="w-full pb-4 pt-1 flex justify-end px-4">
                                            <span className="border-blue-500 text-blue-500 cursor-pointer border px-2 py-1 text-xs md:text-sm lg:text-base font-normal rounded-sm">Xem chi tiết</span>
                                        </div>
                                    </div>
                                </div>
                            )
                    })}

                </div>
            }
        </div>
    )
}

export default UserOrderManagement;