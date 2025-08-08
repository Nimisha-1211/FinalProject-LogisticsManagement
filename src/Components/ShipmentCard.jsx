import React from 'react';
import './ShipmentCard.css';

const ShipmentCard = ({ shipment }) => {
  // Destructure properties from the shipment object for easier access
  const { id, status, origin, destination, eta, carrier } = shipment;

  return (
    <div className="shipment-card">
      <div className="card-header">
        <h4 className="shipment-id">Shipment ID: {id}</h4>
        <span className={`status-badge status-${status.toLowerCase()}`}>{status}</span>
      </div>
      <div className="card-body">
        <div className="shipment-details">
          <div className="detail-item">
            <strong>Origin:</strong> <span>{origin}</span>
          </div>
          <div className="detail-item">
            <strong>Destination:</strong> <span>{destination}</span>
          </div>
          <div className="detail-item">
            <strong>Carrier:</strong> <span>{carrier}</span>
          </div>
          <div className="detail-item">
            <strong>Estimated Arrival:</strong> <span>{eta}</span>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <button className="view-details-button">View Details</button>
      </div>
    </div>
  );
};

export default ShipmentCard;