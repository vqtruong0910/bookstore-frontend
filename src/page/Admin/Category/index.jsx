import clsx from 'clsx'
import { useId } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiFillDelete } from 'react-icons/ai'
import { BsPencilSquare } from 'react-icons/bs'
import { TbListDetails } from 'react-icons/tb'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useNavigate } from 'react-router-dom'
import Loading from '../../../components/Loading'
import axiosJWT from '../../../config/axiosJWT'
import { API } from '../../../constants/api'
import { PATH } from '../../../constants/path'
import style from './style.module.scss'
import { useTranslation } from 'react-i18next'

function Category() {
  const { t } = useTranslation()
  const id = useId()
  const queryClient = useQueryClient()
  const [category, setCategory] = useState({})
  const [formUpdate, setFormUpdate] = useState(false)
  const [page, setPage] = useState(1)
  const navigate = useNavigate()
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      TenDanhMuc: '',
    },
  })
  const {
    register: registerUpdate,
    formState: { errors: errorsUpdate },
    handleSubmit: handleSubmitUpdate,
    reset: resetUpdate,
    setValue,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      DanhMuc: '',
    },
  })
  const {
    data: categories,
    isLoading,
    isError,
  } = useQuery(
    ['categories', page],
    async () => {
      const result = await axiosJWT.get(API.GET_LIST_CATEGORY_IN_PAGE, {
        params: {
          p: page,
          s: 10,
        },
      })
      return result.data
    },
    { keepPreviousData: true }
  )
  const { mutateAsync: addCategory } = useMutation(
    async (data) => {
      const result = await axiosJWT.post(API.MANAGE_CATEGORY, data)
      return result.data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('categories')
      },
    }
  )
  const { mutateAsync: updateCategory } = useMutation(
    async (data) => {
      const result = await axiosJWT.put(`${API.MANAGE_CATEGORY}/${category.IDDanhMuc}`, {
        TenDanhMuc: data.DanhMuc,
      })
      return result.data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('categories')
      },
    }
  )
  const { mutateAsync: deleteCategory } = useMutation(
    async (idProduct) => {
      const result = await axiosJWT.delete(`${API.MANAGE_CATEGORY}/${idProduct}`)
      return result.data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('categories')
      },
    }
  )
  const nextPage = useCallback(() => {
    setPage((currentPage) =>
      currentPage >= categories.SoLuongTrang ? categories.SoLuongTrang : ++currentPage
    )
  }, [page, categories])

  const prevPage = useCallback(() => {
    setPage((currentPage) => (currentPage > 1 ? --currentPage : 1))
  }, [page])

  const firstPage = useCallback(() => {
    setPage(1)
  }, [])
  const lastPage = useCallback(() => {
    setPage(categories.SoLuongTrang)
  }, [categories])
  const changePage = useCallback(
    (e) => {
      const value = parseInt(e.target.value)
      if (value > 0 && value <= categories.SoLuongTrang) setPage(value)
    },
    [categories]
  )

  const showUpdateCategory = useCallback((data) => {
    setValue('DanhMuc', data.TenDanhMuc)
    setCategory(data)
    setFormUpdate(true)
  }, [])

  const transferTypeOfBooks = useCallback((idCategory) => {
    navigate(`${PATH.admin.typeof_transfer_page}/${idCategory}`)
  }, [])

  const handleAddCategory = useCallback((data) => {
    if (window.confirm(t('Bạn chắc chắn là muốn thêm danh mục này chứ ?')))
      addCategory(data)
        .then(() => {
          window.alert(t('Thêm danh mục thành công'))
          reset({ TenDanhMuc: '' })
        })
        .catch((err) => {
          console.log(err)
          window.alert(t('Thêm danh mục thất bại'))
        })
  }, [])

  const handleUpdateCategory = useCallback((data) => {
    if (window.confirm(t('Bạn chắc chắn là muốn cập nhật danh mục này chứ ?')))
      updateCategory(data)
        .then(() => {
          window.alert(t('Cập nhật danh mục thành công'))
          setFormUpdate(false)
        })
        .catch((err) => {
          console.log(err)
          window.alert(t('Cập nhật danh mục thất bại'))
        })
  }, [])
  const handleDeleteCategory = useCallback((idCategory) => {
    if (window.confirm(t('Bạn chắc chắn là muốn xóa danh mục này chứ ?')))
      deleteCategory(idCategory)
        .then(() => {
          window.alert(t('Xóa danh mục thành công'))
        })
        .catch((err) => {
          console.log(err)
          window.alert(t('Xóa danh mục thất bại'))
        })
  }, [])

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <h1>{t(`Không thể tải được dữ liệu `)}😥</h1>
  }

  return (
    <>
      <div className="flex space-x-2">
        <h2 className="text-xl font-semibold">{t(`Danh mục`)} ✨</h2>
      </div>

      <div className="py-2 space-y-1">
        <div className="flex">
          <form onSubmit={handleSubmit(handleAddCategory)} className="flex space-x-3">
            <input
              {...register('TenDanhMuc', { required: true })}
              placeholder={t('Tên danh mục...')}
              type="text"
              className={clsx(
                errors['TenDanhMuc'] && 'border-red-600',
                'focus:outline-none rounded-sm border px-2 py-1'
              )}
            />
            <button className="px-3 py-1 bg-orange-600 rounded-sm text-white text-sm hover:bg-orange-500 transition-colors ml-auto">
              {t(`Thêm`)}
            </button>
          </form>
        </div>

        <div className="flex justify-end space-x-2 py-1">
          <div className="px-2 border rounded-sm cursor-pointer">
            {categories.TongDanhMuc} {t(` mục`)}
          </div>
          <div className="px-2 border rounded-sm cursor-pointer" onClick={firstPage}>
            &#171;
          </div>
          <div className="px-2 border rounded-sm cursor-pointer" onClick={prevPage}>
            &#60;
          </div>
          <div>
            <input
              type="number"
              className={clsx(
                style['none-spin'],
                'px-2 border rounded-sm cursor-pointer w-14 text-center'
              )}
              value={page}
              onChange={(e) => changePage(e)}
            />
            &#47; {categories?.SoLuongTrang}
          </div>
          <div className="px-2 border rounded-sm cursor-pointer" onClick={nextPage}>
            &#62;
          </div>
          <div className="px-2 border rounded-sm cursor-pointer" onClick={lastPage}>
            &#187;
          </div>
        </div>
      </div>

      <table className="border-collapse border rounded-sm w-full bg-white">
        <thead>
          <tr className="border bg-slate-800 text-slate-200">
            <th className="p-2 text-left">{t(`Danh mục`)}</th>
            <th className="p-2 text-center w-16"></th>
            <th className="p-2 text-center w-16"></th>
            <th className="p-2 text-center w-16"></th>
          </tr>
        </thead>
        <tbody className="font-medium text-slate-700">
          {categories &&
            categories?.DanhSach.map((item, index) => (
              <tr key={id + item.IDDanhMuc} className="odd:bg-slate-100 border">
                <td className="p-2">{item.TenDanhMuc}</td>
                <td className="p-2 text-indigo-500 font-semibold w-16 align-middle">
                  <span className="w-full">
                    <TbListDetails
                      onClick={() => transferTypeOfBooks(item.IDDanhMuc)}
                      size={20}
                      className="cursor-pointer mx-auto"
                    />
                  </span>
                </td>
                <td className="p-2 text-indigo-500 font-semibold w-16 align-middle">
                  <span className="w-full">
                    <BsPencilSquare
                      onClick={() => showUpdateCategory(item)}
                      size={20}
                      className="cursor-pointer mx-auto"
                    />
                  </span>
                </td>
                <td className="p-2 text-red-500 font-semibold w-16 align-middle">
                  <span className="w-full">
                    <AiFillDelete
                      onClick={() => handleDeleteCategory(item.IDDanhMuc)}
                      size={20}
                      className="cursor-pointer mx-auto"
                    />
                  </span>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      <div
        className={clsx(
          formUpdate ? 'z-30' : '-z-30',
          'fixed flex justify-center items-center inset-0 bg-slate-900 bg-opacity-20'
        )}
      >
        <div
          className={clsx(
            !formUpdate ? 'scale-90 opacity-0' : 'scale-100 opacity-100',
            style['hide-scrollbar'],
            'flex w-full flex-col bg-white rounded-sm overflow-y-scroll sm:w-1/2 max-h-screen transition-all duration-200'
          )}
        >
          <form
            onSubmit={handleSubmitUpdate(handleUpdateCategory)}
            className="w-full flex flex-col py-4 px-4 sm:p-6"
          >
            <span className="w-full flex text-slate-600 lg:text-lg">{t(`Thông tin danh mục`)}</span>
            <div className="flex flex-col w-full justify-center h-full sm:px-10">
              <div className="flex w-full py-2">
                <div className="w-1/3 lg:w-4/12 items-center flex">
                  <span className="flex text-sm lg:text-base font-semibold text-slate-800">
                    {t(`Tên danh mục`)}
                  </span>
                </div>

                <div className="w-2/3 lg:w-8/12 flex">
                  <input
                    {...registerUpdate('DanhMuc')}
                    className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base"
                    type="text"
                    placeholder={t('Tên danh mục')}
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex pt-8">
              <div className="ml-auto space-x-3">
                <button
                  type="button"
                  onClick={() => setFormUpdate(false)}
                  className="py-2 px-3 text-slate-700 hover:bg-slate-100 shadow-sm border transition rounded-sm"
                >
                  {t(`Trở lại`)}
                </button>
                <button
                  type="submit"
                  className="py-2 px-3 bg-slate-700 hover:bg-slate-500 shadow-sm border transition rounded-sm text-white"
                >
                  {t(`Cập nhật`)}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default Category
