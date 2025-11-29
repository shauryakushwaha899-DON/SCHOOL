import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGES } from '../constants';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-gray-900/80 border-b border-gray-700 transition-all duration-300">
      <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-3 group">
          <img src={IMAGES.logo} alt="Logo" className="w-12 h-12 rounded-full border-2 border-yellow-400 group-hover:rotate-12 transition duration-300" />
          <div>
            <h1 className="text-xl md:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-300 font-playfair tracking-wide">
              Arya Higher Secondary School
            </h1>
            <p className="text-xs text-gray-400 tracking-widest uppercase">Sandalpur, Kanpur Dehat</p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-4">
          <Link to="/" className="text-gray-300 hover:text-yellow-400 transition font-semibold text-sm uppercase">Home</Link>
          <Link to="/gallery" className="text-gray-300 hover:text-yellow-400 transition font-semibold text-sm uppercase">Gallery</Link>
          <Link to="/about" className="text-gray-300 hover:text-yellow-400 transition font-semibold text-sm uppercase">About Us</Link>
          <button className="px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black font-bold rounded-lg text-sm transition transform hover:scale-105 shadow-lg">
            Admissions
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;