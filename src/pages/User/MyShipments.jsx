import React, { useState } from 'react';
import { Search, Filter, Package, Plus } from 'lucide-react';
import UserShipmentCard from '../../components/user/UserShipmentCard';

const MyShipments = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  // Mock data
  const allShipments = [
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
    },
    {
      id: 'SH-2025-004',
      description: 'Home Appliances',
      status: 'Delayed',
      shippedDate: 'Jan 10, 2025',
      expectedDate: 'Jan 14, 2025',
      destination: 'Miami, FL',
      carrier: 'DHL Express',
      value: '1,245.00'
    },
    {
      id: 'SH-2025-005',
      description: 'Art Supplies',
      status: 'In Transit',
      shippedDate: 'Jan 17, 2025',
      expectedDate: 'Jan 21, 2025',
      destination: 'Seattle, WA',
      carrier: 'FedEx Ground',
      value: '234.75'
    },
    {
      id: 'SH-2025-006',
      description: 'Furniture Set',
      status: 'Delivered',
      shippedDate: 'Jan 8, 2025',
      expectedDate: 'Jan 12, 2025',
      destination: 'Austin, TX',
      carrier: 'UPS Freight',
      value: '2,150.00'
    }
  ];

  // Filter shipments based on search term and status
  const filteredShipments = allShipments.filter(shipment => {
    const matchesSearch = searchTerm === '' || 
      shipment.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      shipment.destination.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === 'all' || 
      shipment.status.toLowerCase().replace(' ', '_') === statusFilter;

    return matchesSearch && matchesStatus;
  });

  const statusCounts = {
    all: allShipments.length,
    pending: allShipments.filter(s => s.status === 'Pending').length,
    in_transit: allShipments.filter(s => s.status === 'In Transit').length,
    delivered: allShipments.filter(s => s.status === 'Delivered').length,
    delayed: allShipments.filter(s => s.status === 'Delayed').length
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">My Shipments</h1>
            <p className="text-gray-600 mt-2">Manage and track all your shipments in one place</p>
          </div>
          <button className="mt-4 md:mt-0 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>New Shipment</span>
          </button>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                <input
                  type="text"
                  placeholder="Search by tracking number, description, or destination..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>

            {/* Status Filter */}
            <div className="lg:w-64">
              <div className="relative">
                <Filter className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent appearance-none bg-white"
                >
                  <option value="all">All Status ({statusCounts.all})</option>
                  <option value="pending">Pending ({statusCounts.pending})</option>
                  <option value="in_transit">In Transit ({statusCounts.in_transit})</option>
                  <option value="delivered">Delivered ({statusCounts.delivered})</option>
                  <option value="delayed">Delayed ({statusCounts.delayed})</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Status Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
          {[
            { key: 'all', label: 'Total', color: 'blue' },
            { key: 'pending', label: 'Pending', color: 'orange' },
            { key: 'in_transit', label: 'In Transit', color: 'blue' },
            { key: 'delivered', label: 'Delivered', color: 'green' },
            { key: 'delayed', label: 'Delayed', color: 'red' }
          ].map((item) => (
            <div
              key={item.key}
              onClick={() => setStatusFilter(item.key)}
              className={`bg-white rounded-lg p-4 cursor-pointer transition-all border-2 ${
                statusFilter === item.key 
                  ? `border-${item.color}-500 ring-2 ring-${item.color}-200` 
                  : 'border-gray-200 hover:border-gray-300'
              }`}
            >
              <p className="text-sm font-medium text-gray-600">{item.label}</p>
              <p className="text-2xl font-bold text-gray-900">{statusCounts[item.key]}</p>
            </div>
          ))}
        </div>

        {/* Shipments List */}
        <div className="space-y-6">
          {filteredShipments.length === 0 ? (
            <div className="bg-white rounded-lg shadow-md p-12 text-center">
              <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No shipments found</h3>
              <p className="text-gray-600 mb-6">
                {searchTerm || statusFilter !== 'all' 
                  ? 'Try adjusting your search or filter criteria.'
                  : 'You don\'t have any shipments yet.'}
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
                Create New Shipment
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {filteredShipments.map((shipment) => (
                <UserShipmentCard
                  key={shipment.id}
                  shipment={shipment}
                  onClick={(shipment) => console.log('View shipment:', shipment.id)}
                />
              ))}
            </div>
          )}
        </div>

        {/* Results Summary */}
        {filteredShipments.length > 0 && (
          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Showing {filteredShipments.length} of {allShipments.length} shipments
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyShipments;