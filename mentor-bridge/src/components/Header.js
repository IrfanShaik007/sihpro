import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Mentor Bridge</h1>
        <nav>
          <ul className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li>
              <Link to="/" className="block px-3 py-2 rounded hover:bg-blue-700">Home</Link>
            </li>
            <li>
              <Link to="/login" className="block px-3 py-2 rounded hover:bg-blue-700">Login</Link>
            </li>
            <li>
              <Link to="/signup" className="block px-3 py-2 rounded hover:bg-blue-700">Signup</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
