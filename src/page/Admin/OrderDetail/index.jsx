import { useCallback } from "react";
import { BsCardImage, BsPencilSquare } from "react-icons/bs";
import { TbListDetails } from "react-icons/tb";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import axiosJWT from "../../../config/axiosJWT";
import { API } from "../../../constants/api";

function OrderDetail() {
    const { id } = useParams();
    const { data: orderDetail, isLoading, isError } = useQuery(['order_detail', id], async () => {
        if (!isNaN(id)) {
            try {
                const result = await axiosJWT.get(`${API.ORDER_DETAIL}/${id}`);
                console.log(result.data);
                return result.data;
            } catch (error) {
                return []
            }
        }
        return []
    }, { keepPreviousData: true, staleTime: 5000 });

    if (isLoading) {
        return (
            <Loading />
        )
    }
    if (isError) {
        return (
            <h1>Không thể tải được dữ liệu 😥</h1>
        )
    }
    return (
        <>
            <h2 className="text-xl font-semibold">Đơn hàng ✨</h2>
            <table className="table-auto border-collapse border rounded-sm w-full bg-white">
                <thead>
                    <tr className="border bg-slate-800 text-slate-200">
                        <th className="p-2 w-24 hidden md:table-cell"><BsCardImage className='mx-auto w-full' /></th>
                        <th className="p-2 text-left">Tên sản phẩm</th>
                        <th className="p-2 text-left hidden md:table-cell">Danh mục</th>
                        <th className="p-2 text-center hidden md:table-cell">Thể loại</th>
                        <th className="p-2 text-left hidden md:table-cell">Số lượng</th>
                        <th className="p-2 text-left hidden md:table-cell">Giá Bán</th>
                        <th className="p-2 text-left hidden md:table-cell">Tổng tiền</th>
                    </tr>
                </thead>
                <tbody>
                    {orderDetail?.map((item, index) => {
                        return (
                            <tr key={index} className="odd:bg-slate-100 border">
                                <td className="p-2 hidden md:table-cell"><img className='object-contain h-24 mx-auto' src={item.HinhAnh} alt="book" /></td>
                                <td className="p-2 hidden md:table-cell">{item.TenSanPham}</td>
                                <td className="p-2">{item.DanhMuc}</td>
                                <td className="p-2 hidden md:table-cell">{item.TheLoai}</td>
                                <td className="p-2 hidden md:table-cell">{item.SoLuong}</td>
                                <td className="p-2 text-center hidden md:table-cell">{item.GiaBan}</td>
                                <td className="p-2 hidden md:table-cell">{item.Tong}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}

export default OrderDetail;