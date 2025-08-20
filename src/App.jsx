import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Common components
import HomePage from "./pages/LandingPage/HomePage.jsx";
import NavbarComponent from "./Components/Common/NavbarComponent.jsx";
import AboutUsPage from "./pages/LandingPage/AboutUsPage.jsx"


// Auth Page
import LoginPage from "./pages/auth/LoginPage.jsx";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard.jsx";
import Shipments from "./pages/admin/Shipments.jsx";
import ShipmentDetails from "./pages/admin/ShipmentDetails.jsx";
import AddShipment from "./pages/admin/AddShipment.jsx";
import Warehouse from "./pages/admin/Warehouse.jsx";
import AssignDriver from "./pages/admin/AssignDriver.jsx";
import Reports from "./pages/admin/Reports.jsx";

// Warehouse Manager Pages
import WarehouseDashboard from "./pages/WarehouseManager/WarehouseDashboard.jsx";

// Delivery Staff Pages
import DeliveryDashboard from "./pages/DeliveryStaff/DeliveryDashboard.jsx";
import AssignedShipments from "./pages/DeliveryStaff/AssignedShipments.jsx"
import UpdateShipmentStatus from "./pages/DeliveryStaff/UpdateShipmentStatus.jsx"

// User Pages
import UserDashboard from "./pages/User/UserDashboard.jsx";
import UserProfile from "./components/User/UserProfile.jsx";
import AddressUpdateForm from "./components/User/AddressUpdateForm.jsx";
import MyShipments from "./pages/User/MyShipments.jsx";
import TrackShipment from "./pages/User/TrackShipment.jsx"
import ShipmentHistory from "./pages/User/ShipmentHistory.jsx"
import InvoiceDownloadButton from "./components/user/InvoiceDownloadButton.jsx";


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
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/admin/shipments" element={<Shipments />} />
          <Route path="/admin/shipments/add" element={<AddShipment />} />
          <Route path="/admin/shipments/:id" element={<ShipmentDetails />} />
          <Route path="/admin/warehouse" element={<Warehouse />} />
          <Route path="/admin/assign-driver" element={<AssignDriver />} />
          <Route path="/admin/reports" element={<Reports />} />

          {/* Warehouse Manager Routes */}
          <Route path="/warehouse" element={<WarehouseDashboard />} />

          {/* Delivery Staff Routes */}
          <Route path="/delivery" element={<DeliveryDashboard />} />
          <Route path="/assignedshipments" element={<AssignedShipments />} />
          <Route path="/updateshipmentstatus" element={<UpdateShipmentStatus />} />

          {/* User Routes */}
          <Route path="/user" element={<UserDashboard />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/user/address-update" element={<AddressUpdateForm />} />
          <Route path="/myshipments" element={<MyShipments />} />
          <Route path="/track" element={<TrackShipment />} />
          <Route path="/history" element={<ShipmentHistory />} />
          <Route path="/invoicedownload" element={<InvoiceDownloadButton />} />
        

          {/* Default Route */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      
    </Router>
  );
}

export default App;