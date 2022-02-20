import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { initializeApp } from 'firebase/app';

import App from './App';

const firebaseConfig = {
  apiKey: 'AIzaSyCZ-82Imypm6-_yitCDUlIq3VSTVIsqVo4',
  authDomain: 'user-information-faa25.firebaseapp.com',
  projectId: 'user-information-faa25',
  storageBucket: 'user-information-faa25.appspot.com',
  messagingSenderId: '629370667563',
  appId: '1:629370667563:web:dd7cc08d0daf0e0976606e',
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
