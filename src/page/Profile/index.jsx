import { AiOutlineUser } from "react-icons/ai";
import { RiLogoutCircleLine } from "react-icons/ri";
import { TbTruck } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { PATH } from "../../constants/path";

function Profile(){
    return(
        <div className="flex flex-wrap items-center justify-center w-full bg-gray-200">
            <div className="mt-5 justify-center flex">
                <BsPerson className="w-12 h-12 rounded-full border-black border" />
            </div>
            <h1 className="text-gray-800 font-semibold text-xl mt-3 text-center w-full">Họ và tên</h1>
            <h1 className="text-gray-500 text-sm w-full text-center mt-2">Địa chỉ</h1>

            <div className="mt-5 w-full">
                <Link to={PATH.person_info} className="flex w-full items-center py-3 cursor-pointer hover:bg-gray-300">
                    <AiOutlineUser className="w-9 h-9 text-slate-700 ml-5" />
                    <h1 className="text-gray-800 font-semibold text-base mx-2 w-full">Thông tin tài khoản</h1>
                </Link>
                <div className="flex w-full items-center py-3 cursor-pointer hover:bg-gray-300">
                    <TbTruck className="w-9 h-9 text-slate-700 rounded-full ml-5" />
                    <h1 className="text-gray-800 font-semibold text-base mx-2 w-full">Quản lý đơn hàng</h1>
                </div>
                <div className="flex w-full items-center py-3 cursor-pointer hover:bg-gray-300">
                    <RiLogoutCircleLine className="w-9 h-9 text-slate-700 ml-5" />
                    <h1 className="text-gray-800 font-semibold text-base mx-2 w-full">Đăng xuất</h1>
                </div>
            </div>
            
        </div>
    )
}

export default Profile;