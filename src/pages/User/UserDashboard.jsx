import React ,{useEffect}from 'react';
import { Package, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import UserShipmentCard from '../../components/user/UserShipmentCard';

const UserDashboard = () => {
  // Mock data
  const stats = [
    { title: 'Total Shipments', value: '24', change: '+12%', icon: Package, color: 'primary' },
    { title: 'Active Shipments', value: '8', change: '+3', icon: Clock, color: 'warning' },
    { title: 'Delivered', value: '16', change: '+8%', icon: CheckCircle, color: 'success' },
    { title: 'Total Value', value: '$12,450', change: '+15%', icon: TrendingUp, color: 'info' }
  ];

  const recentShipments = [
    {
      id: 'SH-2025-001',
      description: 'Electronics Package',
      status: 'In Transit',
      shippedDate: 'Jan 15, 2025',
      expectedDate: 'Jan 18, 2025',
      destination: 'New York, NY',
      carrier: 'FedEx Express',
      value: '899.00'
    },
    {
      id: 'SH-2025-002',
      description: 'Clothing Order',
      status: 'Delivered',
      shippedDate: 'Jan 12, 2025',
      expectedDate: 'Jan 16, 2025',
      destination: 'Los Angeles, CA',
      carrier: 'UPS Ground',
      value: '156.50'
    },
    {
      id: 'SH-2025-003',
      description: 'Books & Stationery',
      status: 'Pending',
      shippedDate: 'Jan 16, 2025',
      expectedDate: 'Jan 20, 2025',
      destination: 'Chicago, IL',
      carrier: 'USPS Priority',
      value: '78.25'
    }
  ];

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
    <div className="container py-4">
      {/* Header */}
      <div className="mb-4">
        <h1 className="h3 fw-bold text-dark">Dashboard</h1>
        <p className="text-muted">Welcome back! Here's what's happening with your shipments.</p>
      </div>

      {/* Stats Grid */}
      <div className="row g-4 mb-4">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <div key={index} className="col-12 col-md-6 col-lg-3">
              <div className="card shadow-sm">
                <div className="card-body d-flex justify-content-between align-items-center">
                  <div>
                    <p className="text-muted mb-1 small">{stat.title}</p>
                    <h5 className="fw-bold mb-0">{stat.value}</h5>
                    <small className="text-success">{stat.change} from last month</small>
                  </div>
                  <div className={`rounded-circle bg-${stat.color} bg-opacity-10 p-3`}>
                    <Icon className={`text-${stat.color}`} size={24} />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Recent Activity */}
      <div className="row g-4">
        {/* Recent Shipments */}
        <div className="col-12 col-lg-6">
          <div className="d-flex justify-content-between align-items-center mb-3">
            <h2 className="h5 fw-semibold">Recent Shipments</h2>
            <a href="/my-shipments" className="text-primary text-decoration-none small fw-semibold">
              View All
            </a>
          </div>
          <div className="d-flex flex-column">
            {recentShipments.map((shipment, i) => (
              <div key={i} className="mb-3">
                <UserShipmentCard
                  shipment={shipment}
                  onClick={(shipment) => console.log('View shipment:', shipment.id)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="col-12 col-lg-6">
          <h2 className="h5 fw-semibold mb-3">Quick Actions</h2>
          <div className="d-flex flex-column">
            <button className="btn btn-primary text-start mb-3 p-3">
              <h6 className="fw-semibold mb-1">Track a Shipment</h6>
              <small className="text-light">Enter tracking number to get real-time updates</small>
            </button>

            <button className="btn btn-success text-start mb-3 p-3">
              <h6 className="fw-semibold mb-1">Create New Shipment</h6>
              <small className="text-light">Start a new shipping request</small>
            </button>

            <button className="btn btn-info text-start mb-3 p-3">
              <h6 className="fw-semibold mb-1">View History</h6>
              <small className="text-light">Browse all your past shipments</small>
            </button>

            <div className="card shadow-sm border">
              <div className="card-body">
                <h6 className="fw-semibold mb-2">Need Help?</h6>
                <p className="text-muted small mb-2">
                  Have questions about your shipments or need assistance?
                </p>
                <button className="btn btn-link p-0 text-primary fw-semibold small">
                  Contact Support →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;