import { IoIosArrowDown } from 'react-icons/io'
import useClickOutside from '../../hooks/useClickOutside'
import vi from '../../assets/images/vi.png'
import en from '../../assets/images/en.png'
import { useState } from 'react'

function Language() {
  const { show, nodeRef } = useClickOutside()
  const [defaultLanguage, setDefaultLanguage] = useState(true)

  return (
    <div
      className="hidden cursor-pointer border px-2 lg:block items-center rounded-md relative"
      ref={nodeRef}
    >
      <div className="flex items-center gap-1">
        {defaultLanguage ? (
          <img src={vi} className="w-12 h-10 py-1" alt="language" />
        ) : (
          <img src={en} className="w-12 h-10 py-1" alt="language" />
        )}

        <IoIosArrowDown className="text-white" />
      </div>

      {show && (
        <div className="absolute mt-2 rounded-sm bg-white w-full right-0 border border-gray-300 z-50 drop-shadow-lg">
          <div
            onClick={() => setDefaultLanguage(true)}
            className={`flex gap-2 items-center transition-all ${
              defaultLanguage && 'bg-blue-200'
            } px-2`}
          >
            <img src={vi} className="w-10 py-1 rounded-md" alt="avatar" />
            <span className="text-sm font-medium">VN</span>
          </div>
          <div
            onClick={() => setDefaultLanguage(false)}
            className={`flex gap-2 items-center transition-all ${
              !defaultLanguage && 'bg-blue-200'
            } px-2`}
          >
            <img src={en} className="w-10 py-1 rounded-md" alt="avatar" />
            <span className="text-sm font-medium">EN</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Language
