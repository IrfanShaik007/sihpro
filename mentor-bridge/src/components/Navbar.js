import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ role }) => {
  return (
    <nav className="bg-blue-700 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          Mentor Bridge
        </Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
          <Link to="/explore" className="hover:text-gray-300">Explore</Link>
          <Link to={`/profile/${role}`} className="hover:text-gray-300">Profile</Link>
          <Link to="/logout" className="hover:text-gray-300">Logout</Link>
        </div>
        <div className="md:hidden flex items-center">
          <button className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
