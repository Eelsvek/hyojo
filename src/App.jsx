import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthProvider from './providers/AuthProvider';
import FirebaseProvider from './providers/FirebaseProvider';
import CreateAccountLayout from './layouts/CreateAccountLayout';
import Home from './components/Home';
import EmailPassword from './components/CreateAccount/EmailPassword';
import NotFound from './components/NotFound';
import Profile from './components/CreateAccount/Profile';

function App() {
  return (
    <FirebaseProvider>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="create-account" element={<CreateAccountLayout />}>
            <Route index element={<EmailPassword />} />
            <Route path="profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </FirebaseProvider>
  );
}

export default App;
