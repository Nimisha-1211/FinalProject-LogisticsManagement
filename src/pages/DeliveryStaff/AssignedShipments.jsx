import React, { useState } from "react";
import ShipmentCard from "./ShipmentCard";

function AssignedShipments() {
  const [shipments, setShipments] = useState([
    { id: 1, orderId: "ORD101", customerName: "Ramesh", address: "Bangalore, IN", status: "Assigned" },
    { id: 2, orderId: "ORD102", customerName: "Priya", address: "Chennai, IN", status: "In Transit" },
    { id: 3, orderId: "ORD103", customerName: "Anil", address: "Hyderabad, IN", status: "Picked Up" },
  ]);

  const handleStatusChange = (id, newStatus) => {
    setShipments((prev) =>
      prev.map((s) => (s.id === id ? { ...s, status: newStatus } : s))
    );
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4 text-center">📦 Assigned Shipments</h2>
      <div className="row">
        {shipments.map((s) => (
          <div className="col-md-4" key={s.id}>
            <ShipmentCard shipment={s} onStatusChange={handleStatusChange} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AssignedShipments;