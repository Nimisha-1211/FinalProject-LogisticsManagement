import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Shipments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [subCategoryFilter, setSubCategoryFilter] = useState('');
  const [subSubCategoryFilter, setSubSubCategoryFilter] = useState('');
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [viewedProducts, setViewedProducts] = useState([]);

  const [shipments, setShipments] = useState([
    {
      id: 1,
      name: 'Denim Jeans',
      mainCategory: 'Fashion',
      subCategory: "Men's Wear",
      subSubCategory: 'Jeans',
      origin: 'Mumbai',
      destination: 'Delhi',
      date: '2025-08-05',
      status: 'Pending',
      price: '999',
      imageUrl: 'https://m.media-amazon.com/images/I/61OUjfiobFS.jpg'
    },
    {
      id: 2,
      name: 'Floral Gown',
      mainCategory: 'Fashion',
      subCategory: "Women's Wear",
      subSubCategory: 'Gowns',
      origin: 'Pune',
      destination: 'Bangalore',
      date: '2025-08-04',
      status: 'In Transit',
      price: '1499',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0245/4686/9325/products/PinkFloralFloorLengthPromDresses_PinkFloralLongFormalEveningDresses_2048x.jpg?v=1634538929'
    },
    {
      id: 3,
      name: 'Western Top',
      mainCategory: 'Fashion',
      subCategory: "Women's Wear",
      subSubCategory: 'Western Wear',
      origin: 'Kolkata',
      destination: 'Lucknow',
      date: '2025-08-02',
      status: 'Delivered',
      price: '799',
      imageUrl: 'https://i.pinimg.com/736x/d6/f3/b1/d6f3b160a9a1983c17ca5c85a069b984.jpg'
    },
    {
      id: 4,
      name: 'Blazer Suit',
      mainCategory: 'Fashion',
      subCategory: "Men's Wear",
      subSubCategory: 'Suits',
      origin: 'Chennai',
      destination: 'Hyderabad',
      date: '2025-08-01',
      status: 'Pending',
      price: '1999',
      imageUrl: 'https://cdn.shopify.com/s/files/1/0118/6706/2330/products/H3c427f2a1e574f56a34dfb6fe0499755r_1024x1024@2x.jpg?v=1603545708'
    }
  ]);

  const handleDelete = (id) => {
    const updatedShipments = shipments.filter(shipment => shipment.id !== id);
    setShipments(updatedShipments);
  };

  const handleBuyNow = (shipment) => {
    setCart(prev => [...prev, shipment]);
    alert(`Proceeding to Buy: ${shipment.name} - ₹${shipment.price}`);
  };

  const handleAddToCart = (shipment) => {
    if (!cart.some(item => item.id === shipment.id)) {
      setCart(prev => [...prev, shipment]);
      alert(`Added to Cart: ${shipment.name}`);
    } else {
      alert(`${shipment.name} is already in your cart.`);
    }
  };

  const handleAddToWishlist = (shipment) => {
    if (!wishlist.some(item => item.id === shipment.id)) {
      setWishlist(prev => [...prev, shipment]);
      alert(`Added to Wishlist: ${shipment.name}`);
    } else {
      alert(`${shipment.name} is already in your wishlist.`);
    }
  };

  const filteredShipments = shipments.filter((shipment) => {
    return (
      shipment.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (!statusFilter || shipment.status === statusFilter) &&
      (!subCategoryFilter || shipment.subCategory === subCategoryFilter) &&
      (!subSubCategoryFilter || shipment.subSubCategory === subSubCategoryFilter)
    );
  });

  return (
    <div className="container my-4">
      <h2 className="mb-3">All Shipments</h2>

      {/* Filter Bar */}
      <div className="row g-2 mb-3">
        <div className="col-md">
          <input
            type="text"
            className="form-control"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="col-md">
          <select className="form-select" value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
            <option value="">All Statuses</option>
            <option value="Picked up">Picked up</option>
            <option value="Pending">Pending</option>
            <option value="In Transit">In Transit</option>
            <option value="Delivered">Delivered</option>
            <option value="Cancled">Cancled</option>
          </select>
        </div>
        <div className="col-md">
          <select className="form-select" value={subCategoryFilter} onChange={(e) => setSubCategoryFilter(e.target.value)}>
            <option value="">All Gender Categories</option>
            <option value="Men's Wear">Men's Wear</option>
            <option value="Women's Wear">Women's Wear</option>
          </select>
        </div>
        <div className="col-md">
          <select className="form-select" value={subSubCategoryFilter} onChange={(e) => setSubSubCategoryFilter(e.target.value)}>
            <option value="">All Subcategories</option>
            <option value="Tops">Tops</option>
            <option value="Jeans">Jeans</option>
            <option value="Jackets">Jackets</option>
            <option value="Suits">Suits</option>
            <option value="Gowns">Gowns</option>
            <option value="Ethnic Wear">Ethnic Wear</option>
            <option value="Western Wear">Western Wear</option>
          </select>
        </div>
      </div>

      {/* Horizontal Cards */}
      <div className="list-group">
        {filteredShipments.map((shipment) => (
          <div key={shipment.id} className="list-group-item p-3 mb-3 border rounded d-flex flex-wrap flex-md-nowrap align-items-start">
            
            {/* Image */}
            <img 
              src={shipment.imageUrl} 
              alt={shipment.name} 
              className="img-fluid rounded me-3" 
              style={{ width: "150px", height: "150px", objectFit: "cover" }} 
            />

            {/* Details */}
            <div className="flex-grow-1">
              <h5>{shipment.name}</h5>
              <p className="mb-1 text-muted">{shipment.mainCategory} - {shipment.subCategory} - {shipment.subSubCategory}</p>
              <p className="mb-1"><strong>From:</strong> {shipment.origin}</p>
              <p className="mb-1"><strong>To:</strong> {shipment.destination}</p>
              <p className="mb-1"><strong>Date:</strong> {shipment.date}</p>
              <p className="mb-1"><strong>Status:</strong> {shipment.status}</p>
              <p className="fw-bold text-primary mb-2">₹{shipment.price}</p>
            </div>

            {/* Buttons */}
            <div className="d-flex flex-column gap-2 mt-3 mt-md-0">
              <Link
                to={`/shipments/${shipment.id}`}
                state={{ shipment }}
                className="btn btn-primary btn-sm"
              >
                👁️ View
              </Link>
              <button className="btn btn-success btn-sm" onClick={() => handleBuyNow(shipment)}>🛒 Buy Now</button>
              <button className="btn btn-warning btn-sm" onClick={() => handleAddToCart(shipment)}>➕ Add to Cart</button>
              <button className="btn btn-danger btn-sm" onClick={() => handleAddToWishlist(shipment)}>❤️ Wishlist</button>
              <button className="btn btn-secondary btn-sm" onClick={() => handleDelete(shipment.id)}>🗑️ Remove</button>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default Shipments;
