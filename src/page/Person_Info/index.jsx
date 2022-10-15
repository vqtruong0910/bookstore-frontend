import { BsPerson, BsPencil } from "react-icons/bs";
import { HiOutlinePencilAlt } from "react-icons/hi";
import { BiCalendar } from "react-icons/bi";

function Person_Info() {
    return (
        <div className="flex flex-wrap w-full bg-gray-200">
            <h1 className="text-center w-full py-2 text-lg font-medium">Thông tin tài khoản</h1>

            <div className="flex justify-center w-full py-2">
                <div className="flex w-24 h-24 border-2 rounded-full items-center justify-center relative bg-slate-300">
                    <BsPerson className="w-16 h-16 text-white" />

                    <div className="flex justify-center items-center top-16 right-0 absolute w-5 h-5 rounded-full bg-gray-500">
                        <BsPencil className="text-white w-3 h-3" />
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap w-full py-3 mt-4 items-center bg-gray-100 relative">
                <div className="w-full flex items-center">
                    <BsPerson className="w-5 h-5 ml-5" />
                    <span className="ml-1 font-semibold w-full">Họ và tên</span>
                </div>

                <span className="text-sm text-black/70 w-full ml-11 mt-2">Võ Ngọc Minh A</span>

                <div className="absolute w-full right-6">
                    <HiOutlinePencilAlt className="w-5 h-5 float-right"/>
                </div>
            </div>

            <div className="flex flex-wrap w-full py-3 mt-4 items-center bg-gray-100 relative">
                <div className="w-full flex items-center">
                    <BsPerson className="w-5 h-5 ml-5" />
                    <span className="ml-1 font-semibold w-full">Email</span>
                </div>

                <span className="text-sm text-black/70 w-full ml-11 mt-2">abc123@gmail.com</span>

                <div className="absolute w-full right-6">
                    <HiOutlinePencilAlt className="w-5 h-5 float-right"/>
                </div>
            </div>

            <div className="flex flex-wrap w-full py-3 mt-4 items-center bg-gray-100 relative">
                <div className="w-full flex items-center">
                    <BsPerson className="w-5 h-5 ml-5" />
                    <span className="ml-1 font-semibold w-full">Giới tính</span>
                </div>

                <span className="text-sm text-black/70 w-full ml-11 mt-2">Nữ</span>

                <div className="absolute w-full right-6">
                    <HiOutlinePencilAlt className="w-5 h-5 float-right"/>
                </div>
            </div>

            <div className="flex flex-wrap w-full py-3 mt-4 items-center bg-gray-100 relative">
                <div className="w-full flex items-center">
                    <BiCalendar className="w-5 h-5 ml-5" />
                    <span className="ml-1 font-semibold w-full">Ngày sinh</span>
                </div>

                <span className="text-sm text-black/70 w-full ml-11 mt-2">01/01/2022</span>

                <div className="absolute w-full right-6">
                    <HiOutlinePencilAlt className="w-5 h-5 float-right"/>
                </div>
            </div>

            <div className="flex flex-wrap w-full py-3 my-4 items-center bg-gray-100 relative">
                <div className="w-full flex items-center">
                    <BsPerson className="w-5 h-5 ml-5" />
                    <span className="ml-1 font-semibold w-full">Địa chỉ</span>
                </div>

                <span className="text-sm text-black/70 w-full ml-11 mt-2">273 An Dương Vương, Quận 5, TP Hồ Chí Minh</span>

                <div className="absolute w-full right-6">
                    <HiOutlinePencilAlt className="w-5 h-5 float-right"/>
                </div>
            </div>
        </div>
    )
}

export default Person_Info;