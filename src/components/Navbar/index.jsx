import { Link } from 'react-router-dom';
import React, { useState, useEffect, useCallback } from 'react';
import { PATH } from "../../constants/path";
import logo from '../../assets/images/logo.png';
import { BsSearch } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { NavbarData } from './NavbarData';
import clsx from 'clsx';


function Navbar() {
    const [open, setOpen] = useState(false);

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
            <div className={clsx(open && 'fixed inset-0 bg-slate-900 bg-opacity-60 md:bg-opacity-0 z-10 lg:hidden lg:z-auto transition-opacity duration-200')} onClick={() => setOpen(false)}></div>
            <nav className="flex bg-white py-2 rounded h-auto ">
                <div className="flex flex-wrap w-full h-auto">
                    <div className="flex justify-center w-full">
                        <div className="flex flex-row lg:w-4/12 mr-4">
                            <Link to={PATH.main} className="flex justify-center items-center">
                                <img className="h-20" src={logo} alt="Bookstore Logo" />
                                <span className="flex items-center h-full duration-500 font-bold md:text-4xl text-[35px] font-lobster text-slate-700 whitespace-nowrap">Book Store</span>
                            </Link>
                        </div>

                        {matches === true ?
                            <>
                                <div className="flex flex-row items-center w-5/12 ">
                                    <div id="search_box" className="flex mx-3 md:mx-3 h-10 w-10/12 md:w-11/12 border-2 rounded-lg bg-white ">
                                        <input className="pl-4 bg-white font-[Poppins] text-md rounded-lg outline-0 flex w-10/12 md:w-11/12 text" type="text" placeholder="Tìm kiếm..." name="search"></input>
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
                                    <Link className="hover:text-stone-800 rounded-lg hover:cursor:pointer mx-2 font-lobster text-base text-slate-700" to={PATH.login}>
                                        <span type="button">Đăng nhập</span>
                                    </Link>
                                    <Link className="hover:text-stone-800 rounded-lg hover:cursor:pointer mx-2 font-lobster text-base text-slate-700" to={PATH.register}>
                                        <span type="button">Đăng ký</span>
                                    </Link>
                                    <Link to={PATH.cart}><AiOutlineShoppingCart className="mr-3 w-7 h-7 md:hover:mb-1" /></Link>
                                </>
                            }

                        </div>
                    </div>

                    {matches === true ?
                        <></>
                        :
                        <>
                            <div className="flex justify-between flex-row w-full items-center">
                                <div className="flex h-10 justify-center mr-1 w-1/12">
                                    <button onClick={() => setOpen(true)} className="flex items-center justify-center text-[24px]"><GiHamburgerMenu /></button>
                                </div>


                                <div id="search_box" className="flex justify-between mr-2 h-10 border-2 w-9/12 rounded-lg bg-white ">
                                    <input className="pl-2 outline-0 bg-white mx-2 font-[Poppins] text-md rounded-lg flex w-11/12 md:w-11/12 text" type="text" placeholder="Tìm kiếm..." name="search"></input>
                                    <button type="submit" className=" hover:rounded-md hover:bg-gray-500 w-1/12 md:w-1/12 flex relative items-center justify-center" ><BsSearch /></button>
                                </div>

                                <div className="flex mr-3 w-1/12 justify-center">
                                    <Link to={PATH.login}><BiUserCircle className="w-7 h-7" /></Link>
                                    <Link to={PATH.cart}><AiOutlineShoppingCart className="w-7 h-7" /></Link>
                                </div>
                            </div>

                        </>

                    }

                    {matches === false ?
                        <div className={open ? "flex flex-col left-0 overflow-y-auto md:overflow-y-hidden overflow-x-hidden fixed z-20 top-0 bottom-0 md:relative md:flex-row bg-gray-800 md:bg-white w-8/12 md:w-full md:mt-5 duration-300" : "left-[-100%]"}>
                            <span className="absolute md:hidden flex w-full py-9 justify-center items-center text-2xl font-lobster text-white font-bold p-3 select-none">Bảng điều khiển</span>
                            <ul className="flex flex-col md:flex-row w-full p-2 md:self-center mt-20 md:mt-0 absolute md:relative">

                                {NavbarData.map((menu, index) => {
                                    return (
                                        <>
                                            <div key={index} className={open ? 'p-2 py-5 md:py-0 relative flex hover:bg-slate-900 md:hover:bg-white md:text-gray-500 md:not-italic md:font-normal text-white font-semibold md:text-[13px] lg:text-[18px] text-[16px] md:h-auto md:hover:text-black hover:cursor:pointer md:font-lobster w-full' : 'hidden'}>
                                                <div className="flex w-full md:relative">
                                                    {menu.icon}

                                                    <li className="md:text-center md:justify-center md:relative md:text-xs items-center md:hover:text-black ml-7 md:ml-0 w-full">{menu.name}

                                                        {

                                                            (menu.id === 2) ?
                                                                <>
                                                                    <div className="md:px-1 my-1 float-right">
                                                                        <span key={menu.id} onClick={() => showMenuChild(1)} >{stateMenuChild[1] ? <BsChevronUp /> : <BsChevronDown />}</span>
                                                                    </div>
                                                                    <div className={clsx(stateMenuChild[1] && 'mx-4 w-full md:ml-1 md:z-20 md:bg-slate-600 md:absolute', !stateMenuChild[1] && "hidden")}>
                                                                        <ul className="flex flex-col mt-5 md:mt-0 md:ml-1 w-full">
                                                                            {menu.submenuItems.map((submenuItem, index) => {
                                                                                return (
                                                                                    <Link to={submenuItem.link} key={index} className="flex py-2 md:text-start md:hover:text-black md:py-2.5 text-gray-400 md:text-white hover:text-white hover:cursor-pointer">{submenuItem.name}</Link>
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
                                                                <div className="md:px-1 my-1 float-right">
                                                                    <span key={menu.id} onClick={() => showMenuChild(2)}>{stateMenuChild[2] ? <BsChevronUp /> : <BsChevronDown />}</span>
                                                                </div>
                                                                <div className={clsx(stateMenuChild[2] && 'mx-4 w-full', !stateMenuChild[2] && "hidden")}>
                                                                    <ul className="flex-col flex mt-5">
                                                                        {menu.submenuItems.map((submenuItem, index) => {
                                                                            return (
                                                                                <Link to={submenuItem.link} key={index} className="flex py-3 text-gray-400 hover:text-white hover:cursor-pointer">{submenuItem.name}</Link>
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
                                                                <div className="md:px-1 my-1 float-right">
                                                                    <span key={menu.id} onClick={() => showMenuChild(3)}>{stateMenuChild[3] ? <BsChevronUp /> : <BsChevronDown />}</span>
                                                                </div>
                                                                <div className={clsx(stateMenuChild[3] && 'mx-4 w-full', !stateMenuChild[3] && "hidden")}>
                                                                    <ul className="flex-col flex mt-5">
                                                                        {menu.submenuItems.map((submenuItem, index) => {
                                                                            return (
                                                                                <Link to={submenuItem.link} key={index} className="flex py-3 text-gray-400 hover:text-white hover:cursor-pointer">{submenuItem.name}</Link>
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

                                            </div>
                                        </>
                                    )

                                })}
                            </ul>
                        </div>
                        :
                        <div className="flex flex-row bg-white w-full h-auto mt-3 ">
                            <ul className="flex flex-row w-full">
                                {NavbarData.map((menu, index) => {
                                    return (
                                        <>
                                            <Link to={menu.link} key={index} className="text-slate-700 lg:text-base md:text-sm justify-center h-auto hover:text-gray-900 hover:cursor:pointer font-lobster flex w-full items-center">
                                                <li className="flex transition-colors relative w-full justify-center">{menu.name}

                                                    {(menu.id === 2) ?
                                                        <>
                                                            <div className="absolute mt-2 text-sm ml-24">
                                                                <span key={menu.id} onClick={() => showMenuChild(1)} >{stateMenuChild[1] ? <BsChevronUp /> : <BsChevronDown />}</span>
                                                            </div>
                                                            <div className={clsx(stateMenuChild[1] && 'text-sm flex mt-7 z-20 bg-white absolute w-4/5 border rounded-sm', !stateMenuChild[1] && "hidden")}>
                                                                <ul className="flex flex-col w-full">
                                                                    {menu.submenuItems.map((submenuItem, index) => {
                                                                        return (
                                                                            <Link to={submenuItem.link} key={index} className="flex border-b justify-center hover:text-black py-2.5 text-gray-400 md:text-slate-500 hover:cursor-pointer w-full">{submenuItem.name}</Link>
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
                                                            <div className="absolute mt-2 text-sm ml-28">
                                                                <span key={menu.id} onClick={() => showMenuChild(2)} >{stateMenuChild[2] ? <BsChevronUp /> : <BsChevronDown />}</span>
                                                            </div>
                                                            <div className={clsx(stateMenuChild[2] && 'text-sm flex mt-7 z-20 bg-white absolute w-4/5 border rounded-sm', !stateMenuChild[2] && "hidden")}>
                                                                <ul className="flex flex-col w-full">
                                                                    {menu.submenuItems.map((submenuItem, index) => {
                                                                        return (
                                                                            <Link to={submenuItem.link} key={index} className="flex border-b justify-center hover:text-black py-2.5 text-gray-400 md:text-slate-500 hover:cursor-pointer w-full">{submenuItem.name}</Link>
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
                                                            <div className="absolute mt-2 text-sm ml-20">
                                                                <span key={menu.id} onClick={() => showMenuChild(3)} >{stateMenuChild[3] ? <BsChevronUp /> : <BsChevronDown />}</span>
                                                            </div>
                                                            <div className={clsx(stateMenuChild[3] && 'text-sm flex mt-7 z-20 bg-white absolute w-4/5 border rounded-sm', !stateMenuChild[3] && "hidden")}>
                                                                <ul className="flex flex-col w-full">
                                                                    {menu.submenuItems.map((submenuItem, index) => {
                                                                        return (
                                                                            <Link to={submenuItem.link} key={index} className="flex border-b justify-center hover:text-black py-2.5 text-gray-400 md:text-slate-500 hover:cursor-pointer w-full">{submenuItem.name}</Link>
                                                                        )

                                                                    })}
                                                                </ul>
                                                            </div>
                                                        </>
                                                        :
                                                        <></>
                                                    }


                                                </li>
                                            </Link>
                                        </>

                                    )

                                })}
                            </ul>
                        </div>
                    }


                </div>
            </nav>
        </>

    );
}

export default Navbar;