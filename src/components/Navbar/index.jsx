import { Link, useNavigate } from 'react-router-dom'
import { PATH } from '../../constants/path'
import logo from '../../assets/images/logo.png'
import { useCallback, useContext, useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import clsx from 'clsx'
import Context from '../../store/Context'
import { API } from '../../constants/api'
import axiosConfig from '../../config/axiosConfig'
import HeaderFixedItem from '../../module/Header/HeaderFixedItem'
import HeaderList from '../../module/Header/HeaderList'
import HeaderRightItem from '../../module/Header/HeaderRightItem'
import jwtDecode from 'jwt-decode'
import { useMemo } from 'react'
import Search from '../Search'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const { cart } = useContext(Context)
  const { user, setUser } = useContext(Context)
  const [, setData] = useState([])
  const navigate = useNavigate()

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
      items: items + quantity,
    }),
    { items: 0 }
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
      <div className="h-32 bg-slate-700 flex flex-col justify-center lg:items-center lg:justify-between lg:relative w-full transition-all z-20">
        <div className="gap-y-4 flex flex-col lg:flex-row py-4 lg:px-4 h-full lg:items-center lg:h-auto lg:w-full lg:justify-between ">
          <Link to={PATH.main} className="flex justify-center items-center gap-x-2 ">
            <img className="w-10 h-10 lg:w-16 lg:h-16 rounded-full" src={logo} alt="bookstore" />
            <span className="font-bold font-lobster text-white text-2xl lg:text-4xl">
              Book Store
            </span>
          </Link>

          <HeaderFixedItem
            user={user}
            items={items}
            setOpen={setOpen}
            onClick={logout}
            isAdmin={isAdmin}
          ></HeaderFixedItem>

          <div className="hidden lg:block">
            <Search />
          </div>

          <HeaderRightItem
            user={user}
            items={items}
            onClick={logout}
            isAdmin={isAdmin}
          ></HeaderRightItem>
        </div>
        <HeaderList></HeaderList>
      </div>
      <Sidebar open={open} onClick={() => setOpen(!open)}></Sidebar>
    </>
  )
}

export default Navbar
