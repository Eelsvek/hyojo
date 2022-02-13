import React from 'react';

function NameEmail() {
  return (
    <form>
      <label htmlFor="email">
        Email
        <input name="email" type="email" />
      </label>

      <label htmlFor="password">
        Password
        <input name="password" type="password" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default NameEmail;
