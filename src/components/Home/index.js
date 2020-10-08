import React, { useState } from 'react';
import CreateForm from './create-appointment-form';
import './styles.scss';

const Home = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="home-page">
      {showForm && <CreateForm setShowForm={setShowForm} />}
      {!showForm && (
        <>
          <h1 className="font-bold my-8 text-green-600 text-5xl">
            Book an Appointment
          </h1>
          <button
            className="bg-green-600 hover:bg-green-800 text-white font-bold py-4 px-4 rounded-full shadow-2xl"
            onClick={() => {
              setShowForm(true);
            }}
            type="button"
          >
            Book an Appointment
          </button>
        </>
      )}
    </div>
  );
};

export default Home;
