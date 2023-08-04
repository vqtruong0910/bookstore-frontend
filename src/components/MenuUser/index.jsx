import { AiOutlineUser } from 'react-icons/ai'
import { TbTruck } from 'react-icons/tb'
import { BiMessageEdit } from 'react-icons/bi'
import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { PATH } from '../../constants/path'
import Context from '../../store/Context'
import { useContext } from 'react'
import { useTranslation } from 'react-i18next'
import jwtDecode from 'jwt-decode'

function MenuUser() {
  const { t } = useTranslation()
  const { user } = useContext(Context)

  console.log('>>>>>>>>>>>>>', user)
  const location = useLocation()
  const navigate = useNavigate()
  const activeLink = 'bg-slate-700 w-full'

  const isAdmin = useMemo(() => {
    try {
      const { Quyen } = jwtDecode(localStorage.getItem('token'))
      return Quyen === 0 ? true : false
    } catch (error) {
      return false
    }
  }, [])

  return (
    <div className="w-full h-full min-h-auto md:w-64 bg-blue-100 drop-shadow-lg rounded-sm">
      <div className="flex items-center justify-center">
        <div className="mt-5 items-center justify-center flex relative">
          <div className="flex justify-center items-center">
            {user.Anh ? (
              <img src={user.Anh} alt="Avatar" className="rounded-full w-24 h-24 border-2" />
            ) : (
              <AiOutlineUser className="border-2 border-blue-200 text-blue-300 rounded-full w-24 h-24"></AiOutlineUser>
            )}
          </div>
        </div>
      </div>

      <h1 className="text-gray-800 font-semibold text-xl mt-3 text-center w-full">{user.HoTen}</h1>
      <h1 className="text-gray-500 text-sm w-full text-center mt-2">
        {isAdmin ? t('Quản trị viên') : t(`Khách hàng`)}
      </h1>

      <div className="mt-5 w-full flex flex-wrap">
        <div
          onClick={() => navigate(PATH.profile.dashboard)}
          className={`flex w-full focus:bg-gray-300 items-center py-3 cursor-pointer ${
            location.pathname === PATH.profile.dashboard && activeLink
          } `}
        >
          <div className="w-full flex items-center px-5 md:px-10">
            <AiOutlineUser
              className={`w-8 h-8 ${location.pathname === PATH.profile.dashboard && 'text-white'} `}
            />
            <div
              className={`font-semibold text-sm w-full mx-1 whitespace-nowrap ${
                location.pathname === PATH.profile.dashboard && 'text-white'
              } `}
            >
              {t(`Thông tin tài khoản`)}
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate(PATH.profile.user_order_management)}
          className={`flex w-full focus:bg-gray-300 items-center py-3 cursor-pointer ${
            location.pathname === PATH.profile.user_order_management && activeLink
          } `}
        >
          <div className="w-full flex items-center px-5 md:px-10">
            <TbTruck
              className={`w-8 h-8 ${
                location.pathname === PATH.profile.user_order_management && 'text-white'
              } `}
            />
            <div
              className={`font-semibold text-sm w-full mx-1 whitespace-nowrap ${
                location.pathname === PATH.profile.user_order_management && 'text-white'
              } `}
            >
              {t(`Quản lý đơn hàng`)}
            </div>
          </div>
        </div>
        <div
          onClick={() => navigate(PATH.profile.user_review)}
          className={`flex w-full focus:bg-gray-300 items-center py-3 cursor-pointer ${
            location.pathname === PATH.profile.user_review && activeLink
          } `}
        >
          <div className="w-full flex items-center px-5 md:px-10">
            <BiMessageEdit
              className={`w-8 h-8 ${
                location.pathname === PATH.profile.user_review && 'text-white'
              } `}
            />
            <div
              className={`font-semibold text-sm w-full mx-1 whitespace-nowrap ${
                location.pathname === PATH.profile.user_review && 'text-white'
              } `}
            >
              {t(`Đánh giá sản phẩm`)}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MenuUser
