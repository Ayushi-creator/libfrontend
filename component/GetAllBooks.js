import React, { useState, useEffect } from 'react';
import './GetAllBooks.css';
import axios from 'axios';
 
const GetAllBooksComponent = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const token = localStorage.getItem('token');
 
  useEffect(() => {
    const fetchBooks = async () => {
      try {
const response = await axios.get('http://localhost:8081/reader/getallbooks', {
          headers: {
            'token': token
          }
        });
        setBooks(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching books');
        setLoading(false);
        console.error('Error fetching books:', error);
      }
    };
    fetchBooks();
  }, []);
 
  return (
    <div>
      <h2>All Books</h2>
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ISBN</th>
              <th>Title</th>
              <th>Authors</th>
              <th>Publisher</th>
              <th>Version</th>
              <th>Total Copies</th>
              <th>Available Copies</th>
            </tr>
          </thead>
          <tbody>
            {books.map(book => (
              <tr key={book.isbn}>
                <td>{book.isbn}</td>
                <td>{book.title}</td>
                <td>{book.authors}</td>
                <td>{book.publisher}</td>
                <td>{book.version}</td>
                <td>{book.totalcopies}</td>
                <td>{book.availablecopies}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
 
export default GetAllBooksComponent;