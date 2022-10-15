import clsx from 'clsx';
import { useState } from 'react';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';
import DownArrow from '../../assets/svg/DownArrow';
import IconCategory from '../../assets/svg/IconCategory';
import IconDashboard from '../../assets/svg/IconDashboard';
import IconOrder from '../../assets/svg/IconOrder';
import IconProduct from '../../assets/svg/IconProduct';
import IconStatistical from '../../assets/svg/IconStatistical';
import IconTypeBook from '../../assets/svg/IconTypeBook';
import IconUser from '../../assets/svg/IconUser';
import { PATH } from '../../constants/path';

function MenuAdmin({ stateMenu }) {
    const [stateMenuChild, setStateMenuChild] = useState({
        1: false, // San pham
        2: false, // Tai khoan
        3: false, // Don hang
        6: false // Doanh thu
    });

    const showMenuChild = useCallback((location) => {
        setStateMenuChild({ ...stateMenuChild, [location]: !stateMenuChild[location] })
    }, [stateMenuChild])

    return (
        <div className={clsx(stateMenu && "visible translate-x-0", !stateMenu && "invisible -translate-x-64", "flex flex-col w-64 h-full bg-slate-800 fixed z-30 lg:translate-x-0 lg:visible transition-all overflow-y-scroll lg:overflow-y-hidden overscroll-none")}>
            <Link to={PATH.main} className="text-center font-lobster text-slate-200 font-bold text-4xl p-3 select-none">Book Store</Link>
            <ul className="mt-4 px-4">
                <li className='p-2'>
                    <Link className='flex items-center space-x-2' to={PATH.admin.dashboard}>
                        <span className="m-1"><IconDashboard /></span>
                        <span className='font-medium text-base text-slate-200 hover:text-slate-50 transition-colors'>Bảng điều khiển</span>
                    </Link>
                </li>
                <li className={clsx(stateMenuChild[1] && 'bg-slate-900 rounded-sm', 'p-2')}>
                    <div className="flex items-center relative space-x-2 cursor-pointer" onClick={() => showMenuChild(1)}>
                        <span className="m-1"><IconProduct /></span>
                        <span className='font-medium text-base text-slate-200 hover:text-slate-50 transition-colors'>Sản phẩm</span>
                        <span className={clsx(stateMenuChild[1] && 'rotate-180 translate-x-1', 'absolute top-2 right-2')}><DownArrow /></span>
                    </div>
                    <div className={clsx(stateMenuChild[1] && 'flex flex-col pl-10 space-y-2', !stateMenuChild[1] && "hidden")}>
                        <Link className='font-medium text-base text-slate-400 hover:text-slate-50 transition-colors' to={PATH.admin.product_management}>Xem sản phẩm</Link>
                        <Link className='font-medium text-base text-slate-400 hover:text-slate-50 transition-colors' to={PATH.admin.add_product}>Thêm sản phẩm</Link>
                        <Link className='font-medium text-base text-slate-400 hover:text-slate-50 transition-colors' to="">Thống kê sản phẩm</Link>
                    </div>
                </li>
                <li className={clsx(stateMenuChild[2] && 'bg-slate-900 rounded-sm', 'p-2')}>
                    <div className="flex items-center relative space-x-2 cursor-pointer" onClick={() => showMenuChild(2)}>
                        <span className="m-1"><IconUser /></span>
                        <span className='font-medium text-base text-slate-200 hover:text-slate-50 transition-colors'>Tài khoản</span>
                        <span className={clsx(stateMenuChild[2] && 'rotate-180 translate-x-1', 'absolute top-2 right-2')}><DownArrow /></span>
                    </div>
                    <div className={clsx(stateMenuChild[2] && 'flex flex-col pl-10 space-y-2', !stateMenuChild[2] && "hidden")}>
                        <Link className='font-medium text-base text-slate-400 hover:text-slate-50 transition-colors' to={PATH.admin.user_management}>Quản lý tài khoản</Link>
                    </div>
                </li>
                <li className={clsx(stateMenuChild[3] && 'bg-slate-900 rounded-sm', 'p-2')}>
                    <div className="flex items-center relative space-x-2 cursor-pointer" onClick={() => showMenuChild(3)}>
                        <span className="m-1"><IconOrder /></span>
                        <span className='font-medium text-base text-slate-200 hover:text-slate-50 transition-colors'>Đơn hàng</span>
                        <span className={clsx(stateMenuChild[3] && 'rotate-180 translate-x-1', 'absolute top-2 right-2')}><DownArrow /></span>
                    </div>
                    <div className={clsx(stateMenuChild[3] && 'flex flex-col pl-10 space-y-2', !stateMenuChild[3] && "hidden")}>
                        <Link className='font-medium text-base text-slate-400 hover:text-slate-50 transition-colors' to="">Quản lý Đơn hàng</Link>
                        <Link className='font-medium text-base text-slate-400 hover:text-slate-50 transition-colors' to="">Thống kê Đơn hàng</Link>
                    </div>
                </li>
                <li className='p-2'>
                    <Link to="" className="flex items-center relative space-x-2">
                        <span className="m-1"><IconCategory /></span>
                        <span className='font-medium text-base text-slate-200 hover:text-slate-50 transition-colors'>Danh mục</span>
                    </Link>
                </li>
                <li className='p-2'>
                    <Link to="" className="flex items-center relative space-x-2">
                        <span className="m-1"><IconTypeBook /></span>
                        <span className='font-medium text-base text-slate-200 hover:text-slate-50 transition-colors'>Thể loại</span>
                    </Link>
                </li>
                <li className={clsx(stateMenuChild[6] && 'bg-slate-900 rounded-sm', 'p-2')}>
                    <div className="flex items-center relative space-x-2 cursor-pointer" onClick={() => showMenuChild(6)}>
                        <span className="m-1"><IconStatistical /></span>
                        <span className='font-medium text-base text-slate-200 hover:text-slate-50 transition-colors'>Doanh thu</span>
                        <span className={clsx(stateMenuChild[6] && 'rotate-180 translate-x-1', 'absolute top-2 right-2')}><DownArrow /></span>
                    </div>
                    <div className={clsx(stateMenuChild[6] && 'flex flex-col pl-10 space-y-2', !stateMenuChild[6] && "hidden")}>
                        <Link className='font-medium text-base text-slate-400 hover:text-slate-50 transition-colors' to="">Quản lý doanh thu</Link>
                        <Link className='font-medium text-base text-slate-400 hover:text-slate-50 transition-colors' to="">Thống kê doanh thu</Link>
                    </div>
                </li>
            </ul>
        </div>
    );
}

export default MenuAdmin;
