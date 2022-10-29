import clsx from "clsx";
import { useId } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { BsCardImage } from "react-icons/bs";
import { useQuery } from "react-query";
import Loading from "../../../components/Loading";
import axiosJWT from "../../../config/axiosJWT";
import { API } from "../../../constants/api";
import { gender, permission, status, verifyEmail } from "../../../constants/statusUser";

function UserManagement() {
    const id = useId();
    const [page, setPage] = useState(1);
    const { data: users, isLoading } = useQuery(['users', page], async () => {
        const result = await axiosJWT.get(`${API.GET_LIST_USER_IN_PAGE}/${page}`);
        return result.data;
    }, { keepPreviousData: true, staleTime: 5000 });
    const nextPage = useCallback(() => {
        setPage(currentPage => currentPage >= users.SoLuongTrang ? users.SoLuongTrang : ++currentPage);
    }, [page, users]);

    const prevPage = useCallback(() => {
        setPage(currentPage => currentPage > 1 ? --currentPage : 1);
    }, [page]);

    const firstPage = useCallback(() => {
        setPage(1);
    }, []);
    const lastPage = useCallback(() => {
        setPage(users.SoLuongTrang);
    }, [users])

    if (isLoading) {
        return (
            <Loading />
        )
    }

    return (
        <>
            <div className="flex space-x-2">
                <h2 className="text-xl font-semibold">Tài khoản người dùng</h2>
            </div>

            <div className="py-2 space-y-1">
                <div className="hidden md:flex">
                    <div className="flex space-x-3">
                        <input type="text" className="rounded-sm border" />
                        <input type="submit" className="rounded-sm border px-2 py-1 text-sm cursor-pointer bg-white" value="Tìm" />
                    </div>
                </div>

                <div className="flex justify-end space-x-2 py-1 select-none">
                    <div className='px-2 border rounded-sm cursor-pointer'>{users?.TongNguoiDung} mục</div>
                    <div className='px-2 border rounded-sm cursor-pointer' onClick={firstPage}>&#171;</div>
                    <div className='px-2 border rounded-sm cursor-pointer' onClick={prevPage}>&#60;</div>
                    <div><input className='px-2 border rounded-sm cursor-pointer w-14 text-center' /> &#47; {users?.SoLuongTrang}</div>
                    <div className='px-2 border rounded-sm cursor-pointer' onClick={nextPage}>&#62;</div>
                    <div className='px-2 border rounded-sm cursor-pointer' onClick={lastPage}>&#187;</div>
                    {/* <div className="px-2 border rounded-sm cursor-pointer">Next page</div> */}
                </div>
            </div>


            <table className="table-auto border-collapse border rounded-sm w-full bg-white">
                <thead>
                    <tr className="border">
                        {/* <th className="p-2 w-8"><input type="checkbox" /></th> */}
                        <th className="p-2 hidden md:table-cell"><BsCardImage className='mx-auto w-full' /></th>
                        <th className="p-2 text-left">Tên</th>
                        <th className="p-2 text-left">Email</th>
                        <th className="p-2 text-left hidden md:table-cell">Giới tính</th>
                        <th className="p-2 text-left hidden md:table-cell">Ngày Sinh</th>
                        <th className="p-2 text-left">Quyền</th>
                        <th className="p-2 text-left">Trạng thái</th>
                        <th className="p-2 hidden md:table-cell">Xác thực</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.DanhSach.map((item, index) => (
                        <tr key={id + index} className="odd:bg-slate-100 border">
                            {/* <td className="p-2"><input className='mx-auto w-full' type="checkbox" /></td> */}
                            <td className="p-2 hidden md:table-cell"><img className='w-24 h-16 object-fill mx-auto' src="https://cdn0.fahasa.com/media/catalog/product/8/9/8935210289285.jpg" alt="book" /></td>
                            <td className="p-2">{item.HoTen}</td>
                            <td className="p-2">{item.Email}</td>
                            <td className="p-2 hidden md:table-cell">{gender[item.GioiTinh]}</td>
                            <td className="p-2 hidden md:table-cell">{item.NgaySinh}</td>
                            <td className="p-2">{permission[item.Quyen]}</td>
                            <td className={clsx("p-2", item.TrangThai ? "text-lime-500" : "text-red-500")}>{status[item.TrangThai]}</td>
                            <td className={clsx("p-2 text-center hidden md:table-cell", item.XacThuc ? "text-lime-500" : "text-red-500")}>{verifyEmail[item.XacThuc]}</td>
                            <td className="p-2 text-indigo-500 font-semibold cursor-pointer hover:underline">Cập nhật</td>
                            <td className="p-2 text-red-500 font-semibold cursor-pointer hover:underline">Xóa</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default UserManagement;