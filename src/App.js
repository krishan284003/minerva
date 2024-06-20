import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faAppleAlt, faCarrot } from '@fortawesome/free-solid-svg-icons';
import CreatePostComponent from './components/content-manager-component/CreatePostComponent'; 
import ClientDetailsComponent from './components/client-management-component/ClientDetailsComponent'; 
import UserManagementComponent from './components/user-management-component/UserManagementComponent'; 
import ContactUsComponent from './components/contact-us-component/ContactUsComponent'; 


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/ClientDetailsComponent">Client Details Component</Link>
            </li>
            <li>
              <Link to="/CreatePostComponent">Create Post Component</Link>
            </li>
            <li>
              <Link to="/UserManagementComponent">User Management Component</Link>
            </li>
            <li>
              <Link to="/ContactUsComponent">Contact Us</Link>
            </li>
            
          </ul>
        </nav>

        <Routes>
          <Route path="/ClientDetailsComponent" element={<ClientDetailsComponent />} />
          <Route path="/CreatePostComponent" element={<CreatePostComponent />} />
          <Route path="/UserManagementComponent" element={<UserManagementComponent />} />
          <Route path="/ContactUsComponent" element={<ContactUsComponent />} />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
