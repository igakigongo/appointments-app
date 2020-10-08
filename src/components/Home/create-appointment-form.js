import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { createAppointment } from '../../redux/async-actions';
import { getEndTime, standardTimeSlots } from '../../utils';

const CreateAppointmentForm = ({ setShowForm }) => {
  const dispatch = useDispatch();
  const [processing, setProcessing] = useState(false);
  const { errors, handleSubmit, register } = useForm();

  const onSubmitHandler = data => {
    setProcessing(true);
    const { date, reason, time } = data;
    const endTime = getEndTime(time);

    const appointment = {
      end_date: `${date}T${endTime}`,
      reason,
      start_date: `${date}T${time}`,
    };

    dispatch(createAppointment(appointment))
      .finally(() => {
        setProcessing(false);
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
          <label htmlFor="date">
            Date and Time
            <div className="flex w-full">
              <div className="w-4/5">
                <input
                  className="bg-gray-200 p-3 rounded my-3 w-full border-none mr-3"
                  defaultValue=""
                  disabled={processing}
                  id="date"
                  name="date"
                  type="date"
                  ref={register({ required: true })}
                />
                {errors.date && <span className="text-red-600">* this field is required</span>}
              </div>
              <div className="w-1/5">
                <select
                  className="bg-gray-200 py-4 px-3 rounded my-3 w-full border-none ml-3"
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
              className="bg-gray-200 p-3 rounded my-3 w-full border-none"
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
  setShowForm: PropTypes.func.isRequired,
};

export default CreateAppointmentForm;
