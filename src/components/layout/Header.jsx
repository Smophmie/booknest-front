import React from 'react';
import { FaSearch, FaUserCircle } from "react-icons/fa";

function Header() {
  return (
    <header className="flex justify-between items-center">
      <div className="relative w-1/3">
        <input
          type="text"
          placeholder="Rechercher..."
          className="w-full p-2 pl-10 bg-gray-700 text-white rounded-lg focus:outline-none"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-400" />
      </div>
      <div className="flex items-center space-x-3">
        <span className="text-sm">Bonjour, User</span>
        <FaUserCircle className="text-3xl text-gray-400" />
      </div>
    </header>
  );
}

export default Header;