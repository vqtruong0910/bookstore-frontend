import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Provider from './store/Provider';
import { BrowserRouter } from 'react-router-dom';
import { AxiosInterceptor } from './config/axiosJWT';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();


root.render(
  <React.StrictMode>
    <BrowserRouter basename={process.env.REACT_APP_BASENAME}>
      <Provider>
        <AxiosInterceptor>
          <QueryClientProvider client={queryClient}>
            <App />
          </QueryClientProvider>
        </AxiosInterceptor>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
