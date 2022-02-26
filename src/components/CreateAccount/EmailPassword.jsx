import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';

import { auth } from '../../firebase';

function EmailPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate('/create-account/profile');
    } catch (response) {
      setErrorMessage(response.code);
      setIsSubmitting(false);
    }
  };

  if (isSubmitting) {
    return <div>Submitting...</div>;
  }

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
