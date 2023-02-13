import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { PATH } from "../../constants/path";
import { FiShoppingBag } from "react-icons/fi";
import Notify from "../../components/Notify";
const RelatedBook = ({ style, procsInSameCategory, changeCostWithDots, addToCartHandler, notify, setNotify }) => {
    const navigate = useNavigate();

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
        <div className="w-full">
            <Slider {...settings}>
                {procsInSameCategory?.map((item, index) => {
                    return (
                        <div key={item.IDSanPham} className="grid relative w-full hover:cursor-pointer">
                            <div
                                onClick={() => navigate(PATH.detail_book)}
                                className="flex relative justify-center w-full drop-shadow-2xl mt-3 transition ease-in-out delay-100 hover:scale-105 duration-100 "
                            >
                                <img className="w-2/3 justify-center" src={item.HinhAnh} alt="New Book" />
                                <div className="flex w-full z-20 absolute px-4">
                                    <div className="bg-orange-400 w-11 h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center">
                                        <span className="text-sm md:text-base text-white font-semibold text-center">{item.GiamGia}%</span>
                                    </div>

                                </div>
                            </div>

                            <div className="grid w-full py-3 mx-4">
                                <span className={`${style['product_name']} self-center whitespace-normal w-3/4 text-sm md:text-base lg:text-lg font-medium break-words`}>{item.TenSanPham}</span>
                            </div>


                            <div className="flex font-medium text-base mx-4">
                                <span className="text-red-600 w-full text-lg md:text-xl">{changeCostWithDots(item.GiaBan)}đ</span>

                            </div>

                            <div className="flex w-full mt-3">
                                <div onClick={() => addToCartHandler(item)} className="flex w-full rounded-sm bg-slate-700 hover:bg-slate-500 transition mx-4 items-center justify-center">
                                    <FiShoppingBag className="w-5 h-5 text-white" />
                                    <div className="text-sm md:text-base lg:text-lg text-white py-2 px-0.5 whitespace-nowrap">Thêm giỏ hàng</div>
                                </div>
                            </div>
                        </div>
                    )
                })}

            </Slider>
            {notify ?
                <Notify close="true" message="Sản phẩm đã được thêm vào giỏ hàng" textMessage="text-slate-700" notify={notify} setNotify={(data) => setNotify(data)} addToCart="true" />
                :
                <></>
            }
        </div>
    )
}

export default RelatedBook;