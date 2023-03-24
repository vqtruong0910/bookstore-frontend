import { Link, useNavigate } from 'react-router-dom'
import Slider from 'react-slick'
import Notify from '../../../components/Notify'
import sachbanchay from '../../../assets/images/sachbanchay.png'
import logo from '../../../assets/images/logo.png'
import { FiShoppingBag } from 'react-icons/fi'
import { PATH } from '../../../constants/path'
import style from './BestSellerBook.module.scss'
import { useContext, useState } from 'react'
import Context from '../../../store/Context'
import { addToCart } from '../../../reducers/cartReducers'

const BestSellerBook = ({ data, settings }) => {
  const [notify, setNotify] = useState(false)
  const navigate = useNavigate()
  const { dispatch } = useContext(Context)

  const addToCartHandler = (product) => {
    dispatch(addToCart(product))
    return setNotify(true)
  }

  const changeCostWithDots = (item) => {
    return item.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
  }
  return (
    <div className="w-4/5 mx-auto rounded-md border border-gray-200 drop-shadow-md bg-white mb-10 py-10">
      <div className="flex w-full justify-center items-center pb-2 border-gray-300">
        <div className="flex items-center">
          <img
            src={sachbanchay}
            className="flex w-10 h-10 lg:w-12 lg:h-12 mx-2 text-slate-700 object-fit"
            alt="best-seller"
          />
          <span className="w-full flex text-2xl font-bolder font-lobster lg:text-4xl md:text-3xl text-orange-500">
            Sách bán chạy
          </span>
        </div>
      </div>
      <div className="flex py-2 px-7 gap-x-3 items-center">
        <img
          className="w-12 h-12 rounded-full border border-slate-400"
          src={logo}
          alt="bookstore"
        />
        <span className="font-lobster text-lg">by Bookstore</span>
      </div>

      <div className="w-full">
        <Slider {...settings} className="mx-7">
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className="px-2 w-full hover:cursor-pointer hover:drop-shadow-xl transition h-80"
              >
                <div
                  onClick={() => navigate(`/books/${item.IDSanPham}`)}
                  className="w-full my-2 h-64"
                >
                  <img className="w-full object-contain h-full" src={item.HinhAnh} alt="book" />
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

        <div className="w-full flex justify-center mt-10">
          <Link
            to={PATH.category.dashboard}
            className="font-semibold text-md hover:border border-gray-200 bg-gradient-to-tl from-yellow-300 to-orange-700 text-white rounded-full lg:py-3 py-1 lg:px-20 px-10"
          >
            Xem thêm
          </Link>
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
  )
}

export default BestSellerBook
