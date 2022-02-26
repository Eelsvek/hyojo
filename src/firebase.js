import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCZ-82Imypm6-_yitCDUlIq3VSTVIsqVo4',
  authDomain: 'user-information-faa25.firebaseapp.com',
  projectId: 'user-information-faa25',
  storageBucket: 'user-information-faa25.appspot.com',
  messagingSenderId: '629370667563',
  appId: '1:629370667563:web:dd7cc08d0daf0e0976606e',
};

const firebaseApp = initializeApp(firebaseConfig)

export const auth = getAuth()
export const db = getFirestore(firebaseApp)