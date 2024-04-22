import * as React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import HomePage from './component/HomePage';
import SignupPage from './component/SignupPage';
import Login from './component/Login';
import CreateLibrary from './component/CreateLibrary';
import OwnerDashBoard from './component/OwnerDashBoard';
import AdminDashBoard from './component/AdminDashBoard'
import ReaderDashBoard from './component/ReaderDashBoard';
import UpdateBookForm from './component/UpdateBook';
import RaiseIssue from './component/RaiseIssue';
import Addadmin from './component/Addadmin';
import RemoveBooksComponent from './component/RemoveBook';
import ResolveIssueComponent from './component/ResolveIssue';
import ListIssueComponent from './component/Listissue';
import GetAllBooksComponent from './component/GetAllBooks';
import AddBooksComponent from './component/Addbooks';
import RemoveAdmin from './component/RemoveAdmin';
import UserList from './component/GetUser';

import Logout from './component/Logout';
import BookSearch from './component/book';

import "./App.css";


const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="/SignupPage" element={<SignupPage />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/CreateLibrary" element={<CreateLibrary />} />
      
      <Route path="/OwnerDashBoard" element={<OwnerDashBoard />} />
      <Route path="/AdminDashBoard" element={<AdminDashBoard />} />
      <Route path="/ReaderDashBoard" element={<ReaderDashBoard />} />
    
      <Route path="/UpdateBookForm" element={<UpdateBookForm />} />
      <Route path="/RaiseIssue" element={<RaiseIssue />} />
      <Route path="/Addadmin" element={<Addadmin />} />
      <Route path='/RemoveBooksComponent' element={<RemoveBooksComponent />} />
      <Route path='/ResolveIssueComponent' element={<ResolveIssueComponent />} />
      <Route path='/ListIssueComponent' element={<ListIssueComponent />} />
      <Route path='/GetAllBooksComponent' element={<GetAllBooksComponent />} />
      <Route path='/AddBooksComponent' element={<AddBooksComponent />} />
      <Route path="/RemoveAdmin" element={<RemoveAdmin />} />
      <Route path="/UserList" element={<UserList />} />
     
      <Route path="/Logout" element={<Logout />} />
      <Route path="/BookSearch" element={<BookSearch />} />
   
    
      
 </Routes>
  </Router>                  
);


export default App;
