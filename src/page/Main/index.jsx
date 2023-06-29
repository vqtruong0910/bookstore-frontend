import Carousel from '../../components/Carousel'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import React, { useState } from 'react'
import { useEffect } from 'react'
import axiosConfig from '../../config/axiosConfig'
import LoadingSkeletonMain from '../../components/Loading/LoadingSkeletonMain'
// import NewBook from '../../module/Book/NewBook'
import BestSellerBook from '../../module/Book/BestSellerBook'
import PopularBook from '../../module/Book/PopularBook'
import { API } from '../../constants/api'

function Main() {
  const [popularBook, setPopularBook] = useState([])
  // const [newBook, setNewBook] = useState([])
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
    try {
      isLoading(true)
      // const fetchNewBookData = async () => {
      //   const response = await axiosConfig(`${API.NEW_ITEM}`)
      //   if (response.data.data) {
      //     setTimeout(() => {
      //       isLoading(false)
      //       setNewBook(response.data.data)
      //     }, 250)
      //   }
      // }

      const fetchBestSellerBookData = async () => {
        const response = await axiosConfig(`${API.BEST_SELLER_ITEM}`)
        if (response.data.data) {
          setTimeout(() => {
            isLoading(false)
            setBestSellerBook(response.data.data)
          }, 250)
        }
      }
      const fetchPopularBookData = async () => {
        const response = await axiosConfig(`${API.ALL_ITEM}`)
        if (response.data.data) {
          setTimeout(() => {
            isLoading(false)
            setPopularBook(response.data.data)
          }, 250)
        }
      }
      // fetchNewBookData()
      fetchPopularBookData()
      fetchBestSellerBookData()
    } catch (error) {
      isLoading(false)
      console.log(error)
    }
  }, [])

  return (
    <>
      <Carousel />

      {loading && <LoadingSkeletonMain></LoadingSkeletonMain>}

      {!loading && (
        <div className="flex flex-col gap-10 w-full justify-center">
          {/* <NewBook data={newBook} settings={settings}></NewBook> */}

          <BestSellerBook data={bestSellerBook} settings={settings}></BestSellerBook>

          <PopularBook data={popularBook} settings={settings}></PopularBook>
        </div>
      )}
    </>
  )
}

export default Main
