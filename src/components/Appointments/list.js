import React from 'react';
import PropTypes from 'prop-types';
import { format, formatDistance, parseISO } from 'date-fns';
import { sortAppointmentsByDateAsc } from '../../utils';
import MemoizedDoctor from './doctor';

const AppointmentsList = ({ appointments, doctors }) => {
  const today = Date.now();

  return sortAppointmentsByDateAsc(appointments).map(item => {
    const doctor = doctors.find(d => d.id === item.doctor_id);
    const endDate = parseISO(item.end_date);
    const startDate = parseISO(item.start_date);

    return (
      <article
        className="flex justify-between bg-white my-3 p-4 rounded shadow-lg"
        key={item.id}
      >
        <div>
          <p>
            {format(startDate, 'EEE, do MMM yyyy')}
            <span className="mx-3">
              {`${format(startDate, 'HH:mm')} to ${format(endDate, 'HH:mm')}`}
            </span>
          </p>
          <p className="pt-4 text-gray-600 text-sm">{formatDistance(startDate, today, { addSuffix: true })}</p>
        </div>
        <div className="flex flex-col justify-between text-right">
          <span>{item.reason}</span>
          <MemoizedDoctor doctor={doctor} />
        </div>
      </article>
    );
  });
};

AppointmentsList.propTypes = {
  appointments: PropTypes.arrayOf(PropTypes.any).isRequired,
  doctors: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default AppointmentsList;
