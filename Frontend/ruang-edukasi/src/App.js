// import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home';
import Konsultasi from './components/Konsultasi/Konsultasi';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        
      </Routes>
      <Routes>
      <Route path="/konsultasi" element={<Konsultasi />} />
        </Routes>

    </div>
  );
}

export default App;
