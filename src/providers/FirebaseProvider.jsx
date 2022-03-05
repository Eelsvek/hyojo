import React, { useMemo } from 'react';

import Firebase, { FirebaseContext } from '../firebase';

export default function FirebaseProvider({ children }) {
  const value = useMemo(() => new Firebase(), [Firebase]);

  return (
    <FirebaseContext.Provider value={value}>
      {children}
    </FirebaseContext.Provider>
  );
}
