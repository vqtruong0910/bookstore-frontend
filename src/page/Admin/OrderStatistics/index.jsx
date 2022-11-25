import { useMemo } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto';
import { useQuery } from "react-query";
import axiosJWT from "../../../config/axiosJWT";
import { API } from "../../../constants/api";
import Loading from "../../../components/Loading";
import { DAY_CONFIG } from "../../../constants/day";

function OrderStatistics() {
    const { data: orders, isLoading, isError } = useQuery({
        queryKey: ["orders statistics"],
        queryFn: async () => {
            const result = await axiosJWT.get(API.STATISTIC_ORDER_EVERY_DAY_IN_WEEK);
            return result.data;
        },
        keepPreviousData: true
    })

    const orderChart = useMemo(() => {
        const dataCount = new Array(7).fill(0);
        orders?.forEach((value) => {
            const date = new Date(value.NgayDat)
            const getDayToDate = date.getDay()
            dataCount[getDayToDate] = value.TongDon;
        })
        return {
            labels: DAY_CONFIG,
            datasets: [{
                label: "Tổng đơn trong ngày",
                data: dataCount,
                // backgroundColor: [
                //     "#3730a3",
                //     "#6366f1",
                //     "#60a5fa",
                // ],
                borderColor: "#3730a3",
            }]
        }
    }, [orders])

    if (isLoading) {
        return <Loading />
    }
    if (isError) {
        return <div>Đã có lỗi khi lấy dữ liệu 😥</div>
    }
    return (
        <>
            <h2 className="text-xl font-semibold">Thống kê đơn hàng ✨</h2>

            <div className="hidden md:flex my-4">
                <div className="flex ml-auto space-x-3">
                    <select className="rounded-sm border cursor-pointer">
                        <option value="">Chọn danh mục</option>
                        <option value="">Sách giáo khoa</option>
                        <option value="">Sách kinh tế</option>
                        <option value="">Khoa học viễn tưởng</option>
                        <option value="">Truyện tranh</option>
                    </select>
                    <select className="rounded-sm border cursor-pointer">
                        <option value="">Thể loại</option>
                        <option value="">Comic</option>
                        <option value="">Hành động</option>
                        <option value="">Trinh thám</option>
                    </select>
                    <select className="rounded-sm border cursor-pointer">
                        <option value="">Tất cả các ngày</option>
                        <option value=""></option>
                        <option value=""></option>
                        <option value=""></option>
                    </select>
                </div>
            </div>

            <div className="h-500 bg-white p-6 rounded-sm shadow-sm">
                <Line data={orderChart} options={{
                    plugins: {
                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: 'Biểu đồ cột thể hiện top 10 sản phẩm bán chạy trong tuần'
                        }
                    },
                    maintainAspectRatio: false
                }} />
            </div>
        </>
    );
}

export default OrderStatistics;