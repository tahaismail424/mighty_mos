import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Cart from './pages/Cart';
import OrderPage from './pages/Order';
import Checkout from './pages/Checkout';

const App = () => {
  return (
  <Router>
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/menu' element={<Menu />}></Route>
      <Route exact path='/cart' element={<Cart />}></Route>
      <Route exact path='/order' element={<OrderPage />}></Route>
      <Route exact path='/checkout' element={<Checkout />}></Route>
    </Routes>
  </Router>
  );
};

export default App;
