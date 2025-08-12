import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AddShipment from "./pages/AddShipment";
import AdminDashboard from "./pages/AdminDashboard";
import AssignDriver from "./pages/AssignDriver";
import DeliveryDashboard from "./pages/DeliveryDashboard";
import LoginPage from "./pages/LoginPage";
import Reports from "./pages/Reports";
import Shipments from "./pages/Shipments";
import Warehouse from "./pages/Warehouse";
import WarehouseDashboard from "./pages/WarehouseDashboard";
import AuthServices from "./Components/Services/AuthServices";
import ShipmentServices from "./Components/Services/ShipmentServices";
import WarehouseServices from "./Components/Services/WarehouseServices";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/add-shipment" element={<AddShipment />} />
        <Route path="/assign-driver" element={<AssignDriver />} />
        <Route path="/delivery-dashboard" element={<DeliveryDashboard />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/shipments" element={<Shipments />} />
        <Route path="/warehouse" element={<Warehouse />} />
        <Route path="/warehouse-dashboard" element={<WarehouseDashboard />} />
        <Route path="/AuthService" element={<AuthServices />} />
        <Route path="/ShipmentServices" element={<ShipmentServices/>} />
        <Route path="/WarehouseServices" element={<WarehouseServices />} />

        
      </Routes>
    </Router>
  );
}

export default App;
