import { useMemo, useState } from 'react'
import { useQuery } from 'react-query'
import BarChart from '../../../components/BarChart'
import Loading from '../../../components/Loading'
import axiosJWT from '../../../config/axiosJWT'
import { API } from '../../../constants/api'
import { useTranslation } from 'react-i18next'

function ProductStatistics() {
  const { t } = useTranslation()
  const {
    data: products,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['products statistics'],
    queryFn: async () => {
      const result = await axiosJWT.get(API.STATISTIC_TOP_TEN_BEST_SELLER_PERDAY)
      return result.data
    },
    keepPreviousData: true,
  })

  const productChart = useMemo(() => {
    const labelsList = new Array(10).fill('')
    products?.forEach((value, index) => {
      labelsList[index] = value.TenSanPham
    })
    return {
      labels: labelsList,
      datasets: [
        {
          label: t('Số lượng sản phẩm bán ra'),
          data: products?.map((data) => data.soluong),
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(255, 159, 64, 0.2)',
            'rgba(255, 205, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(201, 203, 207, 0.2)',
          ],
          borderColor: [
            'rgb(255, 99, 132)',
            'rgb(255, 159, 64)',
            'rgb(255, 205, 86)',
            'rgb(75, 192, 192)',
            'rgb(54, 162, 235)',
            'rgb(153, 102, 255)',
            'rgb(201, 203, 207)',
          ],
          borderWidth: 1,
        },
      ],
    }
  }, [products])

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <div>{t(`Đã có lỗi khi lấy dữ liệu `)}😥</div>
  }
  return (
    <>
      <h2 className="text-xl font-semibold">{t(`Thống kê sản phẩm`)} ✨</h2>

      <div className="flex my-4">
        <div className="flex ml-auto space-x-3">
          <select className="rounded-sm border cursor-pointer">
            <option value="">{t(`Chọn danh mục`)}</option>
            <option value="">{t(`Sách giáo khoa`)}</option>
            <option value="">{t(`Sách kinh tế`)}</option>
            <option value="">{t(`Khoa học viễn tưởng`)}</option>
            <option value="">{t(`Truyện tranh`)}</option>
          </select>
          <select className="rounded-sm border cursor-pointer">
            <option value="">{t(`Thể loại`)}</option>
            <option value="">{t(`Comic`)}</option>
            <option value="">{t(`Hành động`)}</option>
            <option value="">{t(`Trinh thám`)}</option>
          </select>
          <select className="rounded-sm border cursor-pointer">
            <option value="">{t(`Tất cả các ngày`)}</option>
            <option value=""></option>
            <option value=""></option>
            <option value=""></option>
          </select>
        </div>
      </div>

      <div className="h-500 bg-white p-6 rounded-sm shadow-sm">
        <BarChart chartData={productChart} />
      </div>
    </>
  )
}

export default ProductStatistics
