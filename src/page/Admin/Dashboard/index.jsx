import { useState } from 'react';
import { FaRegChartBar, FaPercent, FaChartPie, FaUsers } from 'react-icons/fa';
import BarChart from '../../../components/BarChart';
import LineChart from '../../../components/LineChart';
import PieChart from '../../../components/PieChart';
import { data } from './data';
import icon1 from '../../../assets/svg/icon-01.svg';

function Dashboard() {
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
            borderColor: "#6366f1",
            fill: {
                target: 'start',
                above: 'rgba(96, 165, 250, 0.1)'
            },
        }]
    })

    return (
        <div className="grid grid-cols-4 gap-5 w-full pt-4">
            <div className="col-span-4 min-h-24 p-5 bg-indigo-200 rounded-sm">
                <h2 className='text-3xl py-1 font-semibold'>Xin chào. 👋</h2>
                <p>Đây là những gì đang xảy ra với các dự án của bạn ngày hôm nay:</p>
            </div>

            <div className="grid grid-cols-3 gap-5 col-span-4">
                <div className="sm:col-span-1 col-span-3 min-h-24 p-5 border shadow-md bg-white rounded-sm space-y-5">
                    <div className="flex">
                        <div>
                            <h2 className="text-sm font-bold text-zinc-400 uppercase">Tài khoản</h2>
                            <span className="text-xl font-semibold">2,300</span>
                        </div>
                        <div className="flex justify-center items-center bg-violet-500 w-12 ml-auto rounded-full">
                            <FaUsers size={20} color='white' />
                        </div>
                    </div>
                    <p>Kể từ tuần này</p>
                </div>
                <div className="sm:col-span-1 col-span-3 min-h-24 p-5 border shadow-md bg-white rounded-sm space-y-5">
                    <div className="flex">
                        <div>
                            <h2 className="text-sm font-bold text-zinc-400 uppercase">Doanh thu</h2>
                            <span className="text-xl font-semibold">2,300</span>
                        </div>
                        <div className="flex justify-center items-center bg-orange-500 w-12 ml-auto rounded-full">
                            <FaRegChartBar size={20} color='white' />
                        </div>
                    </div>
                    <p>Kể từ tuần này</p>
                </div>
                <div className="sm:col-span-1 col-span-3 min-h-24 p-5 border shadow-md bg-white rounded-sm space-y-5">
                    <div className="flex">
                        <div>
                            <h2 className="text-sm font-bold text-zinc-400 uppercase">Đơn hàng</h2>
                            <span className="text-xl font-semibold">2,300</span>
                        </div>
                        <div className="flex justify-center items-center bg-lime-500 w-12 ml-auto rounded-full">
                            <FaChartPie size={20} color='white' />
                        </div>
                    </div>
                    <p>Kể từ tuần này</p>
                </div>
            </div>
            {/* <div className="col-span-4 sm:col-span-2 xl:col-span-1 min-h-24 p-5 border shadow-md bg-white rounded-sm space-y-5">
                <div className="flex">
                    <div>
                        <h2 className="text-sm font-bold text-zinc-400 uppercase">Tài khoản</h2>
                        <span className="text-xl font-semibold">2,300</span>
                    </div>
                    <div className="flex justify-center items-center bg-violet-500 w-12 ml-auto rounded-full">
                        <FaUsers size={20} color='white' />
                    </div>
                </div>
                <p>Kể từ tuần này</p>
            </div>
            <div className="col-span-4 sm:col-span-2 xl:col-span-1 min-h-24 p-5 border shadow-md bg-white rounded-sm space-y-5">
                <div className="flex">
                    <div>
                        <h2 className="text-sm font-bold text-zinc-400 uppercase">Sản phẩm</h2>
                        <span className="text-xl font-semibold">2,300</span>
                    </div>
                    <div className="flex justify-center items-center bg-orange-500 w-12 ml-auto rounded-full">
                        <FaRegChartBar size={20} color='white' />
                    </div>
                </div>
                <p>Kể từ tuần này</p>
            </div>
            <div className="col-span-4 sm:col-span-2 xl:col-span-1 min-h-24 p-5 border shadow-md bg-white rounded-sm space-y-5">
                <div className="flex">
                    <div>
                        <h2 className="text-sm font-bold text-zinc-400 uppercase">Sản phẩm</h2>
                        <span className="text-xl font-semibold">2,300</span>
                    </div>
                    <div className="flex justify-center items-center bg-cyan-500 w-12 ml-auto rounded-full">
                        <FaPercent size={20} color='white' />
                    </div>
                </div>
                <p>Kể từ tuần này</p>
            </div>
            <div className="col-span-4 sm:col-span-2 xl:col-span-1 min-h-24 p-5 border shadow-md bg-white rounded-sm space-y-5">
                <div className="flex">
                    <div>
                        <h2 className="text-sm font-bold text-zinc-400 uppercase">Đơn hàng</h2>
                        <span className="text-xl font-semibold">2,300</span>
                    </div>
                    <div className="flex justify-center items-center bg-lime-500 w-12 ml-auto rounded-full">
                        <FaChartPie size={20} color='white' />
                    </div>
                </div>
                <p>Kể từ tuần này</p>
            </div> */}

            <div className="col-span-4 sm:col-span-2 p-5 border shadow-md bg-white rounded-sm space-y-5">
                <div className='flex space-x-2'>
                    <img src={icon1} alt="arrow" />
                    <h2 className='font-semibold text-xl'>Tài khoản đăng ký</h2>
                </div>
                <div className='bg-opacity-10 bg-emerald-100 h-32'>
                    <LineChart chartData={userData} />
                </div>
            </div>
            <div className="col-span-4 sm:col-span-2 p-5 border shadow-md bg-white rounded-sm space-y-5">
                <div className='flex space-x-2'>
                    <img src={icon1} alt="arrow" />
                    <h2 className='font-semibold text-xl'>Đơn hàng bán ra</h2>
                </div>
                <div className='bg-opacity-10 bg-emerald-100 h-32'>
                    <LineChart chartData={userData} />
                </div>
            </div>
            <div className="col-span-4 sm:col-span-2 p-5 border shadow-md bg-white rounded-sm space-y-5">
                <h2 className='font-semibold text-xl'>Bar chart</h2>
                <BarChart chartData={userData} />
            </div>
            <div className="col-span-4 sm:col-span-2 p-5 border shadow-md bg-white rounded-sm space-y-5">
                <h2 className='font-semibold text-xl'>Pie chart</h2>
                <PieChart chartData={userData} />
            </div>
        </div>
    );
}

export default Dashboard;
