import { createContext}  from 'react';

import { initializeApp } from 'firebase/app';
import { createUserWithEmailAndPassword, getAuth } from  'firebase/auth';
import { addDoc, collection, getFirestore } from 'firebase/firestore';

export const FirebaseContext = createContext();

const firebaseConfig = {
  apiKey: 'AIzaSyCZ-82Imypm6-_yitCDUlIq3VSTVIsqVo4',
  authDomain: 'user-information-faa25.firebaseapp.com',
  projectId: 'user-information-faa25',
  storageBucket: 'user-information-faa25.appspot.com',
  messagingSenderId: '629370667563',
  appId: '1:629370667563:web:dd7cc08d0daf0e0976606e',
};
export default class Firebase {
    constructor() {
      this.app = initializeApp(firebaseConfig) 
      this.auth = getAuth(this.app)
      this.db = getFirestore(this.app)
    }

    doAddDoc(collectionName, properties) {
      return addDoc(collection(this.db, collectionName), { ...properties })
    }

    doCreateUserWithEmailAndPassword(email, password) {
      return createUserWithEmailAndPassword(this.auth, email, password)
    }
}

