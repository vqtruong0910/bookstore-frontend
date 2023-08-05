import { IoIosArrowDown } from 'react-icons/io'
import useClickOutside from '../../hooks/useClickOutside'
import vi from '../../assets/images/vi.png'
import en from '../../assets/images/en.png'
import ci from '../../assets/images/ci.png'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

function Language({ showName = false }) {
  const { t, i18n } = useTranslation()
  const { show, nodeRef } = useClickOutside()
  const [defaultLanguage, setDefaultLanguage] = useState({
    1: localStorage.getItem('NEXT_LOCALE') === 'vi' ? true : false,
    2: localStorage.getItem('NEXT_LOCALE') === 'en' ? true : false,
    3: localStorage.getItem('NEXT_LOCALE') === 'ci' ? true : false,
  })

  const handleChangeVI = () => {
    setDefaultLanguage(1)
    i18n.changeLanguage('vi')
  }

  const handleChangeEN = () => {
    setDefaultLanguage(2)
    i18n.changeLanguage('en')
  }

  const handleChangeCI = () => {
    setDefaultLanguage(3)
    i18n.changeLanguage('ci')
  }

  useEffect(() => {
    if (localStorage.getItem('NEXT_LOCALE')) {
      switch (localStorage.getItem('NEXT_LOCALE')) {
        case 'vi':
          setDefaultLanguage(1)
          break
        case 'en':
          setDefaultLanguage(2)
          break
        case 'ci':
          setDefaultLanguage(3)
          break
        default:
          setDefaultLanguage(1)
          break
      }
    }
  }, [])

  return (
    <div
      className="cursor-pointer border bg-white border-gray-300 px-2 lg:block items-center rounded-md relative"
      ref={nodeRef}
    >
      <div className="flex items-center justify-between gap-1 transition-all">
        <div className="flex gap-1 items-center">
          <img
            src={
              defaultLanguage === 1
                ? vi
                : defaultLanguage === 2
                ? en
                : defaultLanguage === 3
                ? ci
                : vi
            }
            className="w-12 h-10 py-1"
            alt="lng"
          />
          {showName && (
            <span className="text-sm font-medium">
              {defaultLanguage === 1
                ? t(`Tiếng Việt`)
                : defaultLanguage === 2
                ? t(`Tiếng Anh`)
                : defaultLanguage === 3
                ? t('Tiếng Trung')
                : t(`Tiếng Việt`)}
            </span>
          )}
        </div>

        <IoIosArrowDown className="text-slate-700" />
      </div>

      {show && (
        <div className="absolute mt-2 rounded-sm bg-white w-[150px] right-0 border border-gray-300 z-50 drop-shadow-lg">
          <div
            onClick={handleChangeVI}
            className={`flex gap-2 items-center transition-all ${
              defaultLanguage === 1 ? 'bg-blue-200' : ''
            } px-2`}
          >
            <img src={vi} className="w-10 py-1 rounded-md" alt="avatar" />
            <span className="text-sm font-medium">{t(`Tiếng Việt`)}</span>
          </div>
          <div
            onClick={handleChangeEN}
            className={`flex gap-2 items-center transition-all ${
              defaultLanguage === 2 ? 'bg-blue-200' : ''
            } px-2`}
          >
            <img src={en} className="w-10 py-1 rounded-md" alt="avatar" />
            <span className="text-sm font-medium">{t(`Tiếng Anh`)}</span>
          </div>
          <div
            onClick={handleChangeCI}
            className={`flex gap-2 items-center transition-all ${
              defaultLanguage === 3 ? 'bg-blue-200' : ''
            } px-2`}
          >
            <img src={ci} className="w-10 py-1 rounded-md" alt="avatar" />
            <span className="text-sm font-medium">{t(`Tiếng Trung`)}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Language
