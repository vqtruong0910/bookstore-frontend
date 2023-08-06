import { useMemo, useState, useEffect, useReducer } from 'react'
import Context from './Context'
import { cartReducer, initializer } from '../reducers/cartReducers'
import { useTranslation } from 'react-i18next'

function Provider({ children }) {
  const { i18n } = useTranslation()
  const [darkTheme, setDarkTheme] = useState(false)
  const [defaultLanguage, setDefaultLanguage] = useState({
    1: localStorage.getItem('NEXT_LOCALE') === 'vi' ? true : false,
    2: localStorage.getItem('NEXT_LOCALE') === 'en' ? true : false,
    3: localStorage.getItem('NEXT_LOCALE') === 'ci' ? true : false,
  })

  const defaultUser = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem('user'))
    } catch (error) {
      return false
    }
  }, [])

  const [user, setUser] = useState(defaultUser)
  const [cart, dispatch] = useReducer(cartReducer, [], initializer)

  const toggleDarkTheme = () => {
    setDarkTheme(!darkTheme)
    localStorage.setItem('userTheme', !darkTheme ? 'dark' : 'light')
  }

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

  useEffect(() => {
    if (localStorage.getItem('userTheme') === 'dark') {
      setDarkTheme(true)
    } else {
      setDarkTheme(false)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('userCart', JSON.stringify(cart))
  }, [cart])

  return (
    <Context.Provider
      value={{
        user,
        setUser,
        cart,
        dispatch,
        darkTheme,
        setDarkTheme,
        toggleDarkTheme,
        defaultLanguage,
        handleChangeVI,
        handleChangeEN,
        handleChangeCI,
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Provider
