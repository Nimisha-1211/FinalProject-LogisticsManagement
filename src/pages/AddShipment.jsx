import React, { useState } from 'react';

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
    <div className="container my-5">
      <div className="card shadow-lg p-4">
        <h2 className="text-center mb-4">
          📦 Add New Shipment
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input type="text" name="name" className="form-control" placeholder="Product Name" value={formData.name} onChange={handleChange} required />
          </div>

          <div className="mb-3">
            <select name="subCategory" className="form-select" value={formData.subCategory} onChange={handleChange} required>
              <option value="">Select Gender Category</option>
              <option value="Men's Wear">Men's Wear</option>
              <option value="Women's Wear">Women's Wear</option>
              <option value="Kids Wear">Kids Wear</option>
            </select>
          </div>

          <div className="mb-3">
            <select name="subSubCategory" className="form-select" value={formData.subSubCategory} onChange={handleChange} required>
              <option value="">Select Subcategory</option>
              <option value="Tops">Tops</option>
              <option value="Jeans">Jeans</option>
              <option value="Jackets">Jackets</option>
              <option value="Suits">Suits</option>
              <option value="Gowns">Gowns</option>
              <option value="Ethnic Wear">Ethnic Wear</option>
              <option value="Western Wear">Western Wear</option>
            </select>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <input type="text" name="origin" className="form-control" placeholder="Origin City" value={formData.origin} onChange={handleChange} required />
            </div>
            <div className="col-md-6 mb-3">
              <input type="text" name="destination" className="form-control" placeholder="Destination City" value={formData.destination} onChange={handleChange} required />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <input type="date" name="date" className="form-control" value={formData.date} onChange={handleChange} required />
            </div>
            <div className="col-md-6 mb-3">
              <input type="number" name="price" className="form-control" placeholder="Price ₹" value={formData.price} onChange={handleChange} required />
            </div>
          </div>

          <div className="mb-3">
            <input type="text" name="imageUrl" className="form-control" placeholder="Image URL" value={formData.imageUrl} onChange={handleChange} required />
          </div>

          <div className="mb-4">
            <select name="assignedTo" className="form-select" value={formData.assignedTo} onChange={handleChange}>
              <option value="">Assign to (optional)</option>
              <option value="Delivery Staff">Delivery Staff</option>
              <option value="Warehouse Manager">Warehouse Manager</option>
            </select>
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary w-100 py-2">
              ➕ Add Shipment
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddShipment;
