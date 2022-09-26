import {Link} from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import { PATH } from "../../constants/path";

import logo from '../../assets/images/logo.png';
import { BsSearch } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { GiHamburgerMenu} from "react-icons/gi";
import { MdOutlineClose } from "react-icons/md";


function Navbar() {
        let links = [
            {id:1, name:"Trang chủ", link:PATH.main},
            {id:2, name:"Giới thiệu", link:PATH.about},
            {id:3, name:"Mới nhất", link:PATH.new_book},
            {id:4, name:"Bán chạy", link:PATH.bestseller_book},
            {id:5, name:"Phổ biến", link:PATH.popular_book},
            {id:6, name:"Danh mục",link:PATH.category_book},
            {id:7, name:"Nhà xuất bản",link:PATH.publisher_book},
            {id:8, name:"Tác giả", link:PATH.author_book},
        ]

        const [matches, setMatches] = useState(
          window.matchMedia("(min-width: 1024px)").matches
        );
        
        const [open, setOpen] = useState(false);

        useEffect(() => {
          window
          .matchMedia("(min-width: 1024px)")
          .addEventListener('change', e => setMatches( e.matches ));
        }, []);

    return (    
      
        <nav className="flex bg-white py-4 rounded h-auto">
            <div className="flex flex-wrap w-full h-auto">
                <div className="flex justify-between flex-row w-full">
                    <div className="flex flex-row w-4/12">
                        <Link to={PATH.main} className="flex justify-center items-center">
                            <img className="h-24 md:h-24 ml-12 md:ml-3 sm:ml-3" src={logo} alt="Bookstore Logo" />
                            <span className="self-center duration-500 font-bold md:text-4xl text-[35px] font-lobster text-slate-700 whitespace-nowrap">Book Store</span>
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

                    <div className="flex justify-end items-center w-3/12"> 
                        {matches === false ?
                        <>
                            <Link to={PATH.login}><BiUserCircle className="w-8 h-8" /></Link>
                            <Link to={PATH.cart}><AiOutlineShoppingCart className="mx-3 w-8 h-8" /></Link>
                        </>
                        :
                        <>
                            <Link className="hover:text-stone-800 rounded-lg hover:cursor:pointer mx-2 font-lobster text-[19px] text-slate-700" to={PATH.login}>
                                <span type="button">Đăng nhập</span>
                            </Link>
                            <Link className="hover:text-stone-800 rounded-lg hover:cursor:pointer mx-2 font-lobster text-[19px] text-slate-700" to={PATH.register}>
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
                            <button onClick={() => setOpen(!open)} className="hover:rounded-lg mx-3 flex w-2/12 md:w-1/12 h-10 items-center justify-center text-[24px]">{open ? <MdOutlineClose /> : <GiHamburgerMenu />} </button>

                            <div id="search_box" className="flex justify-between mx-3 h-10 w-10/12 md:w-11/12 border-2 rounded-lg bg-white ">
                                <input className="pl-2 outline-0 bg-white mx-2 font-[Poppins] text-md rounded-lg flex w-10/12 md:w-11/12 text" type="text" placeholder="Tìm kiếm..." name="search"></input>
                                <button type="submit" className=" hover:rounded-md hover:bg-gray-500 w-2/12 md:w-1/12 flex relative items-center justify-center" ><BsSearch /></button>
                            </div> 
                        </div>
                    </>
                
                }

                {matches === false ?
                    <div className = {open ? 'flex flex-col md:flex-row bg-gray-800 md:bg-white w-full h-auto mt-3' : 'none' }>
                        <ul className="flex flex-col"></ul>
                            {links.map((item, index) => {
                                return (
                                    <li key={index} className={open ? 'md:text-gray-500 md:not-italic md:font-normal text-slate-300 font-semibold italic md:text-[16px] lg:text-[18px] text-[20px] justify-center font-[Poppins] md:h-8 h-16 hover:text-gray-900 hover:cursor: pointer md:font-lobster flex md:flex-col w-full items-center' : 'hidden' }>
                                        <Link className="flex" to={item.link}>{item.name}</Link>
                                    </li>
                                )
                                                                            
                            })}
                    </div>
                :
                    <div className = "flex flex-col md:flex-row bg-gray-800 md:bg-white w-full h-auto mt-3">
                        <ul className="flex flex-col"></ul>
                            {links.map((item, index) => {
                                return (
                                    <li key={index} className="md:text-gray-500 md:not-italic md:font-normal text-slate-300 font-semibold italic md:text-[16px] lg:text-[18px] text-[20px] justify-center font-[Poppins] md:h-8 h-16 hover:text-gray-900 hover:cursor: pointer md:font-lobster flex md:flex-col w-full items-center">
                                        <Link className="flex transition-colors" to={item.link}>{item.name}</Link>
                                    </li>
                                )
                                                                            
                            })}
                    </div>
                }

               
            </div>
        </nav>

    );
}

export default Navbar;