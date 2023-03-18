import { IoAddSharp } from 'react-icons/io5'
import { IoMdRemove } from 'react-icons/io'
import { BsCart3 } from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import style from './DetailBook.module.scss'
import React, { useState, useContext, useEffect } from 'react'
import Notify from '../../components/Notify'
import Context from '../../store/Context'
import { addToCart } from '../../reducers/cartReducers'
import axiosConfig from '../../config/axiosConfig'
import RelatedBook from '../RelatedBook'
import LoadingSkeletonDetailBook from '../../components/Loading/LoadingSkeletonDetailBook'

function DetailBook() {
  const { bookID } = useParams()
  const [book, setBook] = useState([])
  const [authorID, genreID, publisherID, categoryID] = useState('')
  const [genreName, setGenreName] = useState('')
  const [authorName, setAuthorName] = useState('')
  const [publisherName, setPublisherName] = useState('')
  const [categoryName, setCategoryName] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [procsInSameCategory, setProcsInSameCategory] = useState([])
  const [notify, setNotify] = useState(false)
  const [loading, isLoading] = useState(true)
  const [showContent, setShowContent] = useState(4)
  const { dispatch } = useContext(Context)
  const addToCartHandler = (product) => {
    dispatch(addToCart(product, quantity))
    return setNotify(true)
  }
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
    let authorID = ''
    let genreID = ''
    let publisherID = ''
    let categoryID = ''

    try {
      const fetchDetailBookData = async () => {
        isLoading(true)
        const response = await axiosConfig(`product/${bookID}`)
        if (response.data.data) {
          setTimeout(() => {
            isLoading(false)
            setBook(response.data.data)
            response.data.data.forEach((item) => {
              authorID = item.IDNhaXuatBan
              genreID = item.IDTheLoai
              publisherID = item.IDNhaXuatBan
            })
          }, 500)
        }

        const responseAuthorName = await axiosConfig(`author/${authorID}`)
        responseAuthorName.data.data.forEach((item) => {
          setAuthorName(item.TenTacGia)
        })

        const responseGenreName = await axiosConfig(`kind_product/${genreID}`)
        responseGenreName.data.data.forEach((item) => {
          setGenreName(item.TenTheLoai)
          categoryID = item.IDDanhMuc
        })

        const responsePublisherName = await axiosConfig(`publishing/${publisherID}`)
        responsePublisherName.data.data.forEach((item) => {
          setPublisherName(item.TenNhaXuatBan)
        })

        const responseCategoryName = await axiosConfig(`category/${categoryID}`)
        responseCategoryName.data.data.forEach((item) => {
          setCategoryName(item.TenDanhMuc)
        })

        const responseProcsInSameCategory = await axiosConfig(`product/id_theloai/${genreID}`)
        setProcsInSameCategory(responseProcsInSameCategory.data.data)
      }
      fetchDetailBookData()
    } catch (error) {
      console.log(error)
      isLoading(false)
    }
  }, [bookID, authorID, genreID, publisherID, categoryID])

  useEffect(() => {
    document.body.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [bookID])

  return (
    <>
      {loading && <LoadingSkeletonDetailBook></LoadingSkeletonDetailBook>}

      {!loading && (
        <div className="w-full flex py-6 flex-col items-center drop-shadow-lg">
          {book.map((item) => {
            return (
              <div key={item.IDSanPham}>
                <div className="w-full bg-white rounded-sm flex shadow-md">
                  <div className="w-full my-3 flex flex-wrap lg:flex-nowrap">
                    <div className="flex flex-wrap w-full lg:w-4/12">
                      <div className="w-full flex justify-center">
                        <img
                          src={item.HinhAnh}
                          className="w-64 h-64 lg:w-96 lg:h-96"
                          alt="Book_Image"
                        />
                      </div>
                    </div>

                    <div className="w-full flex-col flex lg:w-8/12">
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

                      <div className="lg:w-7/12 flex flex-row items-center mt-4 mx-4">
                        <div className="rounded-sm cursor-pointer lg:w-1/2">
                          <div
                            onClick={() => {
                              addToCartHandler(item)
                            }}
                            className="py-1 lg:py-3 px-1 flex flex-row lg:justify-center bg-red-500 rounded-sm hover:bg-red-400 transition"
                          >
                            <BsCart3 className="w-5 h-5 lg:w-7 lg:h-7 text-white font-semibold" />
                            <span className="mx-1 text-white font-medium text-sm lg:text-lg">
                              Thêm giỏ hàng
                            </span>
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

                <div className="flex flex-wrap w-full bg-white my-4 shadow-md">
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
              </div>
            )
          })}

          <div className="flex flex-wrap w-full bg-white rounded-sm py-3 shadow-md">
            <span className="text-base md:text-lg lg:text-xl font-semibold mx-4 w-full">
              SẢN PHẨM LIÊN QUAN
            </span>

            <RelatedBook
              style={style}
              procsInSameCategory={procsInSameCategory}
              changeCostWithDots={changeCostWithDots}
              addToCartHandler={addToCartHandler}
              notify={notify}
              setNotify={setNotify}
            ></RelatedBook>
          </div>

          {/* <div className="flex flex-wrap w-full bg-white rounded-sm py-3 mt-4 shadow-md">
          <span className="text-base md:text-lg lg:text-xl font-semibold w-full px-4">ĐÁNH GIÁ SẢN PHẨM</span>

          <div className="w-full flex flex-col">
              <div className="w-full flex flex-col border-b-2">
                  <div className="flex w-full my-5 px-4">
                      <div className="flex flex-row w-full md:w-3/12">
                          <div className="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16">
                              <img src="https://scontent.fsgn13-3.fna.fbcdn.net/v/t1.6435-1/155979415_2946100539003750_7844294579569965404_n.jpg?stp=dst-jpg_p100x100&_nc_cat=102&ccb=1-7&_nc_sid=7206a8&_nc_ohc=vi4UJAmnQksAX_ov2_r&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn13-3.fna&oh=00_AT87WeMXH9EWvZ1K0v9t-Dhb2QrPGpFf1uu5Ph2ImwdZbw&oe=637B6BAC"
                                  className="w-full bg-gray-200 rounded-full" alt="Avatar_User" />
                          </div>

                          <div className="flex flex-col ml-2">
                              <span className="text-xs lg:text-sm font-bold">Tạ Minh Vũ</span>
                              <span className="text-xs lg:text-sm font-semibold text-gray-400 my-1">11:20 27/12/2022</span>
                          </div>
                      </div>

                      <div className="flex ml-4 w-full md:w-9/12">
                          <BiMessageRoundedEdit className="w-5 h-5 lg:w-7 lg:h-7 text-gray-700" />
                          <span className="text-sm w-full mx-0.5 text-gray-700 lg:text-base">Nội dung rất hay, rất đặc sắc, những câu chuyện được miêu tả rất chân thực, xúc động.</span>
                      </div>
                  </div>
              </div>

              <div className="w-full flex flex-col border-b-2">
                  <div className="flex w-full my-5 px-4">
                      <div className="flex flex-row w-full md:w-3/12">
                          <div className="flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16">
                              <img src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p100x100&_nc_cat=1&ccb=1-7&_nc_sid=7206a8&_nc_ohc=1Rph2yqJK04AX_ViEJO&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fsgn8-1.fna&oh=00_AT_LC9lA-uhMzkit_9oI_nZtJahJlVPxNKztQ4tSNuco6w&oe=637C7278"
                                  className="w-full bg-gray-200 rounded-full" alt="Avatar_User" />
                          </div>

                          <div className="flex flex-col ml-2">
                              <span className="text-xs lg:text-sm font-bold">Võ Quang Trường</span>
                              <span className="text-xs lg:text-sm font-semibold text-gray-400 my-1">12:30 20/12/2022</span>
                          </div>
                      </div>

                      <div className="flex ml-4 w-full md:w-9/12">
                          <BiMessageRoundedEdit className="w-5 h-5 lg:w-7 lg:h-7 text-gray-700" />
                          <span className="text-sm w-full mx-0.5 text-gray-700 lg:text-base">Đây là quyển sách hay nhất mình từng đọc, lời văn của tác giả lôi cuốn thật sự.</span>
                      </div>
                  </div>
              </div>
          </div>

          <div className="flex flex-wrap w-full justify-end items-center px-4 mt-4">
              <BsArrowLeftCircleFill className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-slate-400" />
              <span className="mx-2 font-medium text-sm md:text-base lg:text-lg">1</span>
              <BsArrowRightCircleFill className="w-6 h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-slate-700" />
          </div>
      </div> */}
        </div>
      )}
    </>
  )
}

export default DetailBook
