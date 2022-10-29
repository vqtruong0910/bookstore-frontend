import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Notify from "../../../components/Notify";
import { BsPersonCheck } from "react-icons/bs";
function UserPaymentInformation() {
    const [change, setChange] = useState(false);
    const [province, setProvince] = useState([]);
    const [district, setDistrict] = useState([]);
    const [ward, setWard] = useState([]);
    const [provinceCode, setProvinceCode] = useState('');
    const [districtCode, setDistrictCode] = useState('');

    useEffect(() => {
        const fetchProvinceData = async () => {
            const response = await axios('https://provinces.open-api.vn/api/p');
            setProvince(response.data);
        }
        fetchProvinceData();

    }, []);

    const handleProvince = (event) => {
        const getProvinceCode = event.target.value;
        // console.log(getProvinceCode);
        setProvinceCode(getProvinceCode);

    }

    useEffect(() => {
        const fetchDistrictData = async () => {
            const response = await axios(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`);
            setDistrict(response.data.districts);
            // console.log(response.data.districts);
        }
        fetchDistrictData();

    }, [provinceCode]);

    const handleDistrict = (event) => {
        const getDistrictCode = event.target.value;
        setDistrictCode(getDistrictCode);

    }

    useEffect(() => {
        const fetchWardData = async () => {
            const response = await axios(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`);
            setWard(response.data.wards);
        }
        fetchWardData();

    }, [districtCode]);

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
                            <span className="flex text-sm lg:text-base">Số điện thoại</span>
                        </div>

                        <div className="w-2/3 lg:w-8/12 flex">
                            <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base" placeholder="Thêm số điện thoại" />
                        </div>
                    </div>
                    <div className="w-full flex my-2">
                        <div className="w-1/3 lg:w-4/12 items-center flex">
                            <span className="flex text-sm lg:text-base">Tỉnh / Thành phố</span>
                        </div>

                        <div className="w-2/3 lg:w-8/12 flex flex-wrap">
                            <select onChange={(e) => handleProvince(e)} className="border rounded-sm w-full px-2 py-1 lg:py-2 border-black/20 focus:outline-none focus:ring-sky-200 focus:ring-1 text-base">
                                <option value="0">Tỉnh / Thành phố</option>
                                {province && province !== undefined ?

                                    province.map(item => (
                                        <option key={item.code} value={item.code} >{item.name}</option>
                                    ))
                                    :
                                    <></>
                                }
                            </select>
                        </div>
                    </div>
                    <div className="w-full flex my-2">
                        <div className="w-1/3 lg:w-4/12 items-center flex">
                            <span className="flex text-sm lg:text-base">Quận / huyện</span>
                        </div>

                        <div className="w-2/3 lg:w-8/12 flex flex-wrap">
                            <select onChange={(e) => handleDistrict(e)} className="border rounded-sm w-full px-2 py-1 lg:py-2 border-black/20 focus:outline-none focus:ring-sky-200 focus:ring-1 text-base">
                                <option value="0">Quận / huyện</option>
                                {district && district !== undefined ?

                                    district.map(item => (
                                        <option key={item.code} value={item.code} >{item.name}</option>
                                    ))
                                    :
                                    <></>
                                }
                            </select>
                        </div>
                    </div>
                    <div className="w-full flex my-2">
                        <div className="w-1/3 lg:w-4/12 items-center flex">
                            <span className="flex text-sm lg:text-base">Phường / xã</span>
                        </div>

                        <div className="w-2/3 lg:w-8/12 flex flex-wrap">
                            <select className="border rounded-sm w-full px-2 py-1 lg:py-2 border-black/20 focus:outline-none focus:ring-sky-200 focus:ring-1 text-base">
                                <option value="0">Phường / xã</option>
                                {ward && ward !== undefined ?
                                    ward.map(item => (
                                        <option key={item.code} value={item.code}>{item.name}</option>
                                    ))
                                    :
                                    <></>
                                }
                            </select>
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
                </div>

                <div className="w-full flex justify-center py-5 cursor-pointer">
                    <div onClick={() => setChange(!change)} className="w-40 h-10 flex items-center justify-center bg-slate-700 hover:bg-slate-500 transition text-white rounded-sm">
                        <span className="font-normal">Cập nhật</span>
                    </div>
                </div>

                {change ?
                    <Notify message="Chúc mừng bạn cập nhật thành công" icon={<BsPersonCheck className="w-5 h-5 text-black" />} textMessage="text-black" />
                    :
                    <></>
                }
            </div>


        </div>
    )
}

export default UserPaymentInformation;