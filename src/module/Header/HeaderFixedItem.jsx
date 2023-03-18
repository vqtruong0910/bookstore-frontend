import { useRef, useState } from 'react'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs'
import { GiHamburgerMenu } from 'react-icons/gi'
import { PATH } from '../../constants/path'
import avatar from '../../assets/images/avatar.jpg'
import { useNavigate } from 'react-router-dom'

const HeaderFixedItem = ({
  user,
  items,
  setOpen = () => {},
  showDropdown,
  setShowDropdown = () => {},
  setQuery = () => {},
  onClick = () => {},
  handleSearch,
  isAdmin,
}) => {
  const [menu, setMenu] = useState(false)
  const navigate = useNavigate()
  const dropdownRef = useRef()
  return (
    <div className="flex flex-1 justify-between items-center gap-x-2 px-2 lg:hidden">
      <div className="cursor-pointer" onClick={() => setOpen(true)}>
        <GiHamburgerMenu className="w-7 h-7 text-white"></GiHamburgerMenu>
      </div>

      <div className="flex justify-between w-full flex-1" ref={dropdownRef}>
        <div id="search_box" className="flex h-10 border-2 bg-white rounded-sm w-full relative">
          <input
            className=" bg-white text-md outline-0 flex w-full pl-2"
            type="text"
            placeholder="Tìm kiếm sản phẩm..."
            name="search"
            autoComplete="off"
            onClick={() => setShowDropdown(!showDropdown)}
            onChange={(e) => setQuery(e.target.value)}
          ></input>

          {showDropdown && (
            <div className="z-10 absolute bg-white drop-shadow-lg rounded-br overflow-y-auto top-10 border border-gray-300">
              <ul className="md:text-sm lg:text-base">
                <li className="hover:bg-slate-300 cursor-pointer p-1  hover:text-black/75">
                  Cà phê cùng tony()
                </li>
                <li className="hover:bg-slate-300 cursor-pointer p-1  hover:text-black/75">
                  Thời niên thiếu không thể quay lại ấy
                </li>
              </ul>
            </div>
          )}

          <button
            onClick={handleSearch}
            type="submit"
            className="hover:bg-gray-200 relative my-auto justify-end right-0 h-full px-2"
          >
            <BsSearch />
          </button>
        </div>
      </div>
      <div className="flex gap-x-1">
        {user && (
          <div onClick={() => setMenu(!menu)} className="cursor-pointer relative group">
            <img
              src={user.Anh === null ? avatar : user.Anh}
              className="w-8 h-8 rounded-full"
              alt="avatar"
            />

            {menu && (
              <ul className="font-semibold right-1 mt-2 transition-all duration-150 absolute bg-white text-black rounded-sm border border-gray-300 z-50 drop-shadow-lg whitespace-nowrap">
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
                <li onClick={onClick} className="p-2 hover:bg-slate-300">
                  Đăng xuất
                </li>
              </ul>
            )}
          </div>
        )}
        {!user && (
          <AiOutlineUser
            className="w-8 h-8 text-white rounded-full border border-white"
            onClick={() => navigate(PATH.login)}
          ></AiOutlineUser>
        )}

        <div className="relative">
          <AiOutlineShoppingCart
            onClick={() => navigate(PATH.cart)}
            className="w-8 h-8 text-white"
          ></AiOutlineShoppingCart>
          <div className="rounded-full w-4 h-4 bg-orange-500 absolute right-0 top-0">
            <span className="text-white text-sm flex items-center justify-center h-full">
              {items}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderFixedItem
