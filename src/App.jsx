// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Login/Login';
import Dashboard from './Dashboard/Dashboard.jsx';
import PrivateRoute from './PrivateRoute';



const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<PrivateRoute component={<Dashboard />} />} />
        </Routes>
        
    );
    
};

export default App;