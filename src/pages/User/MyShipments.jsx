// import React, { useState,useEffect } from 'react';
// import { Search, Filter, Package, Plus } from 'lucide-react';
// import UserShipmentCard from '../../components/user/UserShipmentCard';

// const MyShipments = () => {
//   const [searchTerm, setSearchTerm] = useState('');
//   const [statusFilter, setStatusFilter] = useState('all');

//   // Mock data
//   const allShipments = [
//     {
//       id: 'SH-2025-001',
//       description: 'Electronics Package',
//       status: 'In Transit',
//       shippedDate: 'Jan 15, 2025',
//       expectedDate: 'Jan 18, 2025',
//       destination: 'New York, NY',
//       carrier: 'FedEx Express',
//       value: '899.00'
//     },
//     {
//       id: 'SH-2025-002',
//       description: 'Clothing Order',
//       status: 'Delivered',
//       shippedDate: 'Jan 12, 2025',
//       expectedDate: 'Jan 16, 2025',
//       destination: 'Los Angeles, CA',
//       carrier: 'UPS Ground',
//       value: '156.50'
//     },
//     {
//       id: 'SH-2025-003',
//       description: 'Books & Stationery',
//       status: 'Pending',
//       shippedDate: 'Jan 16, 2025',
//       expectedDate: 'Jan 20, 2025',
//       destination: 'Chicago, IL',
//       carrier: 'USPS Priority',
//       value: '78.25'
//     },
//     {
//       id: 'SH-2025-004',
//       description: 'Home Appliances',
//       status: 'Delayed',
//       shippedDate: 'Jan 10, 2025',
//       expectedDate: 'Jan 14, 2025',
//       destination: 'Miami, FL',
//       carrier: 'DHL Express',
//       value: '1,245.00'
//     },
//     {
//       id: 'SH-2025-005',
//       description: 'Art Supplies',
//       status: 'In Transit',
//       shippedDate: 'Jan 17, 2025',
//       expectedDate: 'Jan 21, 2025',
//       destination: 'Seattle, WA',
//       carrier: 'FedEx Ground',
//       value: '234.75'
//     },
//     {
//       id: 'SH-2025-006',
//       description: 'Furniture Set',
//       status: 'Delivered',
//       shippedDate: 'Jan 8, 2025',
//       expectedDate: 'Jan 12, 2025',
//       destination: 'Austin, TX',
//       carrier: 'UPS Freight',
//       value: '2,150.00'
//     }
//   ];

// useEffect(() => {
//   async function fetchData() {
//     try {
//       const res = await fetch("http://localhost:3000/orders/neworders", {
//         method: "GET",   // ✅ must be a string
//       });
//       const data = await res.json();
//       console.log(data);
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   }
//   fetchData();
// }, []);

//   // Filter shipments
//   const filteredShipments = allShipments.filter(shipment => {
//     const matchesSearch = searchTerm === '' ||
//       shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       shipment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       shipment.destination.toLowerCase().includes(searchTerm.toLowerCase());

//     const matchesStatus = statusFilter === 'all' ||
//       shipment.status.toLowerCase().replace(' ', '_') === statusFilter;

//     return matchesSearch && matchesStatus;
//   });

//   const statusCounts = {
//     all: allShipments.length,
//     pending: allShipments.filter(s => s.status === 'Pending').length,
//     in_transit: allShipments.filter(s => s.status === 'In Transit').length,
//     delivered: allShipments.filter(s => s.status === 'Delivered').length,
//     delayed: allShipments.filter(s => s.status === 'Delayed').length
//   };

//   return (
//     <div className="container py-4">
//       {/* Header */}
//       <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-4">
//         <div>
//           <h1 className="h3 fw-bold">My Shipments</h1>
//           <p className="text-muted">Manage and track all your shipments in one place</p>
//         </div>
//         <button className="btn btn-primary d-flex align-items-center mt-3 mt-md-0">
//           <Plus size={16} className="me-2" />
//           New Shipment
//         </button>
//       </div>

//       {/* Search & Filters */}
//       <div className="card shadow-sm mb-4">
//         <div className="card-body row g-3">
//           {/* Search */}
//           <div className="col-lg">
//             <div className="input-group">
//               <span className="input-group-text">
//                 <Search size={16} />
//               </span>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Search by tracking number, description, or destination..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//               />
//             </div>
//           </div>

