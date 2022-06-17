// import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import LandingPage from './components/LandingPage/LandingPage';
import ArtikelPage from './components/ArtikelPage/Artikel';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </header>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Routes>
        <Route path='/' element={<ArtikelPage/>} />
      </Routes>
    </div>
  );
}

export default App;
