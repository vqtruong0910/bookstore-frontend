import { useEffect, useState, useContext } from 'react'
import axiosConfig from '../../config/axiosConfig'
import { useLocation } from 'react-router-dom'
import Context from '../../store/Context'
import LoadingSkeletonSearch from '../../components/Loading/LoadingSkeletonSearch'
import Card from '../../components/Card'
import { API } from '../../constants/api'

const Search = () => {
  let total = 0
  const [data, setData] = useState([])
  const [loading, isLoading] = useState(true)
  const { state } = useLocation()
  const { darkTheme } = useContext(Context)
  console.log(state)

  useEffect(() => {
    const fetchDataSearch = async () => {
      try {
        isLoading(true)
        const response = await axiosConfig(`${API.SEARCH_ITEM}?name=${state}`)
        if (response.data.data) {
          isLoading(false)
          setData(response.data.data)
        }

        if (state === null) {
          const response = await axiosConfig(API.ALL_ITEM)
          if (response.data.data) {
            isLoading(false)
            setData(response.data.data)
          }
        }
      } catch (error) {
        isLoading(false)
        console.log(error)
      }
    }
    fetchDataSearch()
  }, [state])

  const getResult = () => {
    for (let index = 0; index < data.length; index++) {
      total += 1
    }
    return total
  }

  return (
    <>
      {loading && <LoadingSkeletonSearch />}

      {!loading && (
        <>
          <div className="flex flex-row w-full">
            <div className="flex flex-col w-full items-start py-10">
              <div className="flex flex-col gap-0.5 items-end pb-4 w-full">
                {state === null && (
                  <>
                    <div className="w-full flex items-center justify-end pb-8">
                      <span
                        className={`mx-2 text-base md:text-lg font-medium ${
                          darkTheme ? 'text-white' : 'text-gray-500'
                        } `}
                      >
                        Sắp xếp
                      </span>
                      <select className="border text-black/70 rounded-sm px-3 py-1 cursor-pointer bg-white border-black/70 focus:outline-none focus:ring-black/40 focus:ring-1 text-base font-semibold">
                        <option value="moinhat">Mới nhất</option>
                        <option value="banchay">Bán chạy</option>
                        <option value="phobien">Phổ biến</option>
                        <option value="giatangdan">Giá tăng dần</option>
                        <option value="giagiamdan">Giá giảm dần</option>
                      </select>
                    </div>
                  </>
                )}

                {state !== null && (
                  <>
                    <div className={`text-lg italic w-full ${darkTheme ? 'text-white' : ''}`}>
                      Từ khóa tìm kiếm : <strong className="text-orange-400">{state}</strong>
                    </div>
                    <div className={`text-lg italic w-full ${darkTheme ? 'text-white' : ''}`}>
                      Kết quả : <strong className="text-orange-400">{getResult()}</strong>
                    </div>
                  </>
                )}
              </div>

              <div className="w-full my-2">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5">
                  {data.length > 0 &&
                    data.map((item, index) => {
                      return (
                        <div key={item.IDSanPham} className="mb-8">
                          <Card item={item} />
                        </div>
                      )
                    })}
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
