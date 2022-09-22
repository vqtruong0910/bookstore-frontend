import { Link } from 'react-router-dom';
import bar from '../../assets/svg/bar.svg'

function AdminLayout() {
    return (
        <div className="w-full bg-slate-100 h-screen relative">

            <div className="flex flex-col w-64 -translate-x-64 h-screen bg-slate-800 absolute z-40 invisible lg:translate-x-0 lg:visible transition-all ">
                <h1 className="text-center font-lobster text-slate-50 font-bold text-4xl p-3 select-none">Book Store</h1>
                <ul className="mt-3 px-4">
                    <li className='p-2 active:bg-slate-900'>
                        <Link className='flex space-x-2' to="">
                            <div className="m-1"><svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24"><path className="fill-current !text-indigo-500" d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"></path><path className="fill-current text-indigo-600" d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"></path><path className="fill-current text-indigo-200" d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"></path></svg></div>
                            <div className="flex items-center">
                                <span className='font-medium text-base text-slate-200'>Dashboard</span>
                            </div>
                        </Link>
                    </li>
                    <li className='p-2 active:bg-slate-900'>
                        <Link className='flex space-x-2' to="">
                            <div className="m-1"><svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24"><path className="fill-current !text-indigo-500" d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"></path><path className="fill-current text-indigo-600" d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"></path><path className="fill-current text-indigo-200" d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"></path></svg></div>
                            <div className="flex items-center">
                                <span className='font-medium text-base text-slate-200'>Dashboard</span>
                            </div>
                        </Link>
                    </li>
                    <li className='p-2 active:bg-slate-900'>
                        <Link className='flex space-x-2' to="">
                            <div className="m-1"><svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24"><path className="fill-current !text-indigo-500" d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"></path><path className="fill-current text-indigo-600" d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"></path><path className="fill-current text-indigo-200" d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"></path></svg></div>
                            <div className="flex items-center">
                                <span className='font-medium text-base text-slate-200'>Dashboard</span>
                            </div>
                        </Link>
                    </li>
                    <li className='p-2 active:bg-slate-900'>
                        <Link className='flex space-x-2' to="">
                            <div className="m-1"><svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24"><path className="fill-current !text-indigo-500" d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"></path><path className="fill-current text-indigo-600" d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"></path><path className="fill-current text-indigo-200" d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"></path></svg></div>
                            <div className="flex items-center">
                                <span className='font-medium text-base text-slate-200'>Dashboard</span>
                            </div>
                        </Link>
                    </li>
                    <li className='p-2 active:bg-slate-900'>
                        <Link className='flex space-x-2' to="">
                            <div className="m-1"><svg className="shrink-0 h-6 w-6" viewBox="0 0 24 24"><path className="fill-current !text-indigo-500" d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"></path><path className="fill-current text-indigo-600" d="M12 3c-4.963 0-9 4.037-9 9s4.037 9 9 9 9-4.037 9-9-4.037-9-9-9z"></path><path className="fill-current text-indigo-200" d="M12 15c-1.654 0-3-1.346-3-3 0-.462.113-.894.3-1.285L6 6l4.714 3.301A2.973 2.973 0 0112 9c1.654 0 3 1.346 3 3s-1.346 3-3 3z"></path></svg></div>
                            <div className="flex items-center">
                                <span className='font-medium text-base text-slate-200'>Dashboard</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </div>

            <header className="fixed w-full h-16 p-5 lg:px-8 bg-white shadow-sm border">
                <div className="flex">
                    <div className="w-5 cursor-pointer relative">
                        <img className='w-full invert-[.35]' src={bar} alt="Logo Bar" />
                    </div>
                    <div className="flex ml-auto">
                        <div className="">
                            <input type="search" name="" id="" />
                        </div>
                        <hr className='w-px h-6 bg-slate-200 mx-3' />
                        <div className="relative">
                            <div className="flex cursor-pointer">
                                <span className='font-semibold'>Quang Trường </span>
                                <svg className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 translate-y-1/2" viewBox="0 0 12 12"><path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"></path></svg>
                            </div>
                            <ul className='absolute bg-white w-44 rounded-sm shadow-sm border top-full right-0 px-3 py-2 origin-top-right invisible'>
                                <li><a>Quang Trường</a></li>
                                <li><a>Administrator</a></li>
                                <hr />
                                <li><a>Sign Out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
            <div className="grid grid-cols-1 gap-5 pt-24 px-5 w-full md:grid-cols-2 lg:pl-72 lg:pr-8 xl:grid-cols-3">
                <div className="md:col-span-2 xl:col-span-3 min-h-24 p-5 bg-indigo-200 rounded-sm">
                    <h2 className='text-3xl py-1 font-semibold'>Xin chào. 👋</h2>
                    <p>Đây là những gì đang xảy ra với các dự án của bạn ngày hôm nay:</p>
                </div>
                <div className="min-h-24 p-5 border shadow-sm bg-white rounded-sm">
                    <h2>Xin chào</h2>
                    <p>Đây là những gì đang xảy ra với các dự án của bạn ngày hôm nay:</p>
                </div>
                <div className="min-h-24 p-5 border shadow-sm bg-white rounded-sm">
                    <h2>Xin chào</h2>
                    <p>Đây là những gì đang xảy ra với các dự án của bạn ngày hôm nay:</p>
                </div>
                <div className="min-h-24 p-5 border shadow-sm bg-white rounded-sm">
                    <h2>Xin chào</h2>
                    <p>Đây là những gì đang xảy ra với các dự án của bạn ngày hôm nay:</p>
                </div>
            </div>
        </div>
    );
}

export default AdminLayout;