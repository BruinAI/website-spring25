import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Team from './pages/Team/Team';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/team" element={<Team />} />
    </Routes>
  );
}

export default App;