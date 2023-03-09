import { useEffect, useState, useContext } from 'react'
import axiosConfig from '../../config/axiosConfig'
import { useLocation, useNavigate } from 'react-router-dom'
import SearchLayout from '../../layout/SearchLayout'
import style from './Search.module.scss'
import { FiShoppingBag } from 'react-icons/fi'
import Notify from '../../components/Notify'
import Context from '../../store/Context'
import { addToCart } from '../../reducers/cartReducers'
import LoadingSkeletonSearch from '../../components/Loading/LoadingSkeletonSearch'
import Menu from '../../components/Menu'

const Search = () => {
  const [notify, setNotify] = useState(false)
  const [data, setData] = useState([])
  const [loading, isLoading] = useState(true)
  const { state } = useLocation()
  const navigate = useNavigate()
  const { dispatch } = useContext(Context)

  const addToCartHandler = (product) => {
    dispatch(addToCart(product))
    return setNotify(true)
  }

  const changeCostWithDots = (item) => {
    return item.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.')
  }

  useEffect(() => {
    const fetchDataSearch = async () => {
      try {
        isLoading(true)
        const response = await axiosConfig(`product/search?name=${state}`)
        console.log(response.data.data)
        if (response.data.data) {
          setTimeout(() => {
            isLoading(false)
            setData(response.data.data)
          }, 500)
        }
      } catch (error) {
        isLoading(false)
        console.log(error)
      }
    }
    fetchDataSearch()
  }, [state])

  return (
    <>
      {loading && <LoadingSkeletonSearch></LoadingSkeletonSearch>}

      {!loading && (
        <>
          <div className="flex flex-row w-full">
            <div className="flex flex-col w-full items-start px-4">
              <div className="flex items-center h-16">
                <div className="mt-4 text-xl font-semibold py-4 w-full">
                  Từ khóa tìm kiếm : {state}
                </div>
              </div>

              <div className="w-full m-2">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5">
                  {data.length > 0 &&
                    data.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className="grid justify-self-center items-self-center relative w-full"
                        >
                          <div
                            onClick={() => navigate(`/books/${item.IDSanPham}`)}
                            className="flex w-full justify-center drop-shadow-md mt-3 cursor-pointer h-56 md:h-72"
                          >
                            <img className="w-full" src={item.HinhAnh} alt="New Book" />
                          </div>

                          <div className="grid w-full py-3 px-4">
                            <span
                              className={`${style['product_name']} self-center w-full text-sm md:text-base lg:text-xl font-medium lg:leading-6`}
                            >
                              {item.TenSanPham}
                            </span>
                          </div>

                          <div className="flex justify-between items-center font-medium w-full px-4">
                            <div className="text-red-600 text-lg md:text-xl">
                              {changeCostWithDots(item.GiaBan)}đ
                            </div>
                          </div>

                          <div className="flex w-full mt-2 mb-4 px-4">
                            <div
                              onClick={() => addToCartHandler(item)}
                              className="flex w-full rounded-sm bg-slate-700 hover:bg-slate-500 transition items-center justify-center py-1"
                            >
                              <FiShoppingBag className="w-5 h-5 text-white" />
                              <div className=" text-sm md:text-base lg:text-lg text-white py-1 mx-0.5">
                                Thêm giỏ hàng
                              </div>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  {notify ? (
                    <Notify
                      close="true"
                      message="Sản phẩm đã được thêm vào giỏ hàng"
                      textMessage="text-slate-700"
                      notify={notify}
                      setNotify={(data) => setNotify(data)}
                      addToCart="true"
                    />
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Search
