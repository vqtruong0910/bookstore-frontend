import { Link, useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import style from './Main.module.scss'
import Carousel from '../../components/Carousel'
import { PATH } from '../../constants/path'
import { RiStarSmileLine } from 'react-icons/ri'
import { TbMoonStars } from 'react-icons/tb'
import { BsFlower1, BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { FiShoppingBag } from 'react-icons/fi'
import { addToCart } from '../../reducers/cartReducers'
import Context from '../../store/Context'
import React, { useContext, useState } from 'react'
import Notify from '../../components/Notify'
import { useEffect } from 'react'
import axiosConfig from '../../config/axiosConfig'
import LoadingSkeletonMain from '../../components/Loading/LoadingSkeletonMain'

function Main() {
  const [popularBook, setPopularBook] = useState([])
  const [newBook, setNewBook] = useState([])
  const [bestSellerBook, setBestSellerBook] = useState([])
  const [notify, setNotify] = useState(false)
  const [loading, isLoading] = useState(true)
  const navigate = useNavigate()
  const { dispatch } = useContext(Context)

  const addToCartHandler = (product) => {
    dispatch(addToCart(product))
    return setNotify(true)
  }
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
    slidesToShow: 4,
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
    ],
  }

  useEffect(() => {
    try {
      isLoading(true)
      const fetchNewBookData = async () => {
        const response = await axiosConfig('product/new')
        if (response.data.data) {
          setTimeout(() => {
            isLoading(false)
            setNewBook(response.data.data)
          }, 500)
        }
      }

      const fetchBestSellerBookData = async () => {
        const response = await axiosConfig('product/bestseller')
        if (response.data.data) {
          setTimeout(() => {
            isLoading(false)
            setBestSellerBook(response.data.data)
          }, 500)
        }
      }
      const fetchPopularBookData = async () => {
        const response = await axiosConfig('product/')
        if (response.data.data) {
          setTimeout(() => {
            isLoading(false)
            setPopularBook(response.data.data)
          }, 500)
        }
      }
      fetchNewBookData()
      fetchPopularBookData()
      fetchBestSellerBookData()
    } catch (error) {
      isLoading(false)
      console.log(error)
    }
  }, [])

  const changeCostWithDots = (item) => {
    return item.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
  }

  return (
    <>
      <Carousel />

      {loading && <LoadingSkeletonMain></LoadingSkeletonMain>}

      {!loading && (
        <div className="w-full">
          {/* New Book */}
          <div className="w-full">
            <div className="bg-white shadow-md rounded-sm">
              <div className="flex w-full justify-center items-center lg:mb-10 border-b-2 py-2 border-gray-300">
                <BsFlower1 className="flex w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-2 text-slate-700" />
                <span className="w-full flex text-2xl font-bolder font-lobster lg:text-4xl md:text-3xl text-slate-700">
                  Sách mới nhất
                </span>
              </div>

              <div className="w-full">
                <Slider {...settings} className="mx-7">
                  {newBook.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="px-2 w-full hover:cursor-pointer hover:drop-shadow-xl transition"
                      >
                        <div
                          onClick={() => navigate(`/books/${item.IDSanPham}`)}
                          className="w-full my-2 h-72"
                        >
                          <img
                            className="w-full object-cover h-full"
                            src={item.HinhAnh}
                            alt="New Book"
                          />
                        </div>

                        <div className="flex w-full px-4 py-2">
                          <span
                            className={`${style['product_name']} whitespace-normal w-full text-sm md:text-base lg:text-lg font-medium`}
                          >
                            {item.TenSanPham}
                          </span>
                        </div>

                        <div className="flex justify-between items-center font-medium text-center md:text-md lg:text-xl w-full px-4">
                          <div className="text-red-600 md:text-lg lg:text-xl">
                            {changeCostWithDots(item.GiaBan)}đ
                          </div>
                        </div>

                        <div
                          onClick={() => addToCartHandler(item)}
                          className="flex bg-slate-700 hover:bg-slate-500 transition rounded-sm py-2 mt-2 items-center justify-center mx-2"
                        >
                          <FiShoppingBag className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                          <span className="text-white text-sm md:text-base lg:text-lg mx-1">
                            Thêm giỏ hàng
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </Slider>

                <div className="w-full flex justify-center py-10">
                  <Link
                    to={PATH.category.dashboard}
                    className="font-semibold text-md hover:drop-shadow-lg bg-gradient-to-tl from-yellow-300 to-orange-700 text-white rounded-full lg:py-3 py-1 lg:px-20 px-10"
                  >
                    Xem thêm
                  </Link>
                </div>
              </div>
            </div>
            {notify ? (
              <Notify
                close="true"
                message="Sản phẩm đã được thêm vào giỏ hàng"
                textMessage="text-slate-700"
                notify={notify}
                setNotify={(data) => setNotify(data)}
                addToCart="true"
              />
            ) : (
              <></>
            )}
          </div>

          {/* Best seller Book */}
          <div className="w-full">
            <div className="bg-white shadow-md rounded-sm">
              <div className="flex w-full justify-center items-center lg:mb-10 border-b-2 py-2 border-gray-300">
                <RiStarSmileLine className="flex w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-2 text-slate-700" />
                <span className="w-full flex text-2xl font-bolder font-lobster lg:text-4xl md:text-3xl text-slate-700">
                  Sách bán chạy
                </span>
              </div>

              <div className="w-full">
                <Slider {...settings} className="mx-7">
                  {bestSellerBook.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="px-2 w-full hover:cursor-pointer hover:drop-shadow-xl transition"
                      >
                        <div
                          onClick={() => navigate(`/books/${item.IDSanPham}`)}
                          className="w-full my-2 h-72"
                        >
                          <img
                            className="w-full object-cover h-full"
                            src={item.HinhAnh}
                            alt="New Book"
                          />
                        </div>

                        <div className="flex w-full px-4 py-2">
                          <span
                            className={`${style['product_name']} whitespace-normal w-full text-sm md:text-base lg:text-lg font-medium`}
                          >
                            {item.TenSanPham}
                          </span>
                        </div>

                        <div className="flex justify-between items-center font-medium text-center md:text-md lg:text-xl w-full px-4">
                          <div className="text-red-600 md:text-lg lg:text-xl">
                            {changeCostWithDots(item.GiaBan)}đ
                          </div>
                        </div>

                        <div
                          onClick={() => addToCartHandler(item)}
                          className="flex bg-slate-700 hover:bg-slate-500 transition rounded-sm py-2 mt-2 items-center justify-center mx-2"
                        >
                          <FiShoppingBag className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                          <span className="text-white text-sm md:text-base lg:text-lg mx-1">
                            Thêm giỏ hàng
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </Slider>
                {notify ? (
                  <Notify
                    close="true"
                    message="Sản phẩm đã được thêm vào giỏ hàng"
                    textMessage="text-slate-700"
                    notify={notify}
                    setNotify={(data) => setNotify(data)}
                    addToCart="true"
                  />
                ) : (
                  <></>
                )}
                <div className="w-full flex justify-center py-10">
                  <Link
                    to={PATH.category.dashboard}
                    className="font-semibold text-md hover:drop-shadow-lg bg-gradient-to-tl from-yellow-300 to-orange-700 text-white rounded-full lg:py-3 py-1 lg:px-20 px-10"
                  >
                    Xem thêm
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Popular Book */}
          <div className="w-full">
            <div className="bg-white shadow-md rounded-sm">
              <div className="flex w-full justify-center items-center lg:mb-10 border-b-2 py-2 border-gray-300">
                <TbMoonStars className="flex w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-2 text-slate-700" />
                <span className="w-full flex text-2xl font-bolder font-lobster lg:text-4xl md:text-3xl text-slate-700">
                  Sách phổ biến
                </span>
              </div>

              <div className="w-full">
                <Slider {...settings} className="mx-7">
                  {popularBook.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="px-2 w-full hover:cursor-pointer hover:drop-shadow-xl transition"
                      >
                        <div
                          onClick={() => navigate(`/books/${item.IDSanPham}`)}
                          className="w-full my-2 h-72"
                        >
                          <img
                            className="w-full object-cover h-full"
                            src={item.HinhAnh}
                            alt="New Book"
                          />
                        </div>

                        <div className="flex w-full px-4 py-2">
                          <span
                            className={`${style['product_name']} whitespace-normal w-full text-sm md:text-base lg:text-lg font-medium`}
                          >
                            {item.TenSanPham}
                          </span>
                        </div>

                        <div className="flex justify-between items-center font-medium text-center md:text-md lg:text-xl w-full px-4">
                          <div className="text-red-600 md:text-lg lg:text-xl">
                            {changeCostWithDots(item.GiaBan)}đ
                          </div>
                        </div>

                        <div
                          onClick={() => addToCartHandler(item)}
                          className="flex bg-slate-700 hover:bg-slate-500 transition rounded-sm py-2 mt-2 items-center justify-center mx-2"
                        >
                          <FiShoppingBag className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
                          <span className="text-white text-sm md:text-base lg:text-lg mx-1">
                            Thêm giỏ hàng
                          </span>
                        </div>
                      </div>
                    )
                  })}
                </Slider>
                {notify ? (
                  <Notify
                    close="true"
                    message="Sản phẩm đã được thêm vào giỏ hàng"
                    textMessage="text-slate-700"
                    notify={notify}
                    setNotify={(data) => setNotify(data)}
                    addToCart="true"
                  />
                ) : (
                  <></>
                )}
                <div className="w-full flex justify-center py-10">
                  <Link
                    to={PATH.category.dashboard}
                    className="font-semibold text-md hover:drop-shadow-lg bg-gradient-to-tl from-yellow-300 to-orange-700 text-white rounded-full lg:py-3 py-1 lg:px-20 px-10"
                  >
                    Xem thêm
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Main
