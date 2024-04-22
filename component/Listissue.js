import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ListIssue.css'

const ListIssueComponent = () => {
  const [issueEvents, setIssueEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8081/admin/getIssues', {
          headers: {
            'token': token
          }
        });
        setIssueEvents(response.data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching data');
        setLoading(false);
      }
    };

    // Fetch data when component mounts
    fetchData();

    // Clean up function
    return () => {
      // You can do cleanup here if needed
    };
  }, []); // Empty dependency array means this effect will only run once when the component mounts

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>List of Issue Events</h2>
      <table>
        <thead>
          <tr>
            <th>Request ID</th>
            <th>Book ID</th>
          </tr>
        </thead>
        <tbody>
          {issueEvents.map(event => (
            <tr key={event.reqid}>
              <td>{event.reqid}</td>
              <td>{event.bookid}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListIssueComponent;