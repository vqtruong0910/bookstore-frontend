import { useForm } from 'react-hook-form'
import Textfield from '../../../components/Textfield'
import DropFile from '../../../components/DropFile'
import { VALIDATE } from '../../../constants/validate'
import clsx from 'clsx'
import { useCallback } from 'react'
import { useState } from 'react'
import style from './style.module.scss'
import PreviewImage from '../../../components/PreviewImage'
import MenuSelect from '../../../components/MenuSelect'
import { useQueries, useQuery } from 'react-query'
import axiosJWT from '../../../config/axiosJWT'
import { API } from '../../../constants/api'
import Loading from '../../../components/Loading'
import LoadingSmaller from '../../../assets/svg/LoadingSmaller'
import { useTranslation } from 'react-i18next'

function AddProduct() {
  const { t } = useTranslation()
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
    reset,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      TenSanPham: '',
      TomTatND: '',
      IDDanhMuc: '',
      IDTheLoai: '',
      IDNhaXuatBan: '',
      GiaBan: '',
      IDTacGia: '',
      GiamGia: '0',
      SoTrang: '',
      SoLuongConLai: '',
      DonViTinh: 'Quyển',
      HinhAnh: '',
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
    staleTime: 5000,
  })

  const [fileImage, setFileImage] = useState()

  const onChangeImage = useCallback(async (e) => {
    const fileImageFolder = e.target.files[0]
    if (fileImageFolder) {
      setValue('HinhAnh', fileImageFolder)
      if (await trigger('HinhAnh')) {
        const fileReader = new FileReader()
        fileReader.readAsDataURL(fileImageFolder)
        fileReader.onloadend = () => {
          setFileImage(fileReader.result)
        }
      } else setFileImage(null)
    }
  }, [])
  const onSubmit = useCallback(async (data) => {
    const { IDDanhMuc, ...rest } = data
    try {
      setLoadingState(true)
      const form = await axiosJWT.post(API.CREATE_PRODUCT, rest, {
        headers: { 'Content-Type': 'multipart/form-data' },
      })
      if (!form.error) {
        reset({
          TenSanPham: '',
          TomTatND: '',
          IDDanhMuc: '',
          IDTheLoai: '',
          IDNhaXuatBan: '',
          GiaBan: '',
          IDTacGia: '',
          GiamGia: '0',
          SoTrang: '',
          SoLuongConLai: '',
          DonViTinh: 'Quyển',
          HinhAnh: '',
        })
        setFileImage('')
        window.alert(t('Thêm sản phẩm thành công'))
      }
    } catch (error) {
      window.alert(t('Thêm sản phẩm thất bại'))
    } finally {
      setLoadingState(false)
    }
  }, [])

  for (const value of result) {
    if (value.isLoading) {
      return <Loading />
    }
    if (value.isError) {
      return <div>{t(`Đã có lỗi khi lấy dữ liệu `)}😥</div>
    }
  }
  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <div>{t(`Đã có lỗi khi lấy dữ liệu `)}😥</div>
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex">
        <h2 className="text-xl font-semibold">{t(`Thêm Sản Phẩm`)}</h2>
        {loadingState ? (
          <button
            className="w-28 px-3 bg-orange-600 rounded-sm text-white text-sm hover:bg-orange-500 transition-colors ml-auto"
            disabled
          >
            <LoadingSmaller /> {t(`Đang tải`)}...
          </button>
        ) : (
          <button className="w-28 px-3 py-1 bg-orange-600 rounded-sm text-white text-sm hover:bg-orange-500 transition-colors ml-auto">
            {t(`Xác nhận`)}
          </button>
        )}
      </div>
      <div className="grid sm:grid-cols-5 grid-cols-1 grid-flow-dense py-2 gap-4">
        <div className="col-span-1 sm:col-span-3">
          <span className="font-medium text-slate-700">{t(`Tên sản phẩm`)}</span>
          <Textfield
            rounded="rounded-sm"
            name="TenSanPham"
            control={control}
            rules={VALIDATE.name}
            placeholder={t('Tên sản phẩm...')}
          />
        </div>
        <div className="col-span-1 sm:col-span-3 row-span-2">
          <span className="font-medium text-slate-700">{t(`Nội dung`)}</span>
          <textarea
            {...register('TomTatND', VALIDATE.content)}
            className={clsx(
              errors.TomTatND && 'border-red-600',
              style['hide-scrollbar'],
              'outline-none p-4 w-full border resize-none overflow-scroll'
            )}
            rows="6"
            placeholder={t('Mô tả sản phẩm...')}
          ></textarea>
          {errors.TomTatND && (
            <span className="px-2 italic text-sm text-red-500">{t(errors.TomTatND.message)}*</span>
          )}
        </div>
        <div className="col-span-1 sm:col-span-3">
          <span className="font-medium text-slate-700">{t(`Tác giả`)}</span>
          <MenuSelect
            name="IDTacGia"
            control={control}
            rules={VALIDATE.author}
            data={result[2].data}
          />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <span className="font-medium text-slate-700">{t(`Danh mục`)}</span>
          <MenuSelect
            name="IDDanhMuc"
            control={control}
            rules={VALIDATE.category}
            data={result[0].data}
          />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <span className="font-medium text-slate-700">{t(`Thể loại`)}</span>
          <MenuSelect
            name="IDTheLoai"
            control={control}
            rules={VALIDATE.typeof}
            data={typeOfBook}
          />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <span className="font-medium text-slate-700">{t(`Nhà xuất bản`)}</span>
          <MenuSelect
            name="IDNhaXuatBan"
            control={control}
            rules={VALIDATE.publishing}
            data={result[1].data}
          />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <span className="font-medium text-slate-700">{t(`Đơn vị tính`)}</span>
          <Textfield
            rounded="rounded-sm"
            name="DonViTinh"
            control={control}
            rules={VALIDATE.unit}
            placeholder={`${t('Ví dụ')}: Cuốn`}
          />
        </div>
        <div className="col-span-1 sm:col-span-3 grid grid-cols-2 gap-4">
          <div className="col-span-2 sm:col-span-1">
            <span className="font-medium text-slate-700">{t(`Giá bán`)}</span>
            <Textfield
              type="number"
              rounded="rounded-sm"
              name="GiaBan"
              control={control}
              rules={VALIDATE.price}
              placeholder={`${t('Ví dụ')}: 120000`}
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="font-medium text-slate-700">{t(`Phần trăm giảm giá`)}</span>
            <Textfield
              type="number"
              rounded="rounded-sm"
              name="GiamGia"
              control={control}
              rules={VALIDATE.discount}
              placeholder={`${t('Ví dụ')}: 10`}
            />
          </div>
        </div>
        <div className="col-span-1 sm:col-span-2 grid grid-cols-2 gap-4">
          <div className="col-span-2 sm:col-span-1">
            <span className="font-medium text-slate-700">{t(`Số lượng`)}</span>
            <Textfield
              type="number"
              rounded="rounded-sm"
              name="SoLuongConLai"
              control={control}
              rules={VALIDATE.count}
              placeholder={`${t('Ví dụ')}: 100`}
            />
          </div>
          <div className="col-span-2 sm:col-span-1">
            <span className="font-medium text-slate-700">{t(`Số trang`)}</span>
            <Textfield
              type="number"
              rounded="rounded-sm"
              name="SoTrang"
              control={control}
              rules={VALIDATE.numberPage}
              placeholder={`${t('Ví dụ')}: 100`}
            />
          </div>
        </div>
        <div className="col-span-1 sm:col-span-3 ">
          <span className="font-medium text-slate-700">{t(`Hình ảnh`)}</span>
          <DropFile
            name="HinhAnh"
            control={control}
            rules={VALIDATE.image}
            onChangeImage={onChangeImage}
          />
        </div>
        <div className="col-span-1 sm:col-span-2">
          <span className="font-medium text-slate-700">{t(`Xem Trước`)}</span>
          <PreviewImage fileImage={fileImage} />
        </div>
      </div>
    </form>
  )
}

export default AddProduct
