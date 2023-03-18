import { Link, useNavigate } from 'react-router-dom'
import { PATH } from '../../constants/path'
import logo from '../../assets/images/logo.png'
import { BsSearch } from 'react-icons/bs'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
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

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const dropdownRef = useRef()
  const { cart } = useContext(Context)
  const { user, setUser } = useContext(Context)
  const [query, setQuery] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const navigate = useNavigate()
  const [stateMenuChild, setStateMenuChild] = useState({
    1: false, // Danh muc
    2: false, // Nha xuat ban
    3: false, // Tac gia
    4: false, // Tai khoan
  })
  const showMenuChild = useCallback(
    (location) => {
      setStateMenuChild({ ...stateMenuChild, [location]: !stateMenuChild[location] })
    },
    [stateMenuChild]
  )

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
    const handleClickOutDropdown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false)
      } else {
        setShowDropdown(true)
      }
    }
    document.addEventListener('click', handleClickOutDropdown)
    return () => {
      document.removeEventListener('click', handleClickOutDropdown)
    }
  }, [])

  const handleSearch = () => {
    navigate(PATH.search, { state: query, replace: true })
    // const search = document.getElementsByName("search").value;
    const search = []
    search.push({})
    localStorage.setItem('userSearch', JSON.stringify(search))
  }
  return (
    <>
      <div
        className={clsx(
          open &&
            'fixed inset-0 bg-slate-900 bg-opacity-70 lg:bg-opacity-0 z-30 lg:hidden lg:z-auto transition-opacity duration-200'
        )}
        onClick={() => setOpen(false)}
      ></div>
      <div className="h-32 bg-slate-700 flex flex-col justify-center lg:items-center lg:justify-between lg:relative fixed top-0 w-full transition-all z-20">
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
            setQuery={setQuery}
            setShowDropdown={setShowDropdown}
            handleSearch={handleSearch}
            onClick={logout}
            isAdmin={isAdmin}
          ></HeaderFixedItem>

          <div className="hidden lg:flex justify-between">
            <div id="search_box" className="flex h-10 border-2 bg-white rounded-sm w-400">
              <input
                className=" bg-white text-md outline-0 flex w-full pl-2"
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                name="search"
                autoComplete="off"
              ></input>

              <button
                type="submit"
                className="hover:bg-gray-200 relative my-auto justify-end right-0 h-full px-2"
              >
                <BsSearch />
              </button>
            </div>
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
