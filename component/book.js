// App.js
import React, { useState } from 'react';
 
function App() {
  const [books, setBooks] = useState([]);
  const [title, setTitle] = useState('');


 const token=localStorage.getItem('token');
  const searchBooks = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`http://localhost:8081/reader/searchByBook/${title}`, {
        headers: {
          'token': token
        }
      });
      const data = await response.json();
      setBooks(data.books);
    } catch (error) {
      console.error('Error searching books:', error);
    }
  };
 
  return (
    <div>
      <h1>Book Search</h1>
      <form onSubmit={searchBooks}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter book title"
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <h2>Search Result</h2>
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
      </div>
    </div>
  );
}
 
export default App;