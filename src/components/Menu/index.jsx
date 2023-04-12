import { useState, useCallback, useEffect } from 'react'
import { MenuData } from './MenuData'
import LoadingSkeletonMenu from '../Loading/LoadingSkeletonMenu'

function Menu() {
  const [stateMenuChild, setStateMenuChild] = useState({
    1: false, // Danh muc
    2: false, // Nha xuat ban
    3: false, // Tac gia
  })
  const [loading, isLoading] = useState(true)
  const showMenuChild = useCallback(
    (location) => {
      setStateMenuChild({ ...stateMenuChild, [location]: !stateMenuChild[location] })
    },
    [stateMenuChild]
  )

  const authorArr = [
    { id: 1, name: 'Thích Nhất Hạnh', link: '#' },
    { id: 2, name: 'Nguyễn Nhật Ánh', link: '#' },
    { id: 3, name: 'Tô Hoài', link: '#' },
    { id: 4, name: 'Phạm Công Luận', link: '#' },
    { id: 5, name: 'Keigo Higashino', link: '#' },
    { id: 6, name: 'Dale Carnegie', link: '#' },
    { id: 7, name: 'Murakami Haruki', link: '#' },
    { id: 8, name: 'Phỉ Ngã Tư Tồn', link: '#' },
    { id: 9, name: 'Đồng Hoa', link: '#' },
  ]

  const publisherArr = [
    { id: 1, name: 'Đông A', link: '#' },
    { id: 2, name: 'Đinh Tị', link: '#' },
    { id: 3, name: 'Nhã Nam', link: '#' },
    { id: 4, name: 'NXB Kim Đồng', link: '#' },
    { id: 5, name: 'NXB Trẻ', link: '#' },
    { id: 6, name: 'NXB Giáo dục', link: '#' },
    { id: 7, name: 'NXB Hội Nhà Văn', link: '#' },
    { id: 8, name: 'NXB Phụ nữ Việt Nam', link: '#' },
    { id: 9, name: 'Thái Hà', link: '#' },
    { id: 10, name: 'Alpha Books', link: '#' },
    { id: 11, name: 'AZ Việt Nam', link: '#' },
    { id: 12, name: 'Cty Văn Hoá Văn Lang', link: '#' },
  ]

  useEffect(() => {
    isLoading(true)
    setTimeout(() => {
      isLoading(false)
    }, 250)
  }, [])

  return (
    <>
      {loading && <LoadingSkeletonMenu></LoadingSkeletonMenu>}
      {!loading && (
        <div className="flex flex-col md:pb-4">
          <div className="flex flex-col w-full">
            <div className="hidden md:flex md:flex-col md:items-center md:w-64 lg:w-80 md:shadow-md rounded-sm bg-white">
              <div className="w-full px-4 py-1 border-black/20 border text-lg lg:text-xl text-white font-semibold bg-slate-700">
                Danh mục sản phẩm
              </div>
              <div className="flex flex-col w-full px-4 py-5">
                {stateMenuChild[1] ? (
                  <>
                    {MenuData.map((item, index) => {
                      return (
                        <div key={index}>
                          <div className="w-full">
                            <div className="text-gray-500 font-medium text-lg lg:text-xl w-full cursor-pointer border-b">
                              {item.name}
                            </div>
                          </div>
                          <div className="w-full py-2">
                            {item.subMenuItem2.map((itemChild, index) => (
                              <div
                                key={index}
                                className="py-0.5 md:text-lg hover:underline hover:underline-offset-2 text-base cursor-pointer"
                              >
                                {itemChild.name}
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </>
                ) : (
                  <>
                    {MenuData.slice(0, 2).map((item, index) => {
                      return (
                        <div key={index}>
                          <div className="w-full">
                            <div className="text-gray-500 font-medium text-lg lg:text-xl w-full cursor-pointer border-b">
                              {item.name}
                            </div>
                          </div>
                          <div className="w-full py-2">
                            {item.subMenuItem2.map((itemChild, index) => (
                              <div
                                key={index}
                                className="py-0.5 md:text-lg hover:underline hover:underline-offset-2 text-base cursor-pointer"
                              >
                                {itemChild.name}
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    })}
                  </>
                )}

                <div className="flex justify-center py-2">
                  <div
                    onClick={() => showMenuChild(1)}
                    className="px-6 py-1 bg-slate-700 hover:bg-slate-500 transition flex items-center rounded-sm cursor-pointer"
                  >
                    <span className="text-white font-medium text-sm lg:text-base flex">
                      {stateMenuChild[1] ? 'Rút gọn' : 'Xem thêm'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:bg-white md:flex md:flex-col md:items-center md:mt-16 md:w-64 lg:w-80 md:shadow-md">
              <div className="w-full px-4 py-1 border-black/20 border text-lg lg:text-xl text-white font-semibold bg-slate-700">
                Giá
              </div>
              <div className="flex flex-col w-full px-4 py-5">
                <div className="flex items-center mb-4">
                  <input
                    id="checkbox1"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-slate-700 focus:ring-2"
                  />
                  <label htmlFor="checkbox1" className="ml-2 text-base md:text-lg">
                    0đ - 50.000đ
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="checkbox2"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-slate-700 focus:ring-2"
                  />
                  <label htmlFor="checkbox2" className="ml-2 text-base md:text-lg">
                    50.000đ - 100.000đ
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="checkbox3"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-slate-700 focus:ring-2"
                  />
                  <label htmlFor="checkbox3" className="ml-2 text-base md:text-lg">
                    100.000đ - 150.000đ
                  </label>
                </div>
                <div className="flex items-center mb-4">
                  <input
                    id="checkbox4"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-slate-700 focus:ring-2"
                  />
                  <label htmlFor="checkbox4" className="ml-2 text-base md:text-lg">
                    150.000đ - 200.000đ
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    id="checkbox4"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-slate-700 focus:ring-2"
                  />
                  <label htmlFor="checkbox4" className="ml-2 text-base md:text-lg">
                    200.000đ - 250.000đ
                  </label>
                </div>
              </div>
            </div>

            <div className="hidden md:bg-white md:flex md:flex-col md:items-center md:mt-16 md:w-64 lg:w-80 md:shadow-md">
              <div className="w-full px-4 py-1 border-black/20 border text-lg lg:text-xl text-white font-semibold bg-slate-700">
                Nhà xuất bản
              </div>
              <div className="flex flex-col w-full px-4 py-5">
                {stateMenuChild[2] ? (
                  <>
                    {publisherArr.map((item, index) => {
                      return (
                        <div key={index} className="flex items-center mb-4">
                          <input
                            id={`checkbox_${item.id}`}
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-slate-700 focus:ring-2"
                          />
                          <label
                            htmlFor={`checkbox_${item.id}`}
                            className="ml-2 text-base md:text-lg"
                          >
                            {item.name}
                          </label>
                        </div>
                      )
                    })}
                  </>
                ) : (
                  <>
                    {publisherArr.slice(0, 4).map((item, index) => {
                      return (
                        <div key={index} className="flex items-center mb-4">
                          <input
                            id={`checkbox_${item.id}`}
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-slate-700 focus:ring-2"
                          />
                          <label
                            htmlFor={`checkbox_${item.id}`}
                            className="ml-2 text-base md:text-lg"
                          >
                            {item.name}
                          </label>
                        </div>
                      )
                    })}
                  </>
                )}

                <div className="flex justify-center py-2">
                  <div
                    onClick={() => showMenuChild(2)}
                    className="px-6 py-1 bg-slate-700 hover:bg-slate-500 transition flex items-center rounded-sm cursor-pointer"
                  >
                    <span className="text-white font-medium text-sm lg:text-base flex">
                      {stateMenuChild[2] ? 'Rút gọn' : 'Xem thêm'}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden md:bg-white md:flex md:flex-col md:items-center md:mt-16 mb-6 md:w-64 lg:w-80 md:shadow-md">
              <div className="w-full px-4 py-1 border-black/20 border text-lg lg:text-xl text-white font-semibold bg-slate-700">
                Tác giả
              </div>
              <div className="flex flex-col w-full px-4 py-5">
                {stateMenuChild[3] ? (
                  <>
                    {authorArr.map((item, index) => {
                      return (
                        <div key={index} className="flex items-center mb-4">
                          <input
                            id={`checkbox_${item.id}`}
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-slate-700 focus:ring-2"
                          />
                          <label
                            htmlFor={`checkbox_${item.id}`}
                            className="ml-2 text-base md:text-lg"
                          >
                            {item.name}
                          </label>
                        </div>
                      )
                    })}
                  </>
                ) : (
                  <>
                    {authorArr.slice(0, 4).map((item, index) => {
                      return (
                        <div key={index} className="flex items-center mb-4">
                          <input
                            id={`checkbox_${item.id}`}
                            type="checkbox"
                            value=""
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-slate-700 focus:ring-2"
                          />
                          <label
                            htmlFor={`checkbox_${item.id}`}
                            className="ml-2 text-base md:text-lg"
                          >
                            {item.name}
                          </label>
                        </div>
                      )
                    })}
                  </>
                )}
                <div className="flex justify-center py-2">
                  <div
                    onClick={() => showMenuChild(3)}
                    className="px-6 py-1 bg-slate-700 hover:bg-slate-500 transition flex items-center rounded-sm cursor-pointer"
                  >
                    <span className="text-white font-medium text-sm lg:text-base flex">
                      {stateMenuChild[3] ? 'Rút gọn' : 'Xem thêm'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Menu
