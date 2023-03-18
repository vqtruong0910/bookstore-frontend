import { Link, useNavigate } from 'react-router-dom'
import { PATH } from '../../constants/path'
import avatar from '../../assets/images/avatar.jpg'
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai'

const HeaderRightItem = ({ user, items, onClick = () => {}, isAdmin }) => {
  const navigate = useNavigate()

  return (
    <div className="hidden lg:flex gap-x-1">
      <div className="flex flex-row items-center">
        {user && (
          <Link to={PATH.profile.dashboard} className="cursor-pointer">
            <img
              className="w-10 h-10 rounded-full"
              src={user.Anh === null ? avatar : user.Anh}
              alt="avatar"
            />
          </Link>
        )}
        {!user && (
          <AiOutlineUser className="w-10 h-10 text-white rounded-full border border-white"></AiOutlineUser>
        )}

        <div className="max-w-[250px] inline-block px-1 text-white text-sm cursor-pointer">
          {user ? (
            <>
              <div className="relative group">
                <div>{user.Email}</div>
                <ul className="hidden group-hover:block transition-all duration-150 absolute bg-white text-black rounded-sm border border-gray-300 z-50 drop-shadow-lg whitespace-nowrap">
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
              </div>
              <div onClick={onClick}>Đăng xuất</div>
            </>
          ) : (
            <>
              <div className="flex gap-x-2">
                <Link to={PATH.login}>Đăng nhập</Link>
                <Link to={PATH.register}>Đăng ký</Link>
              </div>
              <div>Tài khoản</div>
            </>
          )}
        </div>
      </div>
      <Link to={PATH.cart} className="relative my-auto">
        <AiOutlineShoppingCart className="w-10 h-10 text-white"></AiOutlineShoppingCart>
        <div className="rounded-full w-4 h-4 bg-orange-500 absolute right-0 top-0">
          <span className="text-white text-sm flex items-center justify-center h-full">
            {items}
          </span>
        </div>
      </Link>
    </div>
  )
}

export default HeaderRightItem
