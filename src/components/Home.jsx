import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <h1>Home</h1>
      <Link to="/create-account">
        <button type="button">Create Account</button>
      </Link>
    </>
  );
}

export default Home;
