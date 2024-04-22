import React, { useState, useEffect } from 'react';
import './GetUser.css';
import axios from 'axios';
 
function UserList() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);
  const user = JSON.parse(window.localStorage.getItem('user'));
  const token=localStorage.getItem('token');
   
  
  useEffect(() => {
    async function fetchUsers() {
      try {
      
        const response = await axios.get(`http://localhost:8081/admin/user/${user?.id}/${user?.libid}`, {
            headers: {
              'token': token
            }
          }); // Update the endpoint as per your backend setup
        setUsers(response.data);
      } catch (error) {
        console.error('Error fetching users:', error);
        setError('Error fetching users. Please try again later.');
      }
    }
    fetchUsers();
  }, []);

 

 
  return (
    <div>
      <h1>User List</h1>
      {error && <p>{error}</p>}
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            {/* Add more columns if needed */}
          </tr>
        </thead>
        <tbody>
            {users.map(user => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
        </tbody>
        </table>
        </div>
)};
       export default UserList;
