
import React, { useState } from 'react';
import './SignupPage.css'; // Import your custom CSS file
import axios from 'axios';
import {useNavigate} from "react-router-dom"
const SignupPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: '', 
    name: '',
    libid: 0,
    });

    const navigate = useNavigate()
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let body = {
      email: formData.email,
      password: formData.password,
      role: formData.role, 
      name: formData.name,
      libid: parseInt(formData.libid),
    }
    try {
      const response = await axios.post('http://localhost:8081/signup', body);
      console.log('User signed up successfully:', response.data);
      if (response.data) {
        navigate("/login")
      }
    } catch (error) {
      console.error('Error signing up:', error);
     
    }
  };

  return (
    <div className="signup-page">
      <h2>Create an Account</h2>
      <form onSubmit={handleSubmit}>
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
             <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
             <label>Role:</label>
        <input
          type="text"
          name="role"
          value={formData.role}
          onChange={handleInputChange}
          required
        />
             <label>LibId:</label>
        <input
          type="number"
          name="libid"
          value={formData.libid}
          onChange={handleInputChange}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignupPage;