import React, { useState } from 'react';

const interestsOptions = [
  {
    label: 'Select an Option',
    value: 'none',
  },
  {
    label: 'Anime',
    value: 'anime',
  },
  {
    label: 'Gaming',
    value: 'gaming',
  },
  {
    label: 'Lifestyle',
    value: 'lifestyle',
  },
];

function Profile() {
  const [interest, setInterest] = useState('none');
  const [age, setAge] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const submitDisabled = !(interest !== 'none' && age);

  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="interests">
        Interests
        <select
          name="interests"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        >
          {interestsOptions.map((option) => {
            return (
              <option
                disabled={option.value === 'none'}
                key={option.value}
                value={option.value}
              >
                {option.label}
              </option>
            );
          })}
        </select>
      </label>
      <label htmlFor="age">
        Age
        <input
          required
          type="number"
          maxLength={2}
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <button type="submit" disabled={submitDisabled}>
        Submit
      </button>
    </form>
  );
}

export default Profile;
