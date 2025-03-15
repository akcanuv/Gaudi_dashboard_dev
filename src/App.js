
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn/signin';
import Success from './Success/success';
import Register from './Register/register';

function App() {
  return (
    
    <Router>
      <Routes>
        <Route path="/Gaudi_dashboard_dev" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
    
  );
}

export default App;
