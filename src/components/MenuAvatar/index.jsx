import { useNavigate } from 'react-router-dom'
import { PATH } from '../../constants/path'
import jwtDecode from 'jwt-decode'
import { useCallback, useContext, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import axiosConfig from '../../config/axiosConfig'
import { API } from '../../constants/api'
import Context from '../../store/Context'

function MenuAvatar() {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const { setUser } = useContext(Context)

  const isAdmin = useMemo(() => {
    try {
      const { Quyen } = jwtDecode(localStorage.getItem('token'))
      return Quyen === 0 ? true : false
    } catch (error) {
      return false
    }
  }, [])

  const logout = useCallback(async () => {
    try {
      await axiosConfig.delete(API.LOGOUT)
    } catch (error) {
      console.log('Logout failed: ', error)
    } finally {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      setUser(false)
      navigate(PATH.login, { replace: true })
    }
  }, [])

  return (
    <ul className="bg-gray-100 font-semibold right-1 mt-2 transition-all duration-150 absolute bg-slate- text-black rounded-sm border border-gray-300 z-50 drop-shadow-lg whitespace-nowrap">
      {isAdmin && (
        <li
          onClick={() => {
            navigate(PATH.admin.dashboard)
          }}
          className="p-2 hover:bg-gray-300"
        >
          {t(`Quản trị viên`)}
        </li>
      )}
      <li onClick={() => navigate(PATH.profile.dashboard)} className="p-2 hover:bg-slate-300">
        {t(`Thông tin tài khoản`)}
      </li>
      <li
        onClick={() => navigate(PATH.profile.user_order_management)}
        className="p-2 hover:bg-slate-300"
      >
        {t(`Quản lý đơn hàng`)}
      </li>
      <li onClick={() => navigate(PATH.profile.user_review)} className="p-2 hover:bg-slate-300">
        {t(`Đánh giá sản phẩm`)}
      </li>
      <li onClick={logout} className="p-2 hover:bg-slate-300">
        {t(`Đăng xuất`)}
      </li>
    </ul>
  )
}

export default MenuAvatar
