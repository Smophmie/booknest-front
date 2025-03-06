import React, { useEffect, useState } from 'react';

function Library() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://193.134.250.176/api/books');
        if (!response.ok) {
          throw new Error("Impossible de récupérer la liste des livres.");
        }

        const data = await response.json();

        if (data.success && Array.isArray(data.books)) {
          setBooks(data.books);
        } else {
          throw new Error("Données invalides reçues.");
        }
      } catch (err) {
        setError(err.message);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Bibliothèque</h2>

      {error && <p className="text-red-500">{error}</p>}

      {books.length > 0 ? (
        <ul className="space-y-4">
          {books.map((book) => (
            <li key={book.id} className="p-4 bg-gray-800 text-white rounded-lg shadow-md">
              <h3 className="text-lg font-semibold">{book.title}</h3>
              <p className="text-sm text-gray-300">
                Auteur(s) : {book.authors.map((author) => author.name).join(", ")}
              </p>
              <p className="text-sm text-gray-400">📖 Catégorie : {book.category.name}</p>
              <p className="text-sm text-gray-400">📅 Année : {book.year}</p>
              <p className={`text-sm font-semibold ${book.available ? 'text-green-400' : 'text-red-400'}`}>
                {book.available ? "📗 Disponible" : "📕 Indisponible"}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        !error && <p className="text-gray-500">Aucun livre trouvé.</p>
      )}
    </div>
  );
}

export default Library;
