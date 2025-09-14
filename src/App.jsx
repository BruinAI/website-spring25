import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css'
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Events from './pages/Events/Events';
import Join from './pages/Join/Join';
import Projects from './pages/Projects/Projects';

// Component to scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<Events />} />
        <Route path="/join" element={<Join />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;