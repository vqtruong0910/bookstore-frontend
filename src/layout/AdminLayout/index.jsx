import clsx from 'clsx';
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import bar from '../../assets/svg/bar.svg'
import DownArrow from '../../assets/svg/DownArrow';
import MenuAdmin from '../../components/MenuAdmin';

function AdminLayout() {
    const [stateMenu, setStateMenu] = useState(false);
    const [stateMenuAvatar, setStateMenuAvatar] = useState(false);

    return (
        <div className="w-full bg-slate-100 h-screen relative">
            <MenuAdmin stateMenu={stateMenu} />
            <div className={clsx(stateMenu && 'fixed inset-0 bg-slate-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200')} onClick={() => setStateMenu(false)}></div>

            <header className="fixed w-full h-16 p-5 lg:px-8 bg-white shadow-sm border">
                <div className="flex">
                    <div className="w-5 cursor-pointer relative" onClick={() => setStateMenu(true)}>
                        <img className='w-full invert-[.35]' src={bar} alt="Logo Bar" />
                    </div>
                    <div className="flex ml-auto">
                        {/* <div className="hidden sm:block">
                            <input type="search" name="" id="" />
                        </div> */}
                        <hr className='w-px h-6 bg-slate-200 mx-3' />
                        <div className="relative">
                            <div className="flex items-center cursor-pointer" onClick={() => setStateMenuAvatar(!stateMenuAvatar)}>
                                <span className='font-semibold'>Quang Trường </span>
                                <DownArrow />
                            </div>
                            <ul className={clsx(stateMenuAvatar && "visible", !stateMenuAvatar && "invisible", 'absolute bg-white w-44 rounded-sm shadow-sm border top-full right-0 px-3 py-2 origin-top-right space-y-2')}>
                                <li><Link className='block' to="">Quang Trường</Link></li>
                                <li><Link className='block' to="">Administrator</Link></li>
                                <hr />
                                <li><Link className='block' to="">Sign Out</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <Outlet />
        </div>
    );
}

export default AdminLayout;
