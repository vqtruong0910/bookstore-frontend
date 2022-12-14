import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../constants/path";
import axios from "axios";
import axiosJWT from "../../config/axiosJWT";
import Notify from "../../components/Notify";
import { AiOutlineSmile } from "react-icons/ai";
import { useForm } from "react-hook-form";
import Context from "../../store/Context";

function Payment() {
  const navigate = useNavigate();
  const [notify, setNotify] = useState(false);
  const [province, setProvince] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);
  const [provinceCode, setProvinceCode] = useState('');
  const [districtCode, setDistrictCode] = useState('');
  const { register, handleSubmit, formState: { errors }, clearErrors } = useForm({
    mode: "onBlur",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      district: "",
      ward: "",
      shipping_cost: "",
      pay_on_delivery: "",
    },
  });
  const { user, cart } = useContext(Context);

  useEffect(() => {
    const fetchProvinceData = async () => {
      const response = await axios('https://provinces.open-api.vn/api/p');
      setProvince(response.data);
    }
    fetchProvinceData();

  }, []);

  const handleProvince = (event) => {
    const index = event.target.selectedIndex;
    const el = event.target.childNodes[index]
    const getProvinceCode = el.getAttribute('id');
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
    const index = event.target.selectedIndex;
    const el = event.target.childNodes[index]
    const getDistrictCode = el.getAttribute('id');
    // console.log(getDistrictCode);
    setDistrictCode(getDistrictCode);

  }

  useEffect(() => {
    const fetchWardData = async () => {
      const response = await axios(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`);
      setWard(response.data.wards);
    }
    fetchWardData();

  }, [districtCode]);


  const onSubmit = async (data) => {
    const detail = []
    cart.forEach(item => {
      const { IDSanPham, quantity, GiaBan } = item;
      detail.push({ IDSanPham, SoLuong: quantity, GiaBan });
    })
    try {
      const response = await axiosJWT.post('order/',
        {
          DiaChi: `${data.address} ${data.ward}, ${data.district}, ${data.city}`,
          PhiShip: 30000,
          ChiTietDonHang: detail,
        });
      if (response)
        return setNotify(true);
    } catch (error) {
      console.log(error);
    }

    return setNotify(true);
  }

  let totalAllProduct = 0;
  cart.forEach(item => {
    totalAllProduct += (item.GiaBan * item.quantity);
  });

  const changeCostWithDots = (item) => {
    return item.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1.")
  }

  const handlePay = () => {
    localStorage.removeItem("userCart");
  }

  return (
    <div className="flex flex-wrap w-full bg-gray-100 px-4">
      <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-wrap lg:flex-nowrap">
        <div className="flex flex-wrap w-full">
          <div className="flex flex-wrap w-full py-5">
            <div className="flex w-full lg:px-4">
              <span className="w-full text-lg lg:text-xl">Th??ng tin giao h??ng</span>
            </div>

            <div className="flex flex-wrap justify-center w-full bg-white shadow-md mt-2 lg:mx-4">
              <div className="flex w-full p-2">
                <div className="w-1/3 items-center flex">
                  <span className="flex text-sm font-medium lg:text-base">H??? & T??n</span>
                </div>

                <div className="w-2/3 lg:w-8/12 flex flex-col">
                  <input name="fullName" type="text" {...register("fullName", { required: "H??? t??n kh??ng ???????c ????? tr???ng" })} className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm" placeholder="VD: Nguy???n V??n A" value={user.HoTen} />
                  {errors.fullName &&
                    <div className="text-xs text-red-500 md:text-sm">{errors.fullName.message}</div>
                  }
                </div>
              </div>

              <div className="flex w-full p-2">
                <div className="w-1/3 items-center flex">
                  <span className="flex text-sm font-medium lg:text-base">Email</span>
                </div>

                <div className="w-2/3 flex flex-col">
                  <input name="email" type="email" value={user.Email}  {...register("email",
                    {
                      required: "Email kh??ng ???????c ????? tr???ng",
                      pattern: {
                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                        message: "Vui l??ng nh???p ????ng ?????nh d???ng email",
                      },
                    })}
                    className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm" placeholder="VD: nguyenvana@gmail.com" />
                  {errors.email &&
                    <div className="text-xs text-red-500 md:text-sm">{errors.email.message}</div>
                  }
                </div>

              </div>

              <div className="flex w-full p-2">
                <div className="w-1/3 lg:w-4/12 items-center flex">
                  <span className="flex text-sm font-medium lg:text-base">S??? ??i???n tho???i</span>
                </div>

                <div className="w-2/3 flex flex-col">
                  <input name="phone" type="tel" {...register("phone", {
                    required: "S??? ??i???n tho???i kh??ng ???????c ????? tr???ng",
                    pattern:
                    {
                      value: /[0]{1}[0-9]{9}/,
                      message: "Vui l??ng ch??? nh???p ????? 10 s???"
                    },
                  }
                  )} placeholder="VD: 0xxxxxxxxx"
                    className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm" />
                  {errors.phone?.type === "required" &&
                    <div className="text-xs text-red-500 md:text-sm">S??? ??i???n tho???i kh??ng ???????c ????? tr???ng</div>
                  }
                </div>
              </div>

              <div className="flex w-full p-2">
                <div className="w-1/3 items-center flex">
                  <span className="flex text-sm font-medium lg:text-base">S??? nh??</span>
                </div>

                <div className="w-2/3 flex flex-col">
                  <input name="address" type="text" {...register("address", { required: "S??? nh?? kh??ng ???????c ????? tr???ng" })} className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm" placeholder="VD: 273 An D????ng V????ng" />
                  {errors.address?.type === "required" &&
                    <div className="text-xs text-red-500 md:text-sm">{errors.address.message}</div>
                  }
                </div>

              </div>

              <div className="flex flex-wrap md:flex-nowrap w-full justify-between">
                <div className="flex flex-col p-2 md:mr-10 w-full">
                  <select name="city" {...register("city", { required: "Vui l??ng ch???n t???nh th??nh" })}
                    onChange={(event) => handleProvince(event)} onClick={() => clearErrors("city")}
                    className="border rounded-sm w-full px-2 py-1 lg:py-2 border-black/20 focus:outline-none focus:ring-sky-200 focus:ring-1 text-base">
                    <option value="" disabled>T???nh / Th??nh ph???</option>
                    {province && province !== undefined ?
                      province.map(item => (
                        <option key={item.code} value={item.name} id={item.code}>{item.name}</option>
                      ))
                      :
                      <></>
                    }
                  </select>
                  {errors.city &&
                    <div className="text-xs text-red-500 md:text-sm">{errors.city.message}</div>
                  }
                </div>

                <div className="flex flex-col p-2 w-full">
                  <select name="district" {...register("district", { required: "Vui l??ng ch???n qu???n huy???n" })}
                    onChange={(e) => handleDistrict(e)} onClick={() => clearErrors("district")}
                    className="border rounded-sm w-full px-2 py-1 lg:py-2 border-black/20 focus:outline-none focus:ring-sky-200 focus:ring-1 text-base">
                    <option value="" disabled>Qu???n / huy???n</option>
                    {district && district !== undefined ?
                      district.map(item => (
                        <option key={item.code} value={item.name} id={item.code}>{item.name}</option>
                      ))
                      :
                      <></>
                    }
                  </select>
                  {errors.district &&
                    <div className="text-xs text-red-500 md:text-sm">{errors.district.message}</div>
                  }

                </div>

                <div className="flex flex-col p-2 md:ml-10 w-full">
                  <select name="ward" {...register("ward", { required: "Vui l??ng ch???n ph?????ng x??" })} onClick={() => clearErrors("ward")}
                    className="border rounded-sm w-full px-2 py-1 lg:py-2 border-black/20 focus:outline-none focus:ring-sky-200 focus:ring-1 text-base">
                    <option value="" disabled>Ph?????ng / x??</option>
                    {ward && ward !== undefined ?
                      ward.map(item => (
                        <option key={item.code} value={item.name}>{item.name}</option>
                      ))
                      :
                      <></>
                    }
                  </select>
                  {errors.ward &&
                    <div className="text-xs text-red-500 md:text-sm">{errors.ward.message}</div>
                  }
                </div>

              </div>
            </div>
          </div>

          <div className="flex flex-wrap w-full py-5">
            <div className="flex w-full lg:px-4">
              <span className="w-full text-lg">Ph????ng th???c v???n chuy???n</span>
            </div>


            <div className="flex justify-center items-center w-full bg-white shadow-md mt-2 lg:mx-4">
              <div className="w-full p-2">
                <input name="shipping_cost" {...register("shipping_cost", { required: { value: true } })} type="radio" value="30.000??" checked readOnly />
                <label htmlFor="shipping_cost" className="mx-2 text-gray-600">Ph?? v???n chuy???n t???t c??? c??c t???nh th??nh</label>
              </div>
              <div className="p-2 font-medium text-gray-400">30.000??</div>
            </div>

          </div>

          <div className="flex flex-wrap w-full py-5">
            <div className="flex w-full lg:px-4">
              <span className="w-full text-lg">Ph????ng th???c thanh to??n</span>
            </div>

            <div className="flex justify-center items-center w-full bg-white shadow-md mt-2 lg:mx-4">
              <div className="w-full p-2 flex items-center">
                <input name="pay_on_delivery" type="radio" value="true" {...register("pay_on_delivery", { required: { value: true } })} checked readOnly />
                <img src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=1" className="mx-2" alt="Payment_Image" />
                <label htmlFor="shipping_cost" className="text-gray-600">Thanh to??n khi giao h??ng</label>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full lg:py-14 py-5 lg:w-6/12 lg:mx-4">
          <div className="w-full flex flex-col bg-white shadow-md lg:mt-0 items-end p-3">
            <div className="flex flex-wrap lg:justify-between lg:w-full">
              <div className="flex flex-col">
                <span className="py-1 font-light md:text-lg">T???m t??nh</span>
                <span className="py-1 font-light md:text-lg">Ph?? v???n chuy???n</span>
                <span className="py-1 font-light md:text-lg">T???ng c???ng</span>
              </div>

              <div className="flex flex-col ml-10 items-end">
                <span className="py-1 font-medium md:text-lg">{changeCostWithDots(totalAllProduct)}??</span>
                <span className="py-1 font-medium md:text-lg">30.000??</span>
                <span className="py-1 font-semibold text-red-600 text-xl md:text-2xl">{changeCostWithDots(totalAllProduct + 30000)}??</span>
              </div>
            </div>
            <div className="flex mt-4 lg:w-full lg:text-center">
              <div onClick={() => navigate(PATH.main)} className="lg:hidden px-2 py-1 bg-gray-300 rounded-sm transition mx-4 cursor-pointer text-base md:text-lg hover:bg-gray-400">Gi??? h??ng</div>
              <button type="submit" onClick={() => handlePay()} className="px-7 py-1 lg:w-full bg-red-500 lg:px-0 font-medium hover:bg-red-400 transition text-white rounded-sm cursor-pointer text-base md:text-lg">?????t h??ng</button>
            </div>
            {notify ?
              <Notify close="true" message="Ch??c m???ng b???n ?????t h??ng th??nh c??ng" icon={<AiOutlineSmile className="w-5 h-5 md:w-7 md:h-7 text-slate-700" />} orderSuccess="true" textMessage="text-slate-700" notify={notify} setNotify={(data) => setNotify(data)} />
              :
              <></>
            }
          </div>
        </div>
      </form>
    </div>
  )
}



export default Payment;
