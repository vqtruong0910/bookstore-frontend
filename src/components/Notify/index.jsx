import { useState } from "react";
import clsx from "clsx";
import logo from "../../assets/images/logo.png";
function Notify(props) {

    const [open, setOpen] = useState(false);
    return (
        <>
            <div className={clsx(!open && "fixed inset-0 w-full h-full bg-slate-900 bg-opacity-50 z-10 transition-opacity duration-200", open && "hidden")}></div>
            <div className={clsx(!open && "flex fixed inset-0 items-center justify-center h-full z-30", open && "hidden")}>
                <div className="max-w-full text-sm shadow-sm pointer-events-auto bg-clip-padding w-80 lg:w-96">
                    <div className="flex items-center px-3 text-gray-500 bg-gray-100 w-full">
                        <img src={logo} className="mr-2 my-2 text-lg rounded w-14 h-14" alt="BookStore_logo" />
                        <strong className="mr-auto text-slate-700 font-lobster text-lg lg:text-xl">Book Store</strong>
                        <button type="button" className="box-content p-1 ml-3 -mr-1 text-black rounded opacity-50 hover:opacity-100">
                            <svg onClick={() => setOpen(true)} className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256">
                                <rect width="256" height="256" fill="none"></rect>
                                <line x1="200" y1="56" x2="56" y2="200" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" fill="none"></line>
                                <line x1="200" y1="200" x2="56" y2="56" stroke="#000000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="24" fill="none"></line>
                            </svg>
                        </button>
                    </div>
                    <div className="py-3 w-full bg-white flex flex-row items-center justify-center">
                        {props.icon}
                        <span className={`text-sm lg:text-base ${props.textMessage} font-semibold mx-1`}>{props.message}</span>
                    </div>
                </div>
            </div>
        </>


    )
}

export default Notify;