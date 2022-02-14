import React from 'react';
import { Route, Routes } from 'react-router-dom';

import CreateAccountLayout from './layouts/CreateAccountLayout';
import Home from './components/Home';
import EmailPassword from './components/CreateAccount/EmailPassword';
import NotFound from './components/NotFound';
import Profile from './components/CreateAccount/Profile';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="create-account" element={<CreateAccountLayout />}>
        <Route index element={<EmailPassword />} />
        <Route path="profile" element={<Profile />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
