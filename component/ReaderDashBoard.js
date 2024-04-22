
import React, {useState, userState} from 'react';
import './ReaderDashBoard.css'; // Import your custom CSS file
import { Link } from 'react-router-dom';
import Logout from './Logout';


const ReaderDashBoard = () => {
  const [ShowSearchBooks, setShowSearchBooks] = useState(false);
 const [ShowRaiseIssue, setShowRaiseIssue] = useState(false);
 const [ShowGetAllBooks, setShowGetAllBooks] = useState(false);
 

  const handleSearchBooksClick = () => {
    setShowSearchBooks(true);
  setShowRaiseIssue(false);
  setShowGetAllBooks(false);
};


const handleGetAllBooksClick = () => {
    setShowSearchBooks(false);
    setShowRaiseIssue(false);
    setShowGetAllBooks(true);
};

const handleRaiseIssueClick = () => {
    setShowSearchBooks(false);
  setShowGetAllBooks(false);
  setShowRaiseIssue(true);
};





  return (
    <div className="Reader-DahBoard">
         <header>
        <h1>Reader-DashBoard</h1>
        <h2>Bad libraries build collections, good libraries build services, great libraries build communities.</h2>
      </header>
      <nav>
        <ul className="navbar">
          <li>
          <Link to="/GetAllBooksComponent"className="GetAllBooks-button" >GetAllBooks</Link>
          </li>
          <li>
          <Link to="/RaiseIssue"className="RaiseIssue-button" >RaiseIssue</Link>
          </li>
          <li>
          <Link to="/BookSearch"className="BookSearch-button" >BookSearch</Link>
          </li>
          <li>
            {/* Render the Logout component */}
            <Logout />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ReaderDashBoard;

