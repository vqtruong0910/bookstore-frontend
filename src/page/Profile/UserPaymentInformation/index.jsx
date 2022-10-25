import React from "react";
import { useState } from "react";
import Notify from "../../../components/Notify";
import { BsPersonCheck } from "react-icons/bs";
function UserPaymentInformation() {
    const [change, setChange] = useState(false);
    const MessageContainer = (props) => {
        return (
            <div className='messages'>
                {props.messages}
            </div>
        )
    }
    console.log(MessageContainer);

    return (
        <div className="flex flex-wrap md:flex-col w-full bg-gray-100 py-5">
            <div className="flex w-full px-4 md:px-0">
                <span className="w-full text-lg font-normal mb-5 lg:text-xl">Thông tin thanh toán</span>
            </div>

            <div className="flex flex-wrap w-full mx-4 md:mx-0 bg-white shadow-md">
                <div className="w-full flex px-4 my-2 flex-wrap">
                    <div className="w-full flex my-2">
                        <div className="w-1/3 lg:w-4/12 items-center flex">
                            <span className="flex text-sm lg:text-base">Họ & Tên</span>
                        </div>

                        <div className="w-2/3 lg:w-8/12 flex">
                            <input className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base" type="text" placeholder="Thêm họ tên" />
                        </div>
                    </div>
                    <div className="w-full flex my-2">
                        <div className="w-1/3 lg:w-4/12 items-center flex">
                            <span className="flex text-sm lg:text-base">Công ty</span>
                        </div>

                        <div className="w-2/3 lg:w-8/12 flex">
                            <input className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base" type="text" placeholder="Thêm công ty" />
                        </div>
                    </div>
                    <div className="w-full flex my-2">
                        <div className="w-1/3 lg:w-4/12 items-center flex">
                            <span className="flex text-sm lg:text-base">Số điện thoại</span>
                        </div>

                        <div className="w-2/3 lg:w-8/12 flex">
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base" placeholder="Thêm số điện thoại" />
                        </div>
                    </div>
                    <div className="w-full flex my-2">
                        <div className="w-1/3 lg:w-4/12 items-center flex">
                            <span className="flex text-sm lg:text-base">Tỉnh/Thành phố</span>
                        </div>

                        <div className="w-2/3 lg:w-8/12 flex">
                            <input className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base" type="text" placeholder="Thêm tỉnh/thành phố" />
                        </div>
                    </div>
                    <div className="w-full flex my-2">
                        <div className="w-1/3 lg:w-4/12 items-center flex">
                            <span className="flex text-sm lg:text-base">Quận huyện</span>
                        </div>

                        <div className="w-2/3 lg:w-8/12 flex">
                            <input className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base" type="text" placeholder="Thêm quận huyện" />
                        </div>
                    </div>
                    <div className="w-full flex my-2">
                        <div className="w-1/3 lg:w-4/12 items-center flex">
                            <span className="flex text-sm lg:text-base">Phường xã</span>
                        </div>

                        <div className="w-2/3 lg:w-8/12 flex">
                            <input className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base" type="text" placeholder="Thêm phường xã" />
                        </div>
                    </div>
                    <div className="w-full flex my-2">
                        <div className="w-1/3 lg:w-4/12 items-center flex">
                            <span className="flex text-sm lg:text-base">Địa chỉ</span>
                        </div>

                        <div className="w-2/3 lg:w-8/12 flex">
                            <input className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base" type="text" placeholder="Thêm địa chỉ" />
                        </div>
                    </div>
                    <div className="flex w-full py-2">
                        <div className="w-1/3 lg:w-4/12 items-center flex">
                            <span className="flex text-sm lg:text-base">Loại địa chỉ</span>
                        </div>

                        <div className="w-2/3 lg:w-8/12 flex justify-between">
                            <div className="w-full">
                                <input type="radio" value="Male" />
                                <label htmlFor="Male" className="mx-2 text-sm lg:text-base">Nhà riêng/Chung cư</label>
                            </div>

                            <div className="w-full">
                                <input type="radio" value="Female" />
                                <label htmlFor="Female" className="mx-2 text-sm lg:text-base">Cơ quan/Công ty</label>
                            </div>

                        </div>

                    </div>
                </div>

                <div className="w-full flex justify-center py-5 cursor-pointer">
                    <div onClick={() => setChange(!change)} className="w-40 h-10 flex items-center justify-center bg-yellow-400 rounded-sm">
                        <span className="font-normal">Cập nhật</span>
                    </div>
                </div>

                {change ?
                    <Notify message="Chúc mừng bạn cập nhật thành công" icon={<BsPersonCheck className="w-5 h-5 text-blue-600" />} textMessage="text-blue-600"/>
                    :
                    <></>
                }
            </div>


        </div>
    )
}

export default UserPaymentInformation;