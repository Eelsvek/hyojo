import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { FirebaseContext } from '../../firebase';
import { AuthContext } from '../../providers/AuthProvider';

function EmailPassword() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  const firebase = useContext(FirebaseContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (user) {
      navigate('/create-account/profile');
    }
  }, [user]);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('wtf', firebase);
      await firebase.doCreateUserWithEmailAndPassword(email, password);
      navigate('/create-account/profile');
    } catch (response) {
      console.log('response', response);
      setErrorMessage(response.code);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="email">
        Email
        <input
          required
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <label htmlFor="password">
        Password
        <input
          required
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <button
        type="submit"
        aria-label="Submit email and password button"
        disabled={!email || !password}
      >
        Submit
      </button>
      {!!errorMessage && (
        <p style={{ color: 'red', fontWeight: 'bold' }}>{errorMessage}</p>
      )}
    </form>
  );
}

export default EmailPassword;
