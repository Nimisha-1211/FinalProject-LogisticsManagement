// src/Pages/Admin/UserManagement.jsx
import React, { useState } from "react";

function UserManagement() {
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", role: "" });
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const addUser = () => {
    setUsers([...users, newUser]);
    setNewUser({ name: "", role: "" });
    setShowModal(false);
  };

  return (
    <div>
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
  );
}

export default UserManagement;
