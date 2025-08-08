import { useState } from 'react';
import Test from './pages/test';
// import Navbar from './Components/NavbarComponent';

import './App.css';

import AdminDashboard from "./pages/AdminDashboard";
import WarehouseDashboard from "./pages/WarehouseDashboard";
import DeliveryDashboard from "./pages/DeliveryDashboard";
import LoginPage from "./pages/LoginPage";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Reports from './pages/Reports';

function App() {
  return (
    <>
      
    <BrowserRouter>
    {/* <Navbar/> */}
     <Routes>
      <Route path="/" element={<LoginPage />} />
     <Route path="/admin" element={<AdminDashboard />} />
     <Route path="/warehouse" element={<WarehouseDashboard />} />
     <Route path="/delivery" element={<DeliveryDashboard />} />
     <Route path="/reports" element={<Reports />} />
     </Routes>
     </BrowserRouter>
     

    </>
  );
}

export default App;
