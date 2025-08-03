import React from "react";
// import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";

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

  const monthlyReport = [
    { month: "January", delivered: 25, delayed: 5 },
    { month: "February", delivered: 30, delayed: 2 },
    { month: "March", delivered: 35, delayed: 3 },
  ];

  const categoryWise = [
    { category: "Electronics", delivered: 40, pending: 5 },
    { category: "Groceries", delivered: 30, pending: 10 },
    { category: "Furniture", delivered: 20, pending: 5 },
  ];

  const pendingGoods = [
    { name: "TV", category: "Electronics", assignedDriver: "Ravi" },
    { name: "Washing Machine", category: "Electronics", assignedDriver: "Ajay" },
    { name: "Rice Bags", category: "Groceries", assignedDriver: "Lakshmi" },
  ];

  const delayedDrivers = [
    { name: "Ravi", reason: "Traffic Delay", shipment: "TV" },
    { name: "Lakshmi", reason: "Route Diversion", shipment: "Groceries" },
  ];

  return (
    <>
        
      

      <div className="container-fluid">
        <div className="row">
          

          {/* Main Content */}
          <div className="col-md-10 offset-md-2 p-4" style={{ marginTop: "56px" }}>
            <h2 className="mb-4 text-primary">📊 Logistics Reports & Analytics</h2>

            {/* Shipment Summary */}
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
                    {driver.name} – <strong>{driver.deliveries}</strong> deliveries
                  </li>
                ))}
              </ul>
            </div>

            {/* Monthly Report */}
            <div className="card mb-4 shadow-sm">
              <div className="card-header fw-bold">📅 Monthly Delivery Report</div>
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>Month</th>
                    <th>Delivered</th>
                    <th>Delayed</th>
                  </tr>
                </thead>
                <tbody>
                  {monthlyReport.map((entry, i) => (
                    <tr key={i}>
                      <td>{entry.month}</td>
                      <td>{entry.delivered}</td>
                      <td>{entry.delayed}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Category-wise Status */}
            <div className="card mb-4 shadow-sm">
              <div className="card-header fw-bold">📦 Category-wise Shipment Status</div>
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Delivered</th>
                    <th>Pending</th>
                  </tr>
                </thead>
                <tbody>
                  {categoryWise.map((item, i) => (
                    <tr key={i}>
                      <td>{item.category}</td>
                      <td>{item.delivered}</td>
                      <td>{item.pending}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pending Goods */}
            <div className="card mb-4 shadow-sm">
              <div className="card-header fw-bold">📦 Pending Goods List</div>
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Category</th>
                    <th>Assigned Driver</th>
                  </tr>
                </thead>
                <tbody>
                  {pendingGoods.map((item, i) => (
                    <tr key={i}>
                      <td>{item.name}</td>
                      <td>{item.category}</td>
                      <td>{item.assignedDriver}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Delayed Drivers */}
            <div className="card mb-4 shadow-sm">
              <div className="card-header fw-bold">⏰ Delayed Drivers & Reasons</div>
              <table className="table mb-0">
                <thead>
                  <tr>
                    <th>Driver</th>
                    <th>Shipment</th>
                    <th>Reason</th>
                  </tr>
                </thead>
                <tbody>
                  {delayedDrivers.map((item, i) => (
                    <tr key={i}>
                      <td>{item.name}</td>
                      <td>{item.shipment}</td>
                      <td>{item.reason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Placeholder for Graphs */}
            <div className="card shadow-sm mb-5">
              <div className="card-body text-muted">
                📈 <em>Analytics graphs will be added in the future.</em>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reports;
