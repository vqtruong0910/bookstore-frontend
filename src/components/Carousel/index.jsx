import { CarouselData } from "./CarouselData";
import { PATH } from "../../constants/path"
import { Link } from 'react-router-dom';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import Slider from "react-slick";

function ListProduct() {
    function NextArrow({ onClick }) {
        return (
            <AiOutlineArrowRight className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 z-10 text-gray-400 cursor-pointer" onClick={onClick} />
        );
    }

    function PrevArrow({ onClick }) {
        return (
            <AiOutlineArrowLeft className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 z-10 text-gray-400 cursor-pointer" onClick={onClick} />
        );
    }

    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        fade: true,
        arrows: true,
        lazyLoad: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                }
            }
        ]
    };


    return (
        <div className="w-full">
            <Slider {...settings}>
                {CarouselData.map((item, index) => {
                    return (
                        <Link key={index} to={PATH.detail_book} className="w-full">
                            <img className="w-full h-fit lg:h-screen" src={item.image} alt="Carousel_image" />
                        </Link>
                    )
                })}
            </Slider>
        </div>

    )
}

export default ListProduct;