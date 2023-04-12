import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../constants/path'
import axios from 'axios'
import axiosJWT from '../../config/axiosJWT'
import Notify from '../../components/Notify'
import { AiOutlineSmile } from 'react-icons/ai'
import { useForm } from 'react-hook-form'
import Context from '../../store/Context'
import LoadingSkeletonPayment from '../../components/Loading/LoadingSkeletonPayment'

function Payment() {
  const navigate = useNavigate()
  const { user, cart, darkTheme } = useContext(Context)
  const [notify, setNotify] = useState(false)
  const [province, setProvince] = useState([])
  const [district, setDistrict] = useState([])
  const [ward, setWard] = useState([])
  const [provinceCode, setProvinceCode] = useState('')
  const [districtCode, setDistrictCode] = useState('')
  const [loading, isLoading] = useState(true)
  let totalAllProduct = 0

  const {
    register,
    handleSubmit,
    formState: { errors },
    clearErrors,
  } = useForm({
    mode: 'onBlur',
    defaultValues: {
      fullName: user?.HoTen,
      email: user?.Email,
      phone: '',
      address: '',
      city: '',
      district: '',
      ward: '',
      shipping_cost: '',
      pay_on_delivery: '',
    },
  })

  const onSubmit = async (data) => {
    const detail = []
    cart.forEach((item) => {
      const { IDSanPham, quantity, GiaBan } = item
      detail.push({ IDSanPham, SoLuong: quantity, GiaBan })
    })
    try {
      const response = await axiosJWT.post('order/', {
        DiaChi: `${data.address} ${data.ward}, ${data.district}, ${data.city}`,
        PhiShip: 30000,
        ChiTietDonHang: detail,
      })
      if (response) return setNotify(true)
    } catch (error) {
      console.log(error)
    }
    return setNotify(true)
  }
  cart.forEach((item) => {
    totalAllProduct += item.GiaBan * item.quantity
  })
  const changeCostWithDots = (item) => {
    return item.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
  }
  const handlePay = () => {
    localStorage.removeItem('userCart')
  }
  const handleProvince = (event) => {
    const index = event.target.selectedIndex
    const el = event.target.childNodes[index]
    const getProvinceCode = el.getAttribute('id')
    setProvinceCode(getProvinceCode)
  }
  const handleDistrict = (event) => {
    const index = event.target.selectedIndex
    const el = event.target.childNodes[index]
    const getDistrictCode = el.getAttribute('id')
    setDistrictCode(getDistrictCode)
  }

  useEffect(() => {
    const fetchProvinceData = async () => {
      const topOfElement = document.querySelector('#payment') - 200
      window.scroll({ top: topOfElement, behavior: 'smooth' })
      const response = await axios('https://provinces.open-api.vn/api/p')
      if (response.data) {
        setTimeout(() => {
          setProvince(response.data)
          isLoading(false)
        }, 250)
      }
    }
    fetchProvinceData()
  }, [])

  useEffect(() => {
    const fetchDistrictData = async () => {
      const response = await axios(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
      setDistrict(response.data.districts)
    }
    fetchDistrictData()
  }, [provinceCode])

  useEffect(() => {
    const fetchWardData = async () => {
      const response = await axios(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
      setWard(response.data.wards)
    }
    fetchWardData()
  }, [districtCode])

  return (
    <>
      {loading && <LoadingSkeletonPayment></LoadingSkeletonPayment>}
      {!loading && (
        <div className="flex flex-wrap w-full px-4 pb-4" id="payment">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-wrap lg:flex-nowrap">
            <div className="flex flex-wrap w-full">
              <div className="flex flex-wrap w-full">
                <div
                  className={`flex w-full lg:px-4 ${darkTheme ? 'text-white' : 'text-slate-700'}`}
                >
                  <span className="w-full text-lg font-medium">THÔNG TIN GIAO HÀNG</span>
                </div>

                <div className="flex flex-wrap justify-center w-full bg-white border border-gray-200 drop-shadow-lg mt-2 lg:mx-4">
                  <div className="flex w-full p-2">
                    <div className="w-1/3 items-center flex">
                      <span className="flex text-sm font-medium lg:text-base ">Họ & Tên</span>
                    </div>

                    <div className="w-2/3 lg:w-8/12 flex flex-col">
                      <input
                        name="fullName"
                        type="text"
                        {...register('fullName', { required: 'Họ tên không được để trống' })}
                        className="w-full border rounded-sm px-2 py-1 lg:py-2 text-black/50 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm"
                        defaultValue={user?.HoTen}
                        disabled
                      />
                    </div>
                  </div>

                  <div className="flex w-full p-2">
                    <div className="w-1/3 items-center flex">
                      <span className="flex text-sm font-medium lg:text-base">Email</span>
                    </div>

                    <div className="w-2/3 flex flex-col">
                      <input
                        name="email"
                        type="email"
                        defaultValue={user?.Email}
                        className="w-full border rounded-sm px-2 py-1 lg:py-2 text-black/50 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm"
                        disabled
                      />
                    </div>
                  </div>

                  <div className="flex w-full p-2">
                    <div className="w-1/3 lg:w-4/12 items-center flex">
                      <span className="flex text-sm font-medium lg:text-base">Số điện thoại</span>
                    </div>

                    <div className="w-2/3 flex flex-col">
                      <input
                        name="phone"
                        type="tel"
                        {...register('phone', {
                          required: 'Số điện thoại không được để trống',
                          pattern: {
                            value: /[0]{1}[0-9]{9}/,
                            message: 'Vui lòng chỉ nhập đủ 10 số',
                          },
                        })}
                        placeholder="VD: 0xxxxxxxxx"
                        className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm"
                      />
                      {errors.phone?.type === 'required' && (
                        <div className="text-xs text-red-500 md:text-sm">
                          Số điện thoại không được để trống
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex w-full p-2">
                    <div className="w-1/3 items-center flex">
                      <span className="flex text-sm font-medium lg:text-base">Số nhà</span>
                    </div>

                    <div className="w-2/3 flex flex-col">
                      <input
                        name="address"
                        type="text"
                        {...register('address', { required: 'Số nhà không được để trống' })}
                        className="w-full border rounded-sm px-2 py-1 lg:py-2 focus:outline-none focus:ring-sky-200 focus:ring-1 placeholder:text-slate-400 placeholder:text-sm"
                        placeholder="VD: 273 An Dương Vương"
                      />
                      {errors.address?.type === 'required' && (
                        <div className="text-xs text-red-500 md:text-sm">
                          {errors.address.message}
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-wrap md:flex-nowrap w-full justify-between">
                    <div className="flex flex-col p-2 md:mr-10 w-full">
                      <select
                        name="city"
                        {...register('city', { required: 'Vui lòng chọn tỉnh thành' })}
                        onChange={(event) => handleProvince(event)}
                        onClick={() => clearErrors('city')}
                        className="border rounded-sm w-full px-2 py-1 lg:py-2 border-black/20 focus:outline-none focus:ring-sky-200 focus:ring-1 text-base"
                      >
                        <option value="" disabled>
                          Tỉnh / Thành phố
                        </option>
                        {province && province !== undefined ? (
                          province.map((item) => (
                            <option key={item.code} value={item.name} id={item.code}>
                              {item.name}
                            </option>
                          ))
                        ) : (
                          <></>
                        )}
                      </select>
                      {errors.city && (
                        <div className="text-xs text-red-500 md:text-sm">{errors.city.message}</div>
                      )}
                    </div>

                    <div className="flex flex-col p-2 w-full">
                      <select
                        name="district"
                        {...register('district', { required: 'Vui lòng chọn quận huyện' })}
                        onChange={(e) => handleDistrict(e)}
                        onClick={() => clearErrors('district')}
                        className="border rounded-sm w-full px-2 py-1 lg:py-2 border-black/20 focus:outline-none focus:ring-sky-200 focus:ring-1 text-base"
                      >
                        <option value="" disabled>
                          Quận / huyện
                        </option>
                        {district && district !== undefined ? (
                          district.map((item) => (
                            <option key={item.code} value={item.name} id={item.code}>
                              {item.name}
                            </option>
                          ))
                        ) : (
                          <></>
                        )}
                      </select>
                      {errors.district && (
                        <div className="text-xs text-red-500 md:text-sm">
                          {errors.district.message}
                        </div>
                      )}
                    </div>

                    <div className="flex flex-col p-2 md:ml-10 w-full">
                      <select
                        name="ward"
                        {...register('ward', { required: 'Vui lòng chọn phường xã' })}
                        onClick={() => clearErrors('ward')}
                        className="border rounded-sm w-full px-2 py-1 lg:py-2 border-black/20 focus:outline-none focus:ring-sky-200 focus:ring-1 text-base"
                      >
                        <option value="" disabled>
                          Phường / xã
                        </option>
                        {ward && ward !== undefined ? (
                          ward.map((item) => (
                            <option key={item.code} value={item.name}>
                              {item.name}
                            </option>
                          ))
                        ) : (
                          <></>
                        )}
                      </select>
                      {errors.ward && (
                        <div className="text-xs text-red-500 md:text-sm">{errors.ward.message}</div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap w-full py-5">
                <div
                  className={`flex w-full lg:px-4 ${darkTheme ? 'text-white' : 'text-slate-700'}`}
                >
                  <span className="w-full text-lg">Phương thức vận chuyển</span>
                </div>

                <div className="flex justify-center items-center w-full border rounded-sm border-gray-200 bg-white drop-shadow-lg mt-2 lg:mx-4">
                  <div className="w-full p-2">
                    <input
                      name="shipping_cost"
                      {...register('shipping_cost', { required: { value: true } })}
                      type="radio"
                      value="30.000đ"
                      checked
                      readOnly
                    />
                    <label htmlFor="shipping_cost" className="mx-2 text-gray-600">
                      Phí vận chuyển tất cả các tỉnh thành
                    </label>
                  </div>
                  <div className="p-2 font-medium text-gray-400">30.000đ</div>
                </div>
              </div>

              <div className="flex flex-wrap w-full py-5">
                <div
                  className={`flex w-full lg:px-4 ${darkTheme ? 'text-white' : 'text-slate-700'}`}
                >
                  <span className="w-full text-lg">Phương thức thanh toán</span>
                </div>

                <div className="flex justify-center items-center w-full border border-gray-200 drop-shadow-lg bg-white mt-2 lg:mx-4">
                  <div className="w-full p-2 flex items-center">
                    <input
                      name="pay_on_delivery"
                      type="radio"
                      value="true"
                      {...register('pay_on_delivery', { required: { value: true } })}
                      checked
                      readOnly
                    />
                    <img
                      src="https://hstatic.net/0/0/global/design/seller/image/payment/cod.svg?v=1"
                      className="mx-2"
                      alt="Payment_Image"
                    />
                    <label htmlFor="shipping_cost" className="text-gray-600">
                      Thanh toán khi giao hàng
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:py-9 py-5 lg:w-6/12 lg:mx-4 mb-4">
              <div className="w-full flex flex-col bg-white border border-gray-200 drop-shadow-lg lg:mt-0 items-end p-3">
                <div className="flex flex-wrap lg:justify-between lg:w-full">
                  <div className="flex flex-col">
                    <span className="py-1 font-light md:text-lg">Tạm tính</span>
                    <span className="py-1 font-light md:text-lg">Phí vận chuyển</span>
                    <span className="py-1 font-light md:text-lg">Tổng cộng</span>
                  </div>

                  <div className="flex flex-col ml-10 items-end">
                    <span className="py-1 font-medium md:text-lg">
                      {changeCostWithDots(totalAllProduct)}đ
                    </span>
                    <span className="py-1 font-medium md:text-lg">30.000đ</span>
                    <span className="py-1 font-semibold text-red-600 text-xl md:text-2xl">
                      {changeCostWithDots(totalAllProduct + 30000)}đ
                    </span>
                  </div>
                </div>
                <div className="flex mt-4 lg:w-full lg:text-center">
                  <div
                    onClick={() => navigate(PATH.main)}
                    className="lg:hidden px-2 py-1 bg-gray-300 rounded-sm transition mx-4 cursor-pointer text-base md:text-lg hover:bg-gray-400"
                  >
                    Giỏ hàng
                  </div>
                  <button
                    type="submit"
                    onClick={() => handlePay()}
                    className="px-7 py-1 lg:w-full bg-red-500 lg:px-0 font-medium hover:bg-red-400 transition text-white rounded-sm cursor-pointer text-base md:text-lg"
                  >
                    Đặt hàng
                  </button>
                </div>
                {notify ? (
                  <Notify
                    close="true"
                    message="Chúc mừng bạn đặt hàng thành công"
                    icon={<AiOutlineSmile className="w-5 h-5 md:w-7 md:h-7 text-slate-700" />}
                    orderSuccess="true"
                    textMessage="text-slate-700"
                    notify={notify}
                    setNotify={(data) => setNotify(data)}
                  />
                ) : (
                  <></>
                )}
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default Payment