//           {/* Status Filter */}
//           <div className="col-lg-4">
//             <div className="input-group">
//               <span className="input-group-text">
//                 <Filter size={16} />
//               </span>
//               <select
//                 className="form-select"
//                 value={statusFilter}
//                 onChange={(e) => setStatusFilter(e.target.value)}
//               >
//                 <option value="all">All Status ({statusCounts.all})</option>
//                 <option value="pending">Pending ({statusCounts.pending})</option>
//                 <option value="in_transit">In Transit ({statusCounts.in_transit})</option>
//                 <option value="delivered">Delivered ({statusCounts.delivered})</option>
//                 <option value="delayed">Delayed ({statusCounts.delayed})</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Status Overview */}
//       <div className="row g-3 mb-4">
//         {[
//           { key: 'all', label: 'Total', color: 'primary' },
//           { key: 'pending', label: 'Pending', color: 'warning' },
//           { key: 'in_transit', label: 'In Transit', color: 'info' },
//           { key: 'delivered', label: 'Delivered', color: 'success' },
//           { key: 'delayed', label: 'Delayed', color: 'danger' }
//         ].map((item) => (
//           <div className="col-6 col-lg" key={item.key}>
//             <div
//               className={`card text-center border-2 ${statusFilter === item.key ? `border-${item.color}` : ''}`}
//               style={{ cursor: 'pointer' }}
//               onClick={() => setStatusFilter(item.key)}
//             >
//               <div className="card-body p-3">
//                 <p className="small text-muted mb-1">{item.label}</p>
//                 <h4 className="fw-bold mb-0">{statusCounts[item.key]}</h4>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Shipments List */}
//       {filteredShipments.length === 0 ? (
//         <div className="card text-center p-5">
//           <Package size={48} className="text-muted mb-3 mx-auto" />
//           <h5>No shipments found</h5>
//           <p className="text-muted">
//             {searchTerm || statusFilter !== 'all'
//               ? 'Try adjusting your search or filter criteria.'
//               : "You don't have any shipments yet."}
//           </p>
//           <button className="btn btn-primary">Create New Shipment</button>
//         </div>
//       ) : (
//         <div className="row g-3">
//           {filteredShipments.map((shipment) => (
//             <div className="col-12 col-lg-6" key={shipment.id}>
//               <UserShipmentCard
//                 shipment={shipment}
//                 onClick={(shipment) => console.log('View shipment:', shipment.id)}
//               />
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Results Summary */}
//       {filteredShipments.length > 0 && (
//         <div className="text-center mt-4">
//           <p className="text-muted">
//             Showing {filteredShipments.length} of {allShipments.length} shipments
//           </p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default MyShipments;

import React, { useState, useEffect } from "react";

function MyShipments() {
  // ✅ Keep mock data as fallback (so UI shows something if backend is not ready)
  const mockShipments = [
    {
      id: "ORD-101",
      description: "Electronics Package",
      status: "Pending",
      shippedDate: "2025-01-20",
      expectedDate: "2025-01-25",
      destination: "New Jersey, NJ",
      carrier: "FedEx",
      value: "120.00",
    },
    {
      id: "ORD-102",
      description: "Furniture Delivery",
      status: "Delivered",
      shippedDate: "2025-01-18",
      expectedDate: "2025-01-22",
      destination: "Boston, MA",
      carrier: "UPS",
      value: "300.00",
    },
    {
      id: "ORD-103",
      description: "Clothing Shipment",
      status: "Pending",
      shippedDate: "2025-01-22",
      expectedDate: "2025-01-27",
      destination: "Chicago, IL",
      carrier: "DHL",
      value: "80.00",
    },
    {
      id: "ORD-104",
      description: "Kitchen Appliances",
      status: "Delivered",
      shippedDate: "2025-01-15",
      expectedDate: "2025-01-20",
      destination: "San Francisco, CA",
      carrier: "FedEx",
      value: "250.00",
    },
  ];

  // ✅ Use state so it can update with backend data
  const [allShipments, setAllShipments] = useState(mockShipments);



  useEffect(() => {
  async function fetchData() {
    try {
      const res = await fetch("http://localhost:4000/orders/getorders", {
        method: "GET"
      });
      const data = await res.json();
      console.log(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  fetchData();
}, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>📦 My Shipments</h2>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          marginTop: "20px",
        }}
      >
        <thead>
          <tr style={{ backgroundColor: "#f4f4f4" }}>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Order ID</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Description</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Status</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Shipped Date</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Expected Date</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Destination</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Carrier</th>
            <th style={{ border: "1px solid #ddd", padding: "10px" }}>Value ($)</th>
          </tr>
        </thead>
        <tbody>
          {allShipments.map((shipment, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{shipment.id}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{shipment.description}</td>
              <td
                style={{
                  border: "1px solid #ddd",
                  padding: "10px",
                  color: shipment.status === "Delivered" ? "green" : "orange",
                  fontWeight: "bold",
                }}
              >
                {shipment.status}
              </td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{shipment.shippedDate}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{shipment.expectedDate}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{shipment.destination}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{shipment.carrier}</td>
              <td style={{ border: "1px solid #ddd", padding: "10px" }}>{shipment.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default MyShipments;
