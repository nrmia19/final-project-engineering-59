// import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import LandingPage from './components/LandingPage/LandingPage';
// import Home from './components/Home/Home';
// import Konsultasi from './components/Konsultasi/Konsultasi';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          {/* <Route path="/profile" element={<Home />} /> */}
      </Routes>

    </div>
  );
}

export default App;
