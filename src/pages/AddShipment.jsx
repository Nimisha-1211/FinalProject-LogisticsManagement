import React, { useState } from 'react';
import '../styles/AddShipment.css'; // Reusing the same CSS for consistency

const AddShipment = ({ onAdd }) => {
  const [formData, setFormData] = useState({
    name: '',
    mainCategory: 'Fashion',
    subCategory: '',
    subSubCategory: '',
    origin: '',
    destination: '',
    date: '',
    price: '',
    status: 'Pending',
    assignedTo: '',
    imageUrl: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      formData.name &&
      formData.subCategory &&
      formData.subSubCategory &&
      formData.origin &&
      formData.destination &&
      formData.date &&
      formData.price &&
      formData.imageUrl
    ) {
      const newShipment = {
        ...formData,
        id: Date.now()
      };
      onAdd(newShipment);
      alert('Shipment added successfully!');
      setFormData({
        name: '',
        mainCategory: 'Fashion',
        subCategory: '',
        subSubCategory: '',
        origin: '',
        destination: '',
        date: '',
        price: '',
        status: 'Pending',
        assignedTo: '',
        imageUrl: ''
      });
    } else {
      alert('Please fill all required fields!');
    }
  };

  return (
    <div className="shipments-container">
      <h2 className="shipments-title">📦 Add New Shipment</h2>
      <form className="shipment-details" onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Product Name" value={formData.name} onChange={handleChange} required />

        <select name="subCategory" value={formData.subCategory} onChange={handleChange} required>
          <option value="">Select Gender Category</option>
          <option value="Men's Wear">Men's Wear</option>
          <option value="Women's Wear">Women's Wear</option>
          <option value="Kids Wear">Kids Wear</option>
        </select>

        <select name="subSubCategory" value={formData.subSubCategory} onChange={handleChange} required>
          <option value="">Select Subcategory</option>
          <option value="Tops">Tops</option>
          <option value="Jeans">Jeans</option>
          <option value="Jackets">Jackets</option>
          <option value="Suits">Suits</option>
          <option value="Gowns">Gowns</option>
          <option value="Ethnic Wear">Ethnic Wear</option>
          <option value="Western Wear">Western Wear</option>
        </select>

        <input type="text" name="origin" placeholder="Origin City" value={formData.origin} onChange={handleChange} required />
        <input type="text" name="destination" placeholder="Destination City" value={formData.destination} onChange={handleChange} required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <input type="number" name="price" placeholder="Price ₹" value={formData.price} onChange={handleChange} required />
        <input type="text" name="imageUrl" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} required />

        <select name="assignedTo" value={formData.assignedTo} onChange={handleChange}>
          <option value="">Assign to (optional)</option>
          <option value="Delivery Staff">Delivery Staff</option>
          <option value="Warehouse Manager">Warehouse Manager</option>
        </select>

        <button type="submit" className="buy-button">➕ Add Shipment</button>
      </form>
    </div>
  );
};

export default AddShipment;