import clsx from "clsx";
import { useState, useCallback } from "react";
import { BsTags } from "react-icons/bs";

function Menu() {
    const [stateMenuChild, setStateMenuChild] = useState({
        1: false,
    });

    const showMenuChild = useCallback((location) => {
        setStateMenuChild({ ...stateMenuChild, [location]: !stateMenuChild[location] })
    }, [stateMenuChild]);
    return (
        <div className="flex w-full">
            <div className="flex flex-wrap w-full bg-gray-100 py-5">
                <div className="flex w-full px-4">
                    <span className="w-full text-lg font-normal lg:text-xl">Danh mục</span>
                </div>
                <div className="flex w-full px-4 mt-5">
                    <div className="md:hidden w-full flex">
                        <div onClick={() => showMenuChild(1)} className="flex items-center bg-gray-400 px-3 rounded-sm relative">
                            <BsTags className="w-4 h-4 text-white font-medium" />
                            <span className="mx-0.5 text-white font-medium">Bộ lọc</span>
                        </div>
                        <div className= {clsx(stateMenuChild[1] && "w-11/12 md:hidden absolute bg-white mt-9 py-1 p-2 border-2 shadow-md", !stateMenuChild[1] && "hidden w-11/12 md:hidden absolute bg-white mt-9 py-1 p-2 border-2 shadow-md")}>
                            <div className="grid grid-cols-2 gap-x-10 gap-y-5">
                                <div className="w-full">
                                    <span className="border-b-2 text-slate-700 font-medium text-base">KINH TẾ - KINH DOANH</span>
                                    <ul className="w-full">
                                        <li className="text-sm font-medium py-0.5 hover:underline hover:underline-offset-2">Quản trị - lãnh đạo</li>
                                        <li className="text-sm font-medium py-0.5 hover:underline hover:underline-offset-2">Nhân vật - Bài học doanh nghiệp</li>
                                        <li className="text-sm font-medium py-0.5 hover:underline hover:underline-offset-2">Marketing - Bán hàng</li>
                                    </ul>
                                </div>
                                <div className="w-full">
                                    <span className="border-b-2 text-slate-700 font-medium text-base">KINH TẾ - KINH DOANH</span>
                                    <ul className="w-full">
                                        <li className="text-sm font-medium py-0.5 hover:underline hover:underline-offset-2">Quản trị - lãnh đạo</li>
                                        <li className="text-sm font-medium py-0.5 hover:underline hover:underline-offset-2">Nhân vật - Bài học doanh nghiệp</li>
                                        <li className="text-sm font-medium py-0.5 hover:underline hover:underline-offset-2">Marketing - Bán hàng</li>
                                    </ul>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className="md:hidden w-full flex justify-end">
                        <select className="border text-black/70 rounded-sm px-3 py-1 cursor-pointer bg-white border-black/10 focus:outline-none focus:ring-black/40 focus:ring-1 text-sm font-medium">
                            <option value="noibat">Nổi bật</option>
                            <option value="banchay">Bán chạy</option>
                            <option value="phobien">Phổ biến</option>
                            <option value="giatangdan">Giá tăng dần</option>
                            <option value="giagiamdan">Giá giảm dần</option>
                        </select>
                    </div>
                </div>

                <div className="hidden md:bg-white md:flex md:flex-col md:items-center">
                    <div className="px-4 py-1 border-black/20 border text-base text-gray-500 bg-gray-200">
                        Danh mục sản phẩm
                    </div>
                    <div className="flex flex-col">
                        <div></div>
                        <div>Kinh tế</div>
                        <div>Truyện ngắn - Tản văn</div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Menu;