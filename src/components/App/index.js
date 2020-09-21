import React from 'react';
// import logo from './logo.svg';
import './styles.scss';
import SideBar from '../SideBar';

const App = () => {
  return (
    <div className="app">
      <SideBar />
      <div className="main"></div>
    </div>
  );
}

export default App;
