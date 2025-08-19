import React, { useState, useEffect } from 'react';
import "../../styles/admin/WarehouseDashboard.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'; 

function WarehouseDashboard() {
  const [inventory, setInventory] = useState([]);
  const [item, setItem] = useState('');
  const [form, setForm] = useState({ name: '', quantity: '', location: '' });
  const [editingItem, setEditingItem] = useState(null);
  const [shipmentId, setShipmentId] = useState('');
  const [notifications, setNotifications] = useState(['Low stock: Item-A']);

  useEffect(() => {
    const mockItems = [
      { id: 1, name: 'Item A', quantity: 100, location: 'Rack 1' },
      { id: 2, name: 'Item B', quantity: 10, location: 'Rack 2' },
    ];
    setInventory(mockItems);
  }, []);

  const handleFormChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      setInventory(inventory.map(i => (i.id === editingItem.id ? form : i)));
      toast.success("Item updated!");
    } else {
      setInventory([...inventory, { ...form, id: Date.now() }]);
      toast.success("Item added!");
    }
    setForm({ name: '', quantity: '', location: '' });
    setEditingItem(null);
  };

  const handleEdit = (item) => {
    setForm(item);
    setEditingItem(item);
  };

  const handleDelete = (id) => {
    setInventory(inventory.filter(item => item.id !== id));
    toast.error("Item deleted");
  };

  const handleDriverRequest = (e) => {
    e.preventDefault();
    toast.success(`Driver requested for Shipment ID: ${shipmentId}`);
    setShipmentId('');
  };

  return (
    <div className="container-fluid p-4">
      <ToastContainer />
      <div className="row">

        {/* Sidebar */}
        <div className="col-md-3 bg-light p-3 sidebar">
          <h4>Warehouse Manager</h4>
          <ul className="nav flex-column">
            <li className="nav-item"><Link className="nav-link" to="/warehouse">Manage Inventory</Link></li>
            <li className="nav-item"><a className="nav-link" href="#">Inbound/Outbound</a></li>
            <li className="nav-item"><Link className="nav-link" to="/assign-driver">Assign Driver</Link></li>
            <li className="nav-item"><a className="nav-link" href="#">View Shipments</a></li>
            <li className="nav-item"><a className="nav-link" href="#">Notifications</a></li>
            <li className="nav-item"><a className="nav-link text-danger" href="#">Logout</a></li>
          </ul>
        </div>

        {/* Main content */}
        <div className="col-md-9">
          <h3 className="mb-4">📦 Inventory Management</h3>

          <form className="mb-4" onSubmit={handleFormSubmit}>
            <div className="row g-2">
              <div className="col">
                <input className="form-control" name="name" placeholder="Item Name" value={form.name} onChange={handleFormChange} required />
              </div>
              <div className="col">
                <input className="form-control" name="quantity" type="number" placeholder="Quantity" value={form.quantity} onChange={handleFormChange} required />
              </div>
              <div className="col">
                <input className="form-control" name="location" placeholder="Location" value={form.location} onChange={handleFormChange} required />
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary">
                  {editingItem ? "Update" : "Add"}
                </button>
              </div>
            </div>
          </form>

          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr>
                <th>Name</th>
                <th>Quantity</th>
                <th>Location</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {inventory.map(item => (
                <tr key={item.id}>
                  <td>{item.name}</td>
                  <td>{item.quantity}</td>
                  <td>{item.location}</td>
                  <td>
                    <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(item)}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <hr />

          <h4>🚚 Request Driver</h4>
          <form className="mb-3" onSubmit={handleDriverRequest}>
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Enter Shipment ID" value={shipmentId} onChange={(e) => setShipmentId(e.target.value)} />
              <button className="btn btn-success" type="submit">Request</button>
            </div>
          </form>

          <h4>🔔 Notifications</h4>
          <ul className="list-group mb-4">
            {notifications.map((note, i) => (
              <li key={i} className="list-group-item list-group-item-warning">{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default WarehouseDashboard;