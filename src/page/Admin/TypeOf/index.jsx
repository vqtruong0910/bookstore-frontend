import clsx from 'clsx'
import { useId } from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { AiFillDelete } from 'react-icons/ai'
import { BsPencilSquare } from 'react-icons/bs'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { useParams } from 'react-router-dom'
import Loading from '../../../components/Loading'
import axiosJWT from '../../../config/axiosJWT'
import { API } from '../../../constants/api'
import style from './style.module.scss'

function TypeOf() {
  const uid = useId()
  const { id } = useParams()
  const queryClient = useQueryClient()
  const [typeOfBook, setTypeOfBook] = useState({})
  const [formUpdate, setFormUpdate] = useState(false)
  const {
    data: typeOfBooks,
    isLoading,
    isError,
  } = useQuery(
    ['typeofbooks'],
    async () => {
      if (!isNaN(id)) {
        try {
          const result = await axiosJWT.get(`${API.GET_TYPEOF_BOOK_IN_PAGE}/${id}`)
          console.log(result.data)
          return result.data
        } catch (error) {
          return []
        }
      }
      return []
    },
    { keepPreviousData: true, staleTime: 5000 }
  )

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      TenTheLoai: '',
    },
  })
  const {
    register: registerUpdate,
    handleSubmit: handleSubmitUpdate,
    setValue,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      TheLoai: '',
    },
  })

  const { mutateAsync: addTypeOfBook } = useMutation(
    async (data) => {
      const result = await axiosJWT.post(API.MANAGE_TYPEOF_BOOK, {
        TenTheLoai: data.TenTheLoai,
        IDDanhMuc: id,
      })
      return result.data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('typeofbooks')
      },
    }
  )
  const { mutateAsync: updateTypeOfBook } = useMutation(
    async (data) => {
      const result = await axiosJWT.put(`${API.MANAGE_TYPEOF_BOOK}/${typeOfBook.IDTheLoai}`, {
        TenTheLoai: data.TheLoai,
        IDDanhMuc: id,
      })
      return result.data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('typeofbooks')
      },
    }
  )
  const { mutateAsync: deleteTypeOfBook } = useMutation(
    async (idProduct) => {
      const result = await axiosJWT.delete(`${API.MANAGE_TYPEOF_BOOK}/${idProduct}`)
      return result.data
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries('typeofbooks')
      },
    }
  )

  const showUpdateTypeOfBook = useCallback((data) => {
    setValue('TheLoai', data.TenTheLoai)
    setTypeOfBook(data)
    setFormUpdate(true)
  }, [])

  const handleAddTypeOfBook = useCallback((data) => {
    if (window.confirm('Bạn chắc chắn là muốn thêm danh mục này chứ'))
      addTypeOfBook(data)
        .then(() => {
          window.alert('Thêm danh mục thành công')
          reset({ TenDanhMuc: '' })
        })
        .catch((err) => {
          console.log(err)
          window.alert('Thêm danh mục thất bại')
        })
  }, [])

  const handleUpdateTypeOfBook = useCallback((data) => {
    if (window.confirm('Bạn chắc chắn là muốn thay đổi danh mục này chứ'))
      updateTypeOfBook(data)
        .then(() => {
          window.alert('Thay đổi danh mục thành công')
          setFormUpdate(false)
        })
        .catch((err) => {
          console.log(err)
          window.alert('Thay đổi danh mục thất bại')
        })
  }, [])
  const handleDeleteTypeOfBook = useCallback((idTypeOfBook) => {
    if (window.confirm('Bạn chắc chắn là muốn xóa danh mục này chứ'))
      deleteTypeOfBook(idTypeOfBook)
        .then(() => {
          window.alert('Xóa danh mục thành công')
        })
        .catch((err) => {
          console.log(err)
          window.alert('Xóa danh mục thất bại')
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
        <h2 className="text-xl font-semibold">Loại sách ✨</h2>
      </div>

      <div className="py-2 space-y-1">
        <div className="flex">
          <form onSubmit={handleSubmit(handleAddTypeOfBook)} className="flex space-x-3">
            <input
              {...register('TenTheLoai', { required: true })}
              placeholder="Tên thể loại..."
              type="text"
              className={clsx(
                errors['TenTheLoai'] && 'border-red-600',
                'focus:outline-none rounded-sm border px-2 py-1'
              )}
            />
            <button className="px-3 py-1 bg-orange-600 rounded-sm text-white text-sm hover:bg-orange-500 transition-colors ml-auto">
              Thêm
            </button>
          </form>
        </div>
      </div>

      <table className="border-collapse border rounded-sm w-full bg-white">
        <thead>
          <tr className="border bg-slate-800 text-slate-200">
            <th className="p-2 text-left">Tên thể loại</th>
            <th className="p-2 text-center w-16"></th>
            <th className="p-2 text-center w-16"></th>
          </tr>
        </thead>
        <tbody className="font-medium text-slate-700">
          {typeOfBooks &&
            typeOfBooks?.map((item, index) => (
              <tr key={uid + index} className="odd:bg-slate-100 border">
                <td className="p-2">{item.TenTheLoai}</td>
                <td className="p-2 text-indigo-500 font-semibold w-16 align-middle">
                  <span className="w-full">
                    <BsPencilSquare
                      onClick={() => showUpdateTypeOfBook(item)}
                      size={20}
                      className="cursor-pointer mx-auto"
                    />
                  </span>
                </td>
                <td className="p-2 text-red-500 font-semibold w-16 align-middle">
                  <span className="w-full">
                    <AiFillDelete
                      onClick={() => handleDeleteTypeOfBook(item.IDTheLoai)}
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
            !formUpdate && 'scale-0',
            style['hide-scrollbar'],
            'flex w-full flex-col bg-white rounded-sm overflow-y-scroll sm:w-1/2 max-h-screen transition-all duration-200'
          )}
        >
          <form
            onSubmit={handleSubmitUpdate(handleUpdateTypeOfBook)}
            className="w-full flex flex-col py-4 px-4 sm:p-6"
          >
            <span className="w-full flex text-slate-600 lg:text-lg">Thông tin thể loại</span>
            <div className="flex flex-col w-full justify-center h-full sm:px-10">
              <div className="flex w-full py-2">
                <div className="w-1/3 lg:w-4/12 items-center flex">
                  <span className="flex text-sm lg:text-base font-semibold text-slate-800">
                    Tên Thể loại
                  </span>
                </div>

                <div className="w-2/3 lg:w-8/12 flex">
                  <input
                    {...registerUpdate('TheLoai')}
                    className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm lg:placeholder:text-base"
                    type="text"
                    placeholder="Tên thể loại"
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

export default TypeOf
