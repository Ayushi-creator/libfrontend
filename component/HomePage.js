
import React, {useState, userState} from 'react';
import './HomePage.css'; // Import your custom CSS file
import SignupPage from './SignupPage'; // Import the SignupPage component
import CreateLibrary from './CreateLibrary';
import Login from './Login';
import { Link } from 'react-router-dom';


const HomePage = () => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCreateLibrary, setShowCreateLibrary] = useState(false);

  const handleSignupClick = () => {
    setShowSignup(true);
  setShowLogin(false);
    setShowCreateLibrary(false);
};

const handleCreateLibraryClick = () => {
  setShowCreateLibrary(true);
  setShowSignup(false);
  setShowLogin(false);
};

const handleLoginClick = () => {
  setShowCreateLibrary(false);
  setShowSignup(false);
  setShowLogin(true);
};

  return (
    <div className="home-page">
      <header>
        <h1>Unlock the World of Books</h1>
        <p>Your Gateway to Knowledge</p>
      </header>
      <nav>
        <ul className="navbar">
          <li>
          <Link to="/SignupPage" className="signup-button" >Sign Up</Link>
          </li>
          <li>
          <Link to="/CreateLibrary"className="create-library-button" >Create Library</Link>
          </li>
          <li>
          <Link to="/Login"className="Login-button" >Login</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default HomePage;