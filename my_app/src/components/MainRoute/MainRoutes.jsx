import React, { useState, useEffect } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from '../User/Login';
import Register from '../User/Register';
import Home from '../Pages/Home';
import Dashboard from '../Pages/Dashboard';

const MainRoutes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Assume you have a function to check if the user is logged in
  const checkLoggedIn = () => {
    // Check if token exists in localStorage or wherever you store it
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token); 
  };

  useEffect(() => {
    checkLoggedIn();
  }, []); // Run this effect only once on component mount

  return (
    <div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* Protected route for Dashboard */}
        <Route
          path="/dashboard"
          element={isLoggedIn ? <Dashboard /> : <Navigate to="/login" />}
        />
      </Routes>
    </div>
  );
};

export default MainRoutes;
