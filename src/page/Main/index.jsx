import { Link, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import style from "./Main.module.scss";
import Carousel from "../../components/Carousel";
import { PATH } from "../../constants/path";
import { RiStarSmileLine } from "react-icons/ri";
import { TbMoonStars } from "react-icons/tb";
import { BsFlower1, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { FiShoppingBag } from "react-icons/fi";
import { addToCart } from "../../reducers/cartReducers";
import Context from "../../store/Context";
import React, { useContext, useState } from "react";
import Notify from "../../components/Notify";
import { useEffect } from "react";
import axiosConfig from "../../config/axiosConfig";
function Main() {
    const navigate = useNavigate();
    const { dispatch } = useContext(Context);
    const [notify, setNotify] = useState(false);

    const addToCartHandler = (product) => {
        dispatch(addToCart(product));
        return setNotify(true);
    };
    function NextArrow({ onClick }) {
        return (
            <BsFillArrowRightCircleFill className="absolute right-0 top-1/3 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 z-10 text-slate-600 cursor-pointer" onClick={onClick} />
        );
    }

    function PrevArrow({ onClick }) {
        return (
            <BsFillArrowLeftCircleFill className="absolute left-0 top-1/3 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 z-10 text-slate-600 cursor-pointer" onClick={onClick} />
        );
    }

    const settings = {
        dots: false,
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
                }
            },
            {
                breakpoint: 800,
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

    const [newBook, setNewBook] = useState([]);
    useEffect(() => {
        const fetchNewBookData = async () => {
            const response = await axiosConfig('product/new');
            setNewBook(response.data.data);
            // console.log(response.data.data);
        }
        fetchNewBookData();

    }, []);

    const [bestSellerBook, setBestSellerBook] = useState([]);
    useEffect(() => {
        const fetchBestSellerBookData = async () => {
            const response = await axiosConfig('product/bestseller');
            setBestSellerBook(response.data.data);
            // console.log(response.data.data);
        }
        fetchBestSellerBookData();

    }, []);

    const [popularBook, setPopularBook] = useState([]);
    useEffect(() => {
        const fetchPopularBookData = async () => {
            const response = await axiosConfig('product/');
            setPopularBook(response.data.data);
            // console.log(response.data.data);
        }
        fetchPopularBookData();

    }, []);

    const changeCostWithDots = (item) => {
        return item.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    }

    return (
        <>
            <Carousel />

            {/* New Book */}
            <div className="w-full">
                <div className="bg-white shadow-md rounded-sm">
                    <div className="flex w-full justify-center items-center lg:mb-10 border-b-2 py-2 border-gray-300">
                        <BsFlower1 className="flex w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-2 text-slate-700" />
                        <span className="w-full flex text-2xl font-bolder font-lobster lg:text-4xl md:text-3xl text-slate-700">Sách mới nhất</span>
                    </div>

                    <div className="w-full">
                        <Slider {...settings} className="mx-7">
                            {newBook.map((item, index) => {
                                return (
                                    <div key={index} className="grid justify-self-center relative w-full hover:cursor-pointer hover:drop-shadow-xl transition">

                                        {/* <div className="grid z-20 mt-3 font-semibold text-white text-center items-center absolute ml-2.5 bg-orange-400 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 lg:rounded-full rounded-full">
                                            <span className="text-sm text-white">{item.GiamGia}%</span>
                                        </div> */}

                                        <div onClick={() => navigate(`/books/${item.IDSanPham}`)} className="grid w-full justify-self-center mt-3 py-2">
                                            <img className="w-full h-40 md:h-48 lg:h-64"
                                                src={item.HinhAnh}
                                                alt="New Book" />
                                        </div>

                                        <div className="flex w-full px-4 py-2">
                                            <span className={`${style['product_name']} whitespace-normal w-full text-sm md:text-base lg:text-lg font-medium`}>{item.TenSanPham}</span>
                                        </div>


                                        <div className="flex justify-between items-center font-medium text-center md:text-md lg:text-xl w-full px-4">
                                            <div className="text-red-600 md:text-lg lg:text-xl">{changeCostWithDots(item.GiaBan)}đ</div>
                                        </div>

                                        <div onClick={() => addToCartHandler(item)} className="flex bg-slate-700 hover:bg-slate-500 transition rounded-sm py-2 mt-2 items-center justify-center mx-2">
                                            <FiShoppingBag className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                                            <span className="text-white text-sm md:text-base lg:text-lg mx-1">Thêm giỏ hàng</span>
                                        </div>
                                    </div>
                                )
                            })
                            }

                        </Slider>

                        <div className="w-full flex justify-center py-10">
                            <Link to={PATH.category.dashboard} className="font-semibold text-md hover:drop-shadow-lg bg-gradient-to-tl from-yellow-300 to-orange-700 text-white rounded-full lg:py-3 py-1 lg:px-20 px-10">Xem thêm</Link>
                        </div>

                    </div>

                </div>
                {notify ?
                    <Notify close="true" message="Sản phẩm đã được thêm vào giỏ hàng" textMessage="text-slate-700" notify={notify} setNotify={(data) => setNotify(data)} addToCart="true" />
                    :
                    <></>
                }
            </div>

            {/* Best seller Book */}
            <div className="w-full">
                <div className="bg-white shadow-md rounded-sm">
                    <div className="flex w-full justify-center items-center lg:mb-10 border-b-2 py-2 border-gray-300">
                        <RiStarSmileLine className="flex w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-2 text-slate-700" />
                        <span className="w-full flex text-2xl font-bolder font-lobster lg:text-4xl md:text-3xl text-slate-700">Sách bán chạy</span>
                    </div>

                    <div className="w-full">
                        <Slider {...settings} className="mx-7">
                            {bestSellerBook.map((item, index) => {
                                return (
                                    <div key={index} className="grid justify-self-center relative w-full hover:cursor-pointer hover:drop-shadow-xl transition">

                                        {/* <div className="grid z-20 mt-3 font-semibold text-white text-center items-center absolute ml-2.5 bg-orange-400 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 lg:rounded-full rounded-full">
                                            <span className="text-sm text-white">{item.GiamGia}%</span>
                                        </div> */}

                                        <div onClick={() => navigate(`/books/${item.IDSanPham}`)} className="grid w-full justify-self-center mt-3 py-2">
                                            <img className="w-full h-40 md:h-48 lg:h-64"
                                                src={item.HinhAnh}
                                                alt="New Book" />
                                        </div>

                                        <div className="flex w-full px-4 py-2">
                                            <span className={`${style['product_name']} whitespace-normal w-full text-sm md:text-base lg:text-lg font-medium`}>{item.TenSanPham}</span>
                                        </div>


                                        <div className="flex justify-between items-center font-medium text-center md:text-md lg:text-xl w-full px-4">
                                            <div className="text-red-600 md:text-lg lg:text-xl">{changeCostWithDots(item.GiaBan)}đ</div>
                                        </div>

                                        <div onClick={() => addToCartHandler(item)} className="flex bg-slate-700 hover:bg-slate-500 transition rounded-sm py-2 mt-2 items-center justify-center mx-2">
                                            <FiShoppingBag className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                                            <span className="text-white text-sm md:text-base lg:text-lg mx-1">Thêm giỏ hàng</span>
                                        </div>
                                    </div>
                                )
                            })
                            }
                        </Slider>
                        {notify ?
                            <Notify close="true" message="Sản phẩm đã được thêm vào giỏ hàng" textMessage="text-slate-700" notify={notify} setNotify={(data) => setNotify(data)} addToCart="true" />
                            :
                            <></>
                        }
                        <div className="w-full flex justify-center py-10">
                            <Link to={PATH.category.dashboard} className="font-semibold text-md hover:drop-shadow-lg bg-gradient-to-tl from-yellow-300 to-orange-700 text-white rounded-full lg:py-3 py-1 lg:px-20 px-10">Xem thêm</Link>
                        </div>

                    </div>
                </div>

            </div>

            {/* Popular Book */}
            <div className="w-full">
                <div className="bg-white shadow-md rounded-sm">
                    <div className="flex w-full justify-center items-center lg:mb-10 border-b-2 py-2 border-gray-300">
                        <TbMoonStars className="flex w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-2 text-slate-700" />
                        <span className="w-full flex text-2xl font-bolder font-lobster lg:text-4xl md:text-3xl text-slate-700">Sách phổ biến</span>
                    </div>

                    <div className="w-full">
                        <Slider {...settings} className="mx-7">
                            {popularBook.map((item, index) => {
                                return (
                                    <div key={index} className="grid justify-self-center relative w-full hover:cursor-pointer hover:drop-shadow-xl transition">

                                        {/* <div className="grid z-20 mt-3 font-semibold text-white text-center items-center absolute ml-2.5 bg-orange-400 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 lg:rounded-full rounded-full">
                                            <span className="text-sm text-white">{item.GiamGia}%</span>
                                        </div> */}

                                        <div onClick={() => navigate(`/books/${item.IDSanPham}`)} className="grid w-full justify-self-center mt-3 py-2">
                                            <img className="w-full h-40 md:h-48 lg:h-64"
                                                src={item.HinhAnh}
                                                alt="New Book" />
                                        </div>

                                        <div className="flex w-full px-4 py-2">
                                            <span className={`${style['product_name']} whitespace-normal w-full text-sm md:text-base lg:text-lg font-medium`}>{item.TenSanPham}</span>
                                        </div>


                                        <div className="flex justify-between items-center font-medium text-center md:text-md lg:text-xl w-full px-4">
                                            <div className="text-red-600 md:text-lg lg:text-xl">{changeCostWithDots(item.GiaBan)}đ</div>
                                        </div>

                                        <div onClick={() => addToCartHandler(item)} className="flex bg-slate-700 hover:bg-slate-500 transition rounded-sm py-2 mt-2 items-center justify-center mx-2">
                                            <FiShoppingBag className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                                            <span className="text-white text-sm md:text-base lg:text-lg mx-1">Thêm giỏ hàng</span>
                                        </div>
                                    </div>
                                )
                            })
                            }

                        </Slider>
                        {notify ?
                            <Notify close="true" message="Sản phẩm đã được thêm vào giỏ hàng" textMessage="text-slate-700" notify={notify} setNotify={(data) => setNotify(data)} addToCart="true" />
                            :
                            <></>
                        }
                        <div className="w-full flex justify-center py-10">
                            <Link to={PATH.category.dashboard} className="font-semibold text-md hover:drop-shadow-lg bg-gradient-to-tl from-yellow-300 to-orange-700 text-white rounded-full lg:py-3 py-1 lg:px-20 px-10">Xem thêm</Link>
                        </div>

                    </div>
                </div>

            </div>
        </>
    );
}

export default Main;