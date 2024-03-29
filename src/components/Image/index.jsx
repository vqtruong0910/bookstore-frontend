import { useNavigate } from 'react-router-dom'
import styles from './Image.module.scss'
import { IoArrowRedoOutline } from 'react-icons/io5'
import { useTranslation } from 'react-i18next'

function Image({ item, className = '', overlay = true }) {
  const { t } = useTranslation()
  const navigate = useNavigate()

  return (
    <div
      onClick={() => navigate(`/books/${item.IDSanPham}`)}
      className={`${styles['image-wrapper']} flex w-full justify-center mb-4 cursor-pointer`}
    >
      <img
        className={`w-full object-contain max-h-[250px] ${className}`}
        src={item.HinhAnh}
        alt="book"
      />

      {overlay && (
        <div className={`${styles['overlay']} font-semibold text-slate-700 hover:scale-110`}>
          <div className="flex items-center justify-center py-0.5 px-2 bg-white rounded-md">
            <IoArrowRedoOutline />
            <span>{t(`Chi tiết`)}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Image
