import { useRef } from 'react'
import { useCallback } from 'react'
import { useController } from 'react-hook-form'
import logo from '../../assets/images/cloud-upload-regular-240.png'
import { useTranslation } from 'react-i18next'

function DropFile({ name, control, rules, onChangeImage }) {
  const { t } = useTranslation()
  const wrapperRef = useRef()
  const { field, fieldState } = useController({ name, control, rules })
  const { onChange, onBlur, value, ...rest } = field

  const onDragOver = useCallback(() => {
    wrapperRef.current.classList.add('opacity-60')
  }, [])

  const onDrop = useCallback(() => {
    wrapperRef.current.classList.remove('opacity-60')
  }, [])

  const onDragLeave = useCallback(() => {
    wrapperRef.current.classList.remove('opacity-60')
  }, [])

  return (
    <>
      <div
        className="flex relative bg-slate-200 rounded-sm shadow-sm border-dashed border-2 border-slate-500 px-8 hover:opacity-60 h-28"
        ref={wrapperRef}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
      >
        <div className="flex justify-center">
          <img src={logo} className="object-contain w-full" alt="upload" />
          <input
            type="file"
            {...rest}
            accept=".gif, .jpg, .png"
            className="absolute inset-0 opacity-0 cursor-pointer"
            onChange={(e) => {
              onChangeImage(e)
            }}
          />
        </div>
        <h2 className="flex justify-center text-lg items-center w-full text-cyan-700">
          {t(`Click vào hoặc kéo ảnh vào đây`)}
        </h2>
      </div>
      {fieldState.error && (
        <span className="px-2 italic text-sm text-red-500">{t(fieldState.error.message)}*</span>
      )}
    </>
  )
}

export default DropFile
