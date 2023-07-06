import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import App from './App'
import Provider from './store/Provider'
import { BrowserRouter } from 'react-router-dom'
import { AxiosInterceptor } from './config/axiosJWT'
import { QueryClient, QueryClientProvider } from 'react-query'
import { I18nextProvider } from 'react-i18next'
import i18n from './translation/i18'

const root = ReactDOM.createRoot(document.getElementById('root'))

const queryClient = new QueryClient()

root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n}>
      <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
        <Provider>
          <AxiosInterceptor>
            <QueryClientProvider client={queryClient}>
              <App />
            </QueryClientProvider>
          </AxiosInterceptor>
        </Provider>
      </BrowserRouter>
    </I18nextProvider>
  </React.StrictMode>
)
