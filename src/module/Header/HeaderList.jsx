import { useNavigate } from 'react-router-dom'
import { NavbarData } from '../../components/Navbar/NavbarData'

const HeaderList = () => {
  const navigate = useNavigate()
  return (
    <ul className="hidden lg:flex justify-between w-full items-center">
      {NavbarData.map((menu, index) => (
        <li
          key={index}
          onClick={() => navigate(menu.link)}
          className="flex items-center w-full py-1 justify-center group transition-colors relative font-semibold text-white hover:bg-slate-400 cursor-pointer"
        >
          {menu.name}

          {menu.id === 2 ? (
            <>
              <div className="hidden group-hover:block text-start w-800 absolute z-20 bg-white top-8 left-0 border rounded-sm shadow-md">
                <div className="grid grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-5 p-2">
                  {menu.subMenuItem1.map((item1, index) => {
                    return (
                      <div key={index} className="flex flex-col">
                        <div className="w-full text-sm lg:text-base font-bold text-slate-700">
                          {item1.name}
                        </div>
                        {item1.subMenuItem2.map((item2, index) => {
                          return (
                            <div key={index} className="w-full flex flex-col">
                              <div className="text-sm lg:text-base py-1 font-normal text-black hover:underline">
                                {item2.name}
                              </div>
                            </div>
                          )
                        })}
                      </div>
                    )
                  })}
                </div>
              </div>
            </>
          ) : (
            <></>
          )}

          {menu.id === 3 ? (
            <>
              <div className="hidden group-hover:block max-w-[300px] w-[203px] text-start absolute z-20 bg-white top-8 left-0 border rounded-sm shadow-md">
                <ul className="flex flex-col w-full">
                  {menu.submenuItems.map((submenuItem, index) => {
                    return (
                      <div
                        key={index}
                        className="flex justify-center text-black font-normal py-2 hover:underline cursor-pointer w-full"
                      >
                        {submenuItem.name}
                      </div>
                    )
                  })}
                </ul>
              </div>
            </>
          ) : (
            <></>
          )}

          {menu.id === 4 ? (
            <>
              <div className="hidden group-hover:block text-start max-w-[300px] w-[203px] absolute z-20 bg-white top-8 left-0 border rounded-sm shadow-md">
                <ul className="flex flex-col w-full">
                  {menu.submenuItems.map((submenuItem, index) => {
                    return (
                      <div
                        key={index}
                        className="flex hover:underline justify-center text-black font-normal py-2 hover:cursor-pointer w-full"
                      >
                        {submenuItem.name}
                      </div>
                    )
                  })}
                </ul>
              </div>
            </>
          ) : (
            <></>
          )}
        </li>
      ))}
    </ul>
  )
}

export default HeaderList
