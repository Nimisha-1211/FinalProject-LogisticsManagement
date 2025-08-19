import React, { useState } from "react";

const AssignRoute = () => {
  const [selectedShipment, setSelectedShipment] = useState("");
  const [selectedRoute, setSelectedRoute] = useState("");
  const [assignments, setAssignments] = useState([]);

  const handleAssign = () => {
    if (selectedShipment && selectedRoute) {
      const newAssignment = {
        id: Date.now(),
        shipment: selectedShipment,
        route: selectedRoute,
      };
      setAssignments([...assignments, newAssignment]);
      setSelectedShipment("");
      setSelectedRoute("");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h3 className="text-center mb-4">Assign Route</h3>

        {/* Shipment Select */}
        <div className="mb-3">
          <label className="form-label">Select Shipment</label>
          <select
            className="form-select"
            value={selectedShipment}
            onChange={(e) => setSelectedShipment(e.target.value)}
          >
            <option value="">-- Choose Shipment --</option>
            <option value="Shipment 1">Shipment 1</option>
            <option value="Shipment 2">Shipment 2</option>
          </select>
        </div>

        {/* Route Select */}
        <div className="mb-3">
          <label className="form-label">Select Route</label>
          <select
            className="form-select"
            value={selectedRoute}
            onChange={(e) => setSelectedRoute(e.target.value)}
          >
            <option value="">-- Choose Route --</option>
            <option value="Route A">Route A</option>
            <option value="Route B">Route B</option>
          </select>
        </div>

        <button className="btn btn-primary w-100" onClick={handleAssign}>
          Assign Route
        </button>
      </div>

      {/* Assignment History */}
      <div className="card mt-4 p-3 shadow">
        <h4 className="text-center">Assignment History</h4>
        {assignments.length === 0 ? (
          <p className="text-center text-muted">No assignments yet.</p>
        ) : (
          <ul className="list-group">
            {assignments.map((a) => (
              <li key={a.id} className="list-group-item">
                {a.shipment} → {a.route}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};


export default AssignRoute;