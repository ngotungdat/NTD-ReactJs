// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import StaffList from './pages/StaffList';
import StaffDetail from './pages/StaffDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/pages/StaffDetail/:id" element={<StaffDetail />} /> */}
        <Route path="/pages" element={<StaffList />} />
      </Routes>
    </Router>
  );
};

export default App;
