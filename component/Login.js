
import React, { useState } from 'react';
import './Login.css'; // Import your custom CSS file
import {useNavigate} from "react-router-dom"
import axios from 'axios';


const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate()
  const handleInputChange =  (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let body = {
      email: formData.email,
      password: formData.password,
    }
    try {
      
      const response = await axios.post('http://localhost:8081/login', body).then(res => {
        window.localStorage.setItem("token",res.data?.token)
        window.localStorage.setItem("user",JSON.stringify(res.data?.user))

      if (res.data && res.data?.role === "owner") {
        navigate("/OwnerDashBoard")
      }           
      if (res.data && res.data?.role === "admin") {
        navigate("/AdminDashBoard")
      }
      if (res.data && res.data?.role === "reader") {
        navigate("/ReaderDashBoard")
      }

    })
    
    } catch (error) {
      console.error('Error login up:', error);
     
    }
  };
  return (
    <div className="Login">
      <h2>Welcome Back</h2>
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
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;