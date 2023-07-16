import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import { useState, useContext, useEffect } from 'react'
import Context from '../../store/Context'
import axiosConfig from '../../config/axiosConfig'
import LoadingSkeletonCategory from '../../components/Loading/LoadingSkeletonCategory'
import Card from '../../components/Card'
import { API } from '../../constants/api'

function Category() {
  const { darkTheme } = useContext(Context)
  const [page, setPage] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, isLoading] = useState(true)

  const sizePerPage = 5
  let arrSoTrang = []
  for (let i = 1; i <= page.SoLuongTrang; i++) {
    arrSoTrang.push(i)
  }

  const nextPage = (item) => {
    setCurrentPage((item) => {
      if (item + 1 > page.SoLuongTrang) return page.SoLuongTrang
      return item + 1
    })
  }

  const prevPage = (item) => {
    setCurrentPage((item) => {
      if (item - 1 < 1) return 1
      return item - 1
    })
  }

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        isLoading(true)
        const response = await axiosConfig(`${API.PAGINATE_ITEM}?p=${currentPage}&s=${sizePerPage}`)
        if (response.data.data) {
          setTimeout(() => {
            isLoading(false)
            setPage(response.data.data)
          }, 250)
        }
      } catch (error) {
        console.log(error)
        isLoading(false)
      }
    }
    fetchBookData()
  }, [currentPage])

  return (
    <>
      {loading && <LoadingSkeletonCategory />}

      {!loading && (
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
          <div className="w-full bg-white">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5">
              {page.DanhSach?.map((item) => {
                return (
                  <div key={item.IDSanPham} className="mb-8">
                    <Card item={item} />
                  </div>
                )
              })}
            </div>
          </div>
          <div className="flex flex-wrap w-full justify-end items-center pt-4">
            <BsArrowLeftCircleFill
              onClick={() => prevPage(currentPage)}
              className={
                currentPage === 1
                  ? 'w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-slate-400 cursor-pointer'
                  : 'w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-slate-700 cursor-pointer'
              }
            />
            {arrSoTrang.map((item, index) => {
              return (
                <span
                  onClick={() => setCurrentPage(item)}
                  key={index}
                  className={
                    currentPage === item
                      ? 'mx-2 font-medium text-sm md:text-base lg:text-lg cursor-pointer bg-slate-400 px-2 text-white'
                      : 'mx-2 font-medium text-sm md:text-base lg:text-lg cursor-pointer'
                  }
                >
                  {item}
                </span>
              )
            })}
            <BsArrowRightCircleFill
              onClick={() => nextPage(currentPage)}
              className={
                currentPage === page.SoLuongTrang
                  ? 'w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-slate-400 cursor-pointer'
                  : 'w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-slate-700 cursor-pointer'
              }
            />
          </div>
        </>
      )}
    </>
  )
}

export default Category
