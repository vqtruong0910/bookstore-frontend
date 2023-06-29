import React, { useState, useEffect, useContext } from 'react'
import { RiFileListLine } from 'react-icons/ri'
import { IoReload } from 'react-icons/io5'
import { HiOutlineTruck } from 'react-icons/hi'
import { FiCheckSquare } from 'react-icons/fi'
import { BiTaskX } from 'react-icons/bi'
import { AiOutlineSearch } from 'react-icons/ai'
import axiosJWT from '../../../config/axiosJWT'
import LoadingSkeletonUserOrderManagement from '../../../components/Loading/LoadingSkeletonUserOrderManagement'
import AllOrder from '../../../module/UserOrder/AllOrder'
import BeingProcessedOrder from '../../../module/UserOrder/BeingProcessedOrder'
import BeingShippedOrder from '../../../module/UserOrder/BeingShippedOrder'
import DeliveredOrder from '../../../module/UserOrder/DeliveredOrder'
import CancelledOrder from '../../../module/UserOrder/CancelledOrder'
import Context from '../../../store/Context'
import { API } from '../../../constants/api'

function UserOrderManagement() {
  const [loading, isLoading] = useState(true)
  const [showDiv, setShowDiv] = useState(1)
  const [order, setOrder] = useState([])
  const { darkTheme } = useContext(Context)

  const handleDiv = (e) => {
    setShowDiv(e)
  }

  useEffect(() => {
    const fetchAllOrderData = async () => {
      try {
        const response = await axiosJWT.get(`${API.ORDER}/user_id`)
        isLoading(true)
        if (response.data) {
          setTimeout(() => {
            isLoading(false)
            setOrder(response.data)
          }, 250)
        }
      } catch (error) {
        console.log(error)
        isLoading(true)
      }
    }
    fetchAllOrderData()
  }, [])

  useEffect(() => {
    const topOfElement = document.querySelector('#user-order-management') - 200
    window.scroll({ top: topOfElement, behavior: 'smooth' })
  }, [])

  return (
    <>
      {loading && <LoadingSkeletonUserOrderManagement></LoadingSkeletonUserOrderManagement>}
      {!loading && (
        <div className="flex flex-wrap md:flex-col w-full" id="user-order-management">
          <div className="flex w-full px-4 md:px-0">
            <span
              className={`w-full text-lg font-semibold mb-5 lg:text-xl ${
                darkTheme ? 'text-white' : 'text-slate-700'
              }`}
            >
              Quản lý đơn hàng
            </span>
          </div>

          <form className="w-full px-4 md:px-0 pb-4">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center px-3 h-full hover:bg-blue-100 cursor-pointer rounded-sm">
                <button type="submit">
                  <AiOutlineSearch className="w-5 h-5" />
                </button>
              </div>
              <input
                type="search"
                className="focus:outline-none focus:ring-1 focus:ring-blue-200 block py-2 pl-12 w-full text-sm lg:text-base lg:placeholder:text-lg text-gray-900 bg-gray-50 border border-gray-300"
                placeholder="Tìm kiếm theo ID đơn đặt hàng hoặc Tên sản phẩm"
              />
            </div>
          </form>

          <div className="flex justify-center w-full mx-4 md:mx-0 rounded-sm bg-white shadow-md">
            <div className="w-full flex flex-wrap md:flex-nowrap md:cursor-pointer md:px-0 md:py-0">
              <div
                onClick={() => handleDiv(1)}
                className={
                  showDiv === 1
                    ? 'px-4 w-full flex justify-between items-center py-4 whitespace-nowrap bg-slate-300 cursor-pointer'
                    : 'px-4 w-full flex justify-between items-center py-4 whitespace-nowrap cursor-pointer'
                }
              >
                <div className="text-sm text-gray-700 font-medium flex items-center w-full md:justify-center">
                  <RiFileListLine className="w-5 h-5 md:hidden" />
                  <span className="flex px-0.5 md:text-xs lg:text-base font-semibold lg:font-normal">
                    Tất cả đơn
                  </span>
                </div>
                <div className="w-28 flex justify-center border bg-slate-700 rounded-sm py-2 cursor-pointer md:hidden">
                  <span className="text-xs font-normal text-white px-2">Xem chi tiết</span>
                </div>
              </div>
              <div
                onClick={() => handleDiv(2)}
                className={
                  showDiv === 2
                    ? 'px-4 w-full flex justify-between items-center py-4 whitespace-nowrap bg-slate-300 cursor-pointer'
                    : 'px-4 w-full flex justify-between items-center py-4 whitespace-nowrap cursor-pointer'
                }
              >
                <div className="text-sm text-gray-700 font-medium flex items-center w-full md:justify-center">
                  <IoReload className="w-5 h-5 md:hidden" />
                  <span className="flex px-0.5 md:text-xs lg:text-base font-semibold lg:font-normal">
                    Đang xử lý
                  </span>
                </div>
                <div className="w-28 flex justify-center border bg-slate-700 rounded-sm py-2 cursor-pointer md:hidden">
                  <span className="text-xs font-normal text-white">Xem chi tiết</span>
                </div>
              </div>
              <div
                onClick={() => handleDiv(3)}
                className={
                  showDiv === 3
                    ? 'px-4 w-full flex justify-between items-center py-4 whitespace-nowrap bg-slate-300 cursor-pointer'
                    : 'px-4 w-full flex justify-between items-center py-4 whitespace-nowrap cursor-pointer'
                }
              >
                <div className="text-sm text-gray-700 font-medium flex items-center w-full md:justify-center">
                  <HiOutlineTruck className="w-5 h-5 md:hidden" />
                  <span className="flex px-0.5 md:text-xs lg:text-base whitespace-nowrap font-semibold lg:font-normal">
                    Đang vận chuyển
                  </span>
                </div>
                <div className="w-28 flex justify-center border bg-slate-700 rounded-sm py-2 cursor-pointer md:hidden">
                  <span className="text-xs font-normal text-white">Xem chi tiết</span>
                </div>
              </div>
              <div
                onClick={() => handleDiv(4)}
                className={
                  showDiv === 4
                    ? 'px-4 w-full flex justify-between items-center py-4 whitespace-nowrap bg-slate-300 cursor-pointer'
                    : 'px-4 w-full flex justify-between items-center py-4 whitespace-nowrap cursor-pointer'
                }
              >
                <div className="text-sm text-gray-700 font-medium flex items-center w-full md:justify-center">
                  <FiCheckSquare className="w-5 h-5 md:hidden" />
                  <span className="flex px-0.5 md:text-xs lg:text-base font-semibold lg:font-normal">
                    Đã giao
                  </span>
                </div>
                <div className="w-28 flex justify-center border bg-slate-700 rounded-sm py-2 cursor-pointer md:hidden">
                  <span className="text-xs font-normal text-white">Xem chi tiết</span>
                </div>
              </div>
              <div
                onClick={() => handleDiv(5)}
                className={
                  showDiv === 5
                    ? 'px-4 w-full flex justify-between items-center py-4 whitespace-nowrap bg-slate-300 cursor-pointer'
                    : 'px-4 w-full flex justify-between items-center py-4 whitespace-nowrap cursor-pointer'
                }
              >
                <div className="text-sm text-gray-700 font-medium flex items-center w-full md:justify-center">
                  <BiTaskX className="w-5 h-5 md:hidden" />
                  <span className="flex px-0.5 md:text-xs lg:text-base font-semibold lg:font-normal">
                    Đã hủy
                  </span>
                </div>
                <div className="w-28 flex justify-center border bg-slate-700 rounded-sm py-2 cursor-pointer md:hidden">
                  <span className="text-xs font-normal text-white">Xem chi tiết</span>
                </div>
              </div>
            </div>
          </div>

          {showDiv === 1 && (
            <div className="w-full px-4 md:px-0">
              <AllOrder data={order}></AllOrder>
            </div>
          )}

          {showDiv === 2 && (
            <div className="w-full px-4 md:px-0">
              <BeingProcessedOrder data={order}></BeingProcessedOrder>
            </div>
          )}

          {showDiv === 3 && (
            <div className="w-full px-4 md:px-0">
              <BeingShippedOrder data={order}></BeingShippedOrder>
            </div>
          )}

          {showDiv === 4 && (
            <div className="w-full px-4 md:px-0">
              <DeliveredOrder data={order}></DeliveredOrder>
            </div>
          )}

          {showDiv === 5 && (
            <div className="w-full px-4 md:px-0">
              <CancelledOrder data={order}></CancelledOrder>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default UserOrderManagement
