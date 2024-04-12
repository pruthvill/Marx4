import React, { useState, useEffect } from 'react';

interface Book {
  id: number;
  title: string;
  author: string;
}

const DisplayGoodreads = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/books');
      const data = await response.json();
          console.log(data); // Log the data received

      if (Array.isArray(data)) {
        setBooks(data);
      } else if (data && data.status === 'error') {
        console.error(data.message);
        setBooks([]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      setBooks([]);
    }
  };

  return (
    <div>
      <h1>Books</h1>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <h3>{book.title}</h3>
              <p>{book.author}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DisplayGoodreads;
