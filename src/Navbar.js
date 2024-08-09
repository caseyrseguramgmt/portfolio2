import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-800 p-4">
      <div className="text-white text-lg font-bold">My Portfolio</div>
      <div className="flex space-x-4">
        <Link className="text-white hover:text-gray-400" to="/">Home</Link>
        <Link className="text-white hover:text-gray-400" to="/about">About</Link>
        <Link className="text-white hover:text-gray-400" to="/projects">Projects</Link>
        <Link className="text-white hover:text-gray-400" to="/contact">Contact</Link>
        <Link className="text-white hover:text-gray-400" to="/login">Login</Link>
      </div>
    </nav>
  );
}

export default Navbar;
