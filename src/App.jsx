import { useState } from 'react';

import './App.css';

import AdminDashboard from "./pages/AdminDashboard";
import WarehouseDashboard from "./pages/WarehouseDashboard";
import DeliveryDashboard from "./pages/DeliveryDashboard";
import LoginPage from "./pages/LoginPage";
import Reports from './pages/Reports';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

      <LoginPage />
      <AdminDashboard/>
      <WarehouseDashboard/>
     <DeliveryDashboard/> 
     <Reports/>
     
    </>
  );
}

export default App;