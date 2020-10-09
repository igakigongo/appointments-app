import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { connect, useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { createAppointment, fetchDoctors } from '../../redux/async-actions';
import { getEndTime, standardTimeSlots } from '../../utils';

const CreateAppointmentForm = ({ doctors, fetchingDoctors, setShowForm }) => {
  const dispatch = useDispatch();
  const [processing, setProcessing] = useState(false);
  const { errors, handleSubmit, register } = useForm();

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);

  const onSubmitHandler = data => {
    setProcessing(true);
    const {
      date, doctorId, reason, time,
    } = data;
    const endTime = getEndTime(time);

    const appointment = {
      doctor_id: doctorId,
      end_date: `${date}T${endTime}`,
      reason,
      start_date: `${date}T${time}`,
    };

    dispatch(createAppointment(appointment))
      .then(() => {
        setProcessing(false);
        setShowForm(false);
      });
  };

  const slots = standardTimeSlots();
  return (
    <>
      <h1 className="font-bold my-8 text-green-600 text-5xl">
        Doctor&apos;s Appointment Booking App
      </h1>
      <form
        className="w-2/5 bg-white py-6 px-8 rounded shadow-2xl"
        onSubmit={handleSubmit(onSubmitHandler)}
      >
        <div className="my-3 w-full">
          <label htmlFor="doctor">
            Select a Doctor
            <select
              className="bg-gray-300 p-3 rounded my-3 w-full border-none"
              disabled={fetchingDoctors || processing || doctors.length === 0}
              id="doctorId"
              name="doctorId"
              ref={register({ required: true })}
            >
              {(doctors.length > 0) && doctors.map(doctor => (
                <option key={doctor.id} value={doctor.id}>
                  {`${doctor.name} - (${doctor.speciality})`}
                </option>
              ))}
            </select>
            {errors.doctorId && <span className="text-red-600">* this field is required</span>}
          </label>
        </div>
        <div className="my-3 w-full">
          <label htmlFor="date">
            Date and Time
            <div className="flex">
              <div className="w-3/5 mr-3">
                <input
                  className="bg-gray-300 p-3 rounded my-3 w-full border-none"
                  defaultValue=""
                  disabled={processing}
                  id="date"
                  name="date"
                  type="date"
                  ref={register({ required: true })}
                />
                {errors.date && <span className="text-red-600">* this field is required</span>}
              </div>
              <div className="w-2/5 ml-3">
                <select
                  className="bg-gray-300 py-4 px-3 rounded my-3 w-full border-none"
                  disabled={processing}
                  name="time"
                  ref={register({ required: true })}
                >
                  {slots.map(slot => (
                    <option key={slot}>
                      {slot}
                    </option>
                  ))}
                </select>
                {errors.time && <span className="text-red-600">* this field is required</span>}
              </div>
            </div>
          </label>
        </div>
        <div className="my-3 w-full">
          <label htmlFor="reason">
            Reason
            <input
              className="bg-gray-300 p-3 rounded my-3 w-full border-none"
              defaultValue=""
              disabled={processing}
              id="reason"
              name="reason"
              placeholder="reason"
              type="text"
              ref={register({ required: true })}
            />
            {errors.reason && <span className="text-red-600">* this field is required</span>}
          </label>
        </div>
        <div className="flex justify-end">
          <button
            className="bg-green-600 hover:bg-green-800 text-white font-bold py-3 px-4 mr-3 rounded shadow-2xl"
            type="submit"
          >
            Save
          </button>
          <button
            className="bg-red-600 hover:bg-red-800 text-white font-bold py-3 px-4 rounded shadow-2xl"
            onClick={() => { setShowForm(false); }}
            type="button"
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
};

CreateAppointmentForm.propTypes = {
  doctors: PropTypes.arrayOf(PropTypes.any).isRequired,
  fetchingDoctors: PropTypes.bool.isRequired,
  setShowForm: PropTypes.func.isRequired,
};

const mapStateToProps = state => {
  const { data, fetching } = state.doctors;
  return {
    doctors: data,
    fetchingDoctors: fetching,
  };
};

export default connect(mapStateToProps)(CreateAppointmentForm);
