import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signUp } from '../../redux/async-actions';
import { setToken } from '../../redux/slices';
import { CREATED } from '../../response-states';
import ROUTES from '../../routes';

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState([]);
  const [password, setPassword] = useState('');
  const [processing, setProcessing] = useState(false);
  const [username, setUsername] = useState('');

  const handleValidation = () => {
    const errors = [];
    if (!email) {
      errors.push('Enter an email address');
    }

    if (!username) {
      errors.push('Enter a username');
    }

    if (!password) {
      errors.push('Enter a password');
    }

    if (!confirmPassword) {
      errors.push('Enter a confirmation password');
    }

    if (password !== confirmPassword) {
      errors.push('Password and Confirmation Password do not match');
    }

    return [errors.length === 0, errors];
  };

  const handleSubmit = e => {
    e.preventDefault();

    const [valid, errors] = handleValidation();
    if (!valid) {
      setErrors(errors);
      return;
    }

    setProcessing(true);
    setErrors([]);
    const model = {
      email,
      name: username,
      password,
      password_confirmation: password,
    };

    dispatch(signUp(model))
      .then(async response => {
        const { status } = response;
        const json = await response.json();
        if (status === CREATED) {
          dispatch(setToken(json.auth_token));
          history.push(ROUTES.APPOINTMENTS);
        } else {
          const { message } = json;
          setErrors([message]);
        }
      })
      .finally(() => { setProcessing(false); });
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="w-1/3">
        <h1 className="text-center text-3xl my-4">Create an Account</h1>
        <form className="bg-white shadow-lg rounded-lg px-10 py-16" onSubmit={handleSubmit}>
          {errors.length > 0 && (
          <ul className="list-none text-center text-red-500">
            {errors.map((e, i) => (
              <li key={i}>
                {e}
              </li>
            ))}
          </ul>
          )}
          <input
            className="bg-gray-200 p-3 rounded my-3 w-full border-none"
            disabled={processing}
            type="text"
            onChange={e => { setUsername(e.target.value); }}
            placeholder="username"
            value={username}
          />
          <input
            className="bg-gray-200 p-3 rounded my-3 w-full border-none"
            disabled={processing}
            type="email"
            onChange={e => { setEmail(e.target.value); }}
            placeholder="email address"
            value={email}
          />
          <input
            className="bg-gray-200 p-3 rounded my-3 w-full border-none"
            disabled={processing}
            type="password"
            onChange={e => { setPassword(e.target.value); }}
            placeholder="password"
            value={password}
          />
          <input
            className="bg-gray-200 p-3 rounded my-3 w-full border-none"
            disabled={processing}
            type="password"
            onChange={e => { setConfirmPassword(e.target.value); }}
            placeholder="confirm password"
            value={confirmPassword}
          />
          <button
            className="bg-green-400 my-3 p-3 rounded font-bold text-white w-full"
            disabled={processing}
            type="submit"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
