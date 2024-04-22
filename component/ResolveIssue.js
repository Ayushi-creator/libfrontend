import React, { useState, useEffect } from 'react';
import axios, { Axios } from 'axios';
import './ResolveIssue.css';

 //const ResolveIssueComponent = () => {
//   const [isbn, setISBN] = useState('');
//   const [message, setMessage] = useState('');
//   const [error, setError] = useState(null);
//   const token = localStorage.getItem('token');
//   const resolveIssue = async () => {
//     try {
// const response = await axios.put('http://localhost:8081/admin/resolveIssue/' + isbn, 
// {},
// {
//   headers: {
//     'token': token
//   }
// });
//       if (response.data){
//         setMessage("resolved issue")
//       }
//       setError(null);
//     } catch (err) {
//       setMessage('');
//       setError(err.response.data.error || 'An error occurred');
//     }
//   };

//   return (
//     <div>
//       <input
//         type="number"
//         value={isbn}
//         onChange={(e) => setISBN(e.target.value)}
//         placeholder="Enter ID"
//       />
//       <button onClick={resolveIssue}>Resolve Issue</button>
//       {message && <p>{message}</p>}
//       {error && <p>Error: {error}</p>}
//     </div>
//   );
// };

const ResolveIssueComponent = () => {
  const [issues, setIssues] = useState([]);
  const [isbn, setISBN] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchIssues();
  }, [isbn]); // Trigger fetchIssues when isbn changes

  const fetchIssues = async () => {
    try {
      const response = await axios.get('http://localhost:8081/admin/getRegistry', {
        headers: {
          'token': token
        }
      });
      const data = response.data; // Assuming your API returns data directly
      setIssues(data);
    } catch (error) {
      console.error('Error fetching issues:', error);
    }
  };

  const resolveIssue = async () => {
    try {
      const response = await axios.put('http://localhost:8081/admin/resolveIssue/' + isbn, {}, {
        headers: {
          'token': token
        }
      });
      if (response.data) {
        setMessage("Issue resolved");
        // After resolving, update the issue list
        fetchIssues();
      }
      setError(null);
    } catch (err) {
      setMessage('');
      setError(err.response.data.error || 'An error occurred');
    }
  };

  return (
    <div>
      <h1>Resolve Issue</h1>
      <input
        type="number"
        value={isbn}
        onChange={(e) => setISBN(e.target.value)}
        placeholder="Enter ISBN"
      />
      <button onClick={resolveIssue}>Resolve Issue</button>
      {message && <p>{message}</p>}
      {error && <p>Error: {error}</p>}
      <h1>Issue Table</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>Issue ID</th>
            <th>Issue Status</th>
            <th>Issue Date</th>
            <th>Expected Return Date</th>
            <th>Return Date</th>
          </tr>
        </thead>
        <tbody>
          {issues.map(book => (
            <tr key={book.isbn}>
              <td>{book.isbn}</td>
              <td>{book.issueid}</td>
              <td>{book.issuestatus}</td>
              <td>{book.issuedate}</td>
              <td>{book.expectedreturndate}</td>
              <td>{book.returndate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default ResolveIssueComponent;

