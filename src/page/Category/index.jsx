import { useNavigate } from 'react-router-dom'
import style from './Category.module.scss'
import { FiShoppingBag } from 'react-icons/fi'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import { useState, useContext, useEffect } from 'react'
import Notify from '../../components/Notify'
import Context from '../../store/Context'
import { addToCart } from '../../reducers/cartReducers'
import axiosConfig from '../../config/axiosConfig'
import LoadingSkeletonCategory from '../../components/Loading/LoadingSkeletonCategory'

function Category() {
  const [notify, setNotify] = useState(false)
  const { dispatch } = useContext(Context)
  const [page, setPage] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, isLoading] = useState(true)
  const navigate = useNavigate()
  const addToCartHandler = (product) => {
    dispatch(addToCart(product))
    return setNotify(true)
  }
  const changeCostWithDots = (item) => {
    return item.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
  }
  const sizePerPage = 5
  let arrSoTrang = []
  for (let i = 1; i <= page.SoLuongTrang; i++) {
    arrSoTrang.push(i)
  }
  const nextPage = (item) => {
    setCurrentPage((item) => {
      if (item + 1 > page.SoLuongTrang) return page.SoLuongTrang
      return item + 1
    })
  }
  const prevPage = (item) => {
    setCurrentPage((item) => {
      if (item - 1 < 1) return 1
      return item - 1
    })
  }

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        isLoading(true)
        const response = await axiosConfig(`product/pages?p=${currentPage}&s=${sizePerPage}`)
        if (response.data.data) {
          setTimeout(() => {
            isLoading(false)
            setPage(response.data.data)
          }, 250)
        }
      } catch (error) {
        console.log(error)
        isLoading(false)
      }
    }
    fetchBookData()
  }, [currentPage])

  return (
    <>
      {loading && <LoadingSkeletonCategory></LoadingSkeletonCategory>}

      {!loading && (
        <>
          <div className="w-full flex items-center justify-end pb-8">
            <span className="mx-2 text-base md:text-lg font-medium text-gray-500">Sắp xếp</span>
            <select className="border text-black/70 rounded-sm px-3 py-1 cursor-pointer bg-white border-black/70 focus:outline-none focus:ring-black/40 focus:ring-1 text-base font-semibold">
              <option value="moinhat">Mới nhất</option>
              <option value="banchay">Bán chạy</option>
              <option value="phobien">Phổ biến</option>
              <option value="giatangdan">Giá tăng dần</option>
              <option value="giagiamdan">Giá giảm dần</option>
            </select>
          </div>
          <div className="w-full bg-white border border-gray-100 drop-shadow-lg">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5">
              {page.DanhSach?.map((item, index) => {
                return (
                  <div key={index} className="relative w-full hover:cursor-pointer">
                    <div
                      onClick={() => navigate(`/books/${item.IDSanPham}`)}
                      className="flex w-full justify-center drop-shadow-md mt-3 cursor-pointer h-52 md:h-64 lg:h-72"
                    >
                      <img className="w-full object-fit" src={item.HinhAnh} alt="New Book" />
                    </div>

                    <div className="grid w-full py-3 px-4">
                      <span
                        className={`${style['product_name']} self-center w-full text-xs md:text-base lg:text-xl font-medium lg:leading-6`}
                      >
                        {item.TenSanPham}
                      </span>
                    </div>

                    <div className="flex justify-between items-center font-medium w-full px-4">
                      <div className="text-red-600 text-lg md:text-xl">
                        {changeCostWithDots(item.GiaBan)}đ
                      </div>
                    </div>

                    <div className="flex w-full mt-2 mb-4 px-4">
                      <div
                        onClick={() => addToCartHandler(item)}
                        className="flex w-full rounded-sm bg-slate-700 hover:bg-slate-500 transition items-center justify-center py-1"
                      >
                        <FiShoppingBag className="w-5 h-5 text-white" />
                        <div className=" text-sm md:text-base lg:text-lg text-white py-1 mx-0.5">
                          Thêm giỏ hàng
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
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
          </div>
          <div className="flex flex-wrap w-full justify-end items-center py-4">
            <BsArrowLeftCircleFill
              onClick={() => prevPage(currentPage)}
              className={
                currentPage === 1
                  ? 'w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-white cursor-pointer'
                  : 'w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-slate-700 cursor-pointer'
              }
            />
            {arrSoTrang.map((item, index) => {
              return (
                <span
                  onClick={() => setCurrentPage(item)}
                  key={index}
                  className={
                    currentPage === item
                      ? 'mx-2 font-medium text-sm md:text-base lg:text-lg cursor-pointer bg-slate-400 px-2 text-white'
                      : 'mx-2 font-medium text-sm md:text-base lg:text-lg cursor-pointer'
                  }
                >
                  {item}
                </span>
              )
            })}
            <BsArrowRightCircleFill
              onClick={() => nextPage(currentPage)}
              className={
                currentPage === page.SoLuongTrang
                  ? 'w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-white cursor-pointer'
                  : 'w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-slate-700 cursor-pointer'
              }
            />
          </div>
        </>
      )}
    </>
  )
}

export default Category
