import clsx from 'clsx';
import { useCallback, useId, useState } from 'react';
import { BsCardImage, BsPencilSquare } from 'react-icons/bs';
import { AiFillDelete } from 'react-icons/ai'
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading';
import axiosJWT from '../../../config/axiosJWT';
import { API } from '../../../constants/api';
import { PATH } from '../../../constants/path';
import style from './style.module.scss';

function ProductManage() {
    const id = useId();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [page, setPage] = useState(1);
    const { data: products, isLoading, isError } = useQuery(['products', page], async () => {
        const result = await axiosJWT.get(API.GET_PRODUCT_IN_PAGE, {
            params: {
                p: page, s: 5
            }
        });
        return result.data;
    }, { keepPreviousData: true, staleTime: 5000 });
    const { mutateAsync } = useMutation(async (idProduct) => {
        const result = await axiosJWT.delete(`${API.DELETE_PRODUCT}/${idProduct}`)
        return result.data;
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries("products")
        }
    })
    const checkDate = useCallback((data) => {
        if (data !== null) {
            const date = new Date(data)
            return ("0" + date.getDate()).slice(-2) + "/" + ("0" + (date.getMonth() + 1)).slice(-2) + "/" + date.getFullYear();
        }
    }, [])

    const nextPage = useCallback(() => {
        setPage(currentPage => currentPage >= products.SoLuongTrang ? products.SoLuongTrang : ++currentPage);
    }, [page, products]);

    const prevPage = useCallback(() => {
        setPage(currentPage => currentPage > 1 ? --currentPage : 1);
    }, [page]);

    const firstPage = useCallback(() => {
        setPage(1);
    }, []);
    const lastPage = useCallback(() => {
        setPage(products.SoLuongTrang);
    }, [products]);
    const changePage = useCallback((e) => {
        const value = parseInt(e.target.value);
        if (value > 0 && value <= products.SoLuongTrang)
            setPage(value);
    }, [products]);

    const deleteProduct = useCallback((idProduct) => {
        if (window.confirm("Bạn chắn chắn là muốn xóa sản phẩm này chứ"))
            mutateAsync(idProduct)
                .then(res => {
                    window.alert("Xóa sản phẩm thành công");
                })
                .catch(err => {
                    window.alert("Xóa sản phẩm thất bại");
                })
    }, [])

    const transferUpdateProduct = useCallback((data) => {
        navigate(PATH.admin.update_product, { state: data })
    }, [])

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
            <div className="flex space-x-2">
                <h2 className="text-xl font-semibold">Sản phẩm</h2>
                <Link to={PATH.admin.add_product} className="px-3 py-1 bg-orange-600 rounded-sm text-white text-sm hover:bg-orange-500 transition-colors">Thêm sản phẩm</Link>
            </div>

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
                        <input type="date" className="rounded-sm border cursor-pointer" />
                        <input type="submit" className="rounded-sm border px-2 py-1 text-sm cursor-pointer bg-white" value="Lọc" />
                    </div>
                </div>

                <div className="flex justify-end space-x-2 py-1">
                    <div className='px-2 border rounded-sm cursor-pointer'>{products.TongSanPham} mục</div>
                    <div className='px-2 border rounded-sm cursor-pointer' onClick={firstPage}>&#171;</div>
                    <div className='px-2 border rounded-sm cursor-pointer' onClick={prevPage}>&#60;</div>
                    <div><input type="number" className={clsx(style["none-spin"], 'px-2 border rounded-sm cursor-pointer w-14 text-center')} value={page} onChange={(e) => changePage(e)} /> &#47; {products?.SoLuongTrang}</div>
                    <div className='px-2 border rounded-sm cursor-pointer' onClick={nextPage}>&#62;</div>
                    <div className='px-2 border rounded-sm cursor-pointer' onClick={lastPage}>&#187;</div>
                </div>
            </div>


            <table className="table-auto border-collapse border rounded-sm w-full bg-white md:table-fixed">
                <thead>
                    <tr className="border bg-slate-800 text-slate-200">
                        <th className="p-2 hidden md:table-cell"><BsCardImage className='mx-auto w-full' /></th>
                        <th className="p-2 text-left">Tên</th>
                        <th className="p-2 text-left">Danh mục</th>
                        <th className="p-2 text-left">Thể loại</th>
                        <th className="p-2 text-left">Giá (VNĐ)</th>
                        <th className="p-2 text-left hidden md:table-cell">Giảm giá</th>
                        <th className="p-2 text-left hidden md:table-cell">Đơn vị</th>
                        <th className="p-2 text-left hidden md:table-cell">Ngày thêm</th>
                        <th className="p-2 text-center hidden md:table-cell">Số lượng</th>
                        <th className="p-2 text-center w-16"></th>
                        <th className="p-2 text-center w-16"></th>
                    </tr>
                </thead>
                <tbody>
                    {products.DanhSach.map(item => {
                        return (
                            <tr key={id + item.IDSanPham} className="odd:bg-slate-100 border">
                                <td className="p-2 hidden md:table-cell w-24 h-24"><img className='object-contain mx-auto' src={item.HinhAnh} alt="book" /></td>
                                <td className="p-2">{item.TenSanPham}</td>
                                <td className="p-2">{item.TenDanhMuc}</td>
                                <td className="p-2">{item.TenTheLoai}</td>
                                <td className="p-2">{item.GiaBan}</td>
                                <td className="p-2 hidden md:table-cell">{item.GiamGia}</td>
                                <td className="p-2 hidden md:table-cell">{item.DonViTinh}</td>
                                <td className="p-2 hidden md:table-cell">{checkDate(item.NgayThem)}</td>
                                <td className="p-2 hidden md:table-cell text-center">{item.SoLuongConLai}</td>
                                <td className="p-2 text-indigo-500 font-semibold w-16 align-middle"><span className="w-full"><BsPencilSquare onClick={() => transferUpdateProduct(item)} size={20} className='cursor-pointer mx-auto' /></span></td>
                                <td className="p-2 text-red-500 font-semibold w-16 align-middle"><span className="w-full"><AiFillDelete onClick={() => deleteProduct(item.IDSanPham)} size={20} className='cursor-pointer mx-auto' /></span></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    );
}

export default ProductManage;
