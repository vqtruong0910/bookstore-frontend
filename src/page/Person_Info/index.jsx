import { BsPerson, BsPencil } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { BiCalendar, BiEnvelope } from "react-icons/bi";
import { TbArrowRotaryLastRight } from "react-icons/tb";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiFillLock } from "react-icons/ai";
import { useState, useCallback } from "react";
import clsx from "clsx";

function Person_Info() {
    const [stateMenuChild, setStateMenuChild] = useState({
        1: false,   // Ho va ten
        2: false,   // Email
        3: false,   // Gioi tinh
        4: false,   // Ngay sinh
        5: false,   // Dia chi
        6: false,   // Doi mat khau
    });

    const showMenuChild = useCallback((location) => {
        setStateMenuChild({ ...stateMenuChild, [location]: !stateMenuChild[location] })
    }, [stateMenuChild])

    return (
        <div className="flex flex-wrap w-full bg-gray-200">
            <h1 className="text-center w-full py-2 text-lg font-medium">Thông tin tài khoản</h1>

            <div className="flex justify-center w-full py-2">
                <div className="flex w-24 h-24 border-2 rounded-full items-center justify-center relative bg-slate-300">
                    <BsPerson className="w-16 h-16 text-white" />

                    <div className="flex justify-center items-center top-16 right-0 absolute w-5 h-5 rounded-full bg-gray-500">
                        <BsPencil className="text-white w-3 h-3" />
                    </div>
                </div>
            </div>

            <div onClick={() => { showMenuChild(1) }} className="flex flex-wrap w-full py-3 mt-4 items-center bg-gray-100 relative">
                <div className="w-full flex items-center">
                    <BsPerson className="w-5 h-5 ml-5" />
                    <span className="ml-1 font-semibold w-full">Họ và tên</span>
                </div>

                <span className="text-sm text-black/70 w-full ml-11 mt-2">Võ Ngọc Minh A</span>

                <div className="absolute w-full right-6">
                    <HiOutlinePencilAlt className="w-5 h-5 float-right" />
                </div>
            </div>
            {stateMenuChild[1] ?
                <>
                    <div className={clsx(stateMenuChild[1] && 'fixed inset-0 bg-slate-900 bg-opacity-70 md:bg-opacity-0 z-10 lg:hidden lg:z-auto transition-opacity duration-200', !stateMenuChild[1] && 'hidden')} onClick={() => showMenuChild(1)}></div>
                    <div className="flex w-full mx-2 flex-wrap items-center left-0 right-0 bg-white z-20">
                        <span className="ml-3 py-1 font-semibold w-full">Họ và tên</span>
                        <input class="text-black block bg-white w-full border border-slate-300 rounded-sm py-1 pl-3 mx-3 focus: focus:outline-none focus:border-sky-300 focus:ring-sky-200 focus:ring-1 sm:text-sm" placeholder="Họ và tên" type="text" name="fullname" />
                        <div className="bg-slate-700 my-3 flex py-1 w-full rounded-sm mx-3 justify-center text-white">Lưu thay đổi</div>
                    </div>
                </>

                :
                <></>
            }

            <div onClick={() => { showMenuChild(2) }} className="flex flex-wrap w-full py-3 mt-4 items-center bg-gray-100 relative">
                <div className="w-full flex items-center">
                    <BiEnvelope className="w-5 h-5 ml-5" />
                    <span className="ml-1 font-semibold w-full">Email</span>
                </div>

                <span className="text-sm text-black/70 w-full ml-11 mt-2">abc123@gmail.com</span>

                <div className="absolute w-full right-6">
                    <HiOutlinePencilAlt className="w-5 h-5 float-right" />
                </div>
            </div>

            {stateMenuChild[2] ?
                <>
                    <div className={clsx(stateMenuChild[2] && 'fixed inset-0 bg-slate-900 bg-opacity-70 md:bg-opacity-0 z-10 lg:hidden lg:z-auto transition-opacity duration-200', !stateMenuChild[2] && 'hidden')} onClick={() => showMenuChild(2)}></div>
                    <div className="flex w-full mx-2 flex-wrap items-center left-0 right-0 bg-white z-20">
                        <span className="ml-3 py-1 font-semibold w-full">Email</span>
                        <input class="text-black block bg-white w-full border border-slate-300 rounded-sm py-1 pl-3 mx-3 focus: focus:outline-none focus:border-sky-300 focus:ring-sky-200 focus:ring-1 sm:text-sm" placeholder="Email" type="text" name="email" />
                        <div className="bg-slate-700 my-3 flex py-1 w-full rounded-sm mx-3 justify-center text-white">Lưu thay đổi</div>
                    </div>
                </>

                :
                <></>
            }

            <div onClick={() => { showMenuChild(3) }} className="flex flex-wrap w-full py-3 mt-4 items-center bg-gray-100 relative">
                <div className="w-full flex items-center">
                    <TbArrowRotaryLastRight className="w-5 h-5 ml-5" />
                    <span className="ml-1 font-semibold w-full">Giới tính</span>
                </div>

                <span className="text-sm text-black/70 w-full ml-11 mt-2">Nữ</span>

                <div className="absolute w-full right-6">
                    <HiOutlinePencilAlt className="w-5 h-5 float-right" />
                </div>
            </div>
            {stateMenuChild[3] ?
                <>
                    <div className={clsx(stateMenuChild[3] && 'fixed inset-0 bg-slate-900 bg-opacity-70 md:bg-opacity-0 z-10 lg:hidden lg:z-auto transition-opacity duration-200', !stateMenuChild[3] && 'hidden')} onClick={() => showMenuChild(3)}></div>
                    <div className="flex w-full mx-2 flex-wrap items-center left-0 right-0 bg-white z-20">
                        <span className="ml-3 py-1 font-semibold w-full">Giới tính</span>
                        <div className="flex ml-3">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="default-radio-1"></label>
                        </div>
                        <div className="bg-slate-700 my-3 flex py-1 w-full rounded-sm mx-3 justify-center text-white">Lưu thay đổi</div>
                    </div>
                </>

                :
                <></>
            }

            <div className="flex flex-wrap w-full py-3 mt-4 items-center bg-gray-100 relative">
                <div className="w-full flex items-center">
                    <BiCalendar className="w-5 h-5 ml-5" />
                    <span className="ml-1 font-semibold w-full">Ngày sinh</span>
                </div>

                <span className="text-sm text-black/70 w-full ml-11 mt-2">01/01/2022</span>

                <div className="absolute w-full right-6">
                    <HiOutlinePencilAlt className="w-5 h-5 float-right" />
                </div>
            </div>

            <div className="flex flex-wrap w-full py-3 mt-2 items-center bg-gray-100 relative">
                <div className="w-full flex items-center">
                    <MdOutlineLocationOn className="w-5 h-5 ml-5" />
                    <span className="ml-1 font-semibold w-full">Địa chỉ</span>
                </div>

                <span className="text-sm text-black/70 w-full ml-11 mt-2">273 An Dương Vương, Quận 5, TP Hồ Chí Minh</span>

                <div className="absolute w-full right-6">
                    <HiOutlinePencilAlt className="w-5 h-5 float-right" />
                </div>
            </div>

            <div className="flex flex-wrap w-full py-3 my-2 items-center bg-gray-100 relative">
                <div className="w-full flex items-center">
                    <AiFillLock className="w-5 h-5 ml-5" />
                    <span className="ml-1 font-semibold w-full">Đổi mật khẩu</span>
                </div>

                <div className="absolute w-full right-6">
                    <HiOutlinePencilAlt className="w-5 h-5 float-right" />
                </div>
            </div>
        </div>
    )
}

export default Person_Info;