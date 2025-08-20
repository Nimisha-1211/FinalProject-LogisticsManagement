import React from "react";
import InventoryTable from "../../components/Admin/InventoryTable";

const Reports = () => {
  const shipmentStats = {
    total: 120,
    delivered: 90,
    pending: 20,
    delayed: 10,
  };

  const topDrivers = [
    { name: "Ravi", deliveries: 45 },
    { name: "Lakshmi", deliveries: 40 },
    { name: "Ajay", deliveries: 35 },
  ];

  const pendingGoods = [
    { id: 1, name: "TV", quantity: "N/A", location: "Electronics - Ravi" },
    { id: 2, name: "Washing Machine", quantity: "N/A", location: "Electronics - Ajay" },
    { id: 3, name: "Rice Bags", quantity: "N/A", location: "Groceries - Lakshmi" },
  ];

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-10 offset-md-1 p-4" >
          <h2 className="mb-4 text-primary">📊 Logistics Reports & Analytics</h2>

          {/* Shipment Stats */}
          <div className="row mb-4">
            {Object.entries(shipmentStats).map(([key, value], index) => (
              <div key={index} className="col-md-3">
                <div className="card text-center shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title text-capitalize">{key}</h5>
                    <p className="card-text fs-4 fw-bold">{value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Top Drivers */}
          <div className="card mb-4 shadow-sm">
            <div className="card-header fw-bold">🚚 Top Performing Drivers</div>
            <ul className="list-group list-group-flush">
              {topDrivers.map((driver, i) => (
                <li key={i} className="list-group-item">
                  {driver.name} - <strong>{driver.deliveries}</strong> deliveries
                </li>
              ))}
            </ul>
          </div>

          {/* ✅ Using InventoryTable for Pending Goods */}
          <div className="card mb-4 shadow-sm">
            <div className="card-header fw-bold">📦 Pending Goods List</div>
            <InventoryTable items={pendingGoods} />
          </div>

          {/* Future: Graphs/Analytics */}
          <div className="card shadow-sm mb-5">
            <div className="card-body text-muted">
              📈 <em>Analytics graphs will be added in the future.</em>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
