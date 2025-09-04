import { useState } from 'react'
import { Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Events from './pages/Events/Events';
import Join from './pages/Join/Join';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/events" element={<Events />} />
      <Route path="/join" element={<Join />} />
      <Route path="/projects" element={<Projects />} />
    </Routes>
  );
}

export default App;