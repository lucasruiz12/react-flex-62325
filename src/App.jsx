import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import fetchData from './fetchData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import ItemDetail from './components/ItemDetail';
import { ContextProvider } from './components/Context';
import Cart from './components/Cart';

function App() {

  return (
    <ContextProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetail />} />
          <Route path="/cart" element={<Cart />} />
          {/* <Route path="/checkout" element={<Checkout />} /> Aquí es donde tendríamos que solicitarle al usuario el formulario para que ponga sus datos*/}
          <Route path="*" element={<NotFound />} />
          
        </Routes>
      </BrowserRouter>
    </ContextProvider>
  )
}

export default App
