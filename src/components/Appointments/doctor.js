import React from 'react';
import PropTypes from 'prop-types';

const Doctor = ({ doctor }) => (doctor
  ? (
    <span className="pt-4 text-gray-600 text-sm">
      {`${doctor.name} - ${doctor.speciality}`}
    </span>
  )
  : (
    <span className="pt-4 text-red-400 text-sm">
      Doctor not found
    </span>
  ));

Doctor.defaultProps = {
  doctor: undefined,
};

Doctor.propTypes = {
  doctor: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    speciality: PropTypes.string.isRequired,
  }),
};

export default React.memo(Doctor);
