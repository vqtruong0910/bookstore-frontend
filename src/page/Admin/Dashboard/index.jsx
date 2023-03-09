import { FaRegChartBar, FaChartPie, FaUsers } from 'react-icons/fa'
import LineChart from '../../../components/LineChart'
import icon1 from '../../../assets/svg/icon-01.svg'
import Loading from '../../../components/Loading'
import { useQueries } from 'react-query'
import { API } from '../../../constants/api'
import axiosJWT from '../../../config/axiosJWT'
import { DAY_CONFIG } from '../../../constants/day'
import { useMemo } from 'react'
import clsx from 'clsx'

function Dashboard() {
  const result = useQueries([
    {
      queryKey: ['users'],
      queryFn: async () => {
        const result = await axiosJWT.get(API.STATISTIC_USER_IN_WEEK)
        return result.data
      },
      keepPreviousData: true,
      staleTime: 5000,
    },
    {
      queryKey: ['revenue'],
      queryFn: async () => {
        const result = await axiosJWT.get(API.REVANUE_IN_WEEK)
        return result.data
      },
      keepPreviousData: true,
      staleTime: 5000,
    },
    {
      queryKey: ['orders'],
      queryFn: async () => {
        const result = await axiosJWT.get(API.AMOUNT_ORDER_IN_WEEK)
        return result.data
      },
      keepPreviousData: true,
      staleTime: 5000,
    },
    {
      queryKey: ['users every day'],
      queryFn: async () => {
        const result = await axiosJWT.get(API.STATISTIC_USER_EVERY_DAY_IN_WEEK)
        return result.data
      },
      keepPreviousData: true,
      staleTime: 5000,
    },
    {
      queryKey: ['orders every day'],
      queryFn: async () => {
        const result = await axiosJWT.get(API.STATISTIC_ORDER_EVERY_DAY_IN_WEEK)
        return result.data
      },
      keepPreviousData: true,
      staleTime: 5000,
    },
  ])
  const userData = useMemo(() => {
    const dataCount = [0, 0, 0, 0, 0, 0, 0]
    result[3]?.data?.forEach((value) => {
      const date = new Date(value.NgayDangKi)
      const getDayToDate = date.getDay()
      dataCount[getDayToDate] = value.soluong
    })
    return {
      labels: DAY_CONFIG,
      datasets: [
        {
          label: 'Số lượng',
          data: dataCount,
          // backgroundColor: [
          //     "#3730a3",
          //     "#6366f1",
          //     "#60a5fa",
          // ],
          borderColor: '#6366f1',
          fill: {
            target: 'start',
            above: 'rgba(96, 165, 250, 0.1)',
          },
        },
      ],
    }
  }, [result])
  const orderData = useMemo(() => {
    const dataCount = [0, 0, 0, 0, 0, 0, 0]
    result[4]?.data?.forEach((value) => {
      const date = new Date(value.NgayDat)
      const getDayToDate = date.getDay()
      dataCount[getDayToDate] = value.TongDon
    })
    return {
      labels: DAY_CONFIG,
      datasets: [
        {
          label: 'Tổng đơn',
          data: dataCount,
          borderColor: '#6366f1',
          fill: {
            target: 'start',
            above: 'rgba(96, 165, 250, 0.1)',
          },
        },
      ],
    }
  }, [result])

  for (const value of result) {
    if (value.isLoading) {
      return <Loading />
    }
    if (value.isError) {
      return <div>Đã có lỗi khi lấy dữ liệu 😥</div>
    }
  }

  return (
    <div className="grid grid-cols-4 gap-5 w-full pt-4">
      <div className="col-span-4 min-h-24 p-5 bg-indigo-200 rounded-sm">
        <h2 className="text-3xl py-1 font-semibold">Xin chào. 👋</h2>
        <p className="font-medium text-slate-700">
          Đây là những gì đang xảy ra với các dự án của bạn ngày hôm nay:
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 col-span-4">
        <div className="sm:col-span-1 col-span-3 min-h-24 p-5 border shadow-md bg-white rounded-sm space-y-5">
          <div className="flex">
            <div>
              <h2 className="text-sm font-bold text-zinc-400 uppercase">Tài khoản</h2>
              <span className="text-xl font-semibold">{result[0].data.TaiKhoan}</span>
            </div>
            <div className="flex justify-center items-center bg-violet-500 w-12 ml-auto rounded-full">
              <FaUsers size={20} color="white" />
            </div>
          </div>
          <p className="text-gray-500">
            <span className={clsx(result[0].data.PhanTram > 0 ? 'text-lime-500' : 'text-red-500')}>
              {result[0].data.PhanTram} %
            </span>{' '}
            Kể từ tuần này
          </p>
        </div>
        <div className="sm:col-span-1 col-span-3 min-h-24 p-5 border shadow-md bg-white rounded-sm space-y-5">
          <div className="flex">
            <div>
              <h2 className="text-sm font-bold text-zinc-400 uppercase">Doanh thu</h2>
              <span className="text-xl font-semibold">{result[1].data.DoanhThu} VNĐ</span>
            </div>
            <div className="flex justify-center items-center bg-orange-500 w-12 ml-auto rounded-full">
              <FaRegChartBar size={20} color="white" />
            </div>
          </div>
          <p className="text-gray-500">
            <span className={clsx(result[1].data.PhanTram > 0 ? 'text-lime-500' : 'text-red-500')}>
              {result[1].data.PhanTram} %
            </span>{' '}
            Kể từ tuần này
          </p>
        </div>
        <div className="sm:col-span-1 col-span-3 min-h-24 p-5 border shadow-md bg-white rounded-sm space-y-5">
          <div className="flex">
            <div>
              <h2 className="text-sm font-bold text-zinc-400 uppercase">Đơn hàng</h2>
              <span className="text-xl font-semibold">{result[2].data.TongDon}</span>
            </div>
            <div className="flex justify-center items-center bg-lime-500 w-12 ml-auto rounded-full">
              <FaChartPie size={20} color="white" />
            </div>
          </div>
          <p className="text-gray-500">
            <span className={clsx(result[2].data.PhanTram > 0 ? 'text-lime-500' : 'text-red-500')}>
              {result[2].data.PhanTram} %
            </span>{' '}
            Kể từ tuần này
          </p>
        </div>
      </div>

      <div className="col-span-4 sm:col-span-2 p-5 border shadow-md bg-white rounded-sm space-y-5">
        <div className="flex space-x-2">
          <img src={icon1} alt="arrow" />
          <h2 className="font-semibold text-xl">Tài khoản đăng ký</h2>
        </div>
        <div className="bg-opacity-10 bg-emerald-100 h-60">
          <LineChart chartData={userData} />
        </div>
      </div>
      <div className="col-span-4 sm:col-span-2 p-5 border shadow-md bg-white rounded-sm space-y-5">
        <div className="flex space-x-2">
          <img src={icon1} alt="arrow" />
          <h2 className="font-semibold text-xl">Đơn hàng bán ra</h2>
        </div>
        <div className="bg-opacity-10 bg-emerald-100 h-60">
          <LineChart chartData={orderData} />
        </div>
      </div>
    </div>
  )
}

export default Dashboard
