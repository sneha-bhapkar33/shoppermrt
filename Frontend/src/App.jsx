import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { api } from './services/api';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';


export default function App() {
  const [products, setProducts] = useState([]);
  const [session, setSessionState] = useState(() => JSON.parse(localStorage.getItem('shopSession') || 'null'));


  useEffect(() => { api('/products').then(data => 
    setProducts(data.products)).catch(() => 
      setProducts([])); 
}, []);

  function login(sessionData) { localStorage.setItem('shopSession', JSON.stringify(sessionData)); setSessionState(sessionData); }
  function logout() { localStorage.removeItem('shopSession'); setSessionState(null); }


  return <>
  <Header/>
    <Routes>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/" element={<HomePage products={products}/>}/>
      <Route path="/products/:id" element={<ProductPage products={products} />}/>
    </Routes>
  </>
}
