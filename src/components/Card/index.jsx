import { FiShoppingBag } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import style from './Card.module.scss'

function Card({ onClick = () => {}, item, changeCostWithDots }) {
  const navigate = useNavigate()

  return (
    <div className="px-2 w-full hover:cursor-pointer hover:drop-shadow-xl transition h-80">
      <div onClick={() => navigate(`/books/${item.IDSanPham}`)} className="w-full my-2 h-64">
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
        <div className="text-red-600 md:text-lg lg:text-xl">{changeCostWithDots}đ</div>
      </div>

      <div
        onClick={onClick}
        className="flex bg-slate-700 hover:bg-slate-500 transition rounded-sm py-2 mt-2 items-center justify-center mx-2"
      >
        <FiShoppingBag className="w-4 h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 text-white" />
        <span className="text-white text-sm md:text-base lg:text-lg mx-1">Thêm giỏ hàng</span>
      </div>
    </div>
  )
}

export default Card
