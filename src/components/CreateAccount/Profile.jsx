import React, { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';

import { auth, db } from '../../firebase';

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

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('id: ', auth);
      await addDoc(collection(db, 'user_profiles'), {
        age,
        interest,
        firebase_uid: auth.currentUser?.id,
      });
    } catch (error) {
      console.log('error', error);
    }
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
