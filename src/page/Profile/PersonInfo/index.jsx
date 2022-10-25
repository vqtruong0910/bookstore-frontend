import React, { useState } from "react";
import { BiPencil, BiLock } from "react-icons/bi";
import { FaRegSmileBeam } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Notify from "../../../components/Notify";
import { PATH } from "../../../constants/path";

function PersonInfo() {
    const navigate = useNavigate();
    const arrayYear = [];
    const curYear = new Date().getFullYear();

    for (let i = curYear - 122; i <= curYear; i++) {
        arrayYear.push(i);
    };

    const [change, setChange] = useState(false);

    return (

        <div className="flex flex-row">
            <div className="flex flex-wrap w-full bg-gray-100 py-5">
                <div className="flex w-full px-4 md:px-0">
                    <span className="w-full text-lg font-normal mb-5 lg:text-xl">Thông tin tài khoản</span>
                </div>

                <div className="flex w-full flex-wrap lg:flex-nowrap mx-2 md:mx-0 bg-white shadow-md">
                    <div className="w-full px-4 lg:w-2/3">
                        <div className="w-full flex flex-wrap py-5">
                            <span className="w-full flex text-slate-600 lg:text-lg">Thông tin cá nhân</span>

                            <div className="flex flex-wrap w-full justify-center">
                                <div className="flex relative py-4 justify-end items-end">
                                    <div className="flex justify-center items-center rounded-full border-2 w-24 h-24 border-blue-300 bg-blue-100">
                                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/avatar.png" alt="Avatar" className=" w-12 h-12 text-blue-500" />
                                    </div>


                                    <div className="flex absolute w-6 h-6 items-center justify-center rounded-full border bg-gray-600">
                                        <input type="file" className="hidden" id="file" />
                                        <label htmlFor="file">
                                            <BiPencil className="w-4 h-4 text-white cursor-pointer" />
                                        </label>
                                    </div>
                                </div>

                                <div className="flex w-full py-2">
                                    <div className="w-1/3 lg:w-4/12 items-center flex">
                                        <span className="flex text-sm lg:text-base">Họ & Tên</span>
                                    </div>

                                    <div className="w-2/3 lg:w-8/12 flex">
                                        <input className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base" type="text" placeholder="Thêm họ tên" />
                                    </div>

                                </div>

                                <div className="flex w-full py-2">
                                    <div className="w-1/3 lg:w-4/12 items-center flex">
                                        <span className="flex text-sm lg:text-base">Email</span>
                                    </div>

                                    <div className="w-2/3 lg:w-8/12 flex">
                                        <input className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base" type="email" placeholder="Thêm email" />
                                    </div>

                                </div>

                                <div className="flex w-full py-2">
                                    <div className="w-1/3 lg:w-4/12 items-center flex">
                                        <span className="flex text-sm lg:text-base">Ngày sinh</span>
                                    </div>

                                    <div className="flex w-2/3 lg:w-8/12">
                                        <div className="flex justify-between w-full">
                                            <select className="border w-1/3 md:w-32 mr-2 px-1 h-8 focus:outline-none focus:ring-sky-200 focus:ring-1 text-sm lg:text-base" name="day" id="day">
                                                <option value="0">Ngày</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                                <option value="13">13</option>
                                                <option value="14">14</option>
                                                <option value="15">15</option>
                                                <option value="16">16</option>
                                                <option value="17">17</option>
                                                <option value="18">18</option>
                                                <option value="19">19</option>
                                                <option value="20">20</option>
                                                <option value="21">21</option>
                                                <option value="22">22</option>
                                                <option value="23">23</option>
                                                <option value="24">24</option>
                                                <option value="25">25</option>
                                                <option value="26">26</option>
                                                <option value="27">27</option>
                                                <option value="28">28</option>
                                                <option value="29">29</option>
                                                <option value="30">30</option>
                                                <option value="31">31</option>
                                            </select>
                                            <select className="border w-1/3 md:w-32 mr-2 px-1 h-8 focus:outline-none focus:ring-sky-200 focus:ring-1 text-sm lg:text-base" name="month" id="month">
                                                <option value="0">Tháng</option>
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                                <option value="6">6</option>
                                                <option value="7">7</option>
                                                <option value="8">8</option>
                                                <option value="9">9</option>
                                                <option value="10">10</option>
                                                <option value="11">11</option>
                                                <option value="12">12</option>
                                            </select>
                                            <select className="border w-1/3 md:w-32 px-1 h-8 focus:outline-none focus:ring-sky-200 focus:ring-1 text-sm lg:text-base" name="year" id="year">
                                                <option value="0">Năm</option>
                                                {arrayYear.map((item, index) => {
                                                    return (
                                                        <option value={item} key={index}>{item}</option>
                                                    )
                                                })}
                                            </select>
                                        </div>

                                    </div>

                                </div>


                                <div className="flex w-full py-2">
                                    <div className="w-1/3 lg:w-4/12 items-center flex">
                                        <span className="flex text-sm lg:text-base">Giới tính</span>
                                    </div>

                                    <div className="w-2/3 lg:w-8/12 flex justify-between">
                                        <div className="w-full">
                                            <input type="radio" value="Male" />
                                            <label htmlFor="Male" className="mx-2">Nam</label>
                                        </div>

                                        <div className="w-full">
                                            <input type="radio" value="Female" />
                                            <label htmlFor="Female" className="mx-2">Nữ</label>
                                        </div>

                                    </div>

                                </div>

                                <div className="flex w-full py-2">
                                    <div className="w-1/3 lg:w-4/12 items-center flex">
                                        <span className="flex text-sm lg:text-base">Số điện thoại</span>
                                    </div>

                                    <div className="w-2/3 lg:w-8/12 flex">
                                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Thêm số điện thoại"
                                            className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base" />
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="w-full flex justify-center py-5 cursor-pointer">
                            <div onClick={() => setChange(!change)} className="w-40 h-10 flex items-center justify-center bg-blue-600 rounded-sm">
                                <span className="font-normal text-white">Lưu thay đổi</span>
                            </div>
                        </div>
                    </div>

                    {change ?
                        <Notify message="Chúc mừng bạn lưu thay đổi thành công" icon={<FaRegSmileBeam className="w-5 h-5 text-blue-600" />} textMessage="text-blue-600"/>
                        :
                        <></>
                    }

                    <div className="w-full lg:w-1/3 flex flex-wrap lg:flex-col px-4 lg:border-l lg:my-5 border-gray-300 py-5 lg:py-0">
                        <div className="w-full flex flex-wrap lg:flex-col border-t lg:border-t-0">
                            <span className="w-full flex text-slate-600  border-gray-300 pt-5 lg:pt-0 lg:text-lg">Bảo mật</span>
                            <div className="w-full flex lg:flex-col">
                                <div className="w-full flex py-2">
                                    <div className="w-full flex">
                                        <div className="flex items-center">
                                            <BiLock className="w-6 h-6" />
                                        </div>

                                        <div className="w-full text-sm whitespace-nowrap mx-1 flex items-center mt-1 lg:text-base">Đổi mật khẩu</div>
                                    </div>

                                    <div onClick={() => navigate(PATH.profile.user_change_password)} className="w-full flex justify-end cursor-pointer">
                                        <div className="border-2 w-20 h-8 flex justify-center rounded-md border-blue-500">
                                            <span className="text-blue-500 flex items-center">Cập nhật</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </div>

    )
}

export default PersonInfo;