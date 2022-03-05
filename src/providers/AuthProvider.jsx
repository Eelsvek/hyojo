import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  useMemo,
} from 'react';

import { FirebaseContext } from '../firebase';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const firebase = useContext(FirebaseContext);

  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth.onAuthStateChanged((firebaseUser) => {
      setUser(
        firebaseUser
          ? {
              uid: firebaseUser.uid,
              email: firebaseUser.email,
            }
          : firebaseUser
      );
    });

    return unsubscribe;
  }, []);

  const value = useMemo(() => {
    return {
      user,
    };
  }, [user]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
