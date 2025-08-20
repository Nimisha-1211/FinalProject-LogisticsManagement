import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../../styles/admin/Orders.css";

const Orders = () => {
  const [orders, setOrders] = useState([
    { id: 1, name: "Order A", type: "Inbound", status: "Pending" },
    { id: 2, name: "Order B", type: "Outbound", status: "Completed" },
    { id: 3, name: "Order C", type: "Inbound", status: "Cancelled" },
  ]);

  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState("All");
  const [editingId, setEditingId] = useState(null);

  // Add New Order
  const handleAdd = () => {
    const newOrder = {
      id: orders.length + 1,
      name: `Order ${orders.length + 1}`,
      type: "Inbound",
      status: "Pending",
    };
    setOrders([...orders, newOrder]);
    toast.success("New Order Added!");
  };

  // Start editing
  const handleEdit = (id) => {
    setEditingId(id);
  };

  // Save changes
  const handleSave = (id) => {
    setEditingId(null);
    toast.info("Order Updated!");
  };

  // Cancel editing
  const handleCancel = () => {
    setEditingId(null);
  };

  // Update order field
  const handleChange = (id, field, value) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, [field]: value } : order
      )
    );
  };

  // Delete order
  const handleDelete = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
    toast.error("Order Deleted!");
  };

  // Filter based on tab
  const filteredOrders = orders.filter((order) => {
    if (activeTab === "All") return true;
    return order.type === activeTab;
  });

  // Search filter
  const displayedOrders = filteredOrders.filter((order) =>
    order.name.toLowerCase().includes(search.toLowerCase())
  );

  // Count for cards
  const total = orders.length;
  const pending = orders.filter((o) => o.status === "Pending").length;
  const completed = orders.filter((o) => o.status === "Completed").length;
  const cancelled = orders.filter((o) => o.status === "Cancelled").length;

  return (
    <div className="orders-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h4>Warehouse Manager</h4>
        <ul>
          <li><Link to="/warehouse-dashboard">Dashboard</Link></li>
          <li><Link to="/inventory">Inventory</Link></li>
          <li><Link to="/orders">Orders</Link></li>
          <li><Link to="/assign-driver">Assign Driver</Link></li>
          
          <li><Link to="/settings">Settings</Link></li>
          <li><Link to="/logout" className="logout-link">Logout</Link></li>
        </ul>
      </div>

      {/* Main content */}
      <div className="orders-main">
        <h2>Orders</h2>

        {/* Order summary cards */}
        <div className="cards">
          <div className="card total">Total Orders: {total}</div>
          <div className="card pending">Pending: {pending}</div>
          <div className="card completed">Completed: {completed}</div>
          <div className="card cancelled">Cancelled: {cancelled}</div>
        </div>

        {/* Controls */}
        <div className="controls">
          <div className="tabs">
            {["All", "Inbound", "Outbound"].map((tab) => (
              <button
                key={tab}
                className={activeTab === tab ? "active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <input
            type="text"
            placeholder="Search orders..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          <button className="new-btn" onClick={handleAdd}>
            + New Order
          </button>
        </div>

        {/* Orders Table */}
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Order Name</th>
              <th>Type</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {displayedOrders.map((order) => (
              <tr key={order.id}>
                <td>{order.id}</td>
                <td>
                  {editingId === order.id ? (
                    <input
                      value={order.name}
                      onChange={(e) =>
                        handleChange(order.id, "name", e.target.value)
                      }
                    />
                  ) : (
                    order.name
                  )}
                </td>
                <td>
                  {editingId === order.id ? (
                    <select
                      value={order.type}
                      onChange={(e) =>
                        handleChange(order.id, "type", e.target.value)
                      }
                    >
                      <option value="Inbound">Inbound</option>
                      <option value="Outbound">Outbound</option>
                    </select>
                  ) : (
                    order.type
                  )}
                </td>
                <td>
                  {editingId === order.id ? (
                    <select
                      value={order.status}
                      onChange={(e) =>
                        handleChange(order.id, "status", e.target.value)
                      }
                    >
                      <option value="Pending">Pending</option>
                      <option value="Completed">Completed</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  ) : (
                    order.status
                  )}
                </td>
                <td>
                  {editingId === order.id ? (
                    <>
                      <button
                        className="save-btn"
                        onClick={() => handleSave(order.id)}
                      >
                        Save
                      </button>
                      <button
                        className="cancel-btn"
                        onClick={handleCancel}
                      >
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button
                        className="edit-btn"
                        onClick={() => handleEdit(order.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(order.id)}
                      >
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
            {displayedOrders.length === 0 && (
              <tr>
                <td colSpan="5">No Orders Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <ToastContainer position="top-right" autoClose={2000} />
    </div>
  );
};

export default Orders;