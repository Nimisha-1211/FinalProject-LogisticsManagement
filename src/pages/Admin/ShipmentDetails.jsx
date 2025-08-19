import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../../styles/admin/Shipment.css";

const shipmentsData = [
  { id: "SHP001", status: "In Transit", origin: "New York", destination: "Los Angeles", eta: "2025-08-20", carrier: "DHL" },
  { id: "SHP002", status: "Pending", origin: "Chicago", destination: "Houston", eta: "2025-08-22", carrier: "FedEx" },
  { id: "SHP003", status: "Delivered", origin: "Boston", destination: "Miami", eta: "2025-08-15", carrier: "UPS" },
  { id: "SHP004", status: "Out for Delivery", origin: "Dallas", destination: "Seattle", eta: "2025-08-18", carrier: "BlueDart" }
];

const ShipmentDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const shipment = shipmentsData.find((s) => s.id === id);

  if (!shipment) {
    return <p className="no-results">Shipment not found.</p>;
  }

  return (
    <div className="shipment-details">
      <h2>Shipment Overview</h2>
      <div className="shipment-card big">
        <h3>Shipment ID: {shipment.id}</h3>
        <p><strong>Status:</strong> {shipment.status}</p>
        <p><strong>Origin:</strong> {shipment.origin}</p>
        <p><strong>Destination:</strong> {shipment.destination}</p>
        <p><strong>ETA:</strong> {shipment.eta}</p>
        <p><strong>Carrier:</strong> {shipment.carrier}</p>
      </div>
      <button onClick={() => navigate(-1)} className="back-btn">⬅ Back</button>
    </div>
  );
};

export default ShipmentDetails;

