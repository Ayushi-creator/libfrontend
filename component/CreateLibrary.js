import React, { useState } from 'react';
import './CreateLibrary.css'; // Assuming you'll create a CSS file for styling
import {useNavigate} from "react-router-dom"


const CreateLibrary = () => {
    const [name, setLibName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault();
        const libraryData = { name, email ,password};

        try {
            const response = await fetch('http://localhost:8081/create/library', { // Replace with your actual endpoint
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(libraryData),
            });

            const data = await response.json();
            if (response.ok) {
                setMessage('Library created successfully!');
                navigate("/OwnerDashBoard")
            } else {
                setMessage(data.error || 'An error occurred');
            }
        } catch (error) {
            console.error('Error creating library:', error);
            setMessage('An error occurred');
        }
    };

    return (
        <div className="create-library-container">
            <h2>Create a New Library</h2>
            {message && <p className="message">{message}</p>}
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="libName">Library Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setLibName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Create Library</button>
            </form>
        </div>
    );
};

export default CreateLibrary;
