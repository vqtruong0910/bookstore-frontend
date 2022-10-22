import { IoReload } from "react-icons/io5";
import { BsTruck } from "react-icons/bs";
import { FiCheckSquare } from "react-icons/fi";
import { BiTaskX } from "react-icons/bi";

export const UserAllOrderData = [
    {
        id: 1,
        img: "https://cdn0.fahasa.com/media/catalog/product/c/o/co-mot-ngay-bo-me-se-gia-di.jpg",
        name: "Có một ngày bố mẹ sẽ già đi",
        cost: 68,
        total: 68,
        quantity: 1,
        status_id: 3,
        status: "Giao hàng thành công",
        icon: <FiCheckSquare className="w-5 h-5 text-slate-400 ml-2" />
    },
    {
        id: 2,
        img: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_244718_1_5098.jpg",
        name: "Hoàng tử bé",
        cost: 109,
        total: 109,
        quantity: 2,
        status_id: 1,
        status: "Đang xử lý",
        icon: <IoReload className="w-5 h-5 text-slate-400 ml-2" />
    },
    {
        id: 3,
        img: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_244718_1_5098.jpg",
        name: "Tàn khốc mới là thanh xuân",
        cost: 103,
        total: 103,
        quantity: 3,
        status_id: 4,
        status: "Đã hủy",
        icon: <BiTaskX className="w-5 h-5 text-slate-400 ml-2" />
    },
    {
        id: 4,
        img: "https://cdn0.fahasa.com/media/catalog/product/i/m/image_195509_1_5327.jpg",
        name: "Khiêu vũ với ngòi bút",
        cost: 137,
        total: 137,
        quantity: 4,
        status_id: 2,
        status: "Đang vận chuyển",
        icon: <BsTruck className="w-5 h-5 text-slate-400 ml-2" />
    },


    
]