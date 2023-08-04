import { useCallback, useState } from 'react'
import { BsChevronDown, BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import clsx from 'clsx'
import useNavbarData from '../../hooks/useNavbarData'
import Language from '../Language'

const Sidebar = ({ open, onClick = () => {} }) => {
  const { NavbarData } = useNavbarData()
  const navigate = useNavigate()
  const [stateMenuChild, setStateMenuChild] = useState({
    1: false, // Danh muc
    2: false, // Nha xuat ban
    3: false, // Tac gia
    4: false, // Tai khoan
  })

  const showMenuChild = useCallback(
    (location) => {
      setStateMenuChild({ ...stateMenuChild, [location]: !stateMenuChild[location] })
    },
    [stateMenuChild]
  )
  return (
    <div
      className={clsx(
        'hide-scrollbar lg:hidden flex flex-col overflow-y-auto fixed z-50 top-0 bottom-0 left-0 bg-gray-800 w-72 duration-300 ease-linear transition-all',
        open && 'visible translate-x-0 ',
        !open && 'invisible -translate-x-full'
      )}
    >
      <div className="flex items-center w-full justify-between px-2">
        <div className="w-14 h-14">
          <img className="w-full rounded-full" src={logo} alt="bookstore" />
        </div>
        <span className="py-9 text-2xl font-lobster text-white font-bold select-none">
          Bảng điều khiển
        </span>
        <div className=" cursor-pointer" onClick={onClick}>
          <BsFillArrowLeftCircleFill className="h-8 w-8 text-white"></BsFillArrowLeftCircleFill>
        </div>
      </div>

      <div className="px-2">
        <Language showName={true} />
      </div>

      <ul className="flex flex-col">
        {NavbarData.map((menu, index) => {
          return (
            <div
              onClick={() => navigate(menu.link)}
              key={index}
              className={
                open
                  ? 'px-2 py-5 mx-2 relative flex hover:bg-slate-900 text-white font-semibold text-base hover:cursor:pointer cursor-pointer'
                  : 'hidden'
              }
            >
              <div className="flex flex-col w-full justify-center">
                {menu.id === 2 ? (
                  <>
                    <div>{menu.icon}</div>
                    <li className="flex justify-between items-center ml-10 relative">
                      {menu.name}
                      <div
                        key={menu.id}
                        onClick={() => showMenuChild(1)}
                        className="absolute right-0 cursor-pointer"
                      >
                        <BsChevronDown
                          className={clsx(
                            stateMenuChild[1] && 'rotate-180 transition-all duration-400'
                          )}
                        />
                      </div>
                    </li>

                    <div
                      className={clsx(
                        'transition-all overflow-hidden',
                        stateMenuChild[1]
                          ? 'h-auto visible translate-y-0'
                          : 'h-0 invisible translate-y-10'
                      )}
                    >
                      {menu.subMenuItem1.map((item1, index) => {
                        return (
                          <div key={index} className="py-3 w-full px-7">
                            <div className="flex py-2 w-full justify-between text-gray-400 cursor-pointer text-sm border-b">
                              {item1.name}
                            </div>
                            <div className="w-full flex flex-col text-base font-normal mt-1">
                              {item1.subMenuItem2.map((item2, index) => {
                                return (
                                  <div key={index} className="py-2 focus:underline cursor-pointer">
                                    {item2.name}
                                  </div>
                                )
                              })}
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </>
                ) : menu.id === 3 ? (
                  <>
                    <div>{menu.icon}</div>
                    <li className="flex items-center ml-10 relative">
                      {menu.name}
                      <div
                        onClick={() => showMenuChild(2)}
                        className="absolute right-0 cursor-pointer"
                      >
                        <BsChevronDown
                          className={clsx(
                            stateMenuChild[2] && 'rotate-180 transition-all duration-400'
                          )}
                        />
                      </div>
                    </li>

                    <div
                      className={clsx(
                        'transition-all overflow-hidden',
                        stateMenuChild[2]
                          ? 'h-auto visible translate-y-0'
                          : 'h-0 invisible translate-y-10'
                      )}
                    >
                      {menu.submenuItems.map((submenuItem, index) => {
                        return (
                          <div
                            key={index}
                            className="flex py-3 text-gray-400 w-full px-7 cursor-pointer"
                          >
                            {submenuItem.name}
                          </div>
                        )
                      })}
                    </div>
                  </>
                ) : menu.id === 4 ? (
                  <>
                    <div>{menu.icon}</div>
                    <li className="flex items-center ml-10 relative">
                      {menu.name}
                      <div
                        onClick={() => showMenuChild(3)}
                        className="absolute right-0 cursor-pointer"
                      >
                        <BsChevronDown
                          className={clsx(
                            stateMenuChild[3] && 'rotate-180 transition-all duration-400'
                          )}
                        />
                      </div>
                    </li>

                    <div
                      className={clsx(
                        'transition-all overflow-hidden',
                        stateMenuChild[3] ? 'h-auto visible translate-y-0' : 'h-0 translate-y-10'
                      )}
                    >
                      {menu.submenuItems.map((submenuItem, index) => {
                        return (
                          <div
                            key={index}
                            className="flex py-3 text-gray-400 w-full px-7 cursor-pointer"
                          >
                            {submenuItem.name}
                          </div>
                        )
                      })}
                    </div>
                  </>
                ) : (
                  <>
                    <div>{menu.icon}</div>
                    <li className="items-center ml-10">{menu.name}</li>
                  </>
                )}
              </div>
            </div>
          )
        })}
      </ul>
    </div>
  )
}

export default Sidebar
