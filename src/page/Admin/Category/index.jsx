import clsx from "clsx";
import { useId } from "react";
import { useCallback } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillDelete } from "react-icons/ai";
import { BsPencilSquare } from "react-icons/bs";
import { TbListDetails } from "react-icons/tb";
import { useMutation, useQuery, useQueryClient } from "react-query";
import Loading from "../../../components/Loading";
import axiosJWT from "../../../config/axiosJWT";
import { API } from "../../../constants/api";
import style from './style.module.scss';


function Category() {
    const id = useId();
    const queryClient = useQueryClient();
    const [page, setPage] = useState(1);
    const { register, formState: { errors }, handleSubmit, reset, watch } = useForm({
        mode: "onBlur",
        defaultValues: {
            TenDanhMuc: ""
        }
    });
    const { data: categories, isLoading, isError } = useQuery(['categories', page], async () => {
        const result = await axiosJWT.get(API.GET_LIST_CATEGORY_IN_PAGE, {
            params: {
                p: page,
                s: 5
            }
        });
        console.log(result.data);
        return result.data;
    }, { keepPreviousData: true, staleTime: 5000 });
    const { mutateAsync: addCategory } = useMutation(async (idProduct) => {
        const result = await axiosJWT.post(`${API.MANAGE_CATEGORY}/${idProduct}`)
        return result.data;
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries("categories")
        }
    })
    const { mutateAsync: updateCategory } = useMutation(async (idProduct) => {
        const result = await axiosJWT.put(`${API.MANAGE_CATEGORY}/${idProduct}`)
        return result.data;
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries("categories")
        }
    })
    const { mutateAsync: deleteCategory } = useMutation(async (idProduct) => {
        const result = await axiosJWT.delete(`${API.MANAGE_CATEGORY}/${idProduct}`)
        return result.data;
    }, {
        onSuccess: () => {
            queryClient.invalidateQueries("categories")
        }
    })
    const nextPage = useCallback(() => {
        setPage(currentPage => currentPage >= categories.SoLuongTrang ? categories.SoLuongTrang : ++currentPage);
    }, [page, categories]);

    const prevPage = useCallback(() => {
        setPage(currentPage => currentPage > 1 ? --currentPage : 1);
    }, [page]);

    const firstPage = useCallback(() => {
        setPage(1);
    }, []);
    const lastPage = useCallback(() => {
        setPage(categories.SoLuongTrang);
    }, [categories]);
    const changePage = useCallback((e) => {
        const value = parseInt(e.target.value);
        if (value > 0 && value <= categories.SoLuongTrang)
            setPage(value);
    }, [categories])

    const handleAddCategory = useCallback((data) => {
        if (window.confirm("Bạn chắc chắn là muốn thêm danh mục này chứ"))
            addCategory(data)
                .then(() => {
                    window.alert("Thêm danh mục thành công");
                })
                .catch(err => {
                    console.log(err);
                    window.alert("Thêm danh mục thất bại");
                })
    }, [])

    const handleUpdateCategory = useCallback((data) => {
        if (window.confirm("Bạn chắc chắn là muốn thay đổi danh mục này chứ"))
            addCategory(data)
                .then(() => {
                    window.alert("Thay đổi danh mục thành công");
                })
                .catch(err => {
                    console.log(err);
                    window.alert("Thay đổi danh mục thất bại");
                })
    }, [])
    const handleDeleteCategory = useCallback((idCategory) => {
        if (window.confirm("Bạn chắc chắn là muốn thêm danh mục này chứ"))
            deleteCategory(idCategory)
                .then(() => {
                    window.alert("Thêm danh mục thành công");
                })
                .catch(err => {
                    console.log(err);
                    window.alert("Thêm danh mục thất bại");
                })
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
                <h2 className="text-xl font-semibold">Danh mục ✨</h2>
            </div>

            <div className="py-2 space-y-1">
                <div className="hidden md:flex">
                    <div className="flex space-x-3">
                        <input type="text" className="rounded-sm border" />
                        <button onClick={handleAddCategory} className="px-3 py-1 bg-orange-600 rounded-sm text-white text-sm hover:bg-orange-500 transition-colors ml-auto">Thêm</button>
                    </div>
                </div>

                <div className="flex justify-end space-x-2 py-1">
                    <div className='px-2 border rounded-sm cursor-pointer'>{categories.TongDanhMuc} mục</div>
                    <div className='px-2 border rounded-sm cursor-pointer' onClick={firstPage}>&#171;</div>
                    <div className='px-2 border rounded-sm cursor-pointer' onClick={prevPage}>&#60;</div>
                    <div><input type="number" className={clsx(style["none-spin"], 'px-2 border rounded-sm cursor-pointer w-14 text-center')} value={page} onChange={(e) => changePage(e)} /> &#47; {categories?.SoLuongTrang}</div>
                    <div className='px-2 border rounded-sm cursor-pointer' onClick={nextPage}>&#62;</div>
                    <div className='px-2 border rounded-sm cursor-pointer' onClick={lastPage}>&#187;</div>
                </div>
            </div>


            <table className="border-collapse border rounded-sm w-full bg-white">
                <thead>
                    <tr className="border bg-slate-800 text-slate-200">
                        <th className="p-2 text-left">Danh mục</th>
                        <th className="p-2 text-center w-16"></th>
                        <th className="p-2 text-center w-16"></th>
                        <th className="p-2 text-center w-16"></th>
                    </tr>
                </thead>
                <tbody>
                    {categories && categories?.DanhSach.map((item, index) => (
                        <tr key={id + index} className="odd:bg-slate-100 border">
                            <td className="p-2">{item.TenDanhMuc}</td>
                            <td className="p-2 text-indigo-500 font-semibold w-16 align-middle"><span className="w-full"><TbListDetails size={20} className='cursor-pointer mx-auto' /></span></td>
                            <td className="p-2 text-indigo-500 font-semibold w-16 align-middle"><span className="w-full"><BsPencilSquare onClick={() => handleUpdateCategory(item)} size={20} className='cursor-pointer mx-auto' /></span></td>
                            <td className="p-2 text-red-500 font-semibold w-16 align-middle"><span className="w-full"><AiFillDelete onClick={() => handleDeleteCategory(item.IDDanhMuc)} size={20} className='cursor-pointer mx-auto' /></span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Category;
