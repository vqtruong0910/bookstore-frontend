import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Loading from '../../components/Loading'
import MenuUser from '../../components/MenuUser'
import useOrder from '../../hooks/useOrder'
import { collection, doc, onSnapshot, query, setDoc, where } from 'firebase/firestore'
import { useContext, useEffect } from 'react'
import { db } from '../../firebase/firebase-config'
import axiosJWT from '../../config/axiosJWT'
import { API } from '../../constants/api'
import Context from '../../store/Context'

function ProfileLayout() {
  const { user } = useContext(Context)
  useOrder()

  useEffect(() => {
    const colRef = collection(db, 'DonHang-GiaoThanhCong')
    const docRef = query(colRef, where('Email', '==', user?.Email))
    onSnapshot(docRef, (snapshot) => {
      let result = []

      snapshot.docs.forEach(async (item) => {
        result.push(item.data().IDDonHang)
      })

      if (result.length > 0) {
        let resultChiTiet = []
        result.forEach(async (item) => {
          const response = await axiosJWT.get(`${API.ORDER_DETAIL}/${item}`)
          resultChiTiet.push(response.data)

          await setDoc(doc(db, 'DonHang-ChiTiet', user?.Email), {
            ...resultChiTiet,
          })
        })
      }
    })
  }, [])

  return (
    <div className="flex my-10 w-full justify-center">
      <div className="flex w-full px-4 xl:px-0 xl:w-4/5 gap-10">
        <div className="hidden md:block h-full">
          <MenuUser />
        </div>

        <div className="w-full">
          <Suspense fallback={<Loading />}>
            <Outlet />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default ProfileLayout
