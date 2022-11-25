import { useMemo } from "react";
import { Line } from "react-chartjs-2";
import { useQuery } from "react-query";
import { Chart as ChartJS } from 'chart.js/auto';
import axiosJWT from "../../../config/axiosJWT";
import { API } from "../../../constants/api";
import Loading from "../../../components/Loading";

function RevenueStatistics() {
    const { data: Revenue, isLoading, isError } = useQuery({
        queryKey: ["revenue statistics"],
        queryFn: async () => {
            const result = await axiosJWT.get(API.REVANUE_IN_WEEK);
            console.log(result.data);
            return result.data;
        },
        keepPreviousData: true
    })

    const revenueChart = useMemo(() => {
        const labelsList = new Array(10).fill("");
        Revenue?.forEach((value, index) => {
            labelsList[index] = value.TenSanPham
        })
        return {
            labels: labelsList,
            datasets: [{
                label: "Số lượng sản phẩm bán ra",
                data: Revenue?.map(data => data.soluong),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(201, 203, 207, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(255, 159, 64, 0.2)',
                    'rgba(255, 205, 86, 0.2)',
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                    'rgb(75, 192, 192)',
                    'rgb(54, 162, 235)',
                    'rgb(153, 102, 255)',
                    'rgb(201, 203, 207)',
                    'rgb(255, 99, 132)',
                    'rgb(255, 159, 64)',
                    'rgb(255, 205, 86)',
                ],
                borderWidth: 1,
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
                <Line data={revenueChart} options={{
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

export default RevenueStatistics;