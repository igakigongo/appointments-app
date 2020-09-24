import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signIn } from '../../redux/async-actions';
import { setToken } from '../../redux/slices';

const SignIn = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);
  const [password, setPassword] = useState('');
  const [processing, setProcessing] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    setProcessing(true);
    setErrors([])

    dispatch(signIn({ email, password }))
      .then(async response => {
        const { status } = response;
        const json = await response.json();
        console.log(status);
        console.log(typeof status);
        console.log(json);
        if (status === 200) {
          const { auth_token } = json;
          dispatch(setToken(auth_token));
        } else {
          const { message } = json;
          setErrors([message]);
        }
      })
      .finally(() => { setProcessing(false); });
  };

  return <div className="flex flex-col items-center justify-center h-full">
    <div className="w-1/3">
      <h1 className="text-center text-3xl my-4">Sign In</h1>
      <form className="bg-white shadow-lg rounded px-10 py-16" onSubmit={handleSubmit}>
        {errors.length > 0 && <ul className="list-none text-center text-red-500">
          {errors.map((e, i) => <li key={i}>
            {e}
          </li>)}
        </ul>}
        <input
          className="bg-gray-200 p-3 rounded my-3 w-full border-none"
          disabled={processing}
          type="text"
          onChange={e => { setEmail(e.target.value); }}
          placeholder="email address"
          value={email}>
        </input>
        <input
          className="bg-gray-200 p-3 rounded my-3 w-full border-none"
          disabled={processing}
          type="password"
          onChange={e => { setPassword(e.target.value); }}
          placeholder="password"
          value={password}>
        </input>
        <button
          className="bg-green-400 my-3 p-3 rounded font-bold text-white w-full"
          disabled={processing}
          type="submit">Sign In</button>
      </form>
    </div>
  </div>;
};

export default SignIn;
