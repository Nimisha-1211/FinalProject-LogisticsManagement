import React from "react";
import { Card, CardBody } from "react-bootstrap";

const AdminDashboard = () => {
  return (
    <div>
      <h2 className="mb-4">Admin Dashboard</h2>

      {/* Dashboard Cards */}
      <div className="row">
        <div className="col-md-3 mb-3">
          <Card className="shadow-sm">
            <CardBody>
              <h5>Total Users</h5>
              <p className="display-6">120</p>
            </CardBody>
          </Card>
        </div>

        <div className="col-md-3 mb-3">
          <Card className="shadow-sm">
            <CardBody>
              <h5>Shipments</h5>
              <p className="display-6">56</p>
            </CardBody>
          </Card>
        </div>

        <div className="col-md-3 mb-3">
          <Card className="shadow-sm">
            <CardBody>
              <h5>Drivers</h5>
              <p className="display-6">18</p>
            </CardBody>
          </Card>
        </div>

        <div className="col-md-3 mb-3">
          <Card className="shadow-sm">
            <CardBody>
              <h5>Warehouses</h5>
              <p className="display-6">5</p>
            </CardBody>
          </Card>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mt-4">
        <h4>Recent Activity</h4>
        <ul className="list-group">
          <li className="list-group-item">Shipment #102 assigned to Driver A</li>
          <li className="list-group-item">User John Doe registered</li>
          <li className="list-group-item">Warehouse stock updated</li>
        </ul>
      </div>
    </div>
  );
};

export default AdminDashboard;
