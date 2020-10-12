import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import CreateForm from './create-appointment-form';
import './styles.scss';

const Home = ({ token }) => {
  const { addToast } = useToasts();
  const [showForm, setShowForm] = useState(false);
  const clickHandler = () => {
    if (token) {
      setShowForm(true);
    } else {
      addToast('You need to Sign In before creating an appointment', {
        appearance: 'error',
      });
    }
  };

  return (
    <div className="home-page">
      {showForm ? (<CreateForm setShowForm={setShowForm} />)
        : (
          <>
            <h1 className="font-bold my-8 text-green-600 text-5xl">
              Book an Appointment
            </h1>
            <button
              className="bg-green-600 hover:bg-green-800 text-white font-bold py-4 px-4 rounded-full shadow-2xl"
              onClick={clickHandler}
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
