import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/admin/Shipment.css";

const shipmentsData = [
  { id: "SHP001", status: "In Transit", origin: "New York", destination: "Los Angeles", eta: "2025-08-20", carrier: "DHL" },
  { id: "SHP002", status: "Pending", origin: "Chicago", destination: "Houston", eta: "2025-08-22", carrier: "FedEx" },
  { id: "SHP003", status: "Delivered", origin: "Boston", destination: "Miami", eta: "2025-08-15", carrier: "UPS" },
  { id: "SHP004", status: "Out for Delivery", origin: "Dallas", destination: "Seattle", eta: "2025-08-18", carrier: "BlueDart" }
];

const Shipments = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("");

  const filteredShipments = shipmentsData.filter((shipment) => {
    const matchesSearch = shipment.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter ? shipment.status === statusFilter : true;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="shipments-container">
      <h2>Shipments</h2>

      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search by Shipment ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
          <option value="">All Status</option>
          <option value="Pending">Pending</option>
          <option value="In Transit">In Transit</option>
          <option value="Out for Delivery">Out for Delivery</option>
          <option value="Delivered">Delivered</option>
        </select>
      </div>

      {/* Shipment List */}
      <div className="shipments-list">
        {filteredShipments.length > 0 ? (
          filteredShipments.map((shipment) => (
            <div key={shipment.id} className="shipment-card">
              <h3>{shipment.id}</h3>
              <p><strong>Status:</strong> {shipment.status}</p>
              <p><strong>Origin:</strong> {shipment.origin}</p>
              <p><strong>Destination:</strong> {shipment.destination}</p>
              <p><strong>ETA:</strong> {shipment.eta}</p>
              <p><strong>Carrier:</strong> {shipment.carrier}</p>
              <Link to={`/admin/shipments/${shipment.id}`} className="details-btn">View Details</Link>
            </div>
          ))
        ) : (
          <p className="no-results">No shipments found.</p>
        )}
      </div>
    </div>
  );
};

export default Shipments;
