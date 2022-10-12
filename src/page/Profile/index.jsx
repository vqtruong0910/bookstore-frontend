import avatar from '../../assets/images/avatar.jpg';
import { AiOutlineUser, AiOutlineStar } from "react-icons/ai";
import { MdPublishedWithChanges } from "react-icons/md";
import { RiLogoutCircleLine } from "react-icons/ri";
import { TbTruck } from "react-icons/tb";
import { BsBagCheck, BsBagX } from "react-icons/bs";
import { HiOutlineBookOpen } from "react-icons/hi";

function Profile(){
    return(
        <div className="flex flex-wrap items-center justify-center w-full bg-gray-200 my-4 ">
            <div className="w-full mt-5 justify-center flex">
                <img className="w-28 rounded-full" src={avatar} alt="Avatar" />
            </div>
            <h1 className="text-gray-800 font-semibold text-xl mt-3 text-center w-full">Võ Ngọc Minh Trang</h1>
            <h1 className="text-gray-500 text-sm w-full text-center mt-2">TP Hồ Chí Minh, Việt Nam</h1>

            <div className="mt-5 w-full">
                <div className="flex w-full items-center py-3 cursor-pointer hover:bg-gray-300">
                    <AiOutlineUser className="w-9 h-9 text-slate-700 ml-5" />
                    <h1 className="text-gray-800 font-semibold text-base mx-2 w-full">Thông tin cá nhân</h1>
                </div>
                <div className="flex w-full items-center py-3 cursor-pointer hover:bg-gray-300">
                    <MdPublishedWithChanges className="w-9 h-8 border border-slate-700 text-slate-700 rounded-full ml-5" />
                    <h1 className="text-gray-800 font-semibold text-base mx-2 w-full">Đổi mật khẩu</h1>
                </div>
                <div className="flex w-full items-center py-3 cursor-pointer hover:bg-gray-300">
                    <TbTruck className="w-10 h-10 text-slate-700 ml-5" />
                    <h1 className="text-gray-800 font-semibold text-base mx-2 w-full">Trạng thái đơn mua</h1>
                </div>
                <div className="flex w-full items-center py-3 cursor-pointer hover:bg-gray-300">
                    <BsBagCheck className="w-9 h-9 text-slate-700 ml-5" />
                    <h1 className="text-gray-800 font-semibold text-base mx-2 w-full">Đơn hàng đã mua</h1>
                </div>
                <div className="flex w-full items-center py-3 cursor-pointer hover:bg-gray-300">
                    <BsBagX className="w-9 h-9 text-slate-700 ml-5" />
                    <h1 className="text-gray-800 font-semibold text-base mx-2 w-full">Đơn hàng đã huỷ</h1>
                </div>
                <div className="flex w-full items-center py-3 cursor-pointer hover:bg-gray-300">
                    <AiOutlineStar className="w-9 h-8 border border-slate-700 text-slate-700 rounded-full ml-5" />
                    <h1 className="text-gray-800 font-semibold text-base mx-2 w-full">Đánh giá sản phẩm</h1>
                </div>
                <div className="flex w-full items-center py-3 cursor-pointer hover:bg-gray-300">
                    <RiLogoutCircleLine className="w-9 h-9 text-slate-700 ml-5" />
                    <h1 className="text-gray-800 font-semibold text-base mx-2 w-full">Đăng xuất</h1>
                </div>
                <div className="flex w-full items-center py-3 cursor-pointer hover:bg-gray-300 mb-5">
                    <HiOutlineBookOpen className="w-9 h-9 text-slate-700 ml-5" />
                    <h1 className="text-gray-800 font-semibold text-base mx-2 w-full">Điều khoản Book Store</h1>
                </div>
            </div>
            
        </div>
    )
}

export default Profile;