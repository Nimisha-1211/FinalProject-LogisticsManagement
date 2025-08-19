import React from "react";

const InventoryTable = ({ items }) => {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {items && items.length > 0 ? (
            items.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.quantity}</td>
                <td>{item.location}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center text-muted">
                No inventory items available
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default InventoryTable;
