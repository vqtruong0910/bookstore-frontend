import { useMemo } from "react";
import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";
import { Chart as ChartJS } from 'chart.js/auto';
import axiosJWT from "../../../config/axiosJWT";
import { API } from "../../../constants/api";
import Loading from "../../../components/Loading";
import { DAY_CONFIG } from "../../../constants/day";

function RevenueStatistics() {
    const { data: Revenue, isLoading, isError } = useQuery({
        queryKey: ["revenue statistics"],
        queryFn: async () => {
            const result = await axiosJWT.get(API.STATISTIC_REVANUE_EVERY_DAY_IN_WEEK);
            console.log(result.data);
            return result.data;
        },
        keepPreviousData: true
    })

    const revenueChart = useMemo(() => {
        const data = new Array(7).fill(0);
        Revenue?.forEach((value) => {
            const date = new Date(value.NgayDat)
            const getDayToDate = date.getDay();
            data[getDayToDate] = value.DoanhThu;
        })
        return {
            labels: DAY_CONFIG,
            datasets: [{
                label: "Số lượng sản phẩm bán ra",
                data: data,
                borderColor: "#3730a3",
            }],
        }
    }, [Revenue])

    if (isLoading) {
        return <Loading />
    }
    if (isError) {
        return <div>Đã có lỗi khi lấy dữ liệu 😥</div>
    }
    return (
        <>
            <h2 className="text-xl font-semibold">Thống kê sản phẩm ✨</h2>

            {/* <div className="hidden md:flex my-4">
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
            </div> */}

            <div className="h-500 bg-white p-6 rounded-sm shadow-sm">
                <Line data={revenueChart} options={{
                    scales: {
                        yAxes: {
                            beginAtZero: true
                        }
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        title: {
                            display: true,
                            text: 'Biểu đường thể hiện doanh thu trong tuần'
                        }
                    },
                    maintainAspectRatio: false
                }} />
            </div>
        </>
    );
}

export default RevenueStatistics;