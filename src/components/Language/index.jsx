import { IoIosArrowDown } from 'react-icons/io'
import useClickOutside from '../../hooks/useClickOutside'
import vi from '../../assets/images/vi.png'
import en from '../../assets/images/en.png'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

function Language() {
  const { t, i18n } = useTranslation()
  const { show, nodeRef } = useClickOutside()
  const [defaultLanguage, setDefaultLanguage] = useState(true)
  const handleChangeVI = () => {
    setDefaultLanguage(true)
    i18n.changeLanguage('vi')
  }

  const handleChangeEN = () => {
    setDefaultLanguage(false)
    i18n.changeLanguage('en')
  }

  return (
    <div
      className="hidden cursor-pointer border border-gray-300 px-2 lg:block items-center rounded-md relative"
      ref={nodeRef}
    >
      <div className="flex items-center gap-1">
        {defaultLanguage ? (
          <img src={vi} className="w-12 h-10 py-1" alt="language" />
        ) : (
          <img src={en} className="w-12 h-10 py-1" alt="language" />
        )}

        <IoIosArrowDown className="text-slate-700" />
      </div>

      {show && (
        <div className="absolute mt-2 rounded-sm bg-white w-full right-0 border border-gray-300 z-50 drop-shadow-lg">
          <div
            onClick={handleChangeVI}
            className={`flex gap-2 items-center transition-all ${
              defaultLanguage && 'bg-blue-200'
            } px-2`}
          >
            <img src={vi} className="w-10 py-1 rounded-md" alt="avatar" />
            <span className="text-sm font-medium">VN</span>
          </div>
          <div
            onClick={handleChangeEN}
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
