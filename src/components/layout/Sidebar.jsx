import React from 'react';
import { FaBox, FaUsers, FaBookmark, FaCog, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

function Sidebar() {
  return (
    <aside className="w-64 bg-gray-800 p-5 flex flex-col">
      <h1 className="text-xl font-bold text-white">Book<span className="text-blue-400">Nest</span></h1>
      <nav className="mt-5">
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "flex items-center p-3 rounded-lg bg-blue-500 mb-2" : "flex items-center p-3 rounded-lg hover:bg-gray-700 mb-2"
              }
            >
              <FaBox className="mr-2" />
              <span>Accueil</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/users"
              className={({ isActive }) =>
                isActive ? "flex items-center p-3 rounded-lg bg-blue-500" : "flex items-center p-3 rounded-lg hover:bg-gray-700"
              }
            >
              <FaUsers className="mr-2" />
              <span>Les utilisateurs</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/library"
              className={({ isActive }) =>
                isActive ? "flex items-center p-3 rounded-lg bg-blue-500" : "flex items-center p-3 rounded-lg hover:bg-gray-700"
              }
            >
              <FaBookmark className="mr-2" />
              <span>Bibliothèque</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/loans"
              className={({ isActive }) =>
                isActive ? "flex items-center p-3 rounded-lg bg-blue-500" : "flex items-center p-3 rounded-lg hover:bg-gray-700"
              }
            >
              <FaBookmark className="mr-2" />
              <span>Emprunts</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className="mt-auto">
        
        <div className="flex items-center p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-red-400">
          <FaSignOutAlt className="mr-2" /> Déconnexion
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;