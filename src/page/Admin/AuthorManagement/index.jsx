import clsx from 'clsx'
import { useId } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiFillDelete } from 'react-icons/ai'
import { BsPencilSquare } from 'react-icons/bs'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import Loading from '../../../components/Loading'
import axiosJWT from '../../../config/axiosJWT'
import { API } from '../../../constants/api'
import style from './style.module.scss'

function AuthorManagement() {
  const id = useId()
  const queryClient = useQueryClient()
  const [Author, setAuthor] = useState({})
  const [formUpdate, setFormUpdate] = useState(false)
  const [page, setPage] = useState(1)
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      TenTacGia: '', // của form add author
      DiaChi: '',
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
      TacGia: '', // của form update author
      DiaChiUpdate: '',
    },
  })
  const {
    data: authors,
    isLoading,
    isError,
  } = useQuery(
    ['authors', page],
    async () => {
      const result = await axiosJWT.get(`${API.AUTHOR}/pages`, {
        params: {
          p: page,
          s: 10,
        },
      })
      return result.data
    },
    { keepPreviousData: true }
  )
  const { mutateAsync: addAuthor } = useMutation(
    async (data) => {
      const result = await axiosJWT.post(API.AUTHOR, data)
      return result.data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('authors')
      },
    }
  )
  const { mutateAsync: updateAuthor } = useMutation(
    async (data) => {
      const result = await axiosJWT.put(`${API.AUTHOR}/${Author.IDTacGia}`, {
        TenTacGia: data.TacGia,
        DiaChi: data.DiaChiUpdate,
      })
      return result.data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('authors')
      },
    }
  )
  const { mutateAsync: deleteAuthor } = useMutation(
    async (idProduct) => {
      const result = await axiosJWT.delete(`${API.AUTHOR}/${idProduct}`)
      return result.data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('authors')
      },
    }
  )
  const nextPage = useCallback(() => {
    setPage((currentPage) =>
      currentPage >= authors.SoLuongTrang ? authors.SoLuongTrang : ++currentPage
    )
  }, [page, authors])

  const prevPage = useCallback(() => {
    setPage((currentPage) => (currentPage > 1 ? --currentPage : 1))
  }, [page])

  const firstPage = useCallback(() => {
    setPage(1)
  }, [])
  const lastPage = useCallback(() => {
    setPage(authors.SoLuongTrang)
  }, [authors])
  const changePage = useCallback(
    (e) => {
      const value = parseInt(e.target.value)
      if (value > 0 && value <= authors.SoLuongTrang) setPage(value)
    },
    [authors]
  )

  const showUpdateAuthor = useCallback((data) => {
    setValue('TacGia', data.TenTacGia)
    setValue('DiaChiUpdate', data.DiaChi)
    setAuthor(data)
    setFormUpdate(true)
  }, [])

  const handleAddAuthor = useCallback((data) => {
    if (window.confirm('Bạn chắc chắn là muốn thêm tác giả này chứ'))
      addAuthor(data)
        .then(() => {
          window.alert('Thêm tác giả thành công')
          reset({ TenTacGia: '', DiaChi: '' })
        })
        .catch((err) => {
          console.log(err)
          window.alert('Thêm tác giả thất bại')
        })
  }, [])

  const handleUpdateAuthor = useCallback((data) => {
    if (window.confirm('Bạn chắc chắn là muốn thay đổi tác giả này chứ'))
      updateAuthor(data)
        .then(() => {
          window.alert('Thay đổi tác giả thành công')
          setFormUpdate(false)
        })
        .catch((err) => {
          console.log(err)
          window.alert('Thay đổi tác giả thất bại')
        })
  }, [])
  const handleDeleteAuthor = useCallback((idAuthor) => {
    if (window.confirm('Bạn chắc chắn là muốn xóa tác giả này chứ'))
      deleteAuthor(idAuthor)
        .then(() => {
          window.alert('Xóa tác giả thành công')
        })
        .catch((err) => {
          console.log(err)
          window.alert('Xóa tác giả thất bại')
        })
  }, [])

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <h1>Không thể tải được dữ liệu 😥</h1>
  }
  return (
    <>
      <div className="flex space-x-2">
        <h2 className="text-xl font-semibold">Tác giả ✨</h2>
      </div>

      <div className="py-2 space-y-1">
        <div className="flex">
          <form onSubmit={handleSubmit(handleAddAuthor)} className="flex space-x-3">
            <input
              {...register('TenTacGia', { required: true })}
              placeholder="Tên tác giả..."
              type="text"
              className={clsx(
                errors['TenTacGia'] && 'border-red-600',
                'focus:outline-none rounded-sm border px-2 py-1 w-28 sm:w-auto'
              )}
            />
            <input
              {...register('DiaChi', { required: true })}
              placeholder="Địa chỉ..."
              type="text"
              className={clsx(
                errors['DiaChi'] && 'border-red-600',
                'focus:outline-none rounded-sm border px-2 py-1 w-28 sm:w-auto'
              )}
            />
            <button className="px-3 py-1 bg-orange-600 rounded-sm text-white text-sm hover:bg-orange-500 transition-colors ml-auto">
              Thêm
            </button>
          </form>
        </div>

        <div className="flex justify-end space-x-2 py-1">
          <div className="px-2 border rounded-sm cursor-pointer">{authors.TongTacGia} mục</div>
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
            />{' '}
            &#47; {authors?.SoLuongTrang}
          </div>
          <div className="px-2 border rounded-sm cursor-pointer" onClick={nextPage}>
            &#62;
          </div>
          <div className="px-2 border rounded-sm cursor-pointer" onClick={lastPage}>
            &#187;
          </div>
        </div>
      </div>
      <div className="overflow-auto">
        <table className="border-collapse border rounded-sm w-full bg-white">
          <thead>
            <tr className="border bg-slate-800 text-slate-200">
              <th className="p-2 text-left min-w-[15rem]">Tên tác giả</th>
              <th className="p-2 text-left">Địa chỉ</th>
              <th className="p-2 text-center w-16"></th>
              <th className="p-2 text-center w-16"></th>
            </tr>
          </thead>
          <tbody className="font-medium text-slate-700">
            {authors &&
              authors.DanhSach.map((item) => (
                <tr key={id + item.IDTacGia} className="odd:bg-slate-100 border">
                  <td className="p-2">{item.TenTacGia}</td>
                  <td className="p-2 min-w-[20rem]">{item.DiaChi}</td>
                  <td className="p-2 text-indigo-500 font-semibold w-16 align-middle">
                    <span className="w-full">
                      <BsPencilSquare
                        onClick={() => showUpdateAuthor(item)}
                        size={20}
                        className="cursor-pointer mx-auto"
                      />
                    </span>
                  </td>
                  <td className="p-2 text-red-500 font-semibold w-16 align-middle">
                    <span className="w-full">
                      <AiFillDelete
                        onClick={() => handleDeleteAuthor(item.IDTacGia)}
                        size={20}
                        className="cursor-pointer mx-auto"
                      />
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>

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
            onSubmit={handleSubmitUpdate(handleUpdateAuthor)}
            className="w-full flex flex-col py-4 px-4 sm:p-6"
          >
            <span className="w-full flex text-slate-600 lg:text-lg">Thông tin tác giả</span>
            <div className="flex flex-col w-full justify-center h-full sm:px-10">
              <div className="flex w-full py-2">
                <div className="w-1/3 lg:w-4/12 items-center flex">
                  <span className="flex text-sm lg:text-base font-semibold text-slate-800">
                    Tên Tác Giả
                  </span>
                </div>

                <div className="w-2/3 lg:w-8/12 flex">
                  <input
                    {...registerUpdate('TacGia')}
                    className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base"
                    type="text"
                    placeholder="Tên danh mục"
                  />
                </div>
              </div>
              <div className="flex w-full py-2">
                <div className="w-1/3 lg:w-4/12 items-center flex">
                  <span className="flex text-sm lg:text-base font-semibold text-slate-800">
                    Địa Chỉ
                  </span>
                </div>

                <div className="w-2/3 lg:w-8/12 flex">
                  <input
                    {...registerUpdate('DiaChiUpdate')}
                    className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base"
                    type="text"
                    placeholder="Địa chỉ"
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
                  Trở lại
                </button>
                <button
                  type="submit"
                  className="py-2 px-3 bg-slate-700 hover:bg-slate-500 shadow-sm border transition rounded-sm text-white"
                >
                  Cập nhật
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default AuthorManagement
