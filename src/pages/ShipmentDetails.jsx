// src/pages/ShipmentDetails.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ShipmentDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const shipment = location.state?.shipment;

  if (!shipment) {
    return (
      <div className="container text-center mt-5">
        <h4 className="text-danger">Shipment details not found.</h4>
      </div>
    );
  }

  return (
    <div className="container mt-4">
      {/* Back Button */}
      <button
        className="btn btn-secondary mb-3"
        onClick={() => navigate(-1)}
      >
        ⬅ Back
      </button>

      {/* Card Layout */}
      <div className="card shadow-lg p-3">
        <div className="row g-4">
          {/* Image Section */}
          <div className="col-md-5 text-center">
            <img
              src={shipment.imageUrl}
              alt={shipment.name}
              className="img-fluid rounded"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
          </div>

          {/* Details Section */}
          <div className="col-md-7">
            <h2 className="fw-bold">{shipment.name}</h2>
            <hr />
            <p>
              <strong>Category:</strong> {shipment.mainCategory} →{" "}
              {shipment.subCategory} → {shipment.subSubCategory}
            </p>
            <p>
              <strong>From:</strong> {shipment.origin}
            </p>
            <p>
              <strong>To:</strong> {shipment.destination}
            </p>
            <p>
              <strong>Date:</strong> {shipment.date}
            </p>
            <p>
              <strong>Status:</strong>{" "}
              <span
                className={`badge ${
                  shipment.status === "Delivered"
                    ? "bg-success"
                    : shipment.status === "Pending"
                    ? "bg-warning text-dark"
                    : shipment.status === "In Transit"
                    ? "bg-info text-dark"
                    : "bg-secondary"
                }`}
              >
                {shipment.status}
              </span>
            </p>
            <p className="fs-5 fw-bold text-primary">
              Price: ₹{shipment.price}
            </p>

            {/* Action Buttons */}
            <div className="mt-3">
              <button className="btn btn-success me-2">
                🛒 Buy Now
              </button>
              <button className="btn btn-outline-primary me-2">
                ➕ Add to Cart
              </button>
              <button className="btn btn-outline-danger">
                ❤️ Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentDetails;
