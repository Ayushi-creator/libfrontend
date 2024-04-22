
import React, {useState, userState} from 'react';
import './AdminDashBoard.css'; // Import your custom CSS file
import { Link } from 'react-router-dom';
import Logout from './Logout';


const AdminDashBoard = () => {
  const [ShowGetusers, setShowGetusers] = useState(false);
 const [ShowAddbooks, setShowAddbooks] = useState(false);
 const [ShowRemovebooks, setShowRemovebooks] = useState(false);
 const [ShowUpdatebooks, setShowUpdatebooks] = useState(false);
 const [ShowListIssue, setShowListIssue] = useState(false);
 const [ShowResolveIssue, setShowResolveIssue] = useState(false);
 const[showLogout,setShowLogout] = useState(false);

  const handleGetusersClick = () => {
    setShowGetusers(true);
  setShowAddbooks(false);
  setShowListIssue(false);
  setShowRemovebooks(false);
  setShowUpdatebooks(false);
  setShowResolveIssue(false);
  setShowLogout(false);
};


const handleAddbooksClick = () => {
    setShowGetusers(false);
  setShowAddbooks(true);
  setShowListIssue(false);
  setShowRemovebooks(false);
  setShowUpdatebooks(false);
  setShowResolveIssue(false);
  setShowLogout(false);
};

const handleRemovebooksClick = () => {
    setShowGetusers(false);
  setShowAddbooks(false);
  setShowListIssue(false);
  setShowRemovebooks(true);
  setShowUpdatebooks(false);
  setShowResolveIssue(false);
  setShowLogout(false);
};

const handleListIssueClick = () => {
    setShowGetusers(false);
  setShowAddbooks(false);
  setShowListIssue(true);
  setShowRemovebooks(false);
  setShowUpdatebooks(false);
  setShowResolveIssue(false);
  setShowLogout(false);
};

const handleUpdatebooksClick = () => {
    setShowGetusers(false);
  setShowAddbooks(false);
  setShowListIssue(false);
  setShowRemovebooks(false);
  setShowUpdatebooks(true);
  setShowResolveIssue(false);
  setShowLogout(false);
};

const handleResolveIssueClick = () => {
    setShowGetusers(true);
  setShowAddbooks(false);
  setShowListIssue(false);
  setShowRemovebooks(false);
  setShowUpdatebooks(false);
  setShowResolveIssue(false);
  setShowLogout(false);
};



  return (
    <div className="Admin-DahBoard">
         <header>
        <h1>Admin-DashBoard</h1>
        <h2>Everything you need for better future and sucess has already been written. And guess what? All you have to do is go to library </h2>
      </header>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/UserList" className="Getusers-button" >Getusers</Link>
          </li>
          <li>
          <Link to="/AddBooksComponent"className="AddBooksComponent" >Addbooks</Link>
          </li>
          <li>
          <Link to="/RemoveBooksComponent"className="Removebooks-button" >Removebooks</Link>
          </li>
          <li>
          <Link to="/ListIssueComponent"className="ListIssue-button" >ListIssue</Link>
          </li>
          <li>
          <Link to="/UpdateBookForm"className="Updatebooks-button" >Updatebooks</Link>
          </li>
          <li>
          <Link to="/ResolveIssueComponent"className="ResolveIssue-button" >ResolveIssue</Link>
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

export default AdminDashBoard;