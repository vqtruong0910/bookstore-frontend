import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/path";


function Payment() {
    const navigate = useNavigate();
    const arrayWard = [];
    const arrayDistrict = [];
    for (let i = 1; i <= 28; i++) {
        arrayWard.push(i);
    };
    for (let j = 1; j <= 8; j++) {
        arrayDistrict.push(j);
    };

    return (
        <div className="flex flex-wrap w-full bg-gray-100 px-4">
            <div className="flex flex-wrap lg:flex-nowrap w-full">
                <div className="w-full">
                    <div className="flex flex-wrap w-full py-5">
                        <div className="flex w-full lg:px-4">
                            <span className="w-full text-lg lg:text-xl">Thông tin giao hàng</span>
                        </div>

                        <div className="flex flex-wrap justify-center w-full bg-white shadow-md mt-2 lg:mx-4">
                            <div className="flex w-full p-2">
                                <div className="w-1/3 items-center flex">
                                    <span className="flex text-sm font-medium lg:text-base">Họ & Tên</span>
                                </div>

                                <div className="w-2/3 lg:w-8/12 flex">
                                    <input className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm" type="text" placeholder="Thêm họ tên" />
                                </div>
                            </div>

                            <div className="flex w-full p-2">
                                <div className="w-1/3 items-center flex">
                                    <span className="flex text-sm font-medium lg:text-base">Email</span>
                                </div>

                                <div className="w-2/3 flex">
                                    <input className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm" type="email" placeholder="Thêm email" />
                                </div>

                            </div>

                            <div className="flex w-full p-2">
                                <div className="w-1/3 lg:w-4/12 items-center flex">
                                    <span className="flex text-sm font-medium lg:text-base">Số điện thoại</span>
                                </div>

                                <div className="w-2/3 flex">
                                    <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" placeholder="Thêm số điện thoại"
                                        className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm" />
                                </div>
                            </div>

                            <div className="flex w-full p-2">
                                <div className="w-1/3 items-center flex">
                                    <span className="flex text-sm font-medium lg:text-base">Địa chỉ</span>
                                </div>

                                <div className="w-2/3 flex">
                                    <input className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm" type="email" placeholder="Thêm địa chỉ" />
                                </div>

                            </div>

                            <div className="flex flex-wrap md:flex-nowrap w-full justify-between p-2">
                                <select className="border rounded-sm w-full border-black/20 md:px-3 md:mr-10 h-9 md:h-10 focus:outline-none focus:ring-sky-200 focus:ring-1 text-sm md:text-base">
                                    <option value="0">Tỉnh / thành</option>
                                    <option value="1">Hồ Chí Minh</option>
                                    <option value="2">Hà Nội</option>
                                    <option value="3">Đà Nẵng</option>
                                    <option value="4">An Giang</option>
                                    <option value="5">Bà Rịa - Vũng Tàu</option>
                                    <option value="6">Bình Dương</option>
                                    <option value="7">Bình Phước</option>
                                    <option value="8">Bình Thuận</option>
                                    <option value="9">Bình Định</option>
                                    <option value="10">Bạc Liêu</option>
                                    <option value="11">Bắc Giang</option>
                                    <option value="12">Bắc Kạn</option>
                                    <option value="13">Bắc Ninh</option>
                                    <option value="14">Bến Tre</option>
                                    <option value="15">Cao Bằng</option>
                                    <option value="16">Cà Mau</option>
                                    <option value="17">Cần Thơ</option>
                                    <option value="18">Gia Lai</option>
                                    <option value="19">Hà Giang</option>
                                    <option value="20">Hà Nam</option>
                                    <option value="21">Hà Tĩnh</option>
                                    <option value="22">Hoà Bình</option>
                                    <option value="23">Hưng Yên</option>
                                    <option value="24">Hải Dương</option>
                                    <option value="25">Hải Phòng</option>
                                    <option value="26">Hậu Giang</option>
                                    <option value="27">Khánh Hoà</option>
                                    <option value="28">Kiên Giang</option>
                                    <option value="29">Kon Tum</option>
                                    <option value="30">Lai Châu</option>
                                    <option value="31">Long An</option>
                                    <option value="32">Lào Cai</option>
                                    <option value="33">Lâm Đồng</option>
                                    <option value="34">Lạng Sơn</option>
                                    <option value="35">Nam Định</option>
                                    <option value="36">Nghệ An</option>
                                    <option value="37">Ninh Bình</option>
                                    <option value="38">Ninh Thuận</option>
                                    <option value="39">Phú Thọ</option>
                                    <option value="40">Phú Yên</option>
                                    <option value="41">Quảng Bình</option>
                                    <option value="42">Quảng Nam</option>
                                    <option value="43">Quảng Ngãi</option>
                                    <option value="44">Quảng Ninh</option>
                                    <option value="45">Quảng Trị</option>
                                    <option value="46">Sóc Trăng</option>
                                    <option value="47">Sơn La</option>
                                    <option value="48">Thanh Hoá</option>
                                    <option value="49">Thái Bình</option>
                                    <option value="50">Thái Nguyên</option>
                                    <option value="51">Thừa Thiên Huế</option>
                                    <option value="52">Tiền Giang</option>
                                    <option value="53">Trà Vinh</option>
                                    <option value="54">Tuyên Quang</option>
                                    <option value="55">Tây Ninh</option>
                                    <option value="56">Vĩnh Long</option>
                                    <option value="57">Vĩnh Phúc</option>
                                    <option value="58">Yên Bái</option>
                                    <option value="59">Điện Biên</option>
                                    <option value="60">Đắk Lắk</option>
                                    <option value="61">Đắk Nông</option>
                                    <option value="62">Đồng Nai</option>
                                    <option value="63">Đồng Tháp</option>
                                </select>
                                <select className="border rounded-sm mt-4 md:mt-0 w-full border-black/20 md:px-3 md:mr-10 h-9 md:h-10 focus:outline-none focus:ring-sky-200 focus:ring-1 text-sm lg:text-base">
                                    <option value="0">Quận / huyện</option>
                                    <option value="huyenbinhchanh">Huyện Bình Chánh</option>
                                    <option value="huyencangio">Huyện Cần Giờ</option>
                                    <option value="huyencuchi">Huyện Củ Chi</option>
                                    <option value="huyenhocmon">Huyện Hóc Môn</option>
                                    <option value="huyennhabe">Huyện Nhà Bè</option>
                                    {arrayDistrict.map((item, index) => {
                                        return (
                                            <option value={item} key={index} className="text=sm">Quận {item}</option>
                                        )
                                    })}
                                    <option value="quanbinhtan">Quận Bình Tân</option>
                                    <option value="quanbinhthanh">Quận Bình Thạnh</option>
                                    <option value="quangovap">Quận Gò Vấp</option>
                                    <option value="quanphunhuan">Quận Phú Nhuận</option>
                                    <option value="quantanbinh">Quận Tân Bình</option>
                                    <option value="quantanphu">Quận Tân Phú</option>
                                    <option value="thanhphothuduc">Thành phố Thủ Đức</option>
                                </select>
                                <select className="border rounded-sm mt-4 md:mt-0 w-full border-black/20 md:px-3 h-9 md:h-10 focus:outline-none focus:ring-sky-200 focus:ring-1 text-sm lg:text-base">
                                    <option value="0">Phường / xã</option>
                                    {arrayWard.map((item, index) => {
                                        return (
                                            <option value={item} key={index} className="text=sm">Phường {item}</option>
                                        )
                                    })}
                                </select>

                            </div>
                        </div>
                    </div>
                    <div className="flex flex-wrap w-full py-5">
                        <div className="flex w-full lg:px-4">
                            <span className="w-full text-lg">Phương thức vận chuyển</span>
                        </div>


                        <div className="flex justify-center items-center w-full bg-white shadow-md mt-2 lg:mx-4">
                            <div className="w-full p-2">
                                <input type="radio" value="shipping_cost" />
                                <label htmlFor="shipping_cost" className="mx-2 text-gray-600">Phí vận chuyển tất cả các tỉnh thành</label>
                            </div>
                            <div className="p-2 font-medium text-gray-400">30.000đ</div>
                        </div>
                    </div>

                    <div className="flex flex-wrap w-full py-5">
                        <div className="flex w-full lg:px-4">
                            <span className="w-full text-lg">Phương thức thanh toán</span>
                        </div>


                        <div className="flex justify-center items-center w-full bg-white shadow-md mt-2 lg:mx-4">
                            <div className="w-full p-2 flex items-center">
                                <input type="radio" value="shipping_cost" />
                                <img src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=1" className="mx-2" alt="Payment_Image" />
                                <label htmlFor="shipping_cost" className="text-gray-600">Thanh toán khi giao hàng</label>
                            </div>  
                        </div>
                    </div>
                </div>

                <div className="w-full lg:py-14 py-5 lg:w-5/12 lg:mx-4">
                    <div className="w-full flex flex-col bg-white shadow-md lg:mt-0 items-end p-3">
                        <div className="flex flex-wrap lg:justify-between lg:w-full">
                            <div className="flex flex-col">
                                <span className="py-1 font-light md:text-lg">Tạm tính</span>
                                <span className="py-1 font-light md:text-lg">Phí vận chuyển</span>
                                <span className="py-1 font-light md:text-lg">Tổng cộng</span>
                            </div>

                            <div className="flex flex-col ml-10 items-end">
                                <span className="py-1 font-medium md:text-lg">116.000đ</span>
                                <span className="py-1 font-medium md:text-lg">30.000đ</span>
                                <span className="py-1 font-semibold text-red-600 text-xl md:text-2xl">256.000đ</span>
                            </div>
                        </div>
                        <div className="flex mt-4 lg:w-full lg:text-center">
                            <div onClick={() => navigate(PATH.main)} className="lg:hidden px-2 py-1 bg-gray-300 rounded-sm transition mx-4 cursor-pointer text-base md:text-lg hover:bg-gray-400">Giỏ hàng</div>
                            <div onClick={() => navigate(PATH.payment)} className="px-7 py-1 lg:w-full bg-red-500 lg:px-0 font-medium hover:bg-red-400 transition text-white rounded-sm cursor-pointer text-base md:text-lg">Đặt hàng</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default Payment;