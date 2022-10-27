import { Link, useNavigate } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import { PATH } from "../../constants/path";
import logo from '../../assets/images/logo.png';
import { BsSearch, BsPerson } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { NavbarData } from './NavbarData';
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import { useContext } from 'react';
import Context from '../../store/Context';


function Navbar() {
    const navigate = useNavigate();
    const [open, setOpen] = useState(false);
    const [scroll, setScroll] = useState(false)
    const [state, setState] = useState(false);
    const { user, setUser } = useContext(Context);
    const [stateMenuChild, setStateMenuChild] = useState({
        1: false,   // Danh muc
        2: false,   // Nha xuat ban
        3: false,   // Tac gia
        4: false,   // Tai khoan
        5: false,
    });

    const showMenuChild = useCallback((location) => {
        setStateMenuChild({ ...stateMenuChild, [location]: !stateMenuChild[location] })
    }, [stateMenuChild]);

    const logout = useCallback(() => {
        localStorage.removeItem("auth-user");
        setUser(false);
    })

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 767px)").matches
    );


    useEffect(() => {

        window
            .matchMedia("(min-width: 767px)")
            .addEventListener('change', e => setMatches(e.matches));

    });

    useEffect(() => {
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY)
        })
    }, [])

    return (
        <>
            <div className={clsx(open && 'fixed inset-0 bg-slate-900 bg-opacity-70 md:bg-opacity-0 z-30 lg:hidden lg:z-auto transition-opacity duration-200')} onClick={() => setOpen(false)}></div>
            <nav className="bg-white h-auto top-0 md:relative">
                <div className="flex flex-wrap w-full h-auto">
                    <div className="flex justify-center md:justify-between w-full">
                        <div className="flex flex-row lg:w-4/12 mr-4">
                            <Link to={PATH.main} className="flex justify-center items-center">
                                <img className="h-20" src={logo} alt="Bookstore Logo" />
                                <span className="flex items-center h-full duration-500 font-bold md:text-4xl text-[35px] font-lobster text-slate-700 whitespace-nowrap">Book Store</span>
                            </Link>
                        </div>

                        {matches === true ?
                            <>
                                <div className="flex flex-row items-center w-5/12 ">
                                    <div id="search_box" className="flex mx-3 md:mx-3 h-10 w-10/12 md:w-11/12 border-2 rounded-md bg-white ">
                                        <input className="pl-4 bg-white font-[Poppins] text-md outline-0 flex w-10/12 md:w-11/12 text" type="text" placeholder="Tìm kiếm..." name="search"></input>
                                        <button type="submit" className="hover:rounded-md hover:bg-gray-200 w-2/12 md:w-1/12 flex relative items-center justify-center" ><BsSearch /></button>
                                    </div>
                                </div>

                            </>
                            :
                            <></>
                        }

                        <div className="flex items-center lg:w-3/12">
                            {matches === false ?
                                <>
                                </>

                                :
                                <>
                                    <div className="flex items-center w-full justify-end mr-3">
                                        <div className="flex">
                                            <div className="flex flex-wrap w-full justify-end px-5">

                                                <div className="flex">
                                                    <div className="flex">
                                                        {
                                                            !user?.Anh ?
                                                                <span className="flex items-center mr-1" ><BsPerson className="lg:w-10 lg:h-10 w-8 h-8" /></span>
                                                                :
                                                                <Link className="flex items-center mr-1 lg:w-10 lg:h-10 w-8 h-8" to={PATH.profile}>
                                                                    <img className='rounded-full' src={user?.Anh} alt="user" />
                                                                </Link>
                                                        }
                                                    </div>

                                                    <div className="flex flex-col ml=0.5">
                                                        {
                                                            !user ?
                                                                <>
                                                                    <div className="flex whitespace-nowrap">
                                                                        <Link to={PATH.login} className="hover:text-stone-800 hover:cursor:pointer lg:text-sm text-xs  text-black cursor-pointer">
                                                                            <span type="button">Đăng nhập</span>
                                                                        </Link>
                                                                        <Link to={PATH.register} className="hover:text-stone-800 hover:cursor:pointer lg:text-sm text-xs mx-2 text-slate-700 cursor-pointer">
                                                                            <span type="button">Đăng ký</span>
                                                                        </Link>
                                                                    </div>

                                                                    <div className="flex items-center lg:text-sm text-xs cursor-pointer hover:text-stone-800">
                                                                        <span className="flex">Tài khoản</span>
                                                                    </div>
                                                                </> :
                                                                <>
                                                                    <div className="flex whitespace-nowrap">
                                                                        <span className="hover:text-stone-800 hover:cursor:pointer lg:text-sm text-xs  text-black cursor-pointer">
                                                                            <span type="button">Tài khoản</span>
                                                                        </span>
                                                                    </div>

                                                                    <div className="flex items-center lg:text-sm text-xs cursor-pointer hover:text-stone-800">
                                                                        <span className="flex whitespace-nowrap">{user.Email}</span>

                                                                        <div className="flex" onClick={() => { showMenuChild(4) }} >{stateMenuChild[4] ? <RiArrowUpSFill className="flex w-5 h-5 relative" /> : <RiArrowDownSFill className="flex w-5 h-5" />}</div>

                                                                        {stateMenuChild[4] &&
                                                                            <div className="flex lg:top-16 right-4 md:top-14 bg-white border absolute z-20">
                                                                                <ul>
                                                                                    <li onClick={() => { navigate(PATH.profile.dashboard) }} className="p-2 hover:bg-gray-300">Thông tin tài khoản</li>
                                                                                    <li onClick={() => { navigate(PATH.profile.user_order_management) }} className="p-2 hover:bg-gray-300">Quản lý đơn hàng</li>
                                                                                    <li onClick={() => { navigate(PATH.profile.user_review) }} className="p-2 hover:bg-gray-300">Đánh giá sản phẩm</li>
                                                                                    <li onClick={() => { navigate(PATH.profile.user_payment_information) }} className="p-2 hover:bg-gray-300">Thông tin thanh toán</li>
                                                                                    <li className="p-2 hover:bg-gray-300" onClick={logout}>Đăng xuất</li>
                                                                                </ul>

                                                                            </div>
                                                                        }
                                                                    </div>
                                                                </>
                                                        }
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex relative">
                                            <Link to={PATH.cart}><AiOutlineShoppingCart className="lg:w-10 lg:h-10 w-8 h-8 cursor-pointer" /></Link>
                                            <div className="absolute bg-orange-400 lg:w-5 lg:h-5 w-4 h-4 text-white rounded-full right-0 items-center">
                                                <span className="text-white flex items-center justify-center h-full text-xs lg:text-sm">0</span>
                                            </div>
                                        </div>


                                    </div>
                                </>
                            }

                        </div>
                    </div>

                    {matches === true ?
                        <></>
                        :
                        <>
                            <div className={clsx(scroll && 'flex fixed z-20 justify-between flex-row w-full items-center bg-slate-700 py-2', !scroll && 'flex justify-between flex-row w-full items-center bg-slate-700 py-2')}>
                                <div className="flex h-10 justify-center mr-1 w-1/12">
                                    <button onClick={() => setOpen(true)} className="flex items-center justify-center text-[24px]"><GiHamburgerMenu className="text-white/75" /></button>
                                </div>


                                <div id="search_box" className="flex justify-between mr-2 h-8 border w-9/12 rounded-md bg-white">
                                    <input className=" outline-0 bg-white mx-2 text-sm flex w-11/12 md:w-11/12" type="text" placeholder="Tìm kiếm..." name="search"></input>
                                    <button type="submit" className=" hover:rounded-md hover:bg-gray-200 w-1/12 md:w-1/12 flex relative items-center justify-center" ><BsSearch /></button>
                                </div>

                                <div className="flex w-2/12 justify-center items-center">
                                    <div onClick={() => showMenuChild(5)} to={PATH.profile.dashboard} className="flex items-center cursor-pointer">
                                        <img src="https://frontend.tikicdn.com/_desktop-next/static/img/account/avatar.png" className="w-6 h-6" alt="Avatar" />
                                    </div>

                                    <Link to={PATH.cart}><AiOutlineShoppingCart className={clsx(state && 'w-7 h-7 ml-0.5 text-white/75 cursor-pointer', !state && 'w-8 h-8 text-white/75')} /></Link>
                                </div>

                                {stateMenuChild[5] &&
                                    <div className="absolute z-10 right-10 mt-56">
                                        <div className="flex right-3 bg-white rounded-sm border border-slate-300 cursor-pointer">
                                            <ul className="whitespace-nowrap text-sm">
                                                <li onClick={() => navigate(PATH.profile.dashboard)} className="p-2 hover:bg-gray-300">Thông tin tài khoản</li>
                                                <li onClick={() => navigate(PATH.profile.user_order_management)} className="p-2 hover:bg-gray-300">Quản lý đơn hàng</li>
                                                <li onClick={() => navigate(PATH.profile.user_review)} className="p-2 hover:bg-gray-300">Đánh giá sản phẩm</li>
                                                <li onClick={() => navigate(PATH.profile.user_payment_information)} className="p-2 hover:bg-gray-300">Thông tin thanh toán</li>
                                                <li className="p-2 hover:bg-gray-300" onClick={logout}>Đăng xuất</li>
                                            </ul>

                                        </div>
                                    </div>
                                }

                            </div>
                        </>

                    }
                </div>
            </nav>
            {matches === false ?
                // Mobile
                <div className={open ? "flex flex-col left-0 overflow-y-auto fixed z-50 top-0 bottom-0 bg-gray-800 w-80 duration-300" : "left-[-100%]"}>
                    <span className={open ? "absolute flex w-full py-9 justify-center items-center text-2xl font-lobster text-white font-bold p-3 select-none" : "hidden"}>Bảng điều khiển</span>
                    <ul className="flex flex-col w-full p-2 mt-20 absolute">

                        {NavbarData.map((menu, index) => {
                            return (
                                <div key={index} className={open ? 'p-2 py-5 relative flex hover:bg-slate-900  text-white font-semibold text-base hover:cursor:pointer w-full' : 'hidden'}>
                                    <div className="flex flex-col w-full">

                                        {menu.id === 2 ?
                                            <>
                                                <div onClick={() => showMenuChild(1)}>{menu.icon}</div>
                                                <li onClick={() => showMenuChild(1)} className="flex items-center ml-7 relative">{menu.name}
                                                    <div onClick={() => showMenuChild(1)} className="absolute right-0">
                                                        <span key={menu.id}>{stateMenuChild[1] ? <BsChevronUp /> : <BsChevronDown />}</span>
                                                    </div>
                                                </li>
                                                {stateMenuChild[1] ?
                                                    <>
                                                        {menu.subMenuItem1.map((item1, index) => {
                                                            return (
                                                                <div key={index} className="py-3 w-full px-7">
                                                                    <div className="flex py-2 w-full justify-between text-gray-400 cursor-pointer text-sm border-b">{item1.name}</div>
                                                                    <div className="w-full flex flex-col text-base font-normal mt-1">
                                                                        {item1.subMenuItem2.map((item2, index) => {
                                                                            return (
                                                                                <div key={index} className="py-2 focus:underline cursor-pointer">{item2.name}</div>
                                                                            )
                                                                        })}
                                                                    </div>
                                                                </div>

                                                            )

                                                        })
                                                        }
                                                    </>
                                                    :
                                                    <></>
                                                }

                                            </>
                                            :
                                            (menu.id === 3) ?
                                                <>
                                                    <div onClick={() => showMenuChild(2)}>{menu.icon}</div>
                                                    <li onClick={() => showMenuChild(2)} className="flex items-center ml-7 relative">{menu.name}
                                                        <div onClick={() => showMenuChild(2)} className="absolute right-0">
                                                            <span key={menu.id}>{stateMenuChild[2] ? <BsChevronUp /> : <BsChevronDown />}</span>
                                                        </div>
                                                    </li>
                                                    {stateMenuChild[2] ?
                                                        <>
                                                            {menu.submenuItems.map((submenuItem, index) => {
                                                                return (
                                                                    <div key={index} className="flex py-3 text-gray-400 w-full px-7 cursor-pointer">{submenuItem.name}</div>
                                                                )

                                                            })}
                                                        </>
                                                        :
                                                        <></>
                                                    }
                                                </>
                                                :
                                                (menu.id === 4) ?
                                                    <>
                                                        <div onClick={() => showMenuChild(3)}>{menu.icon}</div>
                                                        <li onClick={() => showMenuChild(3)} className="flex items-center ml-7 relative">{menu.name}
                                                            <div onClick={() => showMenuChild(3)} className="absolute right-0">
                                                                <span key={menu.id}>{stateMenuChild[3] ? <BsChevronUp /> : <BsChevronDown />}</span>
                                                            </div>
                                                        </li>
                                                        {stateMenuChild[3] ?
                                                            <>
                                                                {menu.submenuItems.map((submenuItem, index) => {
                                                                    return (
                                                                        <div key={index} className="flex py-3 text-gray-400 w-full px-7 cursor-pointer">{submenuItem.name}</div>
                                                                    )

                                                                })}
                                                            </>
                                                            :
                                                            <></>
                                                        }

                                                    </>
                                                    :
                                                    <>
                                                        <div>{menu.icon}</div>
                                                        <li className="items-center w-full ml-7">{menu.name}</li>
                                                    </>
                                        }
                                    </div>

                                </div>

                            )

                        })}
                    </ul>
                </div>
                :

                // Tablet, PC
                <>
                    <ul className="flex flex-row justify-center bg-white w-full">
                        {NavbarData.map((menu, index) => {
                            return (
                                <div key={index} className="w-full">
                                    <li onClick={() => navigate(menu.link)} className="inline-block w-full justify-center group text-center text-sm lg:text-base group transition-colors relative py-1 font-semibold text-slate-700 hover:bg-gray-200 cursor-pointer">{menu.name}

                                        {(menu.id === 2) ?
                                            <>
                                                <div className="hidden group-hover:block text-start w-600 lg:w-800 absolute z-20 bg-white top-7 lg:top-8 border rounded-sm shadow-md">
                                                    <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-5 p-2">
                                                        {menu.subMenuItem1.map((item1, index) => {
                                                            return (
                                                                <div key={index} className="flex flex-col">
                                                                    <div className="w-full text-sm lg:text-base font-bold text-slate-700">{item1.name}</div>
                                                                    {item1.subMenuItem2.map((item2, index) => {
                                                                        return (
                                                                            <div key={index} className="w-full flex flex-col">
                                                                                <div className="text-sm lg:text-base py-1 font-normal text-black hover:underline">{item2.name}</div>
                                                                            </div>
                                                                        )
                                                                    })}

                                                                </div>
                                                            )
                                                        })}
                                                    </div>
                                                </div>
                                            </>
                                            :
                                            <></>
                                        }

                                        {(menu.id === 3) ?
                                            <>
                                                <div className="absolute group-hover:block hidden z-20 bg-white w-full lg:top-8 md:top-7 shadow-md text-center border rounded-sm">
                                                    <ul className="flex flex-col w-full">
                                                        {menu.submenuItems.map((submenuItem, index) => {
                                                            return (
                                                                <div key={index} className="flex justify-center text-black font-normal py-2 hover:underline cursor-pointer w-full">{submenuItem.name}</div>
                                                            )

                                                        })}
                                                    </ul>
                                                </div>
                                            </>
                                            :
                                            <></>
                                        }

                                        {(menu.id === 4) ?
                                            <>
                                                <div className=" absolute group-hover:block hidden z-20 bg-white w-full lg:top-8 top-7 rounded-sm text-center border">
                                                    <ul className="flex flex-col w-full">
                                                        {menu.submenuItems.map((submenuItem, index) => {
                                                            return (
                                                                <div key={index} className="flex hover:underline justify-center text-black font-normal py-2 hover:cursor-pointer w-full">{submenuItem.name}</div>
                                                            )

                                                        })}
                                                    </ul>
                                                </div>
                                            </>
                                            :
                                            <></>
                                        }
                                    </li>


                                </div>

                            )

                        })}

                    </ul>
                </>
            }
        </>

    );
}

export default Navbar;