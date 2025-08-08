import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import WarehouseDashboard from './pages/WarehouseDashboard';
import DeliveryDashboard from './pages/DeliveryDashboard';
import Shipments from './pages/Shipments';
import AssignDriver from './pages/AssignDriver';
import Warehouse from './pages/Warehouse';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/warehouse-dashboard" element={<WarehouseDashboard />} />
        <Route path="/delivery" element={<DeliveryDashboard />} />
        <Route path="/shipments" element={<Shipments />} />
        <Route path="/assign-driver" element={<AssignDriver />} />
        <Route path="/warehouse" element={<Warehouse />} />
      </Routes>
    </Router>
  );
}

export default App;
