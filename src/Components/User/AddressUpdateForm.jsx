import React, { useState } from "react";
import "../../styles/User/AddressUpdateForm.css"

const AddressUpdateForm = () => {
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: ""
  });

  const handleChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Address updated successfully!");
  };

  return (
    <div className="address-form-container">
      <h2>Update Address</h2>
      <form className="address-form" onSubmit={handleSubmit}>
        <input type="text" name="street" placeholder="Street Address" value={address.street} onChange={handleChange} required />
        <input type="text" name="city" placeholder="City" value={address.city} onChange={handleChange} required />
        <input type="text" name="state" placeholder="State" value={address.state} onChange={handleChange} required />
        <input type="text" name="zipcode" placeholder="Zip Code" value={address.zipcode} onChange={handleChange} required />
        <input type="text" name="country" placeholder="Country" value={address.country} onChange={handleChange} required />

        <button type="submit">Save Address</button>
      </form>
    </div>
  );
};

export default AddressUpdateForm;