import React from "react";
import { FaSearch, FaBox, FaUsers, FaBookmark, FaCog, FaSignOutAlt, FaUserCircle } from "react-icons/fa";

const books = [
  { id: 1, title: "The Flash, Vol. 1", author: "Joshua Williamson" },
  { id: 2, title: "Titans, Vol. 2", author: "Andrew Robinson" },
  { id: 3, title: "Harley Quinn, Vol 1", author: "Jimmy Palmiotti" },
  { id: 4, title: "Suicide Squad #8", author: "Tom Taylor" },
];

export default function BookNest() {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Sidebar */}
      <aside className="w-64 bg-gray-800 p-5 flex flex-col">
        <h1 className="text-xl font-bold text-white">Book<span className="text-blue-400">Nest</span></h1>
        <nav className="mt-5">
          <ul>
            <li className="flex items-center p-3 rounded-lg bg-blue-500 mb-2">
              <FaBox className="mr-2" /> Accueil
            </li>
            <li className="flex items-center p-3 hover:bg-gray-700 rounded-lg cursor-pointer"><FaBookmark className="mr-2" /> Ma bibliothèque</li>
            <li className="flex items-center p-3 hover:bg-gray-700 rounded-lg cursor-pointer"><FaUsers className="mr-2" /> Mes utilisateurs</li>
            <li className="flex items-center p-3 hover:bg-gray-700 rounded-lg cursor-pointer"><FaBookmark className="mr-2" /> Emprunts</li>
          </ul>
        </nav>
        <div className="mt-auto">
          <div className="flex items-center p-3 hover:bg-gray-700 rounded-lg cursor-pointer">
            <FaCog className="mr-2" /> Paramètres
          </div>
          <div className="flex items-center p-3 hover:bg-gray-700 rounded-lg cursor-pointer text-red-400">
            <FaSignOutAlt className="mr-2" /> Déconnexion
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Section: Search Bar & User Avatar */}
        <div className="flex justify-between items-center">
          <div className="relative w-1/3">
            <input
              type="text"
              placeholder="Rechercher..."
              className="w-full p-2 pl-10 bg-gray-700 text-white rounded-lg focus:outline-none"
            />
            <FaSearch className="absolute left-3 top-3 text-gray-400" />
          </div>

          {/* User Avatar */}
          <div className="flex items-center space-x-3">
            <span className="text-sm">Bonjour, User</span>
            <FaUserCircle className="text-3xl text-gray-400" />
          </div>
        </div>

        {/* Featured Book */}
        <div className="mt-6 bg-gray-800 p-5 rounded-lg">
          <h2 className="text-lg text-gray-400">Frank Miller</h2>
          <h1 className="text-2xl font-bold">Batman: The Dark Knight</h1>
          <button className="mt-3 bg-blue-500 px-4 py-2 rounded-lg">Emprunter</button>
        </div>

        {/* Book List */}
        <h2 className="mt-6 text-lg font-bold">Livres disponibles en ce moment</h2>
        <div className="grid grid-cols-4 gap-4 mt-4">
          {books.map((book) => (
            <div key={book.id} className="bg-gray-800 p-3 rounded-lg">
              <div className="h-40 bg-gray-700 rounded-lg"></div>
              <h3 className="mt-2 font-bold text-blue-400">{book.title}</h3>
              <p className="text-gray-400">{book.author}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
