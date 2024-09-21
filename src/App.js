import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Loja from './pages/Loja';
import Contato from './pages/Contato';
import ReadGoogleSheet from './pages/Test'
import Barra from './components/Barra';
import './App.css';

function App() {
  return (
    <Router>
     <Barra/>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/loja" element={<Loja />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/test" element={<ReadGoogleSheet />} />
      </Routes>
    </Router>
  );
}

export default App;
