import './App.reset.css'
import './App.css';
import React from 'react';
import Navbar from './components/common/Navbar/Navbar.common'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar/>
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
      </Routes> */}
    </>
  );
}

export default App;
