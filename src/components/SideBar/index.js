import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const SideBar = () => (
  <div className="sidebar border-r-2 border-gray-300 shadow-2xl">
    <div className="brand">Brand</div>
    <div className="nav">
      <h1>Side Bar</h1>
      <ul>
        <li><Link to='/'>About</Link></li>
        <li><Link to='/'>Appointments</Link></li>
        <li><Link to='/'>Login</Link></li>
        <li><Link to='/'>Sign In</Link></li>
        <li><Link to='/'>Sign Out</Link></li>
      </ul>
      {/* <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">My Appointments</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Sign In</a></li>
        <li><a href="#">Sign Out</a></li>
      </ul> */}
    </div>
    <div className="social-icons">
      Social Icons
    </div>
  </div>
);

export default SideBar;
