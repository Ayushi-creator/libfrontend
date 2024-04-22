import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './UpdateBook.css'
import axios from 'axios';
 
function UpdateBookForm() {
  const [formData, setFormData] = useState({
    ISBN: '',
    LibID: '',
    Title: '',
    Authors: '',
    Publisher: '',
    Version: '',
    TotalCopies: 0,
    AvailableCopies: 0
  });
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        let body={
            ISBN:parseInt(formData.ISBN),
            title:formData.title, 
            authors: formData.authors,
            publisher: formData.publisher,
            version: parseInt(formData.version),
            totalCopies: parseInt(formData.totalCopies),
            availableCopies: parseInt(formData.availableCopies),
          }
      const response = await axios.put('http://localhost:8081/admin/updateBook', body,{
        headers: {
          'token': token
        }
      });
      console.log(response.data); // Handle success message
      // Update UI or show success message
      navigate('/GetAllBooksComponent')
    } catch (error) {
      console.error('Error updating book:', error);
      // Handle error response
    }
  };
 
 
  return (
    <div className="UpdateBook">
        <h2>Update Book</h2>
        <form onSubmit={handleSubmit}>
        <div className="form-group">
      <label>ISBN:</label>
      <input type="number" name="ISBN" value={UpdateBookForm.ISBN} onChange={handleChange} required />
    </div>
    <div className="form-group">
      <label>Title:</label>
      <input type="text" name="title" value={UpdateBookForm.title} onChange={handleChange} required />
    </div>
    <div className="form-group">
      <label>Author:</label>
      <input type="text" name="authors" value={UpdateBookForm.authors} onChange={handleChange} required />
    </div>
    <div className="form-group">
      <label>Publisher:</label>
      <input type="text" name="publisher" value={UpdateBookForm.publisher} onChange={handleChange} required />
    </div>
    <div className="form-group">
      <label>version:</label>
      <input type="number" name="version" value={UpdateBookForm.version} onChange={handleChange} required />
    </div>
    <div className="form-group">
      <label>Total Copies:</label>
      <input type="number" name="totalCopies" value={UpdateBookForm.totalCopies} onChange={handleChange} required />
    </div>
    <div className="form-group">
      <label>Available Copies:</label>
      <input type="number" name="availableCopies" value={UpdateBookForm.availableCopies} onChange={handleChange} required />
    </div>
            <button type="submit">Update Book</button>
        </form>
    </div>
);
}
 
export default UpdateBookForm;