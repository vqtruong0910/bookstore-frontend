import { useEffect, useState, useContext, Fragment } from 'react'
import axiosConfig from '../../config/axiosConfig'
import { useLocation } from 'react-router-dom'
import Context from '../../store/Context'
import LoadingSkeletonSearch from '../../components/Loading/LoadingSkeletonSearch'
import Card from '../../components/Card'

const Search = () => {
  const [data, setData] = useState([])
  const [loading, isLoading] = useState(true)
  const { state } = useLocation()
  const { darkTheme } = useContext(Context)

  useEffect(() => {
    const fetchDataSearch = async () => {
      try {
        isLoading(true)
        const response = await axiosConfig(`product/search?name=${state}`)
        // console.log(response.data.data)
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

  return (
    <>
      {loading && <LoadingSkeletonSearch></LoadingSkeletonSearch>}

      {!loading && (
        <>
          <div className="flex flex-row w-full">
            <div className="flex flex-col w-full items-start px-4 pb-8">
              <div className="flex items-center pb-4">
                <div className={`text-xl font-semibold w-full ${darkTheme ? 'text-white' : ''}`}>
                  Từ khóa tìm kiếm : {state}
                </div>
              </div>

              <div className="w-full m-2">
                <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5">
                  {data.length > 0 &&
                    data.map((item, index) => {
                      return (
                        <Fragment key={item.IDSanPham}>
                          <Card item={item} />
                        </Fragment>
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
