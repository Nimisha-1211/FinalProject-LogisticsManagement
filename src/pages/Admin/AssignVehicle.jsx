import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AssignVehicle = () => {
  const [selectedShipment, setSelectedShipment] = useState("");
  const [selectedVehicle, setSelectedVehicle] = useState("");
  const [assignments, setAssignments] = useState([]);

  const handleAssign = () => {
    if (selectedShipment && selectedVehicle) {
      const newAssignment = {
        id: Date.now(),
        shipment: selectedShipment,
        vehicle: selectedVehicle,
        time: new Date().toLocaleString(),
        status: "Assigned",
      };
      setAssignments([...assignments, newAssignment]);
      toast.success(`Vehicle ${selectedVehicle} assigned to ${selectedShipment}`);
      setSelectedShipment("");
      setSelectedVehicle("");
    } else {
      toast.error("Please select both shipment and vehicle!");
    }
  };

  return (
    <div className="container mt-5">
      <ToastContainer position="top-right" autoClose={3000} />
      <div className="card p-4 shadow">
        <h3 className="text-center mb-4">Assign Vehicle</h3>

        {/* Select Shipment */}
        <div className="mb-3">
          <label className="form-label">Select Shipment</label>
          <select
            className="form-select"
            value={selectedShipment}
            onChange={(e) => setSelectedShipment(e.target.value)}
          >
            <option value="">-- Choose Shipment --</option>
            <option value="Shipment A">Shipment A</option>
            <option value="Shipment B">Shipment B</option>
          </select>
        </div>

        {/* Select Vehicle */}
        <div className="mb-3">
          <label className="form-label">Select Vehicle</label>
          <select
            className="form-select"
            value={selectedVehicle}
            onChange={(e) => setSelectedVehicle(e.target.value)}
          >
            <option value="">-- Choose Vehicle --</option>
            <option value="Truck 101">Truck 101</option>
            <option value="Van 202">Van 202</option>
            <option value="Bike 303">Bike 303</option>
          </select>
        </div>

        <button className="btn btn-success w-100" onClick={handleAssign}>
          Assign Vehicle
        </button>
      </div>

      {/* Assignment History */}
      <div className="card mt-4 p-3 shadow">
        <h4 className="text-center">Assignment History</h4>
        {assignments.length === 0 ? (
          <p className="text-center text-muted">No assignments yet.</p>
        ) : (
          <table className="table table-striped text-center">
            <thead className="table-dark">
              <tr>
                <th>Shipment</th>
                <th>Vehicle</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {assignments.map((a) => (
                <tr key={a.id}>
                  <td>{a.shipment}</td>
                  <td>{a.vehicle}</td>
                  <td>{a.time}</td>
                  <td>
                    <span className="badge bg-success">{a.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AssignVehicle;
