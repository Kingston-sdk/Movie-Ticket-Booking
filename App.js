import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Dashboard from './Dashboard';
import MoviesPage from './MoviesPage'; 
import BookingPage from './BookingPage';
import PaymentPage from './PaymentPage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/movies" element={<MoviesPage />} /> 
        <Route path="/booking/:movieName" element={<BookingPage />} />
        <Route path="/payment/:movieName" element={<PaymentPage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
