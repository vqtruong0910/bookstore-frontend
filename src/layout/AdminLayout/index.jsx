import clsx from 'clsx';
import jwtDecode from 'jwt-decode';
import { useCallback, useContext } from 'react';
import { Suspense, useState } from 'react';
import { Link, Navigate, Outlet } from 'react-router-dom';
import bar from '../../assets/svg/bar.svg';
import DownArrow from '../../assets/svg/DownArrow';
import Loading from '../../components/Loading';
import MenuAdmin from '../../components/MenuAdmin';
import { PATH } from '../../constants/path';
import Context from '../../store/Context';

function AdminLayout() {
    const [stateMenu, setStateMenu] = useState(false);
    const [stateMenuAvatar, setStateMenuAvatar] = useState(false);
    const { user } = useContext(Context);

    const isAdmin = useCallback(() => {
        try {
            const { Quyen } = jwtDecode(localStorage.getItem("token"));
            return Quyen === 0 ? true : false;
        } catch (error) {
            return false;
        }
    }, [])

    if (!isAdmin || !user) {
        return <Navigate replace to={PATH.login} />
    }

    return (
        <div className="w-full bg-slate-100 h-screen relative">
            <MenuAdmin stateMenu={stateMenu} />
            <div className={clsx(stateMenu && 'fixed inset-0 bg-slate-900 bg-opacity-20 z-20 lg:hidden lg:z-auto transition-opacity duration-200')} onClick={() => setStateMenu(false)}></div>

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
            <section className="pt-20 px-5 lg:pl-72 lg:pr-8">
                <Suspense fallback={<Loading />}><Outlet /></Suspense>
            </section>
        </div>
    );
}

export default AdminLayout;
