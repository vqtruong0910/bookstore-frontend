import { IoMdRemove } from 'react-icons/io'
import { IoAddSharp } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../constants/path'
import React, { useContext, useEffect, useState } from 'react'
import Context from '../../store/Context'
import {
  incrementItemQuantity,
  decrementItemQuantity,
  removeFromCart,
} from '../../reducers/cartReducers'
import LoadingSkeletonCart from '../../components/Loading/LoadingSkeletonCart'
import Image from '../../components/Image'

function Cart() {
  const [loading, isLoading] = useState(true)
  const navigate = useNavigate()
  const { user, cart, dispatch, darkTheme } = useContext(Context)
  const removeFromCartHandler = (itemToRemove) => dispatch(removeFromCart(itemToRemove))
  const decrementQuantity = (item) => dispatch(decrementItemQuantity(item))
  const incrementQuantity = (item) => dispatch(incrementItemQuantity(item))
  let totalAllProduct = 0
  let disable = false
  const handleClickPayment = () => {
    if (!user) {
      navigate(PATH.login)
    } else {
      navigate(PATH.payment)
    }
  }
  const { items } = cart.reduce(
    ({ items }, { cost, quantity }) => ({
      items: items + quantity,
    }),
    { items: 0 }
  )
  cart.forEach((item) => {
    totalAllProduct += item.GiaBan * item.quantity
    if (item.quantity > item.SoLuongConLai) {
      disable = true
    }
  })
  const changeCostWithDots = (item) => {
    return item.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
  }

  useEffect(() => {
    const topOfElement = document.querySelector('#detail-book') - 200
    window.scroll({ top: topOfElement, behavior: 'smooth' })
    isLoading(true)
    setTimeout(() => {
      isLoading(false)
    }, 250)
  }, [])

  return (
    <>
      {loading && <LoadingSkeletonCart></LoadingSkeletonCart>}

      {!loading && (
        <div className="flex flex-wrap w-full xl:w-4/5 mx-auto py-10">
          <div className="flex flex-wrap w-full">
            <div className="flex w-full lg:px-4">
              <span
                className={`w-full text-lg font-medium px-4 xl:px-0 ${
                  darkTheme ? 'text-white' : 'text-slate-700'
                }`}
              >
                GIỎ HÀNG CỦA BẠN
              </span>
            </div>

            {cart.length === 0 && (
              <div
                className={`flex flex-col items-center w-full ${
                  darkTheme ? 'text-white' : 'text-slate-700'
                }`}
              >
                <img
                  src="https://salt.tikicdn.com/desktop/img/mascot@2x.png"
                  alt="Go_Shopping"
                  className="w-40 h-32 md:w-48 md:h-40 my-5"
                />
                <span className="text-center text-base">
                  Không có sản phẩm nào trong giỏ hàng của bạn
                </span>
                <button
                  onClick={() => navigate(PATH.main)}
                  className="text-base my-5 bg-yellow-300 py-2 px-10 hover:bg-yellow-400 rounded-sm font-medium text-gray-700"
                >
                  Tiếp tục mua sắm
                </button>
              </div>
            )}

            {cart.length === 0 ? (
              <></>
            ) : (
              <div className="w-full flex flex-wrap lg:flex-nowrap">
                <div className="w-full lg:w-8/12">
                  <div className="hidden md:flex md:flex-row md:justify-between md:bg-white md:py-2 mx-4 xl:mx-0 shadow-md">
                    <div className="w-full text-base text-center">Tất cả ({items} sản phẩm)</div>
                    <div className="w-full text-base text-center">Đơn giá</div>
                    <div className="w-full text-base text-center">Số lượng</div>
                    <div className="w-full text-base text-center">Thành tiền</div>
                  </div>

                  <div className="bg-white shadow-md flex flex-col mt-4 mx-4 xl:mx-0 gap-4">
                    {cart.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="border border-gray-200 rounded-sm drop-shadow-lg"
                        >
                          <div className="hidden md:px-4 md:py-1 md:block">
                            Số lượng còn lại : {item.SoLuongConLai}
                          </div>
                          <div className="hidden md:flex md:flex-row md:mx-2 md:my-7 md:justify-between md:w-full">
                            <div
                              onClick={() => navigate(`/books/${item.IDSanPham}`)}
                              className="cursor-pointer flex w-full flex-col items-center justify-center"
                            >
                              <Image item={item} className="w-36 h-36" />

                              <div className="mt-2 flex justify-center">
                                <span className="text-base font-medium text-center">
                                  {item.TenSanPham}
                                </span>
                              </div>
                            </div>

                            <div className="w-full flex items-center justify-center">
                              <span className="my-0.5 text-xl font-nnormal mx-1">
                                {changeCostWithDots(item.GiaBan)}đ
                              </span>
                            </div>

                            <div className="w-full flex flex-col justify-center items-center">
                              <div className="flex flex-row">
                                <div className="flex flex-row mx-5 items-center w-24 rounded-sm border border-slate-300">
                                  <button
                                    onClick={() => decrementQuantity(item)}
                                    className="w-full border-r-2 flex justify-center cursor-pointer"
                                  >
                                    <IoMdRemove className="w-5 h-7 text-gray-600" />
                                  </button>
                                  <div className="w-full flex justify-center">
                                    <span className="text-gray-800 font-semibold">
                                      {item.quantity}
                                    </span>
                                  </div>
                                  <button
                                    onClick={() => incrementQuantity(item)}
                                    className="w-full border-l-2 flex justify-center cursor-pointer"
                                  >
                                    <IoAddSharp className="w-5 h-7 text-gray-600" />
                                  </button>
                                </div>

                                <button
                                  onClick={() => removeFromCartHandler(item)}
                                  className="border px-4 rounded-md bg-gray-300 hover:bg-gray-400 hover:text-white cursor-pointer"
                                >
                                  Xoá
                                </button>
                              </div>

                              {item.quantity > item.SoLuongConLai ? (
                                <div className="text-red-500">Số lượng còn lại không đủ</div>
                              ) : (
                                <></>
                              )}
                            </div>

                            <div className="w-full flex items-center justify-center">
                              <span className="my-0.5 text-xl font-medium text-red-600">
                                {changeCostWithDots(item.GiaBan * item.quantity)}đ
                              </span>
                            </div>
                          </div>

                          <div className="w-full my-7 flex flex-col md:hidden px-3">
                            <div className="flex w-full">
                              <Image item={item} className="h-32 w-32" />

                              <div className="flex w-full flex-col gap-2 justify-center px-2">
                                <span className="w-full text-base font-medium text-gray-600">
                                  {item.TenSanPham}
                                </span>

                                <span className=" text-lg font-medium text-red-600">
                                  {changeCostWithDots(item.GiaBan)}đ
                                </span>
                                <span className="text-sm text-medium text-gray-500">
                                  Số lượng còn lại : {item.SoLuongConLai}
                                </span>
                              </div>
                            </div>

                            <div className="flex flex-row items-center w-full justify-between mt-4">
                              <div className="flex items-center">
                                <span className="text-gray-500 text-sm font-semibold">
                                  Số lượng
                                </span>
                                <div className="flex flex-row mx-2 items-center w-24 rounded-sm border border-slate-300 justify-between">
                                  <div
                                    onClick={() => decrementQuantity(item)}
                                    className="w-full border-r-2 flex justify-center cursor-pointer"
                                  >
                                    <IoMdRemove className="w-5 h-7 text-gray-600" />
                                  </div>
                                  <div className="w-full flex justify-center">
                                    <span className="text-gray-800 font-semibold">
                                      {item.quantity}
                                    </span>
                                  </div>
                                  <div
                                    onClick={() => incrementQuantity(item)}
                                    className="w-full border-l-2 flex justify-center cursor-pointer"
                                  >
                                    <IoAddSharp className="w-5 h-7 text-gray-500" />
                                  </div>
                                </div>
                                {item.quantity > item.SoLuongConLai ? (
                                  <div className="text-red-500">Số lượng còn lại không đủ</div>
                                ) : (
                                  <></>
                                )}
                              </div>

                              <div
                                onClick={() => removeFromCartHandler(item)}
                                className="border-2 px-6 text-sm py-0.5 font-normal rounded-md bg-gray-300 hover:bg-gray-400 cursor-pointer hover:text-white"
                              >
                                Xoá
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div className="w-full lg:w-4/12 mt-4 mx-4 lg:mt-0">
                  <div className="w-full flex flex-col border bg-white shadow-md items-end lg:justify-between p-3">
                    <div className="flex flex-wrap lg:w-full lg:justify-between">
                      <div className="flex flex-col">
                        <span className="py-1 font-light md:text-lg">Tạm tính</span>
                        <span className="py-1 font-light md:text-lg">Tổng cộng</span>
                      </div>

                      <div className="flex flex-col ml-10 items-end">
                        <span className="py-1 font-medium md:text-lg">
                          {changeCostWithDots(totalAllProduct)}đ
                        </span>
                        <span className="py-1 font-medium text-red-600 text-xl md:text-2xl">
                          {changeCostWithDots(totalAllProduct)}đ
                        </span>
                      </div>
                    </div>
                    <span className="text-gray-500 text-sm md:text-base italic">
                      Phí vận chuyển sẽ được tính ở trang thanh toán
                    </span>
                    <div className="flex mt-4 lg:w-full lg:text-center">
                      <div
                        onClick={() => navigate(PATH.main)}
                        className="lg:hidden px-2 py-1 bg-gray-300 rounded-md transition mx-4 cursor-pointer text-sm whitespace-nowrap md:text-base lg:text-lg hover:bg-gray-400"
                      >
                        Tiếp tục mua hàng
                      </div>
                      <button
                        onClick={() => handleClickPayment()}
                        className="px-7 py-1 lg:w-full bg-red-500 lg:px-0 font-medium hover:bg-red-400 transition text-white rounded-md cursor-pointer text-sm whitespace-nowrap md:text-base lg:text-lg"
                        disabled={disable}
                      >
                        Thanh toán
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Cart
