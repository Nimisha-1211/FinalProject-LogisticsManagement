import React from "react";
import UpdateShipmentStatus from "./UpdateShipmentStatus";

function DeliveryShipmentCard({ shipment, onStatusChange }) {
  // ✅ Function to decide badge color
  const getBadgeClass = (status) => {
    switch (status) {
      case "Assigned":
        return "bg-secondary";
      case "Picked Up":
        return "bg-warning text-dark";
      case "In Transit":
        return "bg-primary";
      case "Delivered":
        return "bg-success";
      default:
        return "bg-info";
    }
  };

  return (
    <div className="card mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">Order ID: {shipment.id}</h5>
        <h6 className="card-subtitle mb-2 text-muted">
          Customer: {shipment.customerName}
        </h6>
        <p className="card-text">
          <strong>Address:</strong> {shipment.address}
        </p>
        <p>
          <strong>Status:</strong>{" "}
          <span className={`badge ${getBadgeClass(shipment.status)}`}>
            {shipment.status}
          </span>
        </p>

        {/* ✅ Using reusable component */}
        <UpdateShipmentStatus
          currentStatus={shipment.status}
          onChange={(newStatus) => onStatusChange(shipment.id, newStatus)}
        />
      </div>
    </div>
  );
}

export default DeliveryShipmentCard;
