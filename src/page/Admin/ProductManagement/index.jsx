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
import { useForm } from 'react-hook-form';
import { VALIDATE } from '../../../constants/validate'
function ProductManage() {
    const id = useId();
    const navigate = useNavigate();
    const queryClient = useQueryClient();
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState(false);
    const { register, formState: { errors }, handleSubmit, reset, watch } = useForm({
        mode: "onBlur",
        defaultValues: {
            DanhMuc: "",
            TheLoai: "",
            Ngay: "",
        }
    });
    const { data: products, isLoading, isError } = useQuery(['products', page, search], async () => {
        const param = {}
        if (search.DanhMuc)
            param.c = search.DanhMuc
        if (search.TheLoai)
            param.k = search.TheLoai
        if (search.Ngay)
            param.d = search.Ngay
        try {
            const result = await axiosJWT.get(API.GET_PRODUCT_IN_PAGE, {
                params: {
                    p: page,
                    s: 5,
                    ...param
                }
            });
            return result.data;
        } catch (error) {
            return []
        }
    }, { keepPreviousData: true });
    const { data: category, isError: isErrorCategory } = useQuery(['category'], async () => {
        const result = await axiosJWT.get(API.GET_LIST_ALL_CATEGORY);
        return result.data;
    }, { keepPreviousData: true, staleTime: 5000 });
    const { data: typeOfBook, isError: isErrorTypeOfBook } = useQuery(['typeofbook', watch("DanhMuc")], async () => {
        if (watch("DanhMuc")) {
            const result = await axiosJWT.get(`${API.GET_LIST_ALL_TYPEOF_BOOK}/${watch("DanhMuc")}`)
            return result.data;
        }
        return []
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
        if (window.confirm("B???n ch???n ch???n l?? mu???n x??a s???n ph???m n??y ch???"))
            mutateAsync(idProduct)
                .then(() => {
                    window.alert("X??a s???n ph???m th??nh c??ng");
                })
                .catch(err => {
                    console.log(err);
                    window.alert("X??a s???n ph???m th???t b???i");
                })
    }, [])

    const transferUpdateProduct = useCallback((data) => {
        navigate(PATH.admin.update_product, { state: data })
    }, []);

    const submitFilter = useCallback((data) => {
        setSearch({ ...data });
    }, [])
    const resetFilter = useCallback(() => {
        reset({
            DanhMuc: "",
            TheLoai: "",
            Ngay: ""
        });
        setSearch(false);
    }, [])

    if (isLoading) {
        return (
            <Loading />
        )
    }
    if (isError || isErrorCategory || isErrorTypeOfBook) {
        return (
            <h1>Kh??ng th??? t???i ???????c d??? li???u ????</h1>
        )
    }

    return (
        <>
            <div className="flex space-x-2">
                <h2 className="text-xl font-semibold">S???n ph???m</h2>
                <Link to={PATH.admin.add_product} className="px-3 py-1 bg-orange-600 rounded-sm text-white text-sm hover:bg-orange-500 transition-colors">Th??m s???n ph???m</Link>
            </div>

            <div className="py-2 space-y-1">
                <div className="hidden md:flex">
                    {/* <div className="flex space-x-3">
                        <input type="text" className="rounded-sm border" />
                        <input type="submit" className="rounded-sm border px-2 py-1 text-sm cursor-pointer bg-white" value="T??m" />
                    </div> */}
                    <form onSubmit={handleSubmit(submitFilter)} className="flex ml-auto space-x-3">
                        <select {...register("DanhMuc")} className="rounded-sm border cursor-pointer">
                            <option value="">--Select--</option>
                            {category?.map((item) => (
                                <option key={item.IDDanhMuc} value={item.IDDanhMuc}>{item.TenDanhMuc}</option>
                            ))}
                        </select>
                        <select {...register("TheLoai")} className="rounded-sm border cursor-pointer">
                            <option value="">--Select--</option>
                            {typeOfBook?.map((item) => (
                                <option key={item.IDTheLoai} value={item.IDTheLoai}>{item.TenTheLoai}</option>
                            ))}
                        </select>
                        <input type="date" {...register("Ngay", VALIDATE.filterDate)} className="rounded-sm border cursor-pointer" />
                        <input type="submit" className="rounded-sm border px-2 py-1 text-sm cursor-pointer bg-white" value="L???c" />
                        {search && <input onClick={resetFilter} type="button" className="rounded-sm text-red-500 border px-2 py-1 text-sm cursor-pointer bg-white" value="X" />}
                    </form>
                </div>

                <div className="flex justify-end space-x-2 py-1">
                    <div className='px-2 border rounded-sm cursor-pointer'>{products.TongSanPham} m???c</div>
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
                        <th className="p-2 w-24 hidden md:table-cell"><BsCardImage className='mx-auto w-full' /></th>
                        <th className="p-2 w-40 text-left">T??n</th>
                        <th className="p-2 w-40 text-left">Danh m???c</th>
                        <th className="p-2 text-left">Th??? lo???i</th>
                        <th className="p-2 text-left">Gi?? (VN??)</th>
                        <th className="p-2 text-center hidden md:table-cell">Gi???m gi??</th>
                        <th className="p-2 text-left hidden md:table-cell">????n v???</th>
                        <th className="p-2 text-left hidden md:table-cell">Ng??y th??m</th>
                        <th className="p-2 text-center hidden md:table-cell">S??? l?????ng</th>
                        <th className="p-2 text-center w-16"></th>
                        <th className="p-2 text-center w-16"></th>
                    </tr>
                </thead>
                <tbody>
                    {products?.DanhSach?.map(item => {
                        return (
                            <tr key={id + item.IDSanPham} className="odd:bg-slate-100 border">
                                <td className="p-2 hidden md:table-cell"><img className='object-contain h-24 mx-auto' src={item.HinhAnh} alt="book" /></td>
                                <td className="p-2">{item.TenSanPham}</td>
                                <td className="p-2">{item.TenDanhMuc}</td>
                                <td className="p-2">{item.TenTheLoai}</td>
                                <td className="p-2">{item.GiaBan}</td>
                                <td className="p-2 text-center hidden md:table-cell">{item.GiamGia}</td>
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
