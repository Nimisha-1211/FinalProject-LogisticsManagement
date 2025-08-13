import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/DeliveryDashboard.css";

function DeliveryDashboard() {
  const [shipments, setShipments] = useState([
    { id: 1, destination: "Bangalore", status: "Picked Up" },
    { id: 2, destination: "Mysore", status: "In Transit" }
  ]);

  const [notifications] = useState([
    "New shipment assigned: #103",
    "Traffic alert near Mysore road"
  ]);

  const navigate = useNavigate();

  const handleStatusChange = (id, newStatus) => {
    const updatedShipments = shipments.map((s) =>
      s.id === id ? { ...s, status: newStatus } : s
    );
    setShipments(updatedShipments);
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="container-fluid p-4 delivery-dashboard">
      <h2 className="mb-4 text-center">🚚 Delivery Staff Dashboard</h2>

      <div className="row">
        {/* Assigned Shipments */}
        <div className="col-md-8 mb-4">
          <div className="card shadow">
            <div className="card-header bg-primary text-white">
              📦 Assigned Shipments
            </div>
            <div className="card-body">
              <table className="table table-striped table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th>Shipment ID</th>
                    <th>Destination</th>
                    <th>Status</th>
                    <th>Update Status</th>
                  </tr>
                </thead>
                <tbody>
                  {shipments.map((s) => (
                    <tr key={s.id}>
                      <td>#{s.id}</td>
                      <td>{s.destination}</td>
                      <td>{s.status}</td>
                      <td>
                        <select
                          className="form-select"
                          value={s.status}
                          onChange={(e) =>
                            handleStatusChange(s.id, e.target.value)
                          }
                        >
                          <option>Picked Up</option>
                          <option>In Transit</option>
                          <option>Delivered</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="col-md-4 mb-4">
          <div className="card shadow">
            <div className="card-header bg-warning text-dark">
              🔔 Notifications
            </div>
            <div className="card-body">
              <ul className="list-group">
                {notifications.map((note, index) => (
                  <li key={index} className="list-group-item">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Route Info */}
      <div className="card shadow mb-4">
        <div className="card-header bg-info text-white">🗺 Delivery Route</div>
        <div className="card-body">
          <p>Map integration coming soon... (Google Maps / Mapbox)</p>
        </div>
      </div>

      {/* Logout */}
      <div className="text-center">
        <button className="btn btn-danger" onClick={handleLogout}>
          🚪 Logout
        </button>
      </div>
    </div>
  );
}

export default DeliveryDashboard;