import { Link } from "react-router-dom";
import Carousel from "../../components/Carousel";
import { NewBookData } from "./NewBookData";
import { BestSellerBookData } from "./BestSellerBookData";
import { PopularBookData } from "./PopularBookData";
import { PATH } from "../../constants/path";
import Slider from "react-slick";
import style from "./Main.module.scss";
import { RiStarSmileLine } from "react-icons/ri";

function Main() {
    const settings = {
        dots: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 4,
        initialSlide: 1,
        infinite: true,
        responsive: [
            {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 5,
                infinite: true,
                dots: true,
            }
            },
            {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 4,
                initialSlide: 2,
                infinite: true,
            }
            },
            {
            breakpoint: 480,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
            }
            }
        ]
    };

    return (
        <>
            <Carousel />
            {/* New Book */}
            <div className="w-full lg:h-[650px] md:h-[400px] mt-10">
                <div className="flex w-full text-[20px] justify-center items-center mt-5 mb-7 lg:mb-10 border-b-2 border-gray-300">
                    <RiStarSmileLine className="flex w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 ml-5 mr-2" /> 
                    <span className=" w-full flex text-[22px] font-bolder font-lobster text-slate-700 lg:text-5xl md:text-4xl">Sách mới nhất</span>
                </div>

                <div className="w-full">
                    <Slider {...settings} className="mx-7">
                        {NewBookData.map((item,index) => {
                            return(
                                <div key={index} className="grid justify-self-center relative w-full">
                                                
                                    <div className="grid font-semibold text-white text-center items-center absolute ml-2.5 bg-slate-500 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 lg:rounded-full rounded-full">
                                        <span className="font-[14px]">{item.sale}%</span>
                                    </div>

                                    <div className="grid w-full justify-self-center">
                                        <img className="w-full" src={item.image} alt="New Book" />
                                    </div>

                                    <div className="grid w-full justify-self-center h-[50px] lg:h-[100px]">
                                        <span className={`${style['product_name']} self-center text-xs md:text-base lg:text-lg font-medium lg:text-[18px] break-words text-center lg:leading-6`}>{item.name}</span>
                                    </div>

                                  
                                    <div className="flex justify-between font-medium text-center text-[13px] md:text-lg lg:text-2xl w-full ">
                                        <div className="ml-[11px] text-red-600 ">{item.new_cost}.000đ</div>
                                        <div className="mr-[11px] line-through text-neutral-400">{item.old_cost}.000đ</div>
                                    </div>

                                    <Link to={PATH.cart} className="flex justify-center border-2 bg-slate-700 mx-2 mt-2 rounded-full h-[30px] md:h-[37px] lg:h-[40px] items-center">
                                        <div className="text-[13px] md:text-[14px] lg:text-[18px] font-medium text-orange-400">Thêm giỏ hàng</div>
                                    </Link>
                                    
                                </div>
                            )
                        })}

                    </Slider>

                
                </div>

              
            </div>

            {/* Best seller Book */}
            <div className="w-full lg:h-[650px] md:h-[400px] mt-24 ">
                <div className="flex w-full text-[20px] justify-center items-center mt-5 mb-7 lg:mb-10 border-b-2 border-gray-300">
                    <RiStarSmileLine className="flex w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 ml-5 mr-2" /> 
                    <span className=" w-full flex text-[22px] font-bolder font-lobster text-slate-700 lg:text-5xl md:text-4xl">Sách bán chạy</span>
                </div>

                <div className="w-full">
                    <Slider {...settings} className="mx-7">
                        {BestSellerBookData.map((item,index) => {
                            return(
                                <div key={index} className="grid justify-self-center relative w-full">
                                                
                                    <div className="grid font-semibold text-white text-center items-center absolute ml-2.5 bg-slate-700 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 lg:rounded-full rounded-full">
                                        <span className="font-[14px]">{item.sale}%</span>
                                    </div>

                                    <div className="grid w-full justify-self-center">
                                        <img className="w-full" src={item.image} alt="New Book" />
                                    </div>

                                    <div className="grid w-full justify-self-center h-[50px] lg:h-[100px]">
                                        <span className={`${style['product_name']} self-center text-xs md:text-base lg:text-lg font-medium lg:text-[18px] break-words text-center lg:leading-6`}>{item.name}</span>
                                    </div>

                                  
                                    <div className="flex justify-between font-medium text-center text-[13px] md:text-lg lg:text-2xl w-full ">
                                        <div className="ml-[11px] text-red-600 ">{item.new_cost}.000đ</div>
                                        <div className="mr-[11px] line-through text-neutral-400">{item.old_cost}.000đ</div>
                                    </div>

                                    <Link to={PATH.cart} className="flex justify-center border-2 bg-slate-700 mx-2 mt-2 rounded-full h-[30px] md:h-[37px] lg:h-[40px] items-center">
                                        <div className="text-[13px] md:text-[14px] lg:text-[18px] font-medium text-orange-400">Thêm giỏ hàng</div>
                                    </Link>
                                </div>
                            )
                        })}

                    </Slider>
                </div>
            </div>

            {/* Popular Book */}
            <div className="w-full lg:h-[650px] md:h-[400px] mt-24 pb-16">
                <div className="flex w-full text-[20px] justify-center items-center mt-5 mb-7 lg:mb-10 border-b-2 border-gray-300">
                    <RiStarSmileLine className="flex w-6 h-6 md:w-8 md:h-8 lg:w-12 lg:h-12 ml-5 mr-2" /> 
                    <span className=" w-full flex text-[22px] font-bolder font-lobster text-slate-700 lg:text-5xl md:text-4xl">Sách phổ biến</span>
                </div>

                <div className="w-full">
                    <Slider {...settings} className="mx-7">
                        {PopularBookData.map((item,index) => {
                            return(
                                <div key={index} className="grid justify-self-center relative w-full">
                                                
                                    <div className="grid font-semibold text-white text-center items-center absolute ml-2.5 bg-slate-700 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 lg:rounded-full rounded-full">
                                        <span className="font-[14px]">{item.sale}%</span>
                                    </div>

                                    <div className="grid w-full justify-self-center">
                                        <img className="w-full" src={item.image} alt="New Book" />
                                    </div>

                                    <div className="grid w-full justify-self-center h-[80px]">
                                        <span className={`${style['product_name']} self-center text-xs md:text-base lg:text-lg font-medium lg:text-[18px] break-words text-center lg:leading-6`}>{item.name}</span>
                                    </div>

                                    <div className="flex justify-between font-medium text-center text-[13px] md:text-lg lg:text-2xl w-full ">
                                        <div className="ml-[11px] text-red-600 ">{item.new_cost}.000đ</div>
                                        <div className="mr-[11px] line-through text-neutral-400">{item.old_cost}.000đ</div>
                                    </div>

                                    <Link to={PATH.cart} className="flex justify-center border-2 bg-slate-700 mx-2 mt-2 rounded-full h-[30px] md:h-[37px] lg:h-[40px] items-center">
                                        <div className="text-[13px] md:text-[14px] lg:text-[18px] font-medium text-orange-400">Thêm giỏ hàng</div>
                                    </Link>
                                </div>
                            )
                        })}

                    </Slider>
                </div>

              
            </div>
        </>
    );
}

export default Main;