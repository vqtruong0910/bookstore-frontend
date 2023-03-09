import clsx from 'clsx'
import { memo, useState } from 'react'
import { useCallback } from 'react'
import { Link, useLocation } from 'react-router-dom'
import DownArrow from '../../assets/svg/DownArrow'
import IconCategory from '../../assets/svg/IconCategory'
import IconDashboard from '../../assets/svg/IconDashboard'
import IconOrder from '../../assets/svg/IconOrder'
import IconProduct from '../../assets/svg/IconProduct'
import IconStatistical from '../../assets/svg/IconStatistical'
import IconTypeBook from '../../assets/svg/IconTypeBook'
import IconUser from '../../assets/svg/IconUser'
import { PATH } from '../../constants/path'
import style from './style.module.scss'

function MenuAdmin({ stateMenu }) {
  const { pathname } = useLocation()
  const [stateMenuChild, setStateMenuChild] = useState({
    1: false, // San pham
    2: false, // Tai khoan
    3: false, // Don hang
  })

  const showMenuChild = useCallback(
    (location) => {
      setStateMenuChild({ ...stateMenuChild, [location]: !stateMenuChild[location] })
    },
    [stateMenuChild]
  )
  const locationPage = useCallback(
    (pageCurrent) => {
      return pathname === pageCurrent && 'text-indigo-500'
    },
    [pathname]
  )

  return (
    <div
      className={clsx(
        stateMenu && 'visible translate-x-0',
        !stateMenu && 'invisible -translate-x-64',
        'flex flex-col w-64 h-full bg-slate-800 fixed z-30 lg:translate-x-0 lg:visible transition-all overflow-y-scroll select-none',
        style['hide-scrollbar']
      )}
    >
      <Link
        to={PATH.main}
        className="text-center font-lobster text-slate-200 font-bold text-4xl p-3 select-none"
      >
        Book Store
      </Link>
      <ul className="mt-4 px-4">
        <li className="p-2">
          <Link className="flex items-center space-x-2 text-slate-200" to={PATH.admin.dashboard}>
            <span className="m-1">
              <IconDashboard />
            </span>
            <span
              className={clsx(
                'font-medium text-base hover:text-slate-50 transition-colors',
                locationPage(PATH.admin.dashboard)
              )}
            >
              Bảng điều khiển
            </span>
          </Link>
        </li>
        <li
          className={clsx(stateMenuChild[1] && 'bg-slate-900 rounded-sm', 'p-2 transition-colors')}
        >
          <div
            className="flex items-center relative space-x-2 cursor-pointer"
            onClick={() => showMenuChild(1)}
          >
            <span className="m-1">
              <IconProduct />
            </span>
            <span className="font-medium text-base text-slate-200 hover:text-slate-50 transition-colors">
              Sản phẩm
            </span>
            <span
              className={clsx(
                stateMenuChild[1] && 'rotate-180 translate-x-1',
                'absolute top-2 right-2 transition-transform'
              )}
            >
              <DownArrow />
            </span>
          </div>
          <div
            className={clsx(
              'flex flex-col pl-10 space-y-2 transition-all overflow-hidden',
              stateMenuChild[1] ? 'h-24' : 'h-0'
            )}
          >
            <Link
              className={clsx(
                'font-medium text-base text-slate-400 hover:text-slate-50 transition-colors',
                locationPage(PATH.admin.product_management)
              )}
              to={PATH.admin.product_management}
            >
              Xem sản phẩm
            </Link>
            <Link
              className={clsx(
                'font-medium text-base text-slate-400 hover:text-slate-50 transition-colors',
                locationPage(PATH.admin.add_product)
              )}
              to={PATH.admin.add_product}
            >
              Thêm sản phẩm
            </Link>
            <Link
              className={clsx(
                'font-medium text-base text-slate-400 hover:text-slate-50 transition-colors',
                locationPage(PATH.admin.product_statistics)
              )}
              to={PATH.admin.product_statistics}
            >
              Thống kê sản phẩm
            </Link>
          </div>
        </li>
        <li
          className={clsx(stateMenuChild[2] && 'bg-slate-900 rounded-sm', 'p-2 transition-colors')}
        >
          <div
            className="flex items-center relative space-x-2 cursor-pointer"
            onClick={() => showMenuChild(2)}
          >
            <span className="m-1">
              <IconUser />
            </span>
            <span className="font-medium text-base text-slate-200 hover:text-slate-50 transition-colors">
              Tài khoản
            </span>
            <span
              className={clsx(
                stateMenuChild[2] && 'rotate-180 translate-x-1',
                'absolute top-2 right-2 transition-all'
              )}
            >
              <DownArrow />
            </span>
          </div>
          <div
            className={clsx(
              'flex flex-col pl-10 space-y-2 transition-all overflow-hidden',
              stateMenuChild[2] ? 'h-8' : 'h-0'
            )}
          >
            <Link
              className={clsx(
                'font-medium text-base text-slate-400 hover:text-slate-50 transition-colors',
                locationPage(PATH.admin.user_management)
              )}
              to={PATH.admin.user_management}
            >
              Quản lý tài khoản
            </Link>
          </div>
        </li>
        <li
          className={clsx(stateMenuChild[3] && 'bg-slate-900 rounded-sm', 'p-2 transition-colors')}
        >
          <div
            className="flex items-center relative space-x-2 cursor-pointer"
            onClick={() => showMenuChild(3)}
          >
            <span className="m-1">
              <IconOrder />
            </span>
            <span className="font-medium text-base text-slate-200 hover:text-slate-50 transition-colors">
              Đơn hàng
            </span>
            <span
              className={clsx(
                stateMenuChild[3] && 'rotate-180 translate-x-1',
                'absolute top-2 right-2 transition-all'
              )}
            >
              <DownArrow />
            </span>
          </div>
          <div
            className={clsx(
              'flex flex-col pl-10 space-y-2 transition-all overflow-hidden',
              stateMenuChild[3] ? 'h-16' : 'h-0'
            )}
          >
            <Link
              className={clsx(
                'font-medium text-base text-slate-400 hover:text-slate-50 transition-colors',
                locationPage(PATH.admin.order_management)
              )}
              to={PATH.admin.order_management}
            >
              Quản lý Đơn hàng
            </Link>
            <Link
              className={clsx(
                'font-medium text-base text-slate-400 hover:text-slate-50 transition-colors',
                locationPage(PATH.admin.order_statistics)
              )}
              to={PATH.admin.order_statistics}
            >
              Thống kê đơn hàng
            </Link>
          </div>
        </li>
        <li className="p-2">
          <Link
            to={PATH.admin.category}
            className="flex items-center relative space-x-2 text-slate-200"
          >
            <span className="m-1">
              <IconCategory />
            </span>
            <span
              className={clsx(
                'font-medium text-base hover:text-slate-50 transition-colors',
                locationPage(PATH.admin.category)
              )}
            >
              Danh mục & Thể loại
            </span>
          </Link>
        </li>
        <li className="p-2">
          <Link
            to={PATH.admin.author_management}
            className="flex items-center relative space-x-2 text-slate-200"
          >
            <span className="m-1">
              <IconTypeBook />
            </span>
            <span
              className={clsx(
                'font-medium text-base hover:text-slate-50 transition-colors',
                locationPage(PATH.admin.author_management)
              )}
            >
              Tác giả
            </span>
          </Link>
        </li>
        <li className="p-2">
          <Link
            to={PATH.admin.revenue_statistics}
            className="flex items-center relative space-x-2 text-slate-200"
          >
            <span className="m-1">
              <IconStatistical />
            </span>
            <span
              className={clsx(
                'font-medium text-base hover:text-slate-50 transition-colors',
                locationPage(PATH.admin.revenue_statistics)
              )}
            >
              Thống kê doanh thu
            </span>
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default memo(MenuAdmin)
