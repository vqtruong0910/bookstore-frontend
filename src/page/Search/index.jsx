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
        console.log(response.data.data)
        if (response.data.data) {
          setTimeout(() => {
            isLoading(false)
            setData(response.data.data)
          }, 250)
        }
      } catch (error) {
        isLoading(false)
        console.log(error)
      }
    }
    fetchDataSearch()
  }, [state])

  // useEffect(() => {
  //   if (total === 0) {
  //     const fetchData = async () => {
  //       const response = await axiosConfig(`${API.ALL_ITEM}`)
  //       if (response.data.data) {
  //         setData(response.data.data)
  //       }
  //     }
  //     fetchData()
  //   }
  // }, [total])

  const getResult = () => {
    for (let index = 0; index < data.length; index++) {
      total += 1
    }
    return total
  }

  return (
    <>
      {loading && <LoadingSkeletonSearch></LoadingSkeletonSearch>}

      {!loading && (
        <>
          <div className="flex flex-row w-full">
            <div className="flex flex-col w-full items-start px-4 py-10">
              <div className="flex flex-col gap-0.5 items-center pb-4">
                <div className={`text-lg italic w-full ${darkTheme ? 'text-white' : ''}`}>
                  Từ khóa tìm kiếm : <strong className="text-orange-400">{state}</strong>
                </div>
                <div className={`text-lg italic w-full ${darkTheme ? 'text-white' : ''}`}>
                  Kết quả : <strong className="text-orange-400">{getResult()}</strong>
                </div>
              </div>

              <div className="w-full m-2">
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
