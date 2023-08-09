import { useContext, useEffect, useState } from 'react'
import { API } from '../constants/api'
import axiosJWT from '../config/axiosJWT'
import { doc, setDoc } from 'firebase/firestore'
import { db } from '../firebase/firebase-config'
import Context from '../store/Context'

function useOrder() {
  const [order, setOrder] = useState([])
  const [orderRes, setOrderRes] = useState(null)
  const [loading, isLoading] = useState(true)
  const { user } = useContext(Context)

  useEffect(() => {
    const fetchAllOrderData = async () => {
      try {
        const response = await axiosJWT.get(`${API.ORDER}/user_id`)
        isLoading(true)
        if (response.data) {
          isLoading(false)
          setOrder(response.data)
        }
      } catch (error) {
        console.log(error)
        isLoading(true)
      }
    }
    fetchAllOrderData()
  }, [])

  useEffect(() => {
    setOrderRes(order ? order.filter((item) => item.TrangThai === 3) : undefined)

    orderRes?.map(async (item) => {
      await setDoc(doc(db, 'DonHang-GiaoThanhCong', item.IDDonHang.toString()), {
        ...item,
        Email: user.Email,
        HoTen: user.HoTen,
        Anh: user.Anh,
      })
    })
  }, [order])

  return {
    order,
    loading,
  }
}

export default useOrder
