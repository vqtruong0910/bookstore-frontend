import { FiShoppingBag } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import style from './Card.module.scss'
import { useContext } from 'react'
import Context from '../../store/Context'
import { addToCart } from '../../reducers/cartReducers'
import Swal from 'sweetalert2'
import { PATH } from '../../constants/path'

function Card({ item }) {
  const navigate = useNavigate()
  const { dispatch } = useContext(Context)

  const addToCartHandler = async (product) => {
    await dispatch(addToCart(product))
    Swal.fire({
      title: 'Thêm giỏ hàng thành công',
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: 'rgb(29, 192, 113)',
      confirmButtonText: 'Xem giỏ hàng',
    }).then(async (result) => {
      if (result.isConfirmed) {
        navigate(PATH.cart)
      }
    })
  }

  const changeCostWithDots = (item) => {
    return item.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
  }

  return (
    <div className="px-2 w-full hover:cursor-pointer hover:drop-shadow-xl transition">
      <div onClick={() => navigate(`/books/${item.IDSanPham}`)} className="w-full mb-4">
        <img className="w-full object-contain max-h-[250px]" src={item.HinhAnh} alt="book" />
      </div>

      <div className="flex w-full px-4">
        <div
          className={`${style['product_name']} whitespace-normal w-full md:text-md lg:text-lg xl:text-xl font-medium`}
        >
          {item.TenSanPham}
        </div>
      </div>

      <div className="flex justify-between items-center font-medium text-center  w-full px-4 mb-4">
        <div className="text-red-600 md:text-md lg:text-lg xl:text-xl">
          {changeCostWithDots(item.GiaBan)}đ
        </div>
      </div>

      <div
        onClick={() => addToCartHandler(item)}
        className="flex bg-slate-700 hover:bg-slate-500 transition rounded-lg py-2 items-center justify-center mx-2"
      >
        <FiShoppingBag className="w-5 h-5 text-white" />
        <span className="text-white mx-1">Thêm giỏ hàng</span>
      </div>
    </div>
  )
}

export default Card
