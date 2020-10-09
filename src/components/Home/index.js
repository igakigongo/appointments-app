import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import CreateForm from './create-appointment-form';
import './styles.scss';

const Home = ({ token }) => {
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
              if (token) {
                setShowForm(true);
              } else {
                /* eslint-disable-next-line no-alert */
                window.alert('You need to Sign In before creating an appointment');
              }
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

Home.defaultProps = {
  token: null,
};

Home.propTypes = {
  token: PropTypes.string,
};

const mapStateToProps = state => {
  const { token } = state;
  return {
    token,
  };
};

export default connect(mapStateToProps)(Home);
