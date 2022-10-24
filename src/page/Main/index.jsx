import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import style from "./Main.module.scss";
import Carousel from "../../components/Carousel";
import { NewBookData } from "./NewBookData";
import { BestSellerBookData } from "./BestSellerBookData";
import { PopularBookData } from "./PopularBookData";
import { PATH } from "../../constants/path";
import { RiStarSmileLine } from "react-icons/ri";
import { TbMoonStars } from "react-icons/tb";
import { BsFlower1, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";

function Main() {
    const navigate = useNavigate();
    function NextArrow({ onClick }) {
        return (
            <BsFillArrowRightCircleFill className="absolute right-0 top-1/3 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 z-10 text-slate-600" onClick={onClick} />
        );
    }

    function PrevArrow({ onClick }) {
        return (
            <BsFillArrowLeftCircleFill className="absolute left-0 top-1/3 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 z-10 text-slate-600" onClick={onClick} />
        );
    }
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 1,
        infinite: true,
        arrows: true,
        lazyLoad: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                }
            }
        ]
    };

    return (
        <>
            <Carousel />

            {/* New Book */}
            <div className="w-full lg:h-[650px] md:h-[400px]">
                <div className="flex w-full text-[20px] justify-center items-center mt-5 mb-7 lg:mb-10 border-b-2 border-gray-300">
                    <BsFlower1 className="flex w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 ml-5 mr-2 text-slate-700" />
                    <span className="w-full flex shadow-md text-[22px] font-bolder font-lobster lg:text-5xl md:text-4xl text-slate-700">Sách mới nhất</span>
                </div>

                <div className="w-full">
                    <Slider {...settings} className="mx-7">
                        {NewBookData.map((item, index) => {
                            return (
                                <div key={index} className="grid justify-self-center relative w-full hover:cursor-pointer">

                                    <div className="grid z-20 mt-3 font-semibold text-white text-center items-center absolute ml-2.5 bg-orange-400 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 lg:rounded-full rounded-full">
                                        <span className="text-sm text-slate-700">{item.sale}%</span>
                                    </div>

                                    <div onClick={() => navigate(PATH.detail_book)} className="grid w-full justify-self-center drop-shadow-2xl mt-3 transition ease-in-out delay-100 hover:scale-105 duration-100 ">
                                        <img className="w-11/12" src={item.image} alt="New Book" />
                                    </div>

                                    <div className="grid w-full justify-self-center h-[50px] lg:h-[100px]">
                                        <span className={`${style['product_name']} self-center justify-self-center whitespace-normal w-3/4 text-xs md:text-base lg:text-lg font-medium lg:text-[18px] break-words text-center lg:leading-6`}>{item.name}</span>
                                    </div>


                                    <div className="flex justify-between font-medium text-center text-[14px] md:text-md lg:text-xl w-full ">
                                        <div className="ml-5 text-red-600 ">{item.new_cost}.000đ</div>
                                        <div className="mr-2 line-through text-neutral-400">{item.old_cost}.000đ</div>
                                    </div>

                                    <Link to={PATH.detail_book} className="flex w-full mt-2 mb-4">
                                        <div className="flex w-full rounded-md border-2 border-slate-700 mr-4 ml-2 items-center justify-center md:py-1 lg:py-2">
                                            <FiShoppingBag className="w-5 h-5 text-slate-700" />
                                            <div className=" text-[12px] md:text-xs lg:text-[17px] text-slate-700 py-1">Thêm giỏ hàng</div>
                                        </div>
                                    </Link>

                                </div>
                            )
                        })}

                    </Slider>
                    <div className="w-full flex justify-center mt-14">
                        <Link to="" className="font-semibold text-md hover:text-slate-700 bg-gradient-to-tl from-yellow-300 to-orange-700 text-slate-700 rounded-full lg:py-3 py-1 lg:px-20 px-10 transition ease-in-out delay-100 hover:scale-105 duration-100">Xem thêm</Link>
                    </div>

                </div>
            </div>


            {/* Best seller Book */}
            <div className="w-full lg:h-[650px] md:h-[400px] mt-16 md:mt-32">
                <div className="flex w-full text-[20px] justify-center items-center mt-5 mb-7 lg:mb-10 border-b-2 border-gray-300">
                    <RiStarSmileLine className="flex w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 ml-5 mr-2 text-slate-700" />
                    <span className="w-full flex shadow-md text-[22px] font-bolder font-lobster lg:text-5xl md:text-4xl text-slate-700">Sách bán chạy</span>
                </div>

                <div className="w-full">
                    <Slider {...settings} className="mx-7">
                        {BestSellerBookData.map((item, index) => {
                            return (
                                <div key={index} className="grid justify-self-center relative w-full hover:cursor-pointer">

                                    <div className="grid z-20 mt-3 font-semibold text-white text-center items-center absolute ml-2.5 bg-orange-400 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 lg:rounded-full rounded-full">
                                        <span className="text-sm text-slate-700">{item.sale}%</span>
                                    </div>

                                    <div onClick={() => navigate(PATH.detail_book)} className="grid w-full justify-self-center drop-shadow-2xl mt-3 transition ease-in-out delay-100 hover:scale-105 duration-100 ">
                                        <img className="w-11/12" src={item.image} alt="New Book" />
                                    </div>

                                    <div className="grid w-full justify-self-center h-[50px] lg:h-[100px]">
                                        <span className={`${style['product_name']} self-center justify-self-center whitespace-normal w-3/4 text-xs md:text-base lg:text-lg font-medium lg:text-[18px] break-words text-center lg:leading-6`}>{item.name}</span>
                                    </div>


                                    <div className="flex justify-between font-medium text-center text-[14px] md:text-md lg:text-xl w-full ">
                                        <div className="ml-5 text-red-600 ">{item.new_cost}.000đ</div>
                                        <div className="mr-2 line-through text-neutral-400">{item.old_cost}.000đ</div>
                                    </div>

                                    <Link to={PATH.detail_book} className="flex w-full mt-2 mb-4">
                                        <div className="flex w-full rounded-md border-2 border-slate-700 mr-4 ml-2 items-center justify-center md:py-1 lg:py-2">
                                            <FiShoppingBag className="w-5 h-5 text-slate-700" />
                                            <div className=" text-[12px] md:text-xs lg:text-[17px] text-slate-700 py-1">Thêm giỏ hàng</div>
                                        </div>
                                    </Link>

                                </div>
                            )
                        })}

                    </Slider>
                    <div className="w-full flex justify-center mt-14">
                        <Link to="" className="font-semibold text-md hover:text-slate-700 bg-gradient-to-tl from-yellow-300 to-orange-700 text-slate-700 rounded-full lg:py-3 py-1 lg:px-20 px-10 transition ease-in-out delay-100 hover:scale-105 duration-100">Xem thêm</Link>
                    </div>

                </div>
            </div>

            {/* Popular Book */}
            <div className="w-full lg:h-[650px] md:h-[400px] mt-16 md:mt-32 mb-32">
                <div className="flex w-full text-[20px] justify-center items-center mt-5 mb-7 lg:mb-10 border-b-2 border-gray-300">
                    <TbMoonStars className="flex w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 ml-5 mr-2 text-slate-700" />
                    <span className="w-full flex shadow-md text-[22px] font-bolder font-lobster lg:text-5xl md:text-4xl text-slate-700">Sách phổ biến</span>
                </div>

                <div className="w-full">
                    <Slider {...settings} className="mx-7">
                        {PopularBookData.map((item, index) => {
                            return (
                                <div key={index} className="grid justify-self-center relative w-full hover:cursor-pointer">

                                    <div className="grid z-20 mt-3 font-semibold text-white text-center items-center absolute ml-2.5 bg-orange-400 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 lg:rounded-full rounded-full">
                                        <span className="text-sm text-slate-700">{item.sale}%</span>
                                    </div>

                                    <div onClick={() => navigate(PATH.detail_book)} className="grid w-full justify-self-center drop-shadow-2xl mt-3 transition ease-in-out delay-100 hover:scale-105 duration-100 ">
                                        <img className="w-11/12" src={item.image} alt="New Book" />
                                    </div>

                                    <div className="grid w-full justify-self-center h-[50px] lg:h-[100px]">
                                        <span className={`${style['product_name']} self-center justify-self-center whitespace-normal w-3/4 text-xs md:text-base lg:text-lg font-medium lg:text-[18px] break-words text-center lg:leading-6`}>{item.name}</span>
                                    </div>


                                    <div className="flex justify-between font-medium text-center text-[14px] md:text-md lg:text-xl w-full ">
                                        <div className="ml-5 text-red-600 ">{item.new_cost}.000đ</div>
                                        <div className="mr-2 line-through text-neutral-400">{item.old_cost}.000đ</div>
                                    </div>

                                    <Link to={PATH.detail_book} className="flex w-full mt-2 mb-4">
                                        <div className="flex w-full rounded-md border-2 border-slate-700 mr-4 ml-2 items-center justify-center md:py-1 lg:py-2">
                                            <FiShoppingBag className="w-5 h-5 text-slate-700" />
                                            <div className=" text-[12px] md:text-xs lg:text-[17px] text-slate-700 py-1">Thêm giỏ hàng</div>
                                        </div>
                                    </Link>

                                </div>
                            )
                        })}

                    </Slider>
                    <div className="w-full flex justify-center mt-14">
                        <Link to="" className="font-semibold text-md hover:text-slate-700 bg-gradient-to-tl from-yellow-300 to-orange-700 text-slate-700 rounded-full lg:py-3 py-1 lg:px-20 px-10 transition ease-in-out delay-100 hover:scale-105 duration-100">Xem thêm</Link>
                    </div>

                </div>
            </div>

        </>
    );
}

export default Main;