import React from 'react';

const SideBar = () => {
  return <div className="sidebar">
    <div className="brand">Brand</div>
    <div className="nav">
      <ul>
        <li><a href="#">About Us</a></li>
        <li><a href="#">My Appointments</a></li>
        <li><a href="#">Login</a></li>
        <li><a href="#">Sign In</a></li>
        <li><a href="#">Sign Out</a></li>
      </ul>
    </div>
    <div className="social-icons">
      Social Icons
        </div>
  </div>;
};

export default SideBar;
