import './App.css'
import { useCallback } from 'react'
import MainRoutes from './routes/main'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { useTranslation } from 'react-i18next'

function App() {
  const { t, i18n } = useTranslation()

  const mainRoutes = useCallback(() => <MainRoutes />, [])

  return <>{mainRoutes()}</>
}

export default App
