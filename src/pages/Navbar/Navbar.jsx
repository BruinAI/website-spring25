import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="w-full flex items-center px-6 py-2 md:py-3 fixed top-0 left-0 z-50 bg-zinc-950/69 md:bg-black/11 backdrop-blur-sm mx-4 mt-2 rounded-full transition-all duration-300 hover:bg-zinc-950/80 md:hover:bg-black/20">
            <Link to="/">
                <img src={'src/assets/bruinailogo.svg'} alt="Bruin AI Logo" className="w-[125px]" />
            </Link>
            {/* Hamburger for mobile */}
            <button
                className="md:hidden ml-auto text-white focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle navigation menu"
            >
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            <div className={`flex flex-col md:flex-row md:flex md:gap-8 items-center md:mx-auto md:pr-[125px] md:items-center md:static absolute top-full left-0 w-full md:w-auto bg-zinc-950/69 md:bg-transparent overflow-hidden transition-all duration-300 ease-out ${menuOpen ? 'max-h-64 opacity-100 py-2 pointer-events-auto' : 'max-h-0 opacity-0 py-0 pointer-events-none'} md:max-h-none md:opacity-100 md:py-0 md:pointer-events-auto md:overflow-visible`}>
                <Link to="/" className="text-white font-medium text-sm hover:text-gray-300 pb-2 md:py-0" onClick={() => setMenuOpen(false)}>HOME</Link>
                <Link to="/about" className="text-white font-medium text-sm hover:text-gray-300 py-2 md:py-0" onClick={() => setMenuOpen(false)}>ABOUT US</Link>
                <Link to="/events" className="text-white font-medium text-sm hover:text-gray-300 py-2 md:py-0" onClick={() => setMenuOpen(false)}>EVENTS</Link>
                <Link to="/projects" className="text-white font-medium text-sm hover:text-gray-300 py-2 md:py-0" onClick={() => setMenuOpen(false)}>PROJECTS</Link>
                <Link to="/join" className="text-white font-medium text-sm hover:text-gray-300 py-2 md:py-0" onClick={() => setMenuOpen(false)}>JOIN</Link>
            </div>
        </nav>
    );
}

export default Navbar;