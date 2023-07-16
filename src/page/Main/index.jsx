import Carousel from '../../components/Carousel'
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsFillGiftFill,
  BsShieldFillCheck,
} from 'react-icons/bs'
import { FaPhoneVolume } from 'react-icons/fa'
import React, { useState } from 'react'
import { useEffect } from 'react'
import axiosConfig from '../../config/axiosConfig'
import LoadingSkeletonMain from '../../components/Loading/LoadingSkeletonMain'
import NewBook from '../../module/Book/NewBook'
import BestSellerBook from '../../module/Book/BestSellerBook'
import PopularBook from '../../module/Book/PopularBook'
import { API } from '../../constants/api'
import { RiMoneyDollarCircleLine } from 'react-icons/ri'
import { BiSolidGift } from 'react-icons/bi'
import banner from '../../assets/images/banner.png'
import Slug from '../../components/Slug'

function Main() {
  const [popularBook, setPopularBook] = useState([])
  const [newBook, setNewBook] = useState([])
  const [bestSellerBook, setBestSellerBook] = useState([])
  const [loading, isLoading] = useState(true)

  function NextArrow({ onClick }) {
    return (
      <BsFillArrowRightCircleFill
        className="absolute right-0 top-1/3 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 z-10 text-slate-600 cursor-pointer"
        onClick={onClick}
      />
    )
  }

  function PrevArrow({ onClick }) {
    return (
      <BsFillArrowLeftCircleFill
        className="absolute left-0 top-1/3 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 z-10 text-slate-600 cursor-pointer"
        onClick={onClick}
      />
    )
  }

  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    initialSlide: 2,
    infinite: true,
    arrows: true,
    lazyLoad: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 539,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  }

  useEffect(() => {
    const fetchNewBookData = async () => {
      try {
        isLoading(true)
        const response = await axiosConfig(`${API.NEW_ITEM}`)
        if (response.data.data) {
          isLoading(false)
          setNewBook(response.data.data)
        }
      } catch (error) {
        isLoading(false)
        console.log(error)
      }
    }

    const fetchBestSellerBookData = async () => {
      try {
        isLoading(true)
        const response = await axiosConfig(`${API.BEST_SELLER_ITEM}`)
        if (response.data.data) {
          isLoading(false)
          setBestSellerBook(response.data.data)
        }
      } catch (error) {
        isLoading(false)
        console.log(error)
      }
    }

    const fetchPopularBookData = async () => {
      try {
        const response = await axiosConfig(`${API.ALL_ITEM}`)
        if (response.data.data) {
          isLoading(false)
          setPopularBook(response.data.data)
        }
      } catch (error) {
        isLoading(false)
        console.log(error)
      }
    }

    fetchNewBookData()
    fetchPopularBookData()
    fetchBestSellerBookData()
  }, [])

  return (
    <>
      <Carousel />

      <Slug />

      {loading && <LoadingSkeletonMain></LoadingSkeletonMain>}

      {!loading && (
        <div className="flex flex-col gap-10 w-full px-4 xl:px-0 justify-center py-10">
          <div className="relative mx-auto overflow-hidden w-full xl:w-4/5 z-10 after:absolute after:w-full after:h-full after:transition-transform hover:ease-linear">
            <img
              src={banner}
              alt="Banner"
              className="w-full object-cover hover:scale-110 transition-transform hover:ease-linear hover:opacity-80"
            />
          </div>

          {/* <NewBook data={newBook} settings={settings}></NewBook> */}

          <BestSellerBook data={bestSellerBook} settings={settings}></BestSellerBook>

          <PopularBook data={popularBook} settings={settings}></PopularBook>
        </div>
      )}
    </>
  )
}

export default Main
