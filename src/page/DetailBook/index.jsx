import { IoAddSharp } from 'react-icons/io5'
import { IoMdRemove } from 'react-icons/io'
import { BsCart3 } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect, Fragment } from 'react'
import axiosConfig from '../../config/axiosConfig'
import RelatedBook from '../../module/Book/RelatedBook'
import LoadingSkeletonDetailBook from '../../components/Loading/LoadingSkeletonDetailBook'
import Image from '../../components/Image'
import useCart from '../../hooks/useCart'
import { API } from '../../constants/api'

const DetailBook = () => {
  const { bookID } = useParams()
  const [book, setBook] = useState([])
  const [authorID, setAuthorID] = useState('')
  const [genreID, setGenreID] = useState('')
  const [publisherID, setPublisherID] = useState('')
  const [categoryID, setCategoryID] = useState('')
  const [genreName, setGenreName] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [publisherName, setPublisherName] = useState('')
  const [categoryName, setCategoryName] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [procsInSameCategory, setProcsInSameCategory] = useState([])
  const [loading, isLoading] = useState(true)
  const [showContent, setShowContent] = useState(4)
  const { handleAddToCart } = useCart()

  const decrementQuantity = (item) => {
    setQuantity((item) => {
      if (item - 1 < 1) return 1

      return item - 1
    })
  }

  const incrementQuantity = (item) => {
    setQuantity(item + 1)
  }

  const handleContent = (e) => {
    setShowContent(e)
  }

  const changeCostWithDots = (item) => {
    return item.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
  }

  useEffect(() => {
    try {
      const fetchDetailBookData = async () => {
        isLoading(true)
        const response = await axiosConfig(`${API.ALL_ITEM}/${bookID}`)

        if (response.data.data) {
          setTimeout(() => {
            isLoading(false)
            setBook(response.data.data)
            console.log(response.data.data)
            response.data.data.forEach((item) => {
              setAuthorID(item.IDNhaXuatBan)
              setGenreID(item.IDTheLoai)
              setPublisherID(item.IDNhaXuatBan)
            })
          }, 250)
        }

        const responseAuthorName = await axiosConfig(`${API.AUTHOR}/${authorID}`)
        responseAuthorName.data.data.forEach((item) => {
          setAuthorName(item.TenTacGia)
        })

        const responseGenreName = await axiosConfig(`${API.KIND_PRODUCT}/${genreID}`)
        responseGenreName.data.data.forEach((item) => {
          setGenreName(item.TenTheLoai)
          setCategoryID(item.IDDanhMuc)
        })

        const responsePublisherName = await axiosConfig(`${API.PUBLISHING}/${publisherID}`)
        responsePublisherName.data.data.forEach((item) => {
          setPublisherName(item.TenNhaXuatBan)
        })

        const responseCategoryName = await axiosConfig(`${API.CATEGORY}/${categoryID}`)
        responseCategoryName.data.data.forEach((item) => {
          setCategoryName(item.TenDanhMuc)
        })

        const responseProcsInSameCategory = await axiosConfig(
          `${API.GET_DETAIL_GENRE_ITEM}/${genreID}`
        )
        setProcsInSameCategory(responseProcsInSameCategory.data.data)
      }

      fetchDetailBookData()
    } catch (error) {
      console.log(error)
      isLoading(false)
    }
  }, [bookID, authorID, publisherID, categoryID, genreID])

  useEffect(() => {
    const topOfElement = document.querySelector('#detail-book') - 200
    window.scroll({ top: topOfElement, behavior: 'smooth' })
  }, [bookID])

  return (
    <>
      {loading && <LoadingSkeletonDetailBook></LoadingSkeletonDetailBook>}

      {!loading && (
        <div className="w-full flex flex-col items-center drop-shadow-lg" id="detail-book">
          {book.map((item) => {
            return (
              <Fragment key={item.IDSanPham}>
                <div className="w-full xl:w-4/5 bg-white rounded-sm flex shadow-md border border-gray-200">
                  <div className="w-full my-3 flex items-center flex-wrap lg:flex-nowrap">
                    <Image item={item} />
                    <div className="w-full flex-col flex">
                      <div className="w-full flex-wrap justify-center py-2 px-4">
                        <span className="text-base lg:text-2xl lg:font-medium font-normal text-gray-700">
                          {item.TenSanPham}
                        </span>
                      </div>

                      <div className="hidden lg:flex lg:flex-wrap">
                        <div className="flex flex-col mx-4">
                          <span className="py-0.5">Tác giả</span>
                          <span className="py-0.5">Nhà xuất bản</span>
                          <span className="py-0.5">Số trang</span>
                          <span className="py-0.5">Danh mục</span>
                          <span className="py-0.5">Thể loại</span>
                        </div>
                        <div className="flex flex-col mx-4">
                          <span className="py-0.5 font-semibold">{authorName}</span>
                          <span className="py-0.5 font-semibold">{publisherName}</span>
                          <span className="py-0.5 font-semibold">{item.SoTrang}</span>
                          <span className="py-0.5 font-semibold">{categoryName}</span>
                          <span className="py-0.5 font-semibold">{genreName}</span>
                        </div>
                      </div>

                      <div className="w-full flex flex-row items-center px-4 lg:py-5">
                        <span className="text-xl lg:text-3xl text-red-500 font-semibold">
                          {changeCostWithDots(item.GiaBan)}đ
                        </span>
                      </div>

                      <div className="flex flex-row items-center mt-4 mx-4">
                        <div className="rounded-sm cursor-pointer lg:w-1/2">
                          <div
                            onClick={() => {
                              handleAddToCart(item)
                            }}
                            className="py-2 px-1 flex flex-row lg:justify-center bg-red-500 rounded-lg hover:bg-red-400 transition"
                          >
                            <BsCart3 className="w-5 h-5 lg:w-7 lg:h-7 text-white font-semibold" />
                            <span className="mx-1 text-white font-medium text-sm md:text-base lg:text-lg whitespace-nowrap">
                              Thêm giỏ hàng
                            </span>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center justify-end lg:w-1/2 lg:justify-center">
                          <span className="text-gray-500 text-sm md:text-base font-semibold mx-3">
                            Số lượng
                          </span>
                          <div className="flex flex-row items-center w-24 rounded-sm border border-slate-300 justify-between">
                            <button
                              onClick={() => decrementQuantity(quantity)}
                              className="w-full border-r-2 flex justify-center cursor-pointer"
                            >
                              <IoMdRemove className="w-5 h-7 text-gray-600" />
                            </button>
                            <div className="w-full flex justify-center">
                              <span className="text-gray-800 font-semibold">{quantity}</span>
                            </div>

                            <button
                              onClick={() => incrementQuantity(quantity)}
                              className="w-full border-l-2 flex justify-center cursor-pointer"
                            >
                              <IoAddSharp className="w-5 h-7 text-gray-600" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col mx-4 xl:mx-0 my-4 w-full xl:w-4/5 bg-white shadow-md">
                  <div className="flex flex-row cursor-pointer">
                    <div
                      onClick={() => handleContent(4)}
                      className={
                        showContent === 4
                          ? 'px-4 py-1 text-sm md:text-lg font-semibold bg-gray-400 text-slate-800'
                          : 'px-4 py-1 text-sm md:text-lg font-semibold'
                      }
                    >
                      Mô tả sản phẩm
                    </div>
                    <div
                      onClick={() => handleContent(5)}
                      className={
                        showContent === 5
                          ? 'px-4 py-1 text-sm md:text-lg font-semibold bg-gray-400 text-slate-800'
                          : 'px-4 py-1 text-sm md:text-lg font-semibold'
                      }
                    >
                      Thông tin chi tiết
                    </div>
                  </div>

                  <div className="flex flex-wrap w-full">
                    {showContent === 4 && <div className="p-4 break-normal">{item.TomTatND}</div>}

                    {showContent === 5 && (
                      <>
                        <div className="flex flex-col py-1 px-4">
                          <span className="text-sm md:text-base py-2">Tác giả</span>
                          <span className="text-sm md:text-base py-2">Nhà xuất bản</span>
                          <span className="text-sm md:text-base py-2">Số trang</span>
                          <span className="text-sm md:text-base py-2">Danh mục</span>
                          <span className="text-sm md:text-base py-2">Thể loại</span>
                        </div>
                        <div className="flex flex-col py-1 px-4">
                          <span className="text-sm md:text-base py-2">{authorName}</span>
                          <span className="text-sm md:text-base py-2">{publisherName}</span>
                          <span className="text-sm md:text-base py-2">{item.SoTrang}</span>
                          <span className="text-sm md:text-base py-2">{categoryName}</span>
                          <span className="text-sm md:text-base py-2">{genreName}</span>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </Fragment>
            )
          })}

          <div className="flex flex-wrap w-full xl:w-4/5 bg-white rounded-sm py-3 shadow-md">
            <span className="text-base md:text-lg lg:text-xl font-semibold mx-4 mb-8 w-full">
              SẢN PHẨM LIÊN QUAN
            </span>

            <RelatedBook
              procsInSameCategory={procsInSameCategory}
              changeCostWithDots={changeCostWithDots}
            ></RelatedBook>
          </div>
        </div>
      )}
    </>
  )
}

export default DetailBook
