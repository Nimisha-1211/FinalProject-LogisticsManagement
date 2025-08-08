import React, { useState } from 'react';
import '../styles/AddShipment.css'; // Optional: Add custom CSS here
const AddShipment = ({ onAdd }) => {
  const [shipment, setShipment] = useState({
    name: '',
    origin: '',
    destination: '',
    date: '',
    status: '',
    price: '',
    imageUrl: '',
    gender: '',
    subcategory: '',
  });

  const subcategories = {
    "Men's Wear": ['Tops', 'Jeans', 'Jackets', 'Suits', 'Ethnic Wear', 'Western Wear'],
    "Women's Wear": ['Tops', 'Jeans', 'Gowns', 'Ethnic Wear', 'Western Wear'],
    "Kids Wear": ['Tops', 'Jeans', 'Dresses', 'Ethnic Wear', 'Western Wear'],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setShipment({ ...shipment, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAdd) onAdd(shipment);
    setShipment({
      name: '',
      origin: '',
      destination: '',
      date: '',
      status: '',
      price: '',
      imageUrl: '',
      gender: '',
      subcategory: '',
    });
  };

  return (
    <div className="add-shipment-container">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="name" placeholder="Product Name" value={shipment.name} onChange={handleChange} required />
        <input type="text" name="origin" placeholder="Origin" value={shipment.origin} onChange={handleChange} required />
        <input type="text" name="destination" placeholder="Destination" value={shipment.destination} onChange={handleChange} required />
        <input type="date" name="date" value={shipment.date} onChange={handleChange} required />
        <input type="text" name="status" placeholder="Status" value={shipment.status} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price (₹)" value={shipment.price} onChange={handleChange} required />
        <input type="text" name="imageUrl" placeholder="Image URL" value={shipment.imageUrl} onChange={handleChange} required />

        <select name="gender" value={shipment.gender} onChange={handleChange} required>
          <option value="">Select Gender Category</option>
          <option value="Men's Wear">Men's Wear</option>
          <option value="Women's Wear">Women's Wear</option>
        </select>

        {shipment.gender && (
          <select name="subcategory" value={shipment.subcategory} onChange={handleChange} required>
            <option value="">Select Subcategory</option>
            {subcategories[shipment.gender].map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        )}

        <button type="submit" className="submit-btn">Add Product</button>
      </form>
    </div>
  );
};

export default AddShipment;