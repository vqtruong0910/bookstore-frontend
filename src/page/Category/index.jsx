import { PATH } from "../../constants/path";
import { useNavigate } from "react-router-dom";
import style from "./Category.module.scss";
import { FiShoppingBag } from "react-icons/fi";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import { useState, useContext } from "react";
import Notify from "../../components/Notify";
import Context from "../../store/Context";
import { addToCart } from "../../reducers/cartReducers";
import axiosConfig from "../../config/axiosConfig";
import { useEffect } from "react";

function Category() {
    const navigate = useNavigate();
    const [notify, setNotify] = useState(false);

    const { dispatch } = useContext(Context);

    const addToCartHandler = (product) => {
        dispatch(addToCart(product));
        return setNotify(true);
    };

    const[allBook, setAllBook] = useState([]);
    const[paginationBook, setPaginationBook] = useState([]);
    useEffect(() => {
        const fetchCategoryBookData = async () => {
            const response = await axiosConfig('product/');
            setAllBook(response.data.data);
            // console.log(response.data.data);

            // const responsePagination = await axiosConfig('product/pages?1=page&s=5');
            // setPaginationBook(response.data.data);
            // console.log(responsePagination.data.data);
            
        }
        fetchCategoryBookData();

    }, []);


    const changeCostWithDots = (item) => {
        return item.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
    }

    return (
        <>
            <div className="w-full flex items-center justify-end py-4">
                <span className="mx-2 text-base md:text-lg font-medium text-gray-500">Sắp xếp</span>
                <select className="border text-black/70 rounded-sm px-3 py-1 cursor-pointer bg-white border-black/70 focus:outline-none focus:ring-black/40 focus:ring-1 text-base font-semibold">
                    <option value="moinhat">Mới nhất</option>
                    <option value="banchay">Bán chạy</option>
                    <option value="phobien">Phổ biến</option>
                    <option value="giatangdan">Giá tăng dần</option>
                    <option value="giagiamdan">Giá giảm dần</option>
                </select>
            </div>
            <div className="w-full bg-white">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5">
                    {allBook.map((item, index) => {
                        return (
                            <div key={index} className="grid justify-self-center items-self-center relative w-full hover:cursor-pointer">

                                <div className="grid z-10 font-semibold text-white text-center items-center absolute bg-orange-400 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 lg:rounded-full rounded-full">
                                    <span className="text-sm text-white">{item.GiamGia}%</span>
                                </div>

                                <div onClick={() => navigate(`/books/${item.IDSanPham}`)} className="flex w-full justify-center drop-shadow-md mt-3 cursor-pointer">
                                    <img className="w-11/12" src={`http://localhost:8000/${item.HinhAnh}`} alt="New Book" />
                                </div>

                                <div className="grid w-full py-3 px-4">
                                    <span className={`${style['product_name']} self-center w-full text-xs md:text-base lg:text-xl font-medium lg:leading-6`}>{item.TenSanPham}</span>
                                </div>


                                <div className="flex justify-between items-center font-medium w-full px-4">
                                    <div className="text-red-600 text-lg md:text-xl">{changeCostWithDots(item.GiaBan)}đ</div>
                                </div>

                                <div className="flex w-full mt-2 mb-4 px-4">
                                    <div onClick={() => addToCartHandler(item)} className="flex w-full rounded-sm bg-slate-700 hover:bg-slate-500 transition items-center justify-center py-1">
                                        <FiShoppingBag className="w-5 h-5 text-white" />
                                        <div className=" text-sm md:text-base lg:text-lg text-white py-1 mx-0.5">Thêm giỏ hàng</div>
                                    </div>
                                </div>

                            </div>
                        )
                    })}
                    {notify ?
                        <Notify close="true" message="Sản phẩm đã được thêm vào giỏ hàng" textMessage="text-slate-700" notify={notify} setNotify={(data) => setNotify(data)} addToCart="true" />
                        :
                        <></>
                    }

                </div>

            </div>

            <div className="flex flex-wrap w-full justify-end items-center py-4">
                <BsArrowLeftCircleFill className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-slate-400" />
                <span className="mx-2 font-medium text-sm md:text-base lg:text-lg">1</span>
                <BsArrowRightCircleFill className="w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-slate-700" />
            </div>
        </>

    )
}

export default Category;