import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../constants/path'
import axios from 'axios'
import axiosJWT from '../../config/axiosJWT'
import { useForm } from 'react-hook-form'
import Context from '../../store/Context'
import LoadingSkeletonPayment from '../../components/Loading/LoadingSkeletonPayment'
import Input from '../../components/Input'
import { VALIDATE } from '../../constants/validate'
import Select from '../../components/Select'
import Field from '../../components/Field'
import Radio from '../../components/Radio'
import Swal from 'sweetalert2'
import { API } from '../../constants/api'

function Payment() {
  let totalAllProduct = 0
  const navigate = useNavigate()
  const { user, cart, darkTheme } = useContext(Context)
  const [province, setProvince] = useState([])
  const [district, setDistrict] = useState([])
  const [ward, setWard] = useState([])
  const [provinceCode, setProvinceCode] = useState('')
  const [districtCode, setDistrictCode] = useState('')
  const [loading, isLoading] = useState(true)
  const { control, handleSubmit } = useForm({
    mode: 'onBlur',
    defaultValues: {
      fullName: user?.HoTen || '',
      email: user?.Email || '',
      phone: '',
      address: '',
      city: '',
      district: '',
      ward: '',
      shipping_cost: '30.000đ',
      pay_on_delivery: true,
    },
  })

  const onSubmit = async (data) => {
    try {
      const detail = []
      cart.forEach((item) => {
        const { IDSanPham, quantity, GiaBan } = item
        detail.push({ IDSanPham, SoLuong: quantity, GiaBan })
      })
      await axiosJWT.post(`${API.MANAGE_ORDER}/`, {
        DiaChi: `${data.address} ${data.ward}, ${data.district}, ${data.city}`,
        PhiShip: 30000,
        ChiTietDonHang: detail,
      })
      Swal.fire({
        title: 'Chúc mừng bạn đã đặt hàng thành công',
        icon: 'success',
        showCancelButton: false,
        confirmButtonColor: 'rgb(29, 192, 113)',
        confirmButtonText: 'Xem đơn hàng',
      }).then(async (result) => {
        if (result.isConfirmed) {
          navigate(PATH.profile.user_order_management)
        }
      })

      return navigate('/')
    } catch (error) {
      console.log(error)
    }
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
      const response = await axios(`${API.GET_LIST_PROVINCE}`)
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
      const response = await axios(`${API.GET_LIST_PROVINCE}/${provinceCode}?depth=2`)
      setDistrict(response.data.districts)
    }
    fetchDistrictData()
  }, [provinceCode])

  useEffect(() => {
    const fetchWardData = async () => {
      const response = await axios(`${API.GET_LIST_DISTRICT}/${districtCode}?depth=2`)
      setWard(response.data.wards)
    }
    fetchWardData()
  }, [districtCode])

  return (
    <>
      {loading && <LoadingSkeletonPayment></LoadingSkeletonPayment>}
      {!loading && (
        <div className="flex flex-wrap w-full px-4 py-10" id="payment">
          <form onSubmit={handleSubmit(onSubmit)} className="w-full flex flex-wrap lg:flex-nowrap">
            <div className="flex flex-wrap w-full">
              <div className="flex flex-wrap w-full">
                <div
                  className={`flex w-full lg:px-4 ${darkTheme ? 'text-white' : 'text-slate-700'}`}
                >
                  <span className="w-full text-lg font-medium">THÔNG TIN GIAO HÀNG</span>
                </div>

                <div className="flex flex-wrap justify-center w-full bg-white border border-gray-200 drop-shadow-lg mt-2 lg:mx-4">
                  <Field title="Họ & tên">
                    <Input
                      type="text"
                      name="fullName"
                      placeholder="Nhập họ và tên"
                      id="fullName"
                      control={control}
                      rules={VALIDATE.fullname}
                    />
                  </Field>

                  <Field title="Email">
                    <Input
                      type="email"
                      name="email"
                      placeholder="Nhập email"
                      id="email"
                      control={control}
                      rules={VALIDATE.email}
                    />
                  </Field>

                  <Field title="Số điện thoại">
                    <Input
                      type="phone"
                      name="phone"
                      placeholder="Nhập số điện thoại"
                      id="phone"
                      control={control}
                      rules={VALIDATE.phone}
                    />
                  </Field>

                  <Field title="Địa chỉ">
                    <Input
                      type="text"
                      name="address"
                      placeholder="Nhập địa chỉ"
                      id="address"
                      control={control}
                      rules={VALIDATE.address}
                    />
                  </Field>

                  <div className="flex flex-wrap md:flex-nowrap w-full justify-between">
                    <Select
                      control={control}
                      name="city"
                      state={province}
                      id="city"
                      rules={VALIDATE.province}
                      title="Tỉnh/Thành phố"
                      onClick={handleProvince}
                    />

                    <Select
                      onClick={handleDistrict}
                      control={control}
                      name="district"
                      state={district}
                      id="district"
                      rules={VALIDATE.district}
                      title="Quận/huyện"
                    />

                    <Select
                      control={control}
                      name="ward"
                      state={ward}
                      id="ward"
                      rules={VALIDATE.ward}
                      title="Phường/xã"
                    />
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
                  <Radio
                    control={control}
                    name="shipping_cost"
                    id="shipping_cost"
                    title="Phí vận chuyển tất cả các tỉnh thành"
                    value="30.000đ"
                  ></Radio>
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
                  <Radio
                    control={control}
                    name="pay_on_delivery"
                    image={true}
                    title="Thanh toán khi giao hàng"
                  ></Radio>
                </div>
              </div>
            </div>
            <div className="w-full lg:py-9 py-0 lg:w-6/12 lg:mx-4">
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
                    className="lg:hidden px-2 py-1 bg-gray-300 rounded-md transition mx-4 cursor-pointer text-sm md:text-base lg:text-lg hover:bg-gray-400"
                  >
                    Giỏ hàng
                  </div>
                  <button
                    type="submit"
                    onClick={() => handlePay()}
                    className="px-7 py-1 lg:w-full bg-red-500 lg:px-0 font-medium hover:bg-red-400 transition text-white rounded-md cursor-pointer text-sm md:text-base lg:text-lg"
                  >
                    Đặt hàng
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default Payment
