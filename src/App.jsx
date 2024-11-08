// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Login/Login';
import Dashboard from './Dashboard/Dashboard';
import DetailPage from './Dashboard/DetailPage';
import PrivateRoute from './PrivateRoute';
import Pendaftaran from './pendaftaran/pendaftaran';
import PagePendaftaran from './pendaftaran/pagependaftaran'; 
import './App.css'; 

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/dashboard" element={<PrivateRoute component={<Dashboard />} />} />
            <Route path="/detail/:id" element={<PrivateRoute component={<DetailPage />} />} />
            <Route path="/pendaftaran" element={<Pendaftaran />} />
            <Route path="/pagependaftaran" element={<PagePendaftaran />} /> 
        </Routes>
    );
};

export default App;
