import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/AdminDashboard.css";

function AdminDashboard() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", role: "" });
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const addUser = () => {
    if (!newUser.name || !newUser.role) return;
    setUsers([...users, newUser]);
    setNewUser({ name: "", role: "" });
    setShowModal(false);
  };

  const handleLogout = () => {
    // logout logic if needed
    navigate("/");
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <div className="col-md-3 bg-dark text-white min-vh-100 p-3">
          <h4>Admin Panel</h4>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link className="nav-link text-white" to="/admin">User Management</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/admin/shipments">Shipment Overview</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/warehouse">Warehouse Overview</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/admin/tasks">Assign Tasks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/admin/reports">Reports</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-white" to="/admin/settings">Settings</Link>
            </li>
            <li className="nav-item">
              <button className="btn btn-link nav-link text-white" onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="col-md-9 p-4">
          <h3>User Management</h3>
          <button className="btn btn-primary my-2" onClick={() => setShowModal(true)}>Add User</button>

          <table className="table table-bordered">
            <thead className="table-light">
              <tr>
                <th>Name</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, idx) => (
                <tr key={idx}>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Modal */}
          {showModal && (
            <div className="modal show fade d-block" tabIndex="-1">
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Add New User</h5>
                    <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
                  </div>
                  <div className="modal-body">
                    <div className="mb-3">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" name="name" value={newUser.name} onChange={handleChange} />
                    </div>
                    <div className="mb-3">
                      <label className="form-label">Role</label>
                      <select className="form-select" name="role" value={newUser.role} onChange={handleChange}>
                        <option value="">Select</option>
                        <option value="Warehouse Manager">Warehouse Manager</option>
                        <option value="Delivery Staff">Delivery Staff</option>
                      </select>
                    </div>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancel</button>
                    <button type="button" className="btn btn-success" onClick={addUser}>Add</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;