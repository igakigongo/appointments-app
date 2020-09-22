import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

const Home = () => <>
  <div className="home-page">
    <h1 className="font-bold my-8 text-green-600 text-5xl">Doctor's Appointment Booking App</h1>
    <Link 
      className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-full shadow-2xl"
      to='/'>
      Book an Appointment
    </Link>
  </div>
  {/* <h3>{process.env.REACT_APP_APPOINTMENTS_API_URL}</h3> */}
</>;

export default Home;
