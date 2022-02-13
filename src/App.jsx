import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './components/Home';
import NameEmail from './components/Registration/NameEmail';
import NotFound from './components/NotFound';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create-account" element={<NameEmail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
