import React, { useContext, useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';

import { useNavigate } from 'react-router-dom';
import { db } from '../../firebase';
import { AuthContext } from '../../context/AuthContext';

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
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const [interest, setInterest] = useState('none');
  const [age, setAge] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'user_profiles'), {
        age,
        interest,
        firebase_uid: user.uid,
      });
      navigate('/');
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
