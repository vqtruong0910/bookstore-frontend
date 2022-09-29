import './App.css';
import { useCallback } from 'react';
import MainRoutes from './routes/main';

function App() {
  const mainRoutes = useCallback(() => (
    <MainRoutes />
  ), [])

  // const adminRoutes = useCallback(() => (
  //   <AdminRoutes />
  // ), [])
  return (
    <>
      {mainRoutes()}
    </>
  );
}

export default App;
