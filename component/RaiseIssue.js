
import React, { useState } from 'react';
import './Raiseissue.css'; // Import your custom CSS file
import axios from 'axios';


const RaiseIssue = () => {
  const [formData, setFormData] = useState({
    bookID: 0,
    email: '', 
  });
  const token= localStorage.getItem('token');
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async(e) => {
    
    e.preventDefault();
     let body={
      bookID:parseInt(formData.bookID),
      email:formData.email,
     }
     try {
      const response = await axios.post('http://localhost:8081/reader/raiseIssue', body, {
        headers: {
          'token': token
        }
      });
    console.log('Form submitted:');
  } catch (error) {
    console.error('Error raise issue:', error);
    // Handle error, show error message to the user
}
  };

  return (
    <div className="RaiseIssue">
      <h2>RaiseIssue</h2>
      <form onSubmit={handleSubmit}>
        <label>BookId:</label>
        <input
          type="number"
          name="bookID"
          value={formData.bookid}
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
        <button type="submit">RaiseIssue</button>
      </form>
    </div>
  );
};

export default RaiseIssue;