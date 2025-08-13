
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import WarehouseDashboard from './pages/WarehouseDashboard';
import DeliveryDashboard from './pages/DeliveryDashboard';
import AddShipment from './pages/AddShipment';
import AssignDriver from './pages/AssignDriver';
import Reports from './pages/Reports';
import Shipments from './pages/Shipments';
import ShipmentDetails from './pages/ShipmentDetails';
import Warehouse from './pages/Warehouse';
import StatusTracker from './components/StatusTracker';
import InventoryTable from './components/InventoryTable';
import WarehouseItem from './components/WarehouseItem';
import InboundOutboundForm from './components/InboundOutboundForm';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        {/* Login */}
        <Route path="/" element={<LoginPage />} />

        {/* Admin Routes */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute allowedRoles={['Admin']}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reports"
          element={
            <ProtectedRoute allowedRoles={['Admin']}>
              <Reports />
            </ProtectedRoute>
          }
        />
        <Route
          path="/status-tracker"
          element={
            <ProtectedRoute allowedRoles={['Admin']}>
              <StatusTracker />
            </ProtectedRoute>
          }
        />

        {/* Warehouse Manager Routes */}
        <Route
          path="/warehouse-dashboard"
          element={
            <ProtectedRoute allowedRoles={['Warehouse Manager']}>
              <WarehouseDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add-shipment"
          element={
            <ProtectedRoute allowedRoles={['Warehouse Manager']}>
              <AddShipment />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shipments"
          element={
            <ProtectedRoute allowedRoles={['Warehouse Manager']}>
              <Shipments />
            </ProtectedRoute>
          }
        />
        <Route
          path="/shipment-details/:id"
          element={
            <ProtectedRoute allowedRoles={['Warehouse Manager']}>
              <ShipmentDetails />
            </ProtectedRoute>
          }
        />
        <Route
          path="/warehouse"
          element={
            <ProtectedRoute allowedRoles={['Warehouse Manager']}>
              <Warehouse />
            </ProtectedRoute>
          }
        />
        <Route
          path="/inventory-table"
          element={
            <ProtectedRoute allowedRoles={['Warehouse Manager']}>
              <InventoryTable />
            </ProtectedRoute>
          }
        />
        <Route
          path="/warehouse-item"
          element={
            <ProtectedRoute allowedRoles={['Warehouse Manager']}>
              <WarehouseItem />
            </ProtectedRoute>
          }
        />
        <Route
          path="/inbound-outbound-form"
          element={
            <ProtectedRoute allowedRoles={['Warehouse Manager']}>
              <InboundOutboundForm />
            </ProtectedRoute>
          }
        />

        {/* Delivery Staff Routes */}
        <Route
          path="/delivery-dashboard"
          element={
            <ProtectedRoute allowedRoles={['Delivery Staff']}>
              <DeliveryDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/assign-driver"
          element={
            <ProtectedRoute allowedRoles={['Delivery Staff']}>
              <AssignDriver />
            </ProtectedRoute>
          }
        />
        <Route
          path="/status-tracker"
          element={
            <ProtectedRoute allowedRoles={['Delivery Staff']}>
              <StatusTracker />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;