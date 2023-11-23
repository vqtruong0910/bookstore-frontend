import { useTranslation } from 'react-i18next'

function NotFound() {
  const { t } = useTranslation()

  return (
    <div className="py-60">
      <h1 className="text-center text-6xl font-bold">404</h1>
      <h2 className="text-center text-4xl">{t(`Trang không tồn tại!`)}</h2>
    </div>
  )
}

export default NotFound
