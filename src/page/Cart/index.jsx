import { IoMdRemove } from "react-icons/io";
import { IoAddSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/path";
function Cart() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-wrap w-full bg-gray-100 px-4">
            <div className="flex flex-wrap w-full py-5">
                <div className="flex w-full lg:px-4">
                    <span className="w-full text-lg font-medium">GIỎ HÀNG CỦA BẠN</span>
                </div>

                <div className="w-full flex flex-wrap lg:flex-row">
                    <div className="w-full lg:w-8/12">
                        <div className="hidden md:flex md:flex-row md:w-full md:justify-between md:bg-white md:py-2 mt-4 shadow-md">
                            <div className="w-full text-sm text-center">Tất cả (2 sản phẩm)</div>
                            <div className="w-full text-sm text-center">Đơn giá</div>
                            <div className="w-full text-sm text-center">Số lượng</div>
                            <div className="w-full text-sm text-center">Thành tiền</div>
                        </div>

                        <div className="w-full bg-white shadow-md flex md:flex-row mt-4">
                            <div className="hidden md:flex md:flex-row md:mx-2 md:my-2 md:justify-between md:w-full">
                                <div className="flex w-full flex-wrap items-center justify-center">
                                    <img src="https://product.hstatic.net/200000122283/product/bna-dat-gia-bao-nhieu_e2f2f0f561b1403aadcee1d2534ea8d1_small.jpg" className="w-36 h-36" alt="Book_Image" />
                                    <div className="mt-2 flex justify-center">
                                        <span className="text-base font-medium">Bạn đắt giá bao nhiêu? - Tái bản 2022</span>
                                    </div>
                                </div>

                                <div className="w-full flex items-center justify-center">
                                    <span className="my-0.5 text-xl font-nnormal mx-1">116.000đ</span>
                                    <span className="my-0.5 text-base font-normal text-gray-400 line-through mx-1">129.000đ</span>
                                </div>

                                <div className="w-full flex flex-row justify-center items-center">
                                    <div className="flex flex-row mx-5 items-center w-24 rounded-sm border border-slate-300">
                                        <div className="w-full border-r-2 flex justify-center cursor-pointer">
                                            <IoMdRemove className="w-5 h-7 text-gray-300" />
                                        </div>
                                        <div className="w-full flex justify-center">
                                            <span className="text-gray-800 font-semibold">1</span>
                                        </div>

                                        <div className="w-full border-l-2 flex justify-center cursor-pointer">
                                            <IoAddSharp className="w-5 h-7 text-gray-500" />
                                        </div>
                                    </div>
                                    <div className="border px-4 rounded-sm bg-gray-300 hover:bg-gray-400 hover:text-white cursor-pointer">Xoá</div>
                                </div>


                                <div className="w-full flex items-center justify-center">
                                    <span className="my-0.5 text-xl font-medium text-red-600">116.000đ</span>
                                </div>
                            </div>


                            <div className="w-full my-2 flex flex-wrap md:hidden">
                                <div className="flex w-full flex-row">
                                    <div className="border rounded-sm w-32 h-32 relative flex items-center mx-3">
                                        <img src="https://product.hstatic.net/200000122283/product/bna-dat-gia-bao-nhieu_e2f2f0f561b1403aadcee1d2534ea8d1_small.jpg" className="w-full" alt="Book_Image" />
                                    </div>

                                    <div className="flex w-full flex-col justify-center">
                                        <span className="w-full text-base font-medium text-gray-600">Bạn đắt giá bao nhiêu? - Tái bản 2022</span>
                                        <div className="flex justify-between w-full py-1 items-center">
                                            <span className="my-0.5 text-lg font-medium text-red-600">116.000đ</span>
                                            <span className="my-0.5 text-sm font-normal text-gray-400 line-through mx-3">129.000đ</span>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex flex-row items-center w-full justify-between mt-4">
                                    <div className="flex mx-3 items-center">
                                        <span className="text-gray-500 text-sm font-semibold">Số lượng</span>
                                        <div className="flex flex-row mx-2 items-center w-24 rounded-sm border border-slate-300 justify-between">
                                            <div className="w-full border-r-2 flex justify-center cursor-pointer">
                                                <IoMdRemove className="w-5 h-7 text-gray-300" />
                                            </div>
                                            <div className="w-full flex justify-center">
                                                <span className="text-gray-800 font-semibold">1</span>
                                            </div>

                                            <div className="w-full border-l-2 flex justify-center cursor-pointer">
                                                <IoAddSharp className="w-5 h-7 text-gray-500" />
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mx-3 border-2 px-3 text-sm py-0.5 font-normal rounded-sm bg-gray-300 hover:bg-gray-400 cursor-pointer hover:text-white">Xoá</div>

                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="w-full lg:w-4/12 lg:pl-4 shadow-md">
                        <div className="w-full flex flex-col lg:flex-col bg-white shadow-md mt-4 items-end lg:justify-between p-3">
                            <div className="flex flex-wrap lg:w-full lg:justify-between">
                                <div className="flex flex-col">
                                    <span className="py-1 font-light md:text-lg">Tạm tính</span>
                                    <span className="py-1 font-light md:text-lg">Tổng cộng</span>
                                </div>

                                <div className="flex flex-col ml-10 items-end">
                                    <span className="py-1 font-semibold md:text-lg">116.000đ</span>
                                    <span className="py-1 font-semibold text-red-600 text-xl md:text-2xl">256.000đ</span>
                                </div>
                            </div>
                            <span className="text-gray-500 text-sm md:text-base italic">Phí vận chuyển sẽ được tính ở trang thanh toán</span>
                            <div className="flex mt-4 lg:w-full lg:text-center">
                                <div onClick={() => navigate(PATH.main)} className="lg:hidden px-2 py-1 bg-gray-300 rounded-sm transition mx-4 cursor-pointer text-base md:text-lg hover:bg-gray-400">Tiếp tục mua hàng</div>
                                <div className="px-7 py-1 lg:w-full bg-red-500 lg:px-0 font-medium hover:bg-red-400 transition text-white rounded-sm cursor-pointer text-base md:text-lg">Thanh toán</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

    )
};

export default Cart;