import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Common components
import NavbarComponent from "./Components/Common/NavbarComponent.jsx";


// Auth Page
import LoginPage from "./pages/auth/LoginPage.jsx";

// Admin Pages
import AdminLayout from "./pages/Admin/AdminLayout.jsx"; 
import AdminDashboard from "./pages/Admin/AdminDashboard.jsx";
import UserManagement from "./pages/Admin/UserManagement.jsx";
import Shipments from "./pages/Admin/Shipments.jsx";
import ShipmentDetails from "./pages/Admin/ShipmentDetails.jsx";
import AddShipment from "./pages/Admin/AddShipment.jsx";
import Warehouse from "./pages/Admin/Warehouse.jsx";
import AssignDriver from "./pages/Admin/AssignDriver.jsx";
import Reports from "./pages/Admin/Reports.jsx";
import Settings from "./pages/Admin/Settings.jsx";
import AssignTasks from "./pages/Admin/AssignTasks"; 
import AssignVehicle from "./pages/Admin/AssignVehicle.jsx";
import AssignManager from "./pages/Admin/AssignWarehouseManager.jsx";
import AssignRoute from "./pages/Admin/AssignRoute.jsx";

// Warehouse Manager Pages
import WarehouseDashboard from "./pages/WarehouseManager/WarehouseDashboard.jsx";
import Inventory from "./pages/WarehouseManager/Inventory.jsx";
import orders from "./pages/WarehouseManager/orders.jsx";
import Settings from "./pages/WarehouseManager/Settings.jsx";

// Delivery Staff Pages
import DeliveryDashboard from "./pages/DeliveryStaff/DeliveryDashboard.jsx";

// User Pages
import UserDashboard from "./pages/User/UserDashboard.jsx";
import UserProfile from "./components/User/UserProfile.jsx";
import AddressUpdateForm from "./components/User/AddressUpdateForm.jsx";
import MyShipments from "./pages/User/MyShipments.jsx";
import TrackShipment from "./pages/User/TrackShipment.jsx"
import ShipmentHistory from "./pages/User/ShipmentHistory.jsx"


function App() {
  return (
    <Router>
      {/* Navbar visible on all pages */}
      <NavbarComponent />

      
        <Routes>
          {/* Landing page */}
          <Route path="/" element={<HomePage/>} />
          <Route path="/aboutus" element={<AboutUsPage/>} />

          {/* Auth Route */}
          <Route path="/login" element={<LoginPage />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="shipments" element={<Shipments />} />
          <Route path="shipments/:id" element={<ShipmentDetails />} />
          <Route path="add-shipment" element={<AddShipment />} />
          <Route path="warehouse" element={<Warehouse />} />
          <Route path="assign-driver" element={<AssignDriver />} />
          <Route path="assign-vehicle" element={<AssignVehicle />} />
          <Route path="assign-manager" element={<AssignManager />} />
          <Route path="assign-route" element={<AssignRoute />} />
          <Route path="assign-tasks" element={<AssignTasks />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>


        {/* Warehouse Manager Routes */}
          <Route path="/warehouse-dashboard" element={<WarehouseDashboard />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/assign-driver" element={<AssignDriver />} />

          {/* Delivery Staff Routes */}
          <Route path="/delivery" element={<DeliveryDashboard />} />
          <Route path="/assignedshipments" element={<AssignedShipments />} />
          <Route path="/updateshipmentstatus" element={<UpdateShipmentStatus />} />

          {/* User Routes */}
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/user/profile" element={<UserProfile />} />
          <Route path="/user/address-update" element={<AddressUpdateForm />} />
          <Route path="/myshipments" element={<MyShipments />} />
          <Route path="/track" element={<TrackShipment />} />
          <Route path="/history" element={<ShipmentHistory />} />
        

        {/* Default Route */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>

    </Router>
  );
}

export default App;