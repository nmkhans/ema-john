import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
      </Routes>
    </div>
  );
}

export default App;
