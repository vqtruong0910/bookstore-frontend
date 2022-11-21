import { useState } from "react";
import { Line } from "react-chartjs-2";
import { data } from './data';
import { Chart as ChartJS } from 'chart.js/auto';

function OrderStatistics() {
    const [userData, setUserData] = useState({
        labels: data.map(data => data.time),
        datasets: [{
            label: "User gained",
            data: data.map(data => data.userGain),
            // backgroundColor: [
            //     "#3730a3",
            //     "#6366f1",
            //     "#60a5fa",
            // ],
            borderColor: "#3730a3",
        }]
    })
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
                <Line data={userData} options={{ maintainAspectRatio: false }} />
            </div>
        </>
    );
}

export default OrderStatistics;