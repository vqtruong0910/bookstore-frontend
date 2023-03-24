import { CarouselData } from './CarouselData'
import { PATH } from '../../constants/path'
import { Link } from 'react-router-dom'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import Slider from 'react-slick'
import { useEffect, useState } from 'react'

function ListProduct() {
  const [loading, isLoading] = useState(true)
  function NextArrow({ onClick }) {
    return (
      <BsFillArrowRightCircleFill
        className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 z-10 text-black/40 cursor-pointer"
        onClick={onClick}
      />
    )
  }

  function PrevArrow({ onClick }) {
    return (
      <BsFillArrowLeftCircleFill
        className="absolute left-0 top-1/2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 z-10 text-black/40 cursor-pointer"
        onClick={onClick}
      />
    )
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
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }

  useEffect(() => {
    isLoading(true)
    setTimeout(() => {
      isLoading(false)
    }, 250)
  }, [])

  return (
    <>
      {loading && (
        <div className="w-4/5 mx-auto mt-10 h-[350px] md:h-[450px] lg:h-[550px] bg-slate-200">
          <div className="w-full ">
            <div className="w-full h-fit" />
          </div>
        </div>
      )}

      {!loading && (
        <div className="w-4/5 mx-auto mt-10 ">
          <Slider {...settings}>
            {CarouselData.map((item, index) => {
              return (
                <Link key={index} to={PATH.category.dashboard}>
                  <img
                    className="h-[350px] md:h-[450px] lg:h-[550px] rounded-sm object-fit w-full"
                    src={item.image}
                    alt="Carousel_image"
                  />
                </Link>
              )
            })}
          </Slider>
        </div>
      )}
    </>
  )
}

export default ListProduct
