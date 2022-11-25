import { BsCardImage } from 'react-icons/bs';
import { TbListDetails } from 'react-icons/tb';
import { BsPencilSquare } from 'react-icons/bs';
import { useCallback, useState } from 'react';
import { useQuery } from 'react-query';
import axiosJWT from '../../../config/axiosJWT';
import { API } from '../../../constants/api';
import Loading from '../../../components/Loading';
import clsx from 'clsx';
import style from './style.module.scss';

function OrderManagement() {
    const [page, setPage] = useState(1);
    const { data: orders, isLoading, isError } = useQuery(['orders', page], async () => {
        const result = await axiosJWT.get(`${API.GET_LIST_ORDER_IN_PAGE}?p=${page}&s=10`);
        console.log(result.data);
        return result.data;
    }, { keepPreviousData: true, staleTime: 5000 });

    const checkDate = useCallback((data) => {
        if (data !== null) {
            const date = new Date(data)
            return ("0" + date.getDate()).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();
        }
    }, [])
    const nextPage = useCallback(() => {
        setPage(currentPage => currentPage >= orders.SoLuongTrang ? orders.SoLuongTrang : ++currentPage);
    }, [page, orders]);

    const prevPage = useCallback(() => {
        setPage(currentPage => currentPage > 1 ? --currentPage : 1);
    }, [page]);

    const firstPage = useCallback(() => {
        setPage(1);
    }, []);
    const lastPage = useCallback(() => {
        setPage(orders.SoLuongTrang);
    }, [orders]);
    const changePage = useCallback((e) => {
        const value = parseInt(e.target.value);
        if (value > 0 && value <= orders.SoLuongTrang)
            setPage(value);
    }, [orders]);
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
            <div className="py-2 space-y-1">
                <div className="hidden md:flex">
                    <div className="flex space-x-3">
                        <input type="text" className="rounded-sm border" />
                        <input type="submit" className="rounded-sm border px-2 py-1 text-sm cursor-pointer bg-white" value="Tìm" />
                    </div>
                    <div className="flex ml-auto space-x-3">
                        <select className="rounded-sm border cursor-pointer">
                            <option value="">Chọn danh mục</option>
                            <option value="">Sách giáo khoa</option>
                            <option value="">Sách kinh tế</option>
                            <option value="">Khoa học viễn tưởng</option>
                            <option value="">Truyện tranh</option>
                        </select>
                        <select className="rounded-sm border cursor-pointer">
                            <option value="">Thể loại</option>
                            <option value="">Comic</option>
                            <option value="">Hành động</option>
                            <option value="">Trinh thám</option>
                        </select>
                        <select className="rounded-sm border cursor-pointer">
                            <option value="">Tất cả các ngày</option>
                            <option value=""></option>
                            <option value=""></option>
                            <option value=""></option>
                        </select>
                        <input type="submit" className="rounded-sm border px-2 py-1 text-sm cursor-pointer bg-white" value="Lọc" />
                    </div>
                </div>

                <div className="flex justify-end space-x-2 py-1 select-none">
                    <div className='px-2 border rounded-sm cursor-pointer'>{orders?.TongDon} mục</div>
                    <div className='px-2 border rounded-sm cursor-pointer' onClick={firstPage}>&#171;</div>
                    <div className='px-2 border rounded-sm cursor-pointer' onClick={prevPage}>&#60;</div>
                    <div><input type="number" className={clsx(style["none-spin"], 'px-2 border rounded-sm cursor-pointer w-14 text-center')} value={page} onChange={(e) => changePage(e)} /> &#47; {orders.SoLuongTrang}</div>
                    <div className='px-2 border rounded-sm cursor-pointer' onClick={nextPage}>&#62;</div>
                    <div className='px-2 border rounded-sm cursor-pointer' onClick={lastPage}>&#187;</div>
                </div>
            </div>


            <table className="table-auto border-collapse border rounded-sm w-full bg-white">
                <thead>
                    <tr className="border bg-slate-800 text-slate-200">
                        <th className="p-2 text-center">Mã đơn hàng</th>
                        <th className="p-2 text-left">Địa chỉ</th>
                        <th className="p-2 text-left">Tên người đặt</th>
                        <th className="p-2 text-left hidden md:table-cell">Ngày đặt</th>
                        <th className="p-2 text-left hidden md:table-cell">Ngày giao</th>
                        <th className="p-2 text-center hidden md:table-cell">Số lượng</th>
                        <th className="p-2 text-left hidden md:table-cell">Tổng</th>
                        <th className="p-2 text-center hidden md:table-cell">Trạng thái</th>
                        <th className="p-2 w-16"></th>
                        <th className="p-2 w-16"></th>
                    </tr>
                </thead>
                <tbody>
                    {orders.DanhSach.map((item, index) => {
                        return (
                            <tr key={index} className="odd:bg-slate-100 border">
                                <td className="p-2 text-center">{item.IDDonHang}</td>
                                <td className="p-2">{item.DiaChi}</td>
                                <td className="p-2 hidden md:table-cell">{item.IDNguoiDung}</td>
                                <td className="p-2 hidden md:table-cell">{checkDate(item.NgayDat)}</td>
                                <td className="p-2 hidden md:table-cell">{checkDate(item.NgayGiao)}</td>
                                <td className="p-2 text-center hidden md:table-cell">{item.SoLuong}</td>
                                <td className="p-2 hidden md:table-cell">{item.Tong}</td>
                                <td className="p-2 text-center hidden md:table-cell">{item.TrangThai}</td>
                                <td className="p-2 text-indigo-500 font-semibold w-16 align-middle"><span className="w-full"><TbListDetails size={20} className='cursor-pointer mx-auto' /></span></td>
                                <td className="p-2 text-indigo-500 font-semibold w-16 align-middle"><span className="w-full"><BsPencilSquare size={20} className='cursor-pointer mx-auto' /></span></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}

export default OrderManagement;