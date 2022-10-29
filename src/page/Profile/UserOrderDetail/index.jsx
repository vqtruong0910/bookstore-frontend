import { BsArrowLeftShort } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../../constants/path";
import { IoReload } from "react-icons/io5";
function UserOrderDetail() {
    const navigate = useNavigate();
    return (
        <div className="flex flex-wrap md:flex-col w-full bg-gray-100 py-5">
            <div className="flex w-full px-4 md:px-0">
                <span className="w-full text-lg font-normal mb-5 lg:text-xl">Chi tiết đơn hàng #1</span>
            </div>

            <div className="w-full justify-between flex mx-4 md:mx-0 mb-2">
                <div className="text-sm text-gray-700 font-medium flex items-center w-full">
                    <IoReload className="w-5 h-5" />
                    <span className="flex px-0.5 md:text-xs lg:text-base font-normal">Đang xử lý</span>
                </div>
                <div className="w-full flex flex-col items-end">
                    <span className="text-xs md:text-sm lg:text-base text-slate-500">Ngày đặt hàng: 12:27 27/12/2022</span>
                    <span className="text-xs md:text-sm lg:text-base text-slate-500">Ngày giao: 00:00 00:00:00</span>
                </div>
            </div>

            <div className="flex flex-wrap w-full mx-4 md:mx-0 rounded-sm bg-white shadow-md">
                <div className="hidden md:flex md:flex-row md:justify-between md:w-full md:py-2 md:mx-1">
                    <div className="w-full flex justify-center">
                        <span className="md:text-xs lg:text-base md:font-semibold lg:font-normal text-gray-500">Sản phẩm</span>
                    </div>
                    <div className="w-full flex justify-center">
                        <span className="md:text-xs lg:text-base md:font-semibold lg:font-normal text-gray-500">Giá</span>
                    </div>
                    <div className="w-full flex justify-center">
                        <span className="md:text-xs lg:text-base md:font-semibold lg:font-normal text-gray-500">Số lượng</span>
                    </div>
                    <div className="w-full flex justify-center">
                        <span className="md:text-xs lg:text-base md:font-semibold lg:font-normal text-gray-500">Giảm giá</span>
                    </div>
                    <div className="w-full flex justify-center">
                        <span className="md:text-xs lg:text-base md:font-semibold lg:font-normal text-gray-500">Tạm tính</span>
                    </div>
                </div>

                <div className="hidden md:w-full md:flex md:flex-wrap md:justify-between ">
                    <div className="w-full justify-center flex flex-row my-3 lg:my-0 border-t-2">
                        <div className="w-full flex justify-center flex-wrap mx-2">
                            <div className="w-28 h-28 lg:w-32 lg:h-32 relative border flex items-center justify-center my-4">
                                <img src="https://cdn0.fahasa.com/media/catalog/product/c/o/co-mot-ngay-bo-me-se-gia-di.jpg" className="w-24 h-24 lg:w-28 lg:h-28" alt="Book_Image" />
                            </div>
                            <div className="w-full flex justify-center my-1">
                                <span className="text-sm lg:test-base">Có một ngày bố mẹ sẽ già đi</span>
                            </div>

                        </div>
                        <div className="w-full flex justify-center my-3">
                            <span className="text-sm lg:text-base">68.000đ</span>
                        </div>
                        <div className="w-full flex justify-center my-3">
                            <span className="text-sm lg:text-base">1</span>
                        </div>
                        <div className="w-full flex justify-center my-3">
                            <span className="text-sm lg:text-base">0%</span>
                        </div>
                        <div className="w-full flex justify-center my-3">
                            <span className="text-sm lg:text-base">68.000đ</span>
                        </div>
                    </div>

                    <div className="w-full justify-center flex flex-row my-3 lg:my-0 border-t-2">
                        <div className="w-full flex justify-center flex-wrap mx-2">
                            <div className="w-28 h-28 lg:w-32 lg:h-32 relative border flex items-center justify-center my-4">
                                <img src="https://cdn0.fahasa.com/media/catalog/product/t/h/thoinienthieukhongthequaylaiay2017.jpg" className="w-24 h-24 lg:w-28 lg:h-28" alt="Book_Image" />
                            </div>
                            <div className="w-full flex justify-center my-1">
                                <span className="text-sm lg:test-base">Thời niên thiếu không thể quay lại ấy</span>
                            </div>

                        </div>
                        <div className="w-full flex justify-center my-3">
                            <span className="text-sm lg:text-base">245.000đ</span>
                        </div>
                        <div className="w-full flex justify-center my-3">
                            <span className="text-sm lg:text-base">1</span>
                        </div>
                        <div className="w-full flex justify-center my-3">
                            <span className="text-sm lg:text-base">0%</span>
                        </div>
                        <div className="w-full flex justify-center my-3">
                            <span className="text-sm lg:text-base">245.000đ</span>
                        </div>
                    </div>

                </div>

                <div className="hidden md:w-full md:border-t-2 md:flex md:flex-row md:py-2">
                    <div className="flex flex-col w-9/12 items-end">
                        <span className="text-sm lg:text-base py-1 text-slate-500">Tạm tính</span>
                        <span className="text-sm lg:text-base py-1 text-slate-500">Phí vận chuyển</span>
                        <span className="text-sm lg:text-base py-1 text-slate-500">Tổng cộng</span>
                    </div>
                    <div className="flex flex-col w-3/12 items-end px-4">
                        <span className="text-sm py-1 lg:text-base">313.000đ</span>
                        <span className="text-sm py-1 lg:text-base">14.000đ</span>
                        <span className="text-lg lg:text-xl text-red-600 font-normal">327.000đ</span>
                    </div>
                </div>

                {/* Mobile */}
                <div className="flex w-full flex-wrap justify-between md:hidden">
                    <div className="w-full py-2">
                        <div className="w-full mx-4">
                            <div className="w-full my-1 flex">
                                <div className="w-32 h-32 relative flex items-center border">
                                    <img src="https://cdn0.fahasa.com/media/catalog/product/c/o/co-mot-ngay-bo-me-se-gia-di.jpg" className="w-28 h-28 mx-1 relative" alt="Book_Image" />
                                    <div className="absolute border bg-slate-300 rounded-tl-xl px-2 right-0 bottom-0 flex items-center py-1">
                                        <span className="text-xs lg:text-base">x1</span>
                                    </div>
                                </div>

                                <div className="flex w-full flex-col mx-3">
                                    <span className="w-full text-sm lg:text-base font-normal text-gray-600">Có một ngày bố mẹ sẽ già đi</span>
                                    <span className="w-full my-0.5 text-sm lg:text-base font-normal text-gray-600">68.000đ</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="w-full py-2">
                        <div className="w-full mx-4">
                            <div className="w-full my-1 flex">
                                <div className="w-32 h-32 relative flex items-center border">
                                    <img src="https://cdn0.fahasa.com/media/catalog/product/t/h/thoinienthieukhongthequaylaiay2017.jpg" className="w-28 h-28 mx-1 relative" alt="Book_Image" />
                                    <div className="absolute border bg-slate-300 rounded-tl-xl px-2 right-0 bottom-0 flex items-center py-1">
                                        <span className="text-xs lg:text-base">x1</span>
                                    </div>
                                </div>

                                <div className="flex w-full flex-col mx-3">
                                    <span className="w-full text-sm lg:text-base font-normal text-gray-600">Thời niên thiếu không thể quay lại ấy</span>
                                    <span className="w-full my-0.5 text-sm lg:text-base font-normal text-gray-600">245.000đ</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="w-full border-t-2 flex flex-row py-2">
                        <div className="flex flex-col w-9/12 items-end">
                            <span className="text-sm lg:text-base py-1 text-slate-500">Tạm tính</span>
                            <span className="text-sm lg:text-base py-1 text-slate-500">Phí vận chuyển</span>
                            <span className="text-sm lg:text-base py-1 text-slate-500">Tổng cộng</span>
                        </div>
                        <div className="flex flex-col w-3/12 items-end px-4">
                            <span className="text-sm py-1 lg:text-base">313.000đ</span>
                            <span className="text-sm py-1 lg:text-base">14.000đ</span>
                            <span className="text-base py-1 text-red-600 font-normal">327.000đ</span>
                        </div>
                    </div>
                </div>

            </div>

            <div onClick={() => navigate(PATH.profile.user_order_management)} className="flex w-full px-4 items-center pt-5">
                <BsArrowLeftShort className="w-5 h-5 lg:w-8 lg:h-8 text-slate-700 cursor-pointer" />
                <span className="text-sm text-slate-700 cursor-pointer lg:text-base">Quay lại đơn hàng của tôi</span>
            </div>
        </div>
    )
}

export default UserOrderDetail;