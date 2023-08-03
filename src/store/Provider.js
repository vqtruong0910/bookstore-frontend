import { useMemo, useState, useEffect, useReducer } from 'react'
import Context from './Context'
import { cartReducer, initializer } from '../reducers/cartReducers'

function Provider({ children }) {
  const [darkTheme, setDarkTheme] = useState(false)

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

  useEffect(() => {
    localStorage.setItem('userCart', JSON.stringify(cart))
  }, [cart])

  useEffect(() => {
    if (localStorage.getItem('userTheme') === 'dark') {
      setDarkTheme(true)
    } else {
      setDarkTheme(false)
    }
  }, [])

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
      }}
    >
      {children}
    </Context.Provider>
  )
}

export default Provider
