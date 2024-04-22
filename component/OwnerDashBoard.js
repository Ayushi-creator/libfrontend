
import React, {useState, userState} from 'react';
import './OwnerDashBoard.css'; // Import your custom CSS file
import { Link } from 'react-router-dom';
import Logout from './Logout';


const OwnerDashBoard = () => {
  const [ShowAddAdmin, setShowAddAdmin] = useState(false);
  const [ShowRemoveAdmin, setShowRemoveAdmin] = useState(false);

  const handleAddAdminClick = () => {
    setShowAddAdmin(true);
  setShowRemoveAdmin(false);
   
};

const handleRemoveAdminClick = () => {
  setShowRemoveAdmin(true);
  setShowAddAdmin(false);

};



  return (
    <div className="Owner-Dahboard">
       <header>
        <h1>Owner-DashBoard</h1>
        <h2>The only that you absolutely have to know, is the location of library</h2>
      </header>
      <nav>
        <ul className="navbar">
          <li>
            <Link to="/AddAdmin" className="Add-Admin-button" >AddAdmin</Link>
          </li>
          <li>
          <Link to="/RemoveAdmin"className="Remove-Admin-button" >RemoveAdmin</Link>
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

export default OwnerDashBoard;