import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAppointments } from '../../redux/async-actions';
import AppointmentsList from './list';

const Appointments = ({ appointments, doctors, loadAppointments }) => {
  useEffect(() => {
    loadAppointments();
  }, [loadAppointments]);

  return (
    <section className="p-10">
      <h1 className="text-3xl my-4">Appointments</h1>
      {(appointments.length === 0) && (
        <div className="bg-blue-200 p-6 rounded-lg">
          <i className="fa fa-lightbulb-o px-2 mr-3" />
          You have not yet scheduled any appointments.
        </div>
      )}
      {(appointments.length > 0) && (
      <AppointmentsList
        appointments={appointments}
        doctors={doctors}
      />
      )}
    </section>
  );
};

const mapDispatchToProps = dispatch => ({
  loadAppointments: () => dispatch(fetchAppointments()),
});

const mapStateToProps = state => {
  const { appointments, doctors: { data: doctors } } = state;
  return {
    appointments,
    doctors,
  };
};

Appointments.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.any).isRequired,
  doctors: PropTypes.arrayOf(PropTypes.any).isRequired,
  loadAppointments: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
