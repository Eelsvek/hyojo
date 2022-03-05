import React, { createContext, useState, useEffect, useMemo } from 'react';
import { auth } from '../firebase';

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((firebaseUser) => {
      setUser(firebaseUser);
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
