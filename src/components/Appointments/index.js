import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchAppointments } from '../../redux/async-actions';

const Appointments = ({ appointments, loadAppointments }) => {
  useEffect(() => {
    loadAppointments();
  }, [loadAppointments]);

  return (
    <div className="p-10">
      <h1 className="text-3xl my-4">Appointments</h1>
      {(appointments.length === 0) && (
      <div className="bg-blue-200 p-6 rounded-lg">
        <i className="fa fa-lightbulb-o px-2" />
        {' '}
        You have not yet scheduled any appointments.
      </div>
      )}
      <div>
        {appointments.map(item => (
          <div
            className="flex justify-between bg-white my-3 p-4 rounded shadow"
            key={item.id}
          >
            <span>{item.start_date}</span>
            <span>{item.reason}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  loadAppointments: () => dispatch(fetchAppointments()),
});

const mapStateToProps = state => {
  const { appointments } = state;
  return {
    appointments,
  };
};

Appointments.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.any).isRequired,
  loadAppointments: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Appointments);
