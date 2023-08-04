import Swal from 'sweetalert2'
import { addToCart } from '../reducers/cartReducers'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import Context from '../store/Context'
import { PATH } from '../constants/path'
import { useTranslation } from 'react-i18next'

function useCart() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { dispatch } = useContext(Context)

  const handleAddToCart = async (product, quantity) => {
    await dispatch(addToCart(product, quantity))
    await Swal.fire({
      title: t('Thêm giỏ hàng thành công'),
      icon: 'success',
      showCancelButton: false,
      confirmButtonColor: 'rgb(29, 192, 113)',
      confirmButtonText: t('Xem giỏ hàng'),
    }).then(async (result) => {
      if (result.isConfirmed) {
        navigate(PATH.cart)
      }
    })
  }

  return { handleAddToCart }
}

export default useCart
