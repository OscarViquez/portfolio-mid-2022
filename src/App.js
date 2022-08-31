import './App.reset.css'
import './App.css';
import React from 'react';
import Navbar from './components/common/Navbar/Navbar.common'
import Home from './pages/Home';

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
