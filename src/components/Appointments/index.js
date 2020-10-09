import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { format, formatDistance, parseISO } from 'date-fns';
import { fetchAppointments } from '../../redux/async-actions';
import { sortAppointmentsByDateAsc } from '../../utils';

const Appointments = ({ appointments, loadAppointments }) => {
  useEffect(() => {
    loadAppointments();
  }, [loadAppointments]);

  const today = Date.now();

  return (
    <section className="p-10">
      <h1 className="text-3xl my-4">Appointments</h1>
      {(appointments.length === 0) && (
        <div className="bg-blue-200 p-6 rounded-lg">
          <i className="fa fa-lightbulb-o px-2 mr-3" />
          You have not yet scheduled any appointments.
        </div>
      )}
      <div>
        {sortAppointmentsByDateAsc(appointments).map(item => {
          const endDate = parseISO(item.end_date);
          const startDate = parseISO(item.start_date);
          return (
            <div
              className="flex justify-between bg-white my-3 p-4 rounded shadow"
              key={item.id}
            >
              <div>
                <p>
                  {format(startDate, 'EEEE, do MMMM yyyy')}
                  <span className="mx-3">
                    {`${format(startDate, 'HH:mm')} to ${format(endDate, 'HH:mm')}`}
                  </span>
                </p>
                <p className="pt-4 text-gray-600">{formatDistance(startDate, today, { addSuffix: true })}</p>
              </div>
              <span>{item.reason}</span>
            </div>
          );
        })}
      </div>
    </section>
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
