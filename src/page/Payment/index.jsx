import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/path";
import axios from "axios";
import Notify from "../../components/Notify";
import { AiOutlineSmile } from "react-icons/ai";

function Payment() {
  const navigate = useNavigate();
  const [notify, showNotify] = useState(false);
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);
  const [provinceCode, setProvinceCode] = useState('');
  const [districtCode, setDistrictCode] = useState('');

  useEffect(() => {
    const fetchProvinceData = async () => {
      const response = await axios('https://provinces.open-api.vn/api/p');
      setProvince(response.data);
    }
    fetchProvinceData();

  }, []);

  const handleProvince = (event) => {
    const getProvinceCode = event.target.value;
    // console.log(getProvinceCode);
    setProvinceCode(getProvinceCode);

  }

  useEffect(() => {
    const fetchDistrictData = async () => {
      const response = await axios(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`);
      setDistrict(response.data.districts);
      // console.log(response.data.districts);
    }
    fetchDistrictData();

  }, [provinceCode]);

  const handleDistrict = (event) => {
    const getDistrictCode = event.target.value;
    setDistrictCode(getDistrictCode);

  }

  useEffect(() => {
    const fetchWardData = async () => {
      const response = await axios(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`);
      setWard(response.data.wards);
    }
    fetchWardData();

  }, [districtCode]);

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
                <select onChange={(e) => handleProvince(e)} className="border rounded-sm w-full md:px-2 border-black/20 md:mr-10 h-9 md:h-10 focus:outline-none focus:ring-sky-200 focus:ring-1 text-base">
                  <option value="0">Tỉnh / thành</option>

                  {province && province !== undefined ?

                    province.map(item => (
                      <option key={item.code} value={item.code} >{item.name}</option>
                    ))
                    :
                    <></>
                  }
                </select>
                <select onChange={(e) => handleDistrict(e)} className="border rounded-sm mt-4 md:mt-0 w-full md:px-2 border-black/20 md:mr-10 h-9 md:h-10 focus:outline-none focus:ring-sky-200 focus:ring-1 text-sm lg:text-base">
                  <option value="0">Quận / huyện</option>
                  {district && district !== undefined ?

                    district.map(item => (
                      <option key={item.code} value={item.code} >{item.name}</option>
                    ))
                    :
                    <></>
                  }
                </select>
                <select className="border rounded-sm mt-4 md:mt-0 md:px-2 w-full border-black/20 h-9 md:h-10 focus:outline-none focus:ring-sky-200 focus:ring-1 text-sm lg:text-base">
                  <option value="0">Phường / xã</option>
                  {ward && ward !== undefined ?
                    ward.map(item => (
                      <option key={item.code} value={item.code}>{item.name}</option>
                    ))
                    :
                    <></>
                  }
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
              <div onClick={() => showNotify(!notify)} className="px-7 py-1 lg:w-full bg-red-500 lg:px-0 font-medium hover:bg-red-400 transition text-white rounded-sm cursor-pointer text-base md:text-lg">Đặt hàng</div>
            </div>
            {notify && <Notify icon={<AiOutlineSmile className="w-7 h-7"/>} message="Chúc mừng bạn đặt hàng thành công" orderSuccess="true" />}
          </div>
        </div>
      </div>


    </div>
  )
}



export default Payment;
