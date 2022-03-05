import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AuthProvider from './providers/AuthProvider';
import FirebaseProvider from './providers/FirebaseProvider';
import CreateAccountLayout from './layouts/CreateAccountLayout';
import Home from './components/Home';
import EmailPassword from './components/CreateAccount/EmailPassword';
import NotFound from './components/NotFound';
import Profile from './components/CreateAccount/Profile';
import AccountLayout from './layouts/AccountLayout';
import RequireAuth from './components/RequireAuth';

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
          <Route
            path="account"
            element={
              <RequireAuth>
                <AccountLayout />
              </RequireAuth>
            }
          >
            <Route index element={<div>Yolo</div>} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </FirebaseProvider>
  );
}

export default App;
