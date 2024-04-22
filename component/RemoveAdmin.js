
import React, { useState} from 'react';
import axios from 'axios';
import "./RemoveAdmin.css";
import { useNavigate } from 'react-router-dom';
const RemoveAdmin = () => {
    const [formData, setFormData] = useState({
      id: 0,
      lib_id: 0,
    });
   

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.delete(`http://localhost:8081/owner/removeadmin/${formData.id}/${formData.lib_id}`, {
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
    <div className="RemoveAdmin">
      <h2>Removeadmin-Admin</h2>
      <form onSubmit={handleSubmit}>
        <label>LIBID:</label>
        <input
          type="number"
          name="lib_id"
          value={formData.name}
          onChange={handleInputChange}
          required
        />
                 <label>id:</label>
        <input
          type="number"
          name="id"
          value={formData.id}
          onChange={handleInputChange}
          required
        />
         <button type="submit">Remove-Admin</button>
      </form>
    </div>
)};
 
export default RemoveAdmin;