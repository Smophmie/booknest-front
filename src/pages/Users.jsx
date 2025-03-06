// src/pages/Users.jsx
import React from 'react';
import { useState, useEffect } from 'react';

function Users() {
  const [users, setUsers] = useState([{ name: "User 1" }, { name: "User 2" }]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users: ", error);
    }
  };

  const addUser = async () => {
    try {
      const newUser = { name: "New User" };
      const response = await fetch('api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        fetchUsers();
      }
    } catch (error) {
      console.error("Error adding user: ", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">
      <button
        className="bg-blue-500 text-white font-bold py-3 px-6 rounded-full mb-6"
        onClick={addUser}
      >
        Nouvel utilisateur
      </button>

      <h2 className="text-2xl font-bold mb-4">Tous les utilisateurs</h2>

      <div className="grid grid-cols-4 gap-6">
        {users.map((user, index) => (
          <div key={index} className="flex flex-col items-center space-y-2">
            <span className="text-lg">{user.name}</span>
            <button className="bg-blue-500 text-white font-bold py-2 px-6 rounded-full">
              Emprunter
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Users;
