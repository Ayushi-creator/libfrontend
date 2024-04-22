
import React, { useState, useEffect } from 'react'; 
import './Addadmin.css'; 
import { useNavigate } from "react-router-dom";
import axios from 'axios';
 
const Addadmin = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact_number: 0,
    email: '',
    password: '',
    lib_id: 0,
  });
 
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
 
  // useEffect(() => {
  //   // Check if token exists in local storage
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     // Redirect to login page or handle unauthorized access
  //     navigate('/login');
  //   } else {
  //     // Set token as default header for Axios
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  //   }
  // }, [navigate]);
 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    let body = {
      email: formData.email,
      password: formData.password,
      contact_number:parseInt(formData.role), 
      name: formData.name,
      lib_id: parseInt(formData.lib_id),
    }
    try {
      const response = await axios.post('http://localhost:8081/owner/addAdmin', body, {
        headers: {
          'token': token
        }
      });
      console.log('Response:', response.data);
      navigate('/'); 
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  
  return (
    <div className="Addadmin">
      <h2>Add-Admin</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
       
             <label>ContactNumber:</label>
        <input
          type="number"
          name="contact_number"
          value={formData.contactnumber}
          onChange={handleInputChange}
          required
        />
             <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
             <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          required
        />

<label>LibId:</label>
        <input
          type="number"
          name="lib_id"
          value={formData.lib_id}
          onChange={handleInputChange}
          required
        />
       
 
 
        <button type="submit">Add-Admin</button>
      </form>
    </div>
  );
};
  // useEffect(() => {
  //   // Check if token exists in local storage
  //   const token = localStorage.getItem('token');
  //   if (!token) {
  //     // Redirect to login page or handle unauthorized access
  //     navigate('/login');
  //   } else {
  //     // Set token as default header for Axios
  //     axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  //   }
  // }, [navigate]);
 
export default Addadmin;