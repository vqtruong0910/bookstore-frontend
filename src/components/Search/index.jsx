import { BsSearch } from 'react-icons/bs'
import { PATH } from '../../constants/path'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axiosConfig from '../../config/axiosConfig'
import { API } from '../../constants/api'
import useClickOutside from '../../hooks/useClickOutside'
import { useTranslation } from 'react-i18next'

const Search = () => {
  const { t } = useTranslation()
  const navigate = useNavigate()
  const [data, setData] = useState([])
  const [query, setQuery] = useState('')
  const { show, nodeRef } = useClickOutside()

  useEffect(() => {
    const fetchBookData = async () => {
      const response = await axiosConfig(`${API.ALL_ITEM}`)
      if (response.data.data) {
        setData(response.data.data)
      }
    }
    fetchBookData()
  }, [])

  const handleSearch = async () => {
    navigate(PATH.search, { state: query, replace: true })
    const search = []
    search.push({})
    localStorage.setItem('userSearch', JSON.stringify(search))
  }

  return (
    <div
      id="search_box"
      className="flex py-1 lg:py-2 border-2 border-gray-300 bg-white rounded-md lg:rounded-lg w-full relative h-full"
      ref={nodeRef}
    >
      <input
        className=" bg-white text-sm md:text-base outline-0 flex w-full pl-2"
        type="text"
        placeholder={t(`Tìm kiếm sản phẩm...`)}
        name="search"
        autoComplete="off"
        value={query ? query : undefined}
        onChange={(e) => setQuery(e.target.value)}
      ></input>

      {show && (
        <div className="z-40 absolute w-full bg-white drop-shadow-lg rounded-sm overflow-y-auto top-8 md:top-9 lg:top-11 border border-gray-300">
          <ul className="text-sm md:text-base">
            {data.length > 0 &&
              data?.map((item) => (
                <li
                  onClick={() => {
                    navigate(PATH.search, { state: item.TenSanPham, replace: true })
                    setQuery(item.TenSanPham)
                  }}
                  key={item.IDSanPham}
                  className="hover:bg-slate-300 cursor-pointer py-1 px-2 hover:text-black/75"
                >
                  {item.TenSanPham}
                </li>
              ))}
          </ul>
        </div>
      )}

      <button
        onClick={handleSearch}
        type="submit"
        className="hover:bg-slate-600 absolute items-center justify-end h-full lg:bg-slate-700 rounded-tr-md rounded-br-md right-0 top-0 flex-1 px-3 flex"
      >
        <BsSearch className="lg:text-white" />
      </button>
    </div>
  )
}

export default Search
