import { useState } from "react";
import { IoReload } from "react-icons/io5";
import { BiMessageRoundedCheck } from "react-icons/bi";
import { AiOutlineSmile } from "react-icons/ai";
import { BsStarFill } from "react-icons/bs";
import Notify from "../../../components/Notify";

function UserReview() {
    const [change, setChange] = useState(false);
    const [showDiv, setShowDiv] = useState(1);

    const handleDiv = (e) => {
        setShowDiv(e);
    }
    return (
        <div className="flex flex-wrap md:flex-col w-full bg-gray-100 py-5">
            <div className="flex w-full px-4 md:px-0">
                <span className="w-full text-lg font-normal mb-5 lg:text-xl">Đánh giá sản phẩm</span>
            </div>

            <div className="flex justify-center w-full mx-4 md:mx-0 rounded-sm bg-white cursor-pointer">
                <div className="w-full flex flex-wrap md:flex-nowrap md:cursor-pointer md:px-0 md:py-0">
                    <div onClick={() => handleDiv(1)} className={showDiv === 1 ? "px-4 w-full flex justify-between items-center py-4 md:py-2 bg-blue-100" : "px-4 w-full flex justify-between items-center py-4 md:py-2"}>
                        <div className="text-sm text-gray-700 font-medium flex items-center w-full md:justify-center">
                            <IoReload className="w-5 h-5 md:hidden" />
                            <span className={showDiv === 1 ? "flex px-0.5 md:text-xs lg:text-base md:text-blue-500 font-semibold lg:font-normal" : "flex px-0.5 md:text-xs lg:text-base font-semibold lg:font-normal"}>Chờ đánh giá</span>
                        </div>
                        <div className="w-28 flex justify-center border bg-blue-500 rounded-sm py-2 cursor-pointer md:hidden">
                            <span className="text-xs font-normal text-white px-2">Xem chi tiết</span>
                        </div>
                    </div>
                    <div onClick={() => handleDiv(2)} className={showDiv === 2 ? "px-4 w-full flex justify-between items-center py-4 md:py-2 bg-blue-100" : "px-4 w-full flex justify-between items-center py-4 md:py-2"}>
                        <div className="text-sm text-gray-700 font-medium flex items-center w-full md:justify-center">
                            <BiMessageRoundedCheck className=" w-5 h-5 md:hidden" />
                            <span className={showDiv === 2 ? "flex px-0.5 md:text-xs lg:text-base md:text-blue-500 font-semibold lg:font-normal" : "flex px-0.5 md:text-xs lg:text-base font-semibold lg:font-normal"}>Đã đánh giá</span>
                        </div>
                        <div className="w-28 flex justify-center border bg-blue-500 rounded-sm py-2 cursor-pointer md:hidden">
                            <span className="text-xs font-normal text-white px-2">Xem chi tiết</span>
                        </div>
                    </div>
                </div>
            </div>

            {showDiv === 1 &&
                <div className="w-full px-4 md:px-0">
                    <div className="bg-white w-full my-4" >

                        <div className="w-full border-t-2">
                            <div className="w-full mx-4">
                                <div className="w-full my-4 flex">
                                    <div className="w-24 h-24 lg:w-28 lg:h-28 relative border flex items-center">
                                        <img src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935246933497.jpg" className="relative" alt="Book_Image" />
                                    </div>

                                    <div className="flex w-full flex-col mx-3">
                                        <span className="w-full text-sm lg:text-base font-normal text-gray-600">Xé vài trang thanh xuân, đổi lấy một bản thân nỗ lực</span>
                                        <span className="w-full my-0.5 text-sm lg:text-base font-normal text-gray-600">83.000đ</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="w-full border-t-2 px-4">
                            <div className="w-full py-2">
                                <div className="w-full">
                                    <span className="font-semibold">Điều gì làm bạn hài lòng?</span>
                                </div>
                                <div className="w-full flex my-2">
                                    <input className="w-full border rounded-sm px-2 py-7 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base"
                                        type="text" placeholder="Hãy chia sẻ cảm nhận, đánh giá của bạn về sản phẩm này nhé." />
                                </div>
                                <div className="w-full flex justify-center py-5 cursor-pointer">
                                    <div onClick={() => setChange(!change)} className="w-40 h-10 flex items-center justify-center bg-blue-600 rounded-sm">
                                        <span className="font-normal text-white">Gửi đánh giá</span>
                                    </div>
                                </div>


                            </div>
                        </div>

                    </div>
                </div>
            }
            {change && <Notify message="Cám ơn bạn vì đã đánh giá" icon={<AiOutlineSmile className="w-10 h-10 md:w-14 md:h-14 text-blue-400" />} textMessage="text-blue-500" />}

            {showDiv === 2 &&
                <div className="w-full px-4 md:px-0">
                    <div className="bg-white w-full my-4" >

                        <div className="w-full border-t-2">
                            <div className="w-full mx-4">
                                <div className="w-full my-4 flex">
                                    <div className="w-24 h-24 lg:w-28 lg:h-28 relative border flex items-center">
                                        <img src="https://cdn0.fahasa.com/media/catalog/product/i/m/image_244718_1_5098.jpg" className="relative" alt="Book_Image" />
                                    </div>

                                    <div className="flex w-full flex-col mx-3">
                                        <span className="w-full text-sm lg:text-base font-normal text-gray-600">Hoàng tử bé</span>
                                        <span className="w-full my-0.5 text-sm lg:text-base font-normal text-gray-600">109.000đ</span>
                                    </div>

                                </div>

                            </div>
                        </div>

                        <div className="w-full border-t-2 px-4">
                            <div className="w-full py-2">
                                <div className="w-full flex-wrap flex">
                                    <div className="w-full flex items-center">
                                        <BsStarFill className="w-4 h-4 text-blue-400" />
                                        <span className="font-medium mx-1 text-blue-400">Đánh giá của bạn</span>
                                    </div>
                                    <span className="font-normal w-full">Nội dung rất hay, sâu sắc, chạm đến trái tim người đọc.</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            }
        </div>
    )
}

export default UserReview;