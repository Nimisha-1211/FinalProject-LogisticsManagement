import React, { useState, useEffect } from "react";
import "../../styles/admin/Inventory.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

function Inventory() {
  const [inventory, setInventory] = useState([]);
  const [search, setSearch] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [statusFilter, setStatusFilter] = useState("All");

  // add product form state
  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "",
    stock: "",
    location: "",
    price: "",
  });

  // edit state
  const [editingId, setEditingId] = useState(null);
  const [editProduct, setEditProduct] = useState({
    name: "",
    category: "",
    stock: "",
    location: "",
    price: "",
  });

  useEffect(() => {
    const mockItems = [
      { id: 1, sku: "SKU-001", name: "Wireless Headphones", category: "Electronics", stock: 45, location: "A1-B2", price: 99.99 },
      { id: 2, sku: "SKU-002", name: "Running Shoes", category: "Sports", stock: 8, location: "C3-D1", price: 79.99 },
      { id: 3, sku: "SKU-003", name: "Office Chair", category: "Furniture", stock: 0, location: "E2-F1", price: 249.99 },
    ];
    setInventory(mockItems);
  }, []);

  const getStatus = (stock) => {
    if (stock === 0) return "out-of-stock";
    if (stock < 15) return "low-stock";
    return "in-stock";
  };

  const filteredInventory = inventory.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = categoryFilter === "All" || item.category === categoryFilter;
    const matchesStatus = statusFilter === "All" || getStatus(item.stock) === statusFilter;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const handleDelete = (id) => {
    setInventory((prev) => prev.filter((item) => item.id !== id));
    toast.error("Item deleted!");
  };

  // ---------- Edit Product inline ----------
  const startEditing = (item) => {
    setEditingId(item.id);
    setEditProduct({ 
      name: item.name, 
      category: item.category, 
      stock: item.stock, 
      location: item.location, 
      price: item.price 
    });
  };

  const cancelEditing = () => {
    setEditingId(null);
    setEditProduct({
      name: "",
      category: "",
      stock: "",
      location: "",
      price: "",
    });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    const parsed = name === "stock" || name === "price" ? Number(value) : value;
    setEditProduct((p) => ({ ...p, [name]: parsed }));
  };

  const handleSaveEdit = (id) => {
    if (!editProduct.name || !editProduct.category || editProduct.stock < 0 || !editProduct.location || editProduct.price <= 0) {
      toast.error("Please fill all fields correctly!");
      return;
    }

    setInventory((prev) => 
      prev.map((item) => 
        item.id === id 
          ? { ...item, 
              name: editProduct.name, 
              category: editProduct.category, 
              stock: editProduct.stock, 
              location: editProduct.location, 
              price: editProduct.price 
            } 
          : item
      )
    );
    
    toast.success("Product updated!");
    setEditingId(null);
  };

  // ---------- Add Product inline ----------
  const handleAddInput = (e) => {
    const { name, value } = e.target;
    const parsed = name === "stock" || name === "price" ? Number(value) : value;
    setNewProduct((p) => ({ ...p, [name]: parsed }));
  };

  const handleAddProduct = (e) => {
    e.preventDefault();
    if (!newProduct.name || !newProduct.category || newProduct.stock < 0 || !newProduct.location || newProduct.price <= 0) {
      toast.error("Please fill all fields correctly!");
      return;
    }

    const nextId = inventory.length > 0 ? Math.max(...inventory.map((i) => i.id)) + 1 : 1;
    const nextSku = `SKU-${String(nextId).padStart(3, "0")}`;
    const newItem = { ...newProduct, id: nextId, sku: nextSku };

    setInventory((prev) => [...prev, newItem]);
    toast.success("Product added!");

    // reset form
    setNewProduct({ name: "", category: "", stock: "", location: "", price: "" });
  };

  return (
    <div className="warehouse-container">
      <ToastContainer />

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

      {/* Main Content */}
      <div className="main-content">
        <div className="inventory-header">
          <h3>Inventory</h3>
          <div className="filters">
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
              <option value="All">All Categories</option>
              <option value="Electronics">Electronics</option>
              <option value="Sports">Sports</option>
              <option value="Furniture">Furniture</option>
            </select>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="All">All Status</option>
              <option value="in-stock">In Stock</option>
              <option value="low-stock">Low Stock</option>
              <option value="out-of-stock">Out of Stock</option>
            </select>
          </div>
        </div>

        {/* Inline Add Product */}
        <form className="add-product-form" onSubmit={handleAddProduct}>
          <input type="text" name="name" placeholder="Product Name" value={newProduct.name} onChange={handleAddInput} required />
          <input type="text" name="category" placeholder="Category" value={newProduct.category} onChange={handleAddInput} required />
          <input type="number" name="stock" placeholder="Stock" value={newProduct.stock} onChange={handleAddInput} required min="0" />
          <input type="text" name="location" placeholder="Location" value={newProduct.location} onChange={handleAddInput} required />
          <input type="number" step="0.01" name="price" placeholder="Price" value={newProduct.price} onChange={handleAddInput} required min="0.01" />
          <button type="submit" className="btn btn-success">+ Add</button>
        </form>

        {/* Inventory Table */}
        <table className="inventory-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Location</th>
              <th>Price</th>
              <th>Stock Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredInventory.map((item) => (
              <tr key={item.id}>
                <td>{item.sku}</td>
                <td>
                  {editingId === item.id ? (
                    <input 
                      type="text" 
                      name="name" 
                      value={editProduct.name} 
                      onChange={handleEditChange} 
                      required 
                    />
                  ) : (
                    item.name
                  )}
                </td>
                <td>
                  {editingId === item.id ? (
                    <input 
                      type="text" 
                      name="category" 
                      value={editProduct.category} 
                      onChange={handleEditChange} 
                      required 
                    />
                  ) : (
                    item.category
                  )}
                </td>
                <td>
                  {editingId === item.id ? (
                    <input 
                      type="number" 
                      name="stock" 
                      value={editProduct.stock} 
                      onChange={handleEditChange} 
                      required 
                      min="0"
                    />
                  ) : (
                    item.stock
                  )}
                </td>
                <td>
                  {editingId === item.id ? (
                    <input 
                      type="text" 
                      name="location" 
                      value={editProduct.location} 
                      onChange={handleEditChange} 
                      required 
                    />
                  ) : (
                    item.location
                  )}
                </td>
                <td>
                  {editingId === item.id ? (
                    <input 
                      type="number" 
                      step="0.01" 
                      name="price" 
                      value={editProduct.price} 
                      onChange={handleEditChange} 
                      required 
                      min="0.01"
                    />
                  ) : (
                    `$${Number(item.price).toFixed(2)}`
                  )}
                </td>
                <td>
                  <span className={`status ${getStatus(item.stock)}`}>
                    {getStatus(item.stock).replace("-", " ")}
                  </span>
                </td>
                <td>
                  {editingId === item.id ? (
                    <>
                      <button className="btn btn-success btn-sm me-2" onClick={() => handleSaveEdit(item.id)}>
                        Save
                      </button>
                      <button className="btn btn-secondary btn-sm" onClick={cancelEditing}>
                        Cancel
                      </button>
                    </>
                  ) : (
                    <>
                      <button className="btn btn-warning btn-sm me-2" onClick={() => startEditing(item)}>
                        Edit
                      </button>
                      <button className="btn btn-danger btn-sm" onClick={() => handleDelete(item.id)}>
                        Delete
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Inventory;