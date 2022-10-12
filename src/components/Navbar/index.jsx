import { Link } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react';
import clsx from 'clsx';
import { PATH } from "../../constants/path";

import logo from '../../assets/images/logo.png';
import avatar from '../../assets/images/avatar.jpg';
import { BsSearch } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { NavbarData } from './NavbarData';




function Navbar() {
    const [open, setOpen] = useState(false);

    const [state, setState] = useState(false);

    const [stateMenuChild, setStateMenuChild] = useState({
        1: false,   // Danh muc
        2: false,   // Nha xuat ban
        3: false,   // Tac gia
    });

    const showMenuChild = useCallback((location) => {
        setStateMenuChild({ ...stateMenuChild, [location]: !stateMenuChild[location] })
    }, [stateMenuChild])

    const [matches, setMatches] = useState(
        window.matchMedia("(min-width: 767px)").matches
    );


    useEffect(() => {

        window
            .matchMedia("(min-width: 767px)")
            .addEventListener('change', e => setMatches(e.matches));

    });

    return (
        <>
            <div className={clsx(open && 'fixed inset-0 bg-slate-900 bg-opacity-70 md:bg-opacity-0 z-30 lg:hidden lg:z-auto transition-opacity duration-200')} onClick={() => setOpen(false)}></div>
            <nav className="sticky bg-white py-2 h-auto top-0 w-full md:relative z-20">
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
                                        <button type="submit" className="hover:rounded-md hover:bg-gray-500 w-2/12 md:w-1/12 flex relative items-center justify-center" ><BsSearch /></button>
                                    </div>
                                </div>

                            </>
                            :
                            <></>
                        }

                        <div className="flex justify-end items-center lg:w-3/12">
                            {matches === false ?
                                <>
                                </>

                                :
                                <>
                                    <div onClick={() => setState(true)} className={clsx(!state && 'hover:text-stone-800 hover:cursor:pointer mx-2 font-lobster text-base lg:text-lg text-slate-700 cursor-pointer', state && 'hidden')} to={PATH.login}>
                                        <span type="button">Đăng nhập</span>
                                    </div>
                                    <Link className={clsx(!state && 'hover:text-stone-800 hover:cursor:pointer mx-2 font-lobster text-base lg:text-lg text-slate-700 cursor-pointer', state && 'hidden')} to={PATH.register}>
                                        <span type="button">Đăng ký</span>
                                    </Link>

                                    <div className={clsx(state && 'flex items-center', !state && 'hidden')}>
                                        <h1 className="text-sm text-slate-700 mx-1 whitespace-nowrap">Võ Ngọc Minh Trang</h1>
                                        <div className={clsx(state && 'w-9 h-9 mx-0.5', !state && 'hidden')}>
                                            <Link to={PATH.profile}><img className="rounded-full" src={avatar} alt="Avatar" /></Link>
                                        </div>
                                    </div>


                                    <Link to={PATH.cart}><AiOutlineShoppingCart className="mr-3 w-7 h-7 cursor-pointer" /></Link>
                                </>
                            }

                        </div>
                    </div>

                    {matches === true ?
                        <></>
                        :
                        <>
                            <div className="flex justify-between flex-row w-full items-center bg-slate-700">
                                <div className="flex h-10 justify-center mr-1 w-1/12">
                                    <button onClick={() => setOpen(true)} className="flex items-center justify-center text-[24px]"><GiHamburgerMenu className="text-white/75" /></button>
                                </div>


                                <div id="search_box" className="flex justify-between mr-2 h-8 border w-9/12 rounded-md bg-white">
                                    <input className=" outline-0 bg-white mx-2 text-sm flex w-11/12 md:w-11/12" type="text" placeholder="Tìm kiếm..." name="search"></input>
                                    <button type="submit" className=" hover:rounded-md hover:bg-gray-500 w-1/12 md:w-1/12 flex relative items-center justify-center" ><BsSearch /></button>
                                </div>

                                <div className="flex w-2/12 justify-center items-center">
                                    <div onClick={() => setState(true)} className={clsx(!state && 'block', state && 'hidden')}><BiUserCircle className="w-8 h-8 text-white/75" /></div>
                                    <div className={clsx(state && 'w-9 h-9 flex items-center', !state && 'hidden')}>
                                        <Link to={PATH.profile}><img className="rounded-full" src={avatar} alt="Avatar" /></Link>
                                    </div>
                                    <Link to={PATH.cart}><AiOutlineShoppingCart className={clsx(state && 'w-7 h-7 ml-0.5 text-white/75', !state && 'w-8 h-8 text-white/75')} /></Link>
                                </div>
                            </div>

                        </>

                    }
                </div>
            </nav>
            {matches === false ?
                <div className={open ? "flex flex-col left-0 overflow-y-auto fixed z-50 top-0 bottom-0 md:relative md:flex-row bg-gray-800 md:bg-white w-8/12 md:w-full md:mt-5 duration-300" : "left-[-100%]"}>
                    <span className={open ? "absolute md:hidden flex w-full py-9 justify-center items-center text-2xl font-lobster text-white font-bold p-3 select-none" : "hidden"}>Bảng điều khiển</span>
                    <ul className="flex flex-col md:flex-row w-full p-2 md:p-0 md:self-center mt-20 md:mt-0 absolute md:relative">

                        {NavbarData.map((menu, index) => {
                            return (
                                <>
                                    <div key={index} className={open ? 'p-2 py-5 relative flex hover:bg-slate-900  text-white font-semibold text-[16px] hover:cursor:pointer w-full' : 'hidden'}>
                                        <div className="flex w-full">
                                            {menu.icon}

                                            <li className="cursor-pointer items-center w-full ml-7">{menu.name}

                                                {(menu.id === 2) ?
                                                    <>
                                                        <div onClick={() => showMenuChild(1)} className="my-1 float-right cursor-pointer">
                                                            <span key={menu.id}>{stateMenuChild[1] ? <BsChevronUp /> : <BsChevronDown />}</span>
                                                        </div>
                                                        {!stateMenuChild[1] ?
                                                            <></>
                                                            :
                                                            <div className=" cursor-pointer w-full">
                                                                <ul className="flex flex-col mt-5 md:mt-0 w-full">
                                                                    {menu.submenuItems.map((submenuItem, index) => {
                                                                        return (
                                                                            <Link to={submenuItem.link} key={index} className="flex py-2 text-gray-400 hover:text-white hover:cursor-pointer">{submenuItem.name}</Link>
                                                                        )

                                                                    })}
                                                                </ul>
                                                            </div>
                                                        }

                                                    </>
                                                    :
                                                    <></>
                                                }

                                                {(menu.id === 3) ?
                                                    <>
                                                        <div onClick={() => showMenuChild(2)} className="my-1 float-right cursor-pointer">
                                                            <span key={menu.id}>{stateMenuChild[2] ? <BsChevronUp /> : <BsChevronDown />}</span>
                                                        </div>
                                                        {!stateMenuChild[2] ?
                                                            <></>
                                                            :
                                                            <div className=" cursor-pointer w-full">
                                                                <ul className="flex flex-col mt-5 md:mt-0 w-full">
                                                                    {menu.submenuItems.map((submenuItem, index) => {
                                                                        return (
                                                                            <Link to={submenuItem.link} key={index} className="flex py-2 text-gray-400 hover:text-white hover:cursor-pointer">{submenuItem.name}</Link>
                                                                        )

                                                                    })}
                                                                </ul>
                                                            </div>
                                                        }

                                                    </>
                                                    :
                                                    <></>
                                                }

                                                {(menu.id === 4) ?
                                                    <>
                                                        <div onClick={() => showMenuChild(3)} className="my-1 float-right cursor-pointer">
                                                            <span key={menu.id}>{stateMenuChild[3] ? <BsChevronUp /> : <BsChevronDown />}</span>
                                                        </div>
                                                        {!stateMenuChild[3] ?
                                                            <></>
                                                            :
                                                            <div className=" cursor-pointer w-full">
                                                                <ul className="flex flex-col mt-5 md:mt-0 w-full">
                                                                    {menu.submenuItems.map((submenuItem, index) => {
                                                                        return (
                                                                            <Link to={submenuItem.link} key={index} className="flex py-2 text-gray-400 hover:text-white hover:cursor-pointer">{submenuItem.name}</Link>
                                                                        )

                                                                    })}
                                                                </ul>
                                                            </div>
                                                        }

                                                    </>
                                                    :
                                                    <></>
                                                }


                                            </li>
                                        </div>

                                    </div>
                                </>
                            )

                        })}
                    </ul>
                </div>
                :
                <div className="flex flex-row bg-white w-full h-auto mt-3 pb-6 ">
                    <ul className="flex flex-row w-full">
                        {NavbarData.map((menu, index) => {
                            return (
                                <>
                                    <li key={index} className="flex justify-center text-center text-sm lg:text-base group transition-colors border-r relative w-full py-1 font-semibold text-slate-700 hover:bg-gray-200 cursor-pointer">{menu.name}

                                        {(menu.id === 2) ?
                                            <>
                                                <div className="absolute group-hover:block hidden z-20 bg-white w-40 lg:w-full lg:top-8 top-7 text-sm border">
                                                    <ul className="flex flex-col w-full">
                                                        {menu.submenuItems.map((submenuItem, index) => {
                                                            return (
                                                                <Link to={submenuItem.link} key={index} className="flex border-b justify-center hover:text-black hover:font-medium py-2.5 text-gray-400  hover:cursor-pointer w-full whitespace-nowrap">{submenuItem.name}</Link>
                                                            )

                                                        })}
                                                    </ul>
                                                </div>
                                            </>
                                            :
                                            <></>
                                        }

                                        {(menu.id === 3) ?
                                            <>
                                                <div className=" absolute group-hover:block hidden z-20 bg-white w-40 lg:w-full lg:top-8 top-7 text-sm text-center border">
                                                    <ul className="flex flex-col w-full">
                                                        {menu.submenuItems.map((submenuItem, index) => {
                                                            return (
                                                                <Link to={submenuItem.link} key={index} className="flex border-b justify-center hover:text-black hover:font-medium py-2.5 text-gray-400 md:text-slate-500 hover:cursor-pointer w-full whitespace-nowrap">{submenuItem.name}</Link>
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
                                                <div className=" absolute group-hover:block hidden z-20 bg-white w-40 lg:w-full lg:top-8 top-7 text-sm text-center border">
                                                    <ul className="flex flex-col w-full">
                                                        {menu.submenuItems.map((submenuItem, index) => {
                                                            return (
                                                                <Link to={submenuItem.link} key={index} className="flex border-b justify-center hover:text-black hover:font-medium py-2.5 text-gray-400 md:text-slate-500 hover:cursor-pointer w-full whitespace-nowrap">{submenuItem.name}</Link>
                                                            )

                                                        })}
                                                    </ul>
                                                </div>
                                            </>
                                            :
                                            <></>
                                        }
                                    </li>
                                </>

                            )

                        })}
                    </ul>
                </div>
            }
        </>

    );
}

export default Navbar;