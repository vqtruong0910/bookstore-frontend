import { useForm } from 'react-hook-form'
import Textfield from '../../../components/Textfield'
import DropFile from '../../../components/DropFile'
import { VALIDATE } from '../../../constants/validate'
import clsx from 'clsx'
import { useCallback, useEffect } from 'react'
import { useState } from 'react'
import style from './style.module.scss'
import PreviewImage from '../../../components/PreviewImage'
import MenuSelect from '../../../components/MenuSelect'
import { useQueries, useQuery } from 'react-query'
import axiosJWT from '../../../config/axiosJWT'
import { API } from '../../../constants/api'
import Loading from '../../../components/Loading'
import { useLocation } from 'react-router-dom'
import LoadingSmaller from '../../../assets/svg/LoadingSmaller'
import imageAvailable from '../../../assets/images/no-image-found.b1edc35f0fa6.png'

function UpdateProduct() {
  const { state } = useLocation()
  const [fileImage, setFileImage] = useState()
  const [loadingState, setLoadingState] = useState(false)
  const result = useQueries([
    {
      queryKey: ['category'],
      queryFn: async () => {
        const result = await axiosJWT.get(API.GET_LIST_ALL_CATEGORY)
        return result.data
      },
      keepPreviousData: true,
      staleTime: 1000,
    },
    {
      queryKey: ['publishing company'],
      queryFn: async () => {
        const result = await axiosJWT.get(API.GET_LIST_ALL_PUBLISHING)
        return result.data
      },
      keepPreviousData: true,
      staleTime: 1000,
    },
    {
      queryKey: ['authors'],
      queryFn: async () => {
        const result = await axiosJWT.get(API.AUTHOR)
        return result.data
      },
      keepPreviousData: true,
      staleTime: 1000,
    },
  ])
  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
    setValue,
    trigger,
    watch,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      TenSanPham: state?.TenSanPham ? state?.TenSanPham : '',
      TomTatND: state?.TomTatND ? state?.TomTatND : '',
      IDDanhMuc: state?.IDDanhMuc ? state?.IDDanhMuc : '',
      IDTheLoai: state?.IDTheLoai ? state?.IDTheLoai : '',
      IDNhaXuatBan: state?.IDNhaXuatBan ? state?.IDNhaXuatBan : '',
      GiaBan: state?.GiaBan ? state?.GiaBan : '',
      IDTacGia: state?.IDTacGia ? state?.IDTacGia : '',
      GiamGia: state?.GiamGia ? state?.GiamGia : '0',
      SoTrang: state?.SoTrang ? state?.SoTrang : '',
      SoLuongConLai: state?.SoLuongConLai ? state?.SoLuongConLai : '',
      DonViTinh: state?.DonViTinh ? state?.DonViTinh : '',
      HinhAnh: state?.HinhAnh ? state?.HinhAnh : '',
    },
  })

  const {
    data: typeOfBook,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['type of product', watch('IDDanhMuc')],
    queryFn: async () => {
      if (watch('IDDanhMuc')) {
        const result = await axiosJWT.get(`${API.GET_LIST_ALL_TYPEOF_BOOK}/${watch('IDDanhMuc')}`)
        return result.data
      }
      return []
    },
    keepPreviousData: true,
  })

  const onChangeImage = useCallback(async (e) => {
    const fileImageFolder = e.target.files[0]
    if (fileImageFolder) {
      setValue('HinhAnh', fileImageFolder)
      if (await trigger('HinhAnh')) {
        setFileImage(URL.createObjectURL(fileImageFolder))
        // const fileReader = new FileReader()
        // fileReader.readAsDataURL(fileImageFolder)
        // fileReader.onloadend = () => {
        //   console.log(fileReader.result)
        //   setFileImage(fileReader.result)
        // }
      } else setFileImage(null)
    }
  }, [])
  const onSubmit = useCallback(async (data) => {
    const { IDDanhMuc, ...rest } = data
    try {
      setLoadingState(true)
      await axiosJWT.put(`${API.CREATE_PRODUCT}/${state?.IDSanPham}`, rest, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      window.alert('Cập nhật sản phẩm thành công')
    } catch (error) {
      console.log(error)
      window.alert('Cập nhật sản phẩm thất bại')
    } finally {
      setLoadingState(false)
    }
  }, [])
  const handleImageError = useCallback((e) => {
    e.target.src = imageAvailable
  }, [])

  useEffect(() => {
    if (state?.HinhAnh !== null) {
      setFileImage(state?.HinhAnh)
    }
  }, [])

  for (const value of result) {
    if (value.isLoading) {
      return <Loading />
    }
    if (value.isError) {
      return <div>Đã có lỗi khi lấy dữ liệu 😥</div>
    }
  }

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <div>Đã có lỗi khi lấy dữ liệu 😥</div>
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <h2 className="text-xl font-semibold">Cập Nhật Sản phẩm</h2>
        {loadingState ? (
          <button
            className="w-28 px-3 bg-orange-600 rounded-sm text-white text-sm hover:bg-orange-500 transition-colors ml-auto"
            disabled
          >
            <LoadingSmaller /> Loading...
          </button>
        ) : (
          <button className="w-28 px-3 py-1 bg-orange-600 rounded-sm text-white text-sm hover:bg-orange-500 transition-colors ml-auto">
            Xác nhận
          </button>
        )}
      </div>
      <div className="grid sm:grid-cols-5 grid-cols-1 grid-flow-dense py-2 gap-4">
        <div className="col-span-1 sm:col-span-3">
          <span className="font-medium text-slate-700">Tên sản phẩm</span>
          <Textfield
            rounded="rounded-sm"
            name="TenSanPham"
            control={control}
            rules={VALIDATE.name}
            placeholder="Truyện cười Việt Nam..."
          />
        </div>
        <div className="col-span-1 sm:col-span-3 row-span-2">
          <span className="font-medium text-slate-700">Nội dung</span>
          <textarea
            {...register('TomTatND', VALIDATE.content)}
            className={clsx(
              errors.TomTatND && 'border-red-600',
              style['hide-scrollbar'],
              'outline-none p-4 w-full border resize-none overflow-scroll'
            )}
            rows="6"
            placeholder="Mô tả sản phẩm..."
          ></textarea>
          {errors.TomTatND && (
            <span className="px-2 italic text-sm text-red-500">{errors.TomTatND.message}*</span>
          )}
        </div>
        <div className="col-span-1 sm:col-span-3">
          <span className="font-medium text-slate-700">Tác giả</span>
          <MenuSelect
            name="IDTacGia"
            control={control}
            rules={VALIDATE.author}
            data={result[2].data}
          />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <span className="font-medium text-slate-700">Danh mục</span>
          <MenuSelect
            name="IDDanhMuc"
            control={control}
            rules={VALIDATE.category}
            data={result[0].data}
          />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <span className="font-medium text-slate-700">Thể loại</span>
          <MenuSelect
            name="IDTheLoai"
            control={control}
            rules={VALIDATE.typeof}
            data={typeOfBook}
          />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <span className="font-medium text-slate-700">Nhà xuất bản</span>
          <MenuSelect
            name="IDNhaXuatBan"
            control={control}
            rules={VALIDATE.publishing}
            data={result[1].data}
          />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <span className="font-medium text-slate-700">Đơn vị tính</span>
          <Textfield
            rounded="rounded-sm"
            name="DonViTinh"
            control={control}
            rules={VALIDATE.unit}
            placeholder="VD: Cuốn"
          />
        </div>
        <div className="col-span-1 sm:col-span-3 grid grid-cols-2 gap-4">
          <div className="col-span-2 sm:col-span-1">
            <span className="font-medium text-slate-700">Giá bán</span>
            <Textfield
              type="number"
              rounded="rounded-sm"
              name="GiaBan"
              control={control}
              rules={VALIDATE.price}
              placeholder="120000"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="font-medium text-slate-700">Phần trăm giảm giá</span>
            <Textfield
              type="number"
              rounded="rounded-sm"
              name="GiamGia"
              control={control}
              rules={VALIDATE.discount}
              placeholder="10"
            />
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 grid grid-cols-2 gap-4">
          <div className="col-span-2 sm:col-span-1">
            <span className="font-medium text-slate-700">Số lượng</span>
            <Textfield
              type="number"
              rounded="rounded-sm"
              name="SoLuongConLai"
              control={control}
              rules={VALIDATE.count}
              placeholder="120"
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="font-medium text-slate-700">Số Trang</span>
            <Textfield
              type="number"
              rounded="rounded-sm"
              name="SoTrang"
              control={control}
              rules={VALIDATE.numberPage}
              placeholder="10"
            />
          </div>
        </div>
        <div className="col-span-1 sm:col-span-3 ">
          <span className="font-medium text-slate-700">Hình ảnh</span>
          <DropFile
            name="HinhAnh"
            control={control}
            rules={VALIDATE.image}
            onChangeImage={onChangeImage}
          />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <span className="font-medium text-slate-700">Xem Trước</span>
          <PreviewImage fileImage={fileImage} handleImageError={handleImageError} />
        </div>
      </div>
    </form>
  )
}

export default UpdateProduct
