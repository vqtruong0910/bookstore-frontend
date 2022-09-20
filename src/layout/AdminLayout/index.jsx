import bar from '../../assets/svg/bar.svg'

function AdminLayout() {
    return (
        <div className="w-full bg-slate-50 h-screen relative">

            <div className="flex flex-col w-64 -translate-x-64 h-screen bg-slate-800 absolute z-40 invisible lg:translate-x-0 lg:visible transition-all ">
                <h1 className="text-center font-lobster text-slate-50 font-bold text-4xl p-3 select-none">Book Store</h1>
                <ul className="mt-3">
                    <li>
                        <a href="">
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>Dashboard</span>
                        </a>
                    </li>
                    <li>
                        <a href="">
                            <span>Dashboard</span>
                        </a>
                    </li>
                </ul>
            </div>

            <header className="fixed w-full h-16 p-5 bg-white shadow-sm border">
                <div className="flex">
                    <div className="w-5 cursor-pointer relative">
                        <img className='w-full invert-[.35]' src={bar} alt="Logo Bar" />
                    </div>
                    <div className="ml-auto">
                        <input type="search" name="" id="" />
                    </div>
                </div>
            </header>
            <div className="grid grid-cols-1 gap-5 pt-24 px-5 w-full md:grid-cols-2 lg:pl-72">
                <div className="md:col-span-2 min-h-24 p-5 bg-slate-200 rounded-lg">
                    <h2>Xin chào</h2>
                    <p>Đây là những gì đang xảy ra với các dự án của bạn ngày hôm nay:</p>
                </div>
                <div className="min-h-24 p-5 border shadow-sm bg-white rounded-lg">
                    <h2>Xin chào</h2>
                    <p>Đây là những gì đang xảy ra với các dự án của bạn ngày hôm nay:</p>
                </div>
                <div className="min-h-24 p-5 border shadow-sm bg-white rounded-lg">
                    <h2>Xin chào</h2>
                    <p>Đây là những gì đang xảy ra với các dự án của bạn ngày hôm nay:</p>
                </div>
                <div className="min-h-24 p-5 border shadow-sm bg-white rounded-lg">
                    <h2>Xin chào</h2>
                    <p>Đây là những gì đang xảy ra với các dự án của bạn ngày hôm nay:</p>
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;