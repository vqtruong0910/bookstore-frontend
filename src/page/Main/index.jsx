import Carousel from '../../components/Carousel'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import React, { useState } from 'react'
import { useEffect } from 'react'
import axiosConfig from '../../config/axiosConfig'
import NewBook from '../../module/Book/NewBook'
import BestSellerBook from '../../module/Book/BestSellerBook'
import PopularBook from '../../module/Book/PopularBook'
import { API } from '../../constants/api'
import Slug from '../../components/Slug'
import Banner from '../../components/Banner'

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
        breakpoint: 1849,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1549,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 949,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 649,
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

      <div className="flex flex-col gap-10 w-full px-4 xl:px-0 justify-center py-10">
        <Banner />

        {/* <NewBook data={newBook} settings={settings}></NewBook> */}

        <BestSellerBook
          data={bestSellerBook}
          settings={settings}
          loading={loading}
        ></BestSellerBook>

        <PopularBook data={popularBook} settings={settings} loading={loading}></PopularBook>
      </div>
    </>
  )
}

export default Main
