import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EmailPassword() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    // Do something
    navigate('/create-account/profile');
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
    </form>
  );
}

export default EmailPassword;
