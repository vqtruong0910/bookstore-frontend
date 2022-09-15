import './App.css';
import { useCallback } from 'react';
import MainRoutes from './routes/main';

function App() {
  const mainRoutes = useCallback(() => (
    <MainRoutes />
  ), [])
  return (
    <div className='App'>
      {mainRoutes()}
    </div>
  );
}

export default App;
