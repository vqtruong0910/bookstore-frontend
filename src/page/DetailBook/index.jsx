import { IoAddSharp, IoTimeOutline } from 'react-icons/io5'
import { IoMdRemove } from 'react-icons/io'
import {
  BsArrowLeftCircleFill,
  BsArrowRepeat,
  BsArrowRightCircleFill,
  BsCart3,
  BsPrinter,
} from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { BiMessageRoundedEdit } from 'react-icons/bi'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect, Fragment } from 'react'
import axiosConfig from '../../config/axiosConfig'
import RelatedBook from '../../module/Book/RelatedBook'
import LoadingSkeletonDetailBook from '../../components/Loading/LoadingSkeletonDetailBook'
import useCart from '../../hooks/useCart'
import { API } from '../../constants/api'
import { useTranslation } from 'react-i18next'
import star from '../../assets/images/star.png'

const DetailBook = () => {
  const { t } = useTranslation()
  const { bookID } = useParams()
  const { handleAddToCart } = useCart()
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

  const decrement = (item) => {
    setQuantity((item) => {
      if (item - 1 < 1) return 1

      return item - 1
    })
  }

  const increment = (item) => {
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
          setBook(response.data.data)
          await response.data.data.forEach((item) => {
            setAuthorID(item.IDNhaXuatBan)
            setGenreID(item.IDTheLoai)
            setPublisherID(item.IDNhaXuatBan)
          })

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

          isLoading(false)
        }
      }

      fetchDetailBookData()
    } catch (error) {
      console.log(error)
      isLoading(false)
    }
  }, [bookID, authorID, publisherID, categoryID, genreID])

  return (
    <>
      {loading && <LoadingSkeletonDetailBook></LoadingSkeletonDetailBook>}

      {!loading && (
        <div className="w-full flex flex-col items-center drop-shadow-lg">
          {book.map((item) => {
            return (
              <Fragment key={item.IDSanPham}>
                <div className="w-full xl:w-4/5 gap-5 rounded-sm flex flex-col">
                  <div className="w-full py-10 flex items-center border-gray-200 border-2 shadow-md flex-wrap lg:flex-nowrap">
                    <img
                      className="w-full object-contain h-full max-h-[300px]"
                      src={item.HinhAnh}
                      alt="book"
                    />
                    <div className="w-full flex-col flex">
                      <div className="w-full justify-center lg:justify-start flex py-5 lg:py-0 px-4 mb-0 lg:mb-4">
                        <span className="text-2xl lg:text-3xl font-medium text-gray-700">
                          {item.TenSanPham.toUpperCase()}
                        </span>
                      </div>

                      <div className="hidden lg:flex lg:flex-wrap">
                        <div className="flex flex-col mx-4">
                          <span className="py-0.5 lg:text-lg">{t('Tác giả')}</span>
                          <span className="py-0.5 lg:text-lg">{t('Nhà xuất bản')}</span>
                          <span className="py-0.5 lg:text-lg">{t('Số trang')}</span>
                          <span className="py-0.5 lg:text-lg">{t('Danh mục')}</span>
                          <span className="py-0.5 lg:text-lg">{t('Thể loại')}</span>
                        </div>
                        <div className="flex flex-col mx-4">
                          <span className="py-0.5 font-semibold lg:text-lg">{authorName}</span>
                          <span className="py-0.5 font-semibold lg:text-lg">{publisherName}</span>
                          <span className="py-0.5 font-semibold lg:text-lg">{item.SoTrang}</span>
                          <span className="py-0.5 font-semibold lg:text-lg">{categoryName}</span>
                          <span className="py-0.5 font-semibold lg:text-lg">{genreName}</span>
                        </div>
                      </div>

                      <div className="w-full flex flex-row items-center px-4 lg:py-5">
                        <span className="text-xl lg:text-3xl text-red-500 font-semibold">
                          {changeCostWithDots(item.GiaBan)}đ
                        </span>
                      </div>

                      <div className="flex flex-row items-center mt-4 mx-4">
                        <div className="rounded-sm cursor-pointer w-full">
                          {item.SoLuongConLai < 1 && (
                            <div className="py-2 px-1 flex justify-center bg-red-300 rounded-md">
                              <span className="mx-1 text-red-500 font-medium text-sm md:text-base lg:text-lg whitespace-nowrap">
                                {t(`Sản phẩm tạm hết hàng`)}
                              </span>
                            </div>
                          )}

                          {item.SoLuongConLai >= 1 && (
                            <div
                              onClick={() => {
                                handleAddToCart(item, quantity)
                              }}
                              className="py-2 px-1 flex flex-row lg:justify-center bg-red-500 rounded-lg hover:bg-red-400 transition"
                            >
                              <BsCart3 className="w-5 h-5 lg:w-7 lg:h-7 text-white font-semibold" />
                              <span className="mx-1 text-white font-medium text-sm md:text-base lg:text-lg whitespace-nowrap">
                                {t('Thêm giỏ hàng')}
                              </span>
                            </div>
                          )}
                        </div>

                        {item.SoLuongConLai >= 1 && (
                          <div className="flex items-center justify-end lg:w-1/2 lg:justify-center w-full">
                            <span className="text-gray-500 text-sm md:text-base font-semibold mx-3 whitespace-nowrap">
                              {t('Số lượng')}
                            </span>
                            <div className="flex flex-row items-center w-24 rounded-sm border border-slate-300 justify-between">
                              <button
                                onClick={() => decrement(quantity)}
                                className="w-full border-r-2 flex justify-center cursor-pointer"
                              >
                                <IoMdRemove className="w-5 h-7 text-gray-600" />
                              </button>
                              <div className="w-full flex justify-center">
                                <span className="text-gray-800 font-semibold">{quantity}</span>
                              </div>

                              <button
                                onClick={() => increment(quantity)}
                                className="w-full border-l-2 flex justify-center cursor-pointer"
                              >
                                <IoAddSharp className="w-5 h-7 text-gray-600" />
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col w-full bg-gray-100">
                    <div className="border-b-2 gap-3 border-gray-300 flex flex-col py-5 px-5 text-base items-center w-full">
                      <IoTimeOutline className="w-10 h-10 text-slate-700" />
                      <span>
                        {t(`Giao hàng đi ngay sau khi đặt hàng 24h - Sẽ liên hệ trước khi giao.`)}
                        {t(` Thời gian nhận hàng: *Đối với TPHCM 1-2 ngày.`)}
                        {t(` *Đối với ngoại tỉnh: Miền Nam 2-3 ngày. Miền Bắc 3-5 ngày.`)}
                      </span>
                    </div>
                    <hr />
                    <div className="border-b-2 gap-3 border-gray-300 flex flex-col py-5 px-5 text-base items-center w-full">
                      <BsArrowRepeat className="w-10 h-10 text-slate-700" />
                      <span>
                        {t(`Đổi trả trong 7 ngày `)}({t(`Nếu sản phẩm bị lỗi kĩ thuật`)}),
                        {t(` thủ tục đơn giản, nhanh chóng.`)}
                      </span>
                    </div>
                    <hr />
                    <div className="flex flex-col gap-3 py-5 px-5 text-base items-center w-full">
                      <BsPrinter className="w-10 h-10 text-slate-700" />
                      <span>{t(`Nhà cung cấp có xuất hóa đơn cho sản phẩm.`)}</span>
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
                      {t('Mô tả sản phẩm')}
                    </div>
                    <div
                      onClick={() => handleContent(5)}
                      className={
                        showContent === 5
                          ? 'px-4 py-1 text-sm md:text-lg font-semibold bg-gray-400 text-slate-800'
                          : 'px-4 py-1 text-sm md:text-lg font-semibold'
                      }
                    >
                      {t('Thông tin chi tiết')}
                    </div>
                  </div>

                  <div className="flex flex-wrap w-full">
                    {showContent === 4 && <div className="p-4 break-normal">{item.TomTatND}</div>}

                    {showContent === 5 && (
                      <>
                        <div className="flex flex-col py-1 px-4">
                          <span className="text-sm md:text-base py-2">{t('Tác giả')}</span>
                          <span className="text-sm md:text-base py-2">{t('Nhà xuất bản')}</span>
                          <span className="text-sm md:text-base py-2">{t('Số trang')}</span>
                          <span className="text-sm md:text-base py-2">{t('Danh mục')}</span>
                          <span className="text-sm md:text-base py-2">{t('Thể loại')}</span>
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
              {t('SẢN PHẨM LIÊN QUAN')}
            </span>

            <RelatedBook
              procsInSameCategory={procsInSameCategory}
              changeCostWithDots={changeCostWithDots}
            ></RelatedBook>
          </div>

          <div className="flex flex-wrap w-full bg-white rounded-sm py-3 drop-shadow-lg border-2 mt-10 xl:w-4/5">
            <span className="text-base md:text-lg lg:text-xl font-semibold w-full px-4">
              {t(`ĐÁNH GIÁ - NHẬN XÉT TỪ KHÁCH HÀNG`)}
            </span>

            {/* <div className="w-full flex flex-col">
              <div className="w-full flex flex-col border-b-2">
                <div className="flex flex-col w-full gap-3 my-5 px-4">
                  <div className="flex flex-row items-center w-full md:w-3/12">
                    <div className="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16">
                      <img
                        src={avatar}
                        className="w-full bg-gray-200 rounded-full"
                        alt="Avatar_User"
                      />
                    </div>

                    <div className="flex flex-col ml-2 gap-2">
                      <span className="text-sm lg:text-md font-bold whitespace-nowrap">
                        Võ Ngọc Minh Trang
                      </span>

                      <div className="flex gap-1">
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                      </div>

                      <span className="text-sm lg:text-md font-semibold text-gray-400 whitespace-nowrap">
                        11:20 27/12/2022
                      </span>
                    </div>
                  </div>

                  <div className="flex w-full md:w-9/12">
                    <BiMessageRoundedEdit className="w-5 h-5 lg:w-7 lg:h-7 text-gray-700" />
                    <span className="text-sm w-full mx-0.5 text-gray-700 lg:text-base">
                      Nội dung rất hay, rất đặc sắc, những câu chuyện được miêu tả rất chân thực,
                      xúc động.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full flex flex-col">
              <div className="w-full flex flex-col border-b-2">
                <div className="flex flex-col w-full gap-3 my-5 px-4">
                  <div className="flex flex-row items-center w-full md:w-3/12">
                    <div className="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16">
                      <img
                        src={avatar}
                        className="w-full bg-gray-200 rounded-full"
                        alt="Avatar_User"
                      />
                    </div>

                    <div className="flex flex-col ml-2 gap-2">
                      <span className="text-sm lg:text-md font-bold whitespace-nowrap">
                        Võ Ngọc Minh Trang
                      </span>

                      <div className="flex gap-1">
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                        <AiFillStar className="text-yellow-500" />
                      </div>

                      <span className="text-sm lg:text-md font-semibold text-gray-400 whitespace-nowrap">
                        11:20 27/12/2022
                      </span>
                    </div>
                  </div>

                  <div className="flex w-full md:w-9/12">
                    <BiMessageRoundedEdit className="w-5 h-5 lg:w-7 lg:h-7 text-gray-700" />
                    <span className="text-sm w-full mx-0.5 text-gray-700 lg:text-base">
                      Nội dung rất hay, rất đặc sắc, những câu chuyện được miêu tả rất chân thực,
                      xúc động.
                    </span>
                  </div>
                </div>
              </div>
            </div> */}

            <div className="flex flex-col gap-2 my-10 items-center w-full">
              <img src={star} alt="img" className="w-40 h-40 mx-auto" />
              <span className="text-lg text-gray-400">
                {t(`Chưa có đánh giá nào cho sản phẩm này`)}
              </span>
            </div>

            {/* <div className="flex flex-wrap w-full justify-end items-center px-4 mt-4">
              <BsArrowLeftCircleFill className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-slate-400" />
              <span className="mx-2 font-medium text-sm md:text-base lg:text-lg">1</span>
              <BsArrowRightCircleFill className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-slate-700" />
            </div> */}
          </div>
        </div>
      )}
    </>
  )
}

export default DetailBook
