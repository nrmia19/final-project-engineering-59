// import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import LandingPage from './components/LandingPage/LandingPage';
import ArtikelPage from './components/ArtikelPage/ArtikelPage';
import Home from './components/Home/Home';
import Konsultasi from './components/Konsultasi/Konsultasi';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/home" element={<Home />} />
          <Route path="/artikel" element={<ArtikelPage />} />
          <Route path="/konsultasi" element={<Konsultasi />} />
      </Routes>

    </div>
  );
}

export default App;
