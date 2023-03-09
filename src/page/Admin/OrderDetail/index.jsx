import { useCallback } from 'react'
import { BsCardImage, BsPencilSquare } from 'react-icons/bs'
import { TbListDetails } from 'react-icons/tb'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Loading from '../../../components/Loading'
import axiosJWT from '../../../config/axiosJWT'
import { API } from '../../../constants/api'
import imageAvailable from '../../../assets/images/no-image-found.b1edc35f0fa6.png'

function OrderDetail() {
  const { id } = useParams()
  const {
    data: orderDetail,
    isLoading,
    isError,
  } = useQuery(
    ['order_detail', id],
    async () => {
      if (!isNaN(id)) {
        try {
          const result = await axiosJWT.get(`${API.ORDER_DETAIL}/${id}`)
          console.log(result.data)
          return result.data
        } catch (error) {
          return []
        }
      }
      return []
    },
    { keepPreviousData: true, staleTime: 1000 }
  )

  const handleImageError = useCallback((e) => {
    e.target.src = imageAvailable
  }, [])

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <h1>Không thể tải được dữ liệu 😥</h1>
  }
  return (
    <>
      <h2 className="text-xl font-semibold">Đơn hàng ✨</h2>
      <div className="overflow-x-auto">
        <table className="table-auto border-collapse border rounded-sm w-full bg-white">
          <thead>
            <tr className="border bg-slate-800 text-slate-200">
              <th className="p-2 w-24 min-w-[6rem]">
                <BsCardImage className="mx-auto w-full" />
              </th>
              <th className="p-2 text-left min-w-[8rem]">Tên sản phẩm</th>
              <th className="p-2 text-left min-w-[6rem]">Danh mục</th>
              <th className="p-2 text-center min-w-[6rem]">Thể loại</th>
              <th className="p-2 text-left min-w-[6rem]">Số lượng</th>
              <th className="p-2 text-left min-w-[6rem]">Giá Bán</th>
              <th className="p-2 text-left min-w-[6rem]">Tổng tiền</th>
            </tr>
          </thead>
          <tbody className="font-medium text-slate-700">
            {orderDetail?.map((item, index) => {
              return (
                <tr key={index} className="odd:bg-slate-100 border">
                  <td className="p-2 w-24 h-24">
                    <img
                      className="object-contain w-24 h-full mx-auto"
                      src={item.HinhAnh}
                      alt="book"
                      onError={(e) => handleImageError(e)}
                    />
                  </td>
                  <td className="p-2">{item.TenSanPham}</td>
                  <td className="p-2">{item.TenDanhMuc}</td>
                  <td className="p-2">{item.TenTheLoai}</td>
                  <td className="p-2">{item.SoLuong}</td>
                  <td className="p-2 text-center">{item.GiaBan}</td>
                  <td className="p-2">{item.Tong}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default OrderDetail
