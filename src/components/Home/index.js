import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { createAppointment } from '../../redux/async-actions';
import { getEndTime, standardTimeSlots } from '../../utils';
import './styles.scss';

const Home = () => {
  const dispatch = useDispatch();
  const { errors, handleSubmit, register } = useForm();
  const [processing, setProcessing] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const title = showForm ? 'Book an Appointment' : 'Doctor\'s Appointment Booking App';

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
    <div className="home-page">
      <h1 className="font-bold my-8 text-green-600 text-5xl">{title}</h1>
      {showForm && (
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
      )}
      {!showForm && (
        <button
          className="bg-green-600 hover:bg-green-800 text-white font-bold py-4 px-4 rounded-full shadow-2xl"
          onClick={() => { setShowForm(true); }}
          type="button"
        >
          Book an Appointment
        </button>
      )}
    </div>
  );
};

export default Home;
