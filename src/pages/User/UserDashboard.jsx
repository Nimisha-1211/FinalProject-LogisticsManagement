import React from 'react';
import { Package, TrendingUp, Clock, CheckCircle } from 'lucide-react';
import UserShipmentCard from '../../components/user/UserShipmentCard';

const UserDashboard = () => {
  // Mock data
  const stats = [
    {
      title: 'Total Shipments',
      value: '24',
      change: '+12%',
      icon: Package,
      color: 'blue'
    },
    {
      title: 'Active Shipments',
      value: '8',
      change: '+3',
      icon: Clock,
      color: 'orange'
    },
    {
      title: 'Delivered',
      value: '16',
      change: '+8%',
      icon: CheckCircle,
      color: 'green'
    },
    {
      title: 'Total Value',
      value: '$12,450',
      change: '+15%',
      icon: TrendingUp,
      color: 'purple'
    }
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

  const getColorClasses = (color) => {
    const colors = {
      blue: 'text-blue-600 bg-blue-100',
      orange: 'text-orange-600 bg-orange-100',
      green: 'text-green-600 bg-green-100',
      purple: 'text-purple-600 bg-purple-100'
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">Welcome back! Here's what's happening with your shipments.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                    <p className="text-sm text-green-600 mt-1">{stat.change} from last month</p>
                  </div>
                  <div className={`p-3 rounded-full ${getColorClasses(stat.color)}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Shipments */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Recent Shipments</h2>
              <a href="/my-shipments" className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                View All
              </a>
            </div>
            <div className="space-y-4">
              {recentShipments.map((shipment) => (
                <UserShipmentCard
                  key={shipment.id}
                  shipment={shipment}
                  onClick={(shipment) => console.log('View shipment:', shipment.id)}
                />
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-6">Quick Actions</h2>
            <div className="space-y-4">
              <button className="w-full bg-blue-600 text-white p-4 rounded-lg hover:bg-blue-700 transition-colors text-left">
                <h3 className="font-medium mb-1">Track a Shipment</h3>
                <p className="text-sm text-blue-100">Enter tracking number to get real-time updates</p>
              </button>
              
              <button className="w-full bg-green-600 text-white p-4 rounded-lg hover:bg-green-700 transition-colors text-left">
                <h3 className="font-medium mb-1">Create New Shipment</h3>
                <p className="text-sm text-green-100">Start a new shipping request</p>
              </button>
              
              <button className="w-full bg-purple-600 text-white p-4 rounded-lg hover:bg-purple-700 transition-colors text-left">
                <h3 className="font-medium mb-1">View History</h3>
                <p className="text-sm text-purple-100">Browse all your past shipments</p>
              </button>

              <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
                <h3 className="font-medium text-gray-900 mb-2">Need Help?</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Have questions about your shipments or need assistance?
                </p>
                <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
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