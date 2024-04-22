
import React, { useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom"
import './Addbooks.css';
 
const AddBooksComponent = () => {
    const [formData, setFormData] = useState({
        ISBN: '',
        title: '',
        authors: '',
        publisher: '',
        version: '',
        totalCopies: '',
        availableCopies: ''
    });
    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };
 
    const handleSubmit = async (e) => {
        e.preventDefault();
        let body={
          ISBN:parseInt(formData.ISBN),
          title:formData.title, 
          authors: formData.authors,
          publisher: formData.publisher,
          version: parseInt(formData.version),
          totalCopies: parseInt(formData.totalCopies),
          availableCopies: parseInt(formData.availableCopies),
        }
        try {
            const response = await axios.post('http://localhost:8081/admin/addBooks', body, {
              headers: {
                'token': token
              }
            });
            console.log('Book added successfully:', response.data);
            // You can show a success message or redirect the user after successful addition
            navigate('/GetAllBooksComponent')
        } catch (error) {
            console.error('Error adding book:', error);
            // Handle error, show error message to the user
        }
    };
 
    return (
        <div className="AddBook">
            <h2>Add Book</h2>
            <form onSubmit={handleSubmit}>
            <div className="form-group">
          <label>ISBN:</label>
          <input type="number" name="ISBN" value={AddBooksComponent.ISBN} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Title:</label>
          <input type="text" name="title" value={AddBooksComponent.title} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Author:</label>
          <input type="text" name="authors" value={AddBooksComponent.authors} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Publisher:</label>
          <input type="text" name="publisher" value={AddBooksComponent.publisher} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>version:</label>
          <input type="number" name="version" value={AddBooksComponent.version} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Total Copies:</label>
          <input type="number" name="totalCopies" value={AddBooksComponent.totalCopies} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Available Copies:</label>
          <input type="number" name="availableCopies" value={AddBooksComponent.availableCopies} onChange={handleChange} required />
        </div>
                <button type="submit">Add Book</button>
            </form>
        </div>
    );
};
 
export default AddBooksComponent;