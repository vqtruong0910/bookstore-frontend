import clsx from 'clsx';
import jwtDecode from 'jwt-decode';
import { useCallback, useContext, useMemo } from 'react';
import { Suspense, useState } from 'react';
import { BsPerson } from 'react-icons/bs';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import bar from '../../assets/svg/bar.svg';
import DownArrow from '../../assets/svg/DownArrow';
import MenuAdmin from '../../components/MenuAdmin';
import axiosConfig from '../../config/axiosConfig';
import { API } from '../../constants/api';
import { PATH } from '../../constants/path';
import Context from '../../store/Context';
import style from './style.module.scss';

function AdminLayout() {
    const navigate = useNavigate();
    const [stateMenu, setStateMenu] = useState(false);
    const { user, setUser } = useContext(Context);

    const isAdmin = useMemo(() => {
        try {
            const { Quyen } = jwtDecode(localStorage.getItem("token"));
            return Quyen === 0 ? true : false;
        } catch (error) {
            return false;
        }
    }, [])

    const logOut = useCallback(async () => {
        try {
            await axiosConfig.delete(API.LOGOUT);
        } catch (error) { throw error }
        finally {
            localStorage.removeItem("user");
            localStorage.removeItem("token");
            setUser(false);
            navigate(PATH.login, { replace: true });
        }
    }, [])

    if (!isAdmin) {
        return <Navigate replace to={PATH.login} />
    }

    if (!user) {
        return <Navigate replace to={PATH.login} />
    }

    return (
        <div className="w-full bg-slate-100 min-h-screen relative">
            <MenuAdmin stateMenu={stateMenu} />
            <div className={clsx(stateMenu && 'fixed inset-0 bg-slate-900 bg-opacity-20 z-20 lg:hidden lg:z-auto transition-opacity duration-200')} onClick={() => setStateMenu(false)}></div>

            <header className="fixed w-full h-16 p-5 lg:px-8 z-20 bg-white shadow-sm border">
                <div className="flex">
                    <div className="w-5 cursor-pointer relative" onClick={() => setStateMenu(true)}>
                        <img className='w-full invert-[.35]' src={bar} alt="Logo Bar" />
                    </div>
                    <div className="flex ml-auto items-center">

                        <hr className='w-px h-6 bg-slate-200 mx-3' />
                        <div className={clsx(style["open-menu"], "relative")}>
                            <div className="flex items-center cursor-pointer">
                                <div className="flex">
                                    {
                                        !user?.Anh ?
                                            <span className="flex items-center mr-1" ><BsPerson /></span>
                                            :
                                            <div className="flex items-center mr-1 w-8">
                                                <img className='rounded-full' src={user?.Anh} alt="user" />
                                            </div>
                                    }
                                </div>
                                <span className='font-semibold'>{user.Email} </span>
                                <DownArrow />
                            </div>
                            <ul className='absolute bg-white rounded-sm shadow-sm border top-full right-0 px-3 p-2 origin-top-right space-y-2'>
                                <li><span className='block'>{user.HoTen}</span></li>
                                <li><span className='block'>Administrator</span></li>
                                <hr />
                                <li><button className='block w-full text-left' onClick={logOut}>Sign Out</button></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <section className="pt-20 px-5 lg:pl-72 lg:pr-8">
                {/* <Suspense fallback={<Loading />}><Outlet /></Suspense> */}
                <Suspense fallback={<></>}><Outlet /></Suspense>
            </section>
        </div>
    );
}

export default AdminLayout;
