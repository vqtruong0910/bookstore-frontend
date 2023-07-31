import { Link, useNavigate } from 'react-router-dom'
import { PATH } from '../../constants/path'
import logo from '../../assets/images/logo.png'
import { useCallback, useContext, useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import clsx from 'clsx'
import Context from '../../store/Context'
import { API } from '../../constants/api'
import axiosConfig from '../../config/axiosConfig'
import HeaderList from '../../module/Header/HeaderList'
import jwtDecode from 'jwt-decode'
import { useMemo } from 'react'
import Search from '../Search'
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import avatar from '../../assets/images/avatar.jpg'
import useClickOutside from '../../hooks/useClickOutside'
import Language from '../Language'

const Navbar = () => {
  const navigate = useNavigate()
  const [, setData] = useState([])
  const [open, setOpen] = useState(false)
  const { show, nodeRef } = useClickOutside()
  const { cart } = useContext(Context)
  const { user, setUser } = useContext(Context)

  const isAdmin = useMemo(() => {
    try {
      const { Quyen } = jwtDecode(localStorage.getItem('token'))
      return Quyen === 0 ? true : false
    } catch (error) {
      return false
    }
  }, [])

  const { items } = cart.reduce(
    ({ items }, { quantity }) => ({
      items: localStorage.getItem('userCart') ? items + quantity : 0,
    }),
    {
      items: 0,
    }
  )

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

  useEffect(() => {
    const fetchBookData = async () => {
      const response = await axiosConfig(`${API.ALL_ITEM}`)
      if (response.data.data) {
        setData(response.data.data)
      }
    }
    fetchBookData()
  }, [])

  return (
    <>
      <div
        className={clsx(
          open &&
            'fixed inset-0 bg-slate-900 bg-opacity-70 lg:bg-opacity-0 z-30 lg:hidden lg:z-auto transition-opacity duration-200'
        )}
        onClick={() => setOpen(false)}
      ></div>
      <div className="flex fixed text-slate-700 bg-slate-700 lg:bg-[#efefef] justify-center z-20 w-full mx-auto">
        <div className="flex flex-col w-full">
          <div className="gap-y-4 flex flex-col lg:flex-row py-4 lg:px-4 h-full lg:items-center lg:h-auto lg:w-full">
            <Link to={PATH.main} className="flex justify-center items-center gap-x-2 ">
              <img className="w-10 h-10 lg:w-16 lg:h-16 rounded-full" src={logo} alt="bookstore" />
              <span className="font-bold font-lobster text-2xl lg:text-4xl text-white lg:text-slate-700">
                Book Store
              </span>
            </Link>

            <div className="flex items-center justify-end lg:flex-1 px-4 lg:px-0 gap-3">
              <div className="cursor-pointer lg:hidden" onClick={() => setOpen(true)}>
                <GiHamburgerMenu className="w-6 h-6 text-white"></GiHamburgerMenu>
              </div>

              <div className="flex flex-1 lg:max-w-[500px] px-2 lg:items-end">
                <Search />
              </div>

              <div className="flex gap-x-1">
                {user && (
                  <div className="cursor-pointer relative group" ref={nodeRef}>
                    <img
                      src={user.Anh === null ? avatar : user.Anh}
                      className="w-8 h-8 rounded-full text-slate-700"
                      alt="avatar"
                    />

                    {show && (
                      <ul className="bg-gray-100 font-semibold right-1 mt-2 transition-all duration-150 absolute bg-slate- text-black rounded-sm border border-gray-300 z-50 drop-shadow-lg whitespace-nowrap">
                        {isAdmin && (
                          <li
                            onClick={() => {
                              navigate(PATH.admin.dashboard)
                            }}
                            className="p-2 hover:bg-gray-300"
                          >
                            Admin
                          </li>
                        )}
                        <li
                          onClick={() => navigate(PATH.profile.dashboard)}
                          className="p-2 hover:bg-slate-300"
                        >
                          Thông tin tài khoản
                        </li>
                        <li
                          onClick={() => navigate(PATH.profile.user_order_management)}
                          className="p-2 hover:bg-slate-300"
                        >
                          Quản lý đơn hàng
                        </li>
                        <li
                          onClick={() => navigate(PATH.profile.user_review)}
                          className="p-2 hover:bg-slate-300"
                        >
                          Đánh giá sản phẩm
                        </li>
                        <li onClick={logout} className="p-2 hover:bg-slate-300">
                          Đăng xuất
                        </li>
                      </ul>
                    )}
                  </div>
                )}

                {!user && (
                  <AiOutlineUser
                    className="w-8 h-8 text-white lg:text-slate-700 rounded-full border border-white"
                    onClick={() => navigate(PATH.login)}
                  ></AiOutlineUser>
                )}

                <div className="relative">
                  <AiOutlineShoppingCart
                    onClick={() => navigate(PATH.cart)}
                    className="w-8 h-8 text-white lg:text-slate-700 cursor-pointer"
                  ></AiOutlineShoppingCart>
                  <div className="rounded-full w-4 h-4 bg-orange-500 absolute right-0 top-0">
                    <span className="text-white text-sm flex items-center justify-center h-full">
                      {!localStorage.getItem('userCart') ? '0' : items}
                    </span>
                  </div>
                </div>
              </div>

              <Language />
            </div>
          </div>

          <HeaderList />
        </div>
      </div>
      <Sidebar open={open} onClick={() => setOpen(!open)}></Sidebar>
    </>
  )
}

export default Navbar
