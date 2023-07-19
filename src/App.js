import './App.css'
import { useCallback } from 'react'
import MainRoutes from './routes/main'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function App() {
  const mainRoutes = useCallback(() => <MainRoutes />, [])

  return <>{mainRoutes()}</>
}

export default App
