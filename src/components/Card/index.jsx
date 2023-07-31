import { FiShoppingBag } from 'react-icons/fi'
import style from './Card.module.scss'
import Image from '../Image'
import useCart from '../../hooks/useCart'
import { useTranslation } from 'react-i18next'

function Card({ item }) {
  const { t } = useTranslation()
  const { handleAddToCart } = useCart()

  const changeCostWithDots = (item) => {
    return item.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
  }

  return (
    <div className="w-full hover:cursor-pointer hover:drop-shadow-xl transition">
      <Image item={item} />

      <div className="flex w-full px-4 mt-4">
        <div
          className={`${style['product_name']} whitespace-normal w-full md:text-md lg:text-lg xl:text-xl font-medium`}
        >
          {item.TenSanPham}
        </div>
      </div>

      <div className="flex justify-between items-center font-medium text-center w-full px-4 mb-4">
        <div className="text-red-600 md:text-md lg:text-lg xl:text-xl">
          {changeCostWithDots(item.GiaBan)}đ
        </div>
      </div>

      <div
        onClick={() => handleAddToCart(item)}
        className="flex bg-slate-700 hover:bg-slate-500 transition rounded-lg py-2 items-center justify-center mx-2"
      >
        <FiShoppingBag className="w-5 h-5 text-white" />
        <span className="text-white mx-1 whitespace-nowrap text-sm md:text-md lg:text-lg">
          {t('Thêm giỏ hàng')}
        </span>
      </div>
    </div>
  )
}

export default Card
