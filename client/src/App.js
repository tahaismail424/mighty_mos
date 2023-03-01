import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';

const App = () => {
  return (
  <Router>
    <Routes>
      <Route exact path='/' element={<Home />}></Route>
      <Route exact path='/menu' element={<Menu />}></Route>
    </Routes>
  </Router>
  );
};

export default App;
