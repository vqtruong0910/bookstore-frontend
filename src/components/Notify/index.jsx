import { useState } from "react";
import clsx from "clsx";

function Notify(props) {
    const [open, setOpen] = useState(false);

    return (
        <div className="flex fixed w-full right-0">
            <div onClick={() => setOpen(true)} className={clsx(!open && "fixed inset-0 w-full h-full bg-slate-900 bg-opacity-50 z-10 transition-opacity duration-200", open && "hidden")}></div>
            <div className={clsx(!open && "max-w-sm mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-sm z-30" , open && "hidden")}>
                <div className="md:flex">
                    <div className="w-96 p-3 py-4">

                        <div className="flex justify-center">
                            {props.icon}
                        </div>

                        <p className={`px-16 text-center ${props.textMessage} mt-1`}>{props.message}</p>
                    </div>

                </div>

            </div>
        </div>


    )
}

export default Notify;