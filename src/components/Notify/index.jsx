import clsx from 'clsx'
import logo from '../../assets/images/logo.png'
import { PATH } from '../../constants/path'
import { useNavigate } from 'react-router-dom'
import ReactDOM from 'react-dom'

function Notify(props) {
  const { notify, setNotify } = props
  console.log(notify)
  const navigate = useNavigate()
  return ReactDOM.createPortal(
    <>
      <div
        className={clsx(
          notify &&
            'fixed inset-0 w-full h-full bg-slate-900 bg-opacity-50 z-20 transition-opacity duration-200'
        )}
      ></div>
      <div
        onClick={() => setNotify(false)}
        className={clsx(notify && 'flex fixed inset-0 items-center justify-center h-full z-30')}
      >
        <div className="max-w-full text-sm shadow-sm pointer-events-auto bg-clip-padding w-80 md:w-96">
          <div className="flex items-center px-3 text-gray-500 bg-slate-700 w-full">
            <img
              src={logo}
              className="mr-2 my-2 text-lg rounded-full w-10 h-10"
              alt="BookStore_logo"
            />
            <strong className="mr-auto text-white font-lobster text-lg lg:text-xl">
              Book Store
            </strong>
            {props.close === 'true' ? (
              <button
                type="button"
                className="box-content p-1 ml-3 -mr-1 text-black rounded opacity-50 hover:opacity-100"
              >
                <svg
                  onClick={() => setNotify(false)}
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  width="192"
                  height="192"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <line
                    x1="200"
                    y1="56"
                    x2="56"
                    y2="200"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                    fill="none"
                  ></line>
                  <line
                    x1="200"
                    y1="200"
                    x2="56"
                    y2="56"
                    stroke="#000000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                    fill="none"
                  ></line>
                </svg>
              </button>
            ) : (
              <></>
            )}
          </div>
          <div className="py-3 w-full bg-white flex flex-col">
            <div className="flex w-full justify-center items-center">
              {props.icon}
              <span
                className={`text-sm md:text-base lg:text-lg ${props.textMessage} mx-1 text-orange-600 font-semibold`}
              >
                {props.message}
              </span>
            </div>
            {props.addToCart === 'true' ? (
              <div className="flex w-full mt-3">
                <div className="w-full text-center flex items-center justify-center rounded-sm">
                  <span
                    onClick={() => setNotify(false)}
                    className="px-2 py-1 bg-slate-700 text-white text-base rounded-sm hover:bg-slate-500 hover:text-orange-400 cursor-pointer"
                  >
                    Mua thêm
                  </span>
                </div>
                <div className="w-full text-center flex items-center justify-center rounded-sm">
                  <span
                    onClick={() => navigate(PATH.cart)}
                    className="px-2 py-1 bg-slate-700 text-white text-base rounded-sm hover:bg-slate-500 hover:text-orange-400 cursor-pointer"
                  >
                    Xem giỏ hàng
                  </span>
                </div>
              </div>
            ) : (
              <></>
            )}
            {props.orderSuccess === 'true' ? (
              <div className="flex w-full justify-between mt-3 px-4">
                <div className="text-center flex items-center justify-center rounded-sm">
                  <span
                    onClick={() => navigate(PATH.main)}
                    className="px-2 py-1 bg-slate-700 text-white text-base rounded-sm hover:bg-slate-500 cursor-pointer"
                  >
                    Tiếp tục mua hàng
                  </span>
                </div>
                <div className="text-center flex items-center justify-center rounded-sm">
                  <span
                    onClick={() => navigate(PATH.profile.user_order_management)}
                    className="px-2 py-1 bg-slate-700 text-white text-base rounded-sm hover:bg-slate-500 cursor-pointer"
                  >
                    Xem đơn hàng
                  </span>
                </div>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>,

    document.querySelector('body')
  )
}

export default Notify
