import { BsSearch } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { PATH } from '../../constants/path'
import { useRef, useState, useEffect } from 'react'
const Search = () => {
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [showDropdown, setShowDropdown] = useState(false)
  const dropdownRef = useRef()

  useEffect(() => {
    const handleClickOutDropdown = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false)
      } else {
        setShowDropdown(true)
      }
    }
    document.addEventListener('click', handleClickOutDropdown)
    return () => {
      document.removeEventListener('click', handleClickOutDropdown)
    }
  }, [])

  const handleSearch = () => {
    navigate(PATH.search, { state: query, replace: true })
    // const search = document.getElementsByName("search").value;
    const search = []
    search.push({})
    localStorage.setItem('userSearch', JSON.stringify(search))
  }

  return (
    <>
      <div
        className="hidden md:flex md:flex-row md:items-center md:w-64 md:lg:w-96"
        ref={dropdownRef}
      >
        <div
          id="search_box"
          className="flex mx-3 md:mx-3 h-10 w-10/12 md:w-11/12 border-2 bg-white "
        >
          <input
            className="px-2 bg-white text-md outline-0 flex w-10/12 md:w-11/12"
            type="text"
            placeholder="Tìm kiếm..."
            name="search"
            onChange={(e) => setQuery(e.target.value)}
            autoComplete="off"
            onClick={() => setShowDropdown(!showDropdown)}
          ></input>

          {showDropdown && (
            <div className="z-10 absolute bg-white drop-shadow-lg rounded-br overflow-y-auto mt-1 lg:mt-3 translate-y-1/2 w-56 lg:w-80 border border-gray-300">
              <ul className="md:text-sm lg:text-base">
                <li className="hover:bg-slate-300 cursor-pointer p-1  hover:text-black/75">
                  Cà phê cùng tony
                </li>
                <li className="hover:bg-slate-300 cursor-pointer p-1  hover:text-black/75">
                  Thời niên thiếu không thể quay lại ấy
                </li>
              </ul>
            </div>
          )}

          <button
            // onClick={() => { navigate(PATH.search, { state: query, replace: true }) }}
            onClick={handleSearch}
            type="submit"
            className="hover:bg-gray-200 w-2/12 md:w-1/12 flex relative items-center justify-center"
          >
            <BsSearch />
          </button>
        </div>
      </div>

      {/* Mobile */}
      <div
        id="search_box"
        className="flex justify-between mr-2 h-8 border w-9/12 bg-white md:hidden"
        ref={dropdownRef}
      >
        <input
          className="outline-0 bg-white px-2 text-sm flex w-11/12"
          type="text"
          placeholder="Tìm kiếm..."
          name="search"
          onChange={(e) => setQuery(e.target.value)}
          autoComplete="off"
          onClick={() => setShowDropdown(!showDropdown)}
        ></input>

        {showDropdown && (
          <div className="z-50 absolute bg-white drop-shadow-lg rounded-br overflow-y-auto translate-y-10 w-8/12 border border-gray-300">
            <ul className="md:text-sm lg:text-base">
              <li className="hover:bg-slate-300 cursor-pointer p-1  hover:text-black/75">
                Cà phê cùng tony
              </li>
              <li className="hover:bg-slate-300 cursor-pointer p-1  hover:text-black/75">
                Thời niên thiếu không thể quay lại ấy
              </li>
            </ul>
          </div>
        )}

        <button
          // onClick={() => { navigate(PATH.search, { state: query, replace: true }) }}
          onClick={handleSearch}
          type="submit"
          className="hover:bg-gray-200 w-1/12 flex relative items-center justify-center"
        >
          <BsSearch />
        </button>
      </div>
    </>
  )
}

export default Search
