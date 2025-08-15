
import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/admin/Warehouse.css";


const Warehouse = () => {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState('');
  const [role, setRole] = useState('Admin'); // Simulate role
  const [editingItem, setEditingItem] = useState(null);
  const [form, setForm] = useState({ name: '', quantity: '', location: '' });

  useEffect(() => {
    const mockItems = [
      { id: 1, name: 'Item A', quantity: 100, location: 'Rack 1' },
      { id: 2, name: 'Item B', quantity: 10, location: 'Rack 2' },
    ];
    setItems(mockItems);
  }, []);

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id));
    toast.error('Item deleted');
  };

  const handleEdit = (item) => {
    setEditingItem(item);
    setForm(item);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (editingItem) {
      setItems(items.map(i => (i.id === editingItem.id ? form : i)));
      toast.success('Item updated');
    } else {
      const newItem = { ...form, id: Date.now() };
      setItems([...items, newItem]);
      toast.success('Item added');
    }
    setEditingItem(null);
    setForm({ name: '', quantity: '', location: '' });
  };

  const handleInputChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mt-4">
      <ToastContainer />
      <div className="card-box">
        <h2 className="section-title">Warehouse Inventory</h2>

        <div className="d-flex justify-content-between mb-3">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Search item..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {role === 'Admin' && (
            <button className="btn btn-success ms-3" onClick={() => {
              setEditingItem(null);
              setForm({ name: '', quantity: '', location: '' });
            }}>
              + Add Item
            </button>
          )}
        </div>

        <table className="table table-bordered table-striped">
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Location</th>
              {role === 'Admin' && <th>Actions</th>}
            </tr>
          </thead>
          <tbody>
            {filteredItems.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.location}</td>
                {role === 'Admin' && (
                  <td>
                    <button className="btn btn-warning btn-sm me-2" onClick={() => handleEdit(item)}>Edit</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>Delete</button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {role === 'Admin' && (
        <div className="card-box mt-4">
          <h4 className="section-title">{editingItem ? 'Edit Item' : 'Add New Item'}</h4>
          <form onSubmit={handleFormSubmit}>
            <div className="mb-3">
              <input name="name" value={form.name} onChange={handleInputChange} placeholder="Item Name" className="form-control" required />
            </div>
            <div className="mb-3">
              <input name="quantity" type="number" value={form.quantity} onChange={handleInputChange} placeholder="Quantity" className="form-control" required />
            </div>
            <div className="mb-3">
              <input name="location" value={form.location} onChange={handleInputChange} placeholder="Location" className="form-control" required />
            </div>
            <button className="btn btn-primary w-100" type="submit">
              {editingItem ? 'Update Item' : 'Add Item'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Warehouse;
