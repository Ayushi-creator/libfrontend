import React from 'react';
import { useNavigate } from "react-router-dom";
import './Logout.css';
 
const Logout = () => {
  const navigate = useNavigate();
 
  const handleLogout = () => {
    
    window.localStorage.removeItem("token");
    window.localStorage.removeItem("user");
    
    navigate("/login");
  };
 
  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
 
export default Logout;