import React, { useState } from 'react';
import { Calendar, Download, Filter, Archive, TrendingUp, Package } from 'lucide-react';

const ShipmentHistory = () => {
  const [dateRange, setDateRange] = useState('last_30');
  const [statusFilter, setStatusFilter] = useState('all');
  const [sortBy, setSortBy] = useState('newest');

  // Mock historical data
  const historicalShipments = [
    {
      id: 'SH-2024-152',
      description: 'Holiday Electronics',
      status: 'Delivered',
      shippedDate: 'Dec 15, 2024',
      deliveredDate: 'Dec 18, 2024',
      destination: 'New York, NY',
      carrier: 'FedEx Express',
      value: '1,299.00',
      rating: 5,
      deliveryTime: '3 days'
    },
    {
      id: 'SH-2024-148',
      description: 'Books Collection',
      status: 'Delivered',
      shippedDate: 'Dec 8, 2024',
      deliveredDate: 'Dec 12, 2024',
      destination: 'Los Angeles, CA',
      carrier: 'USPS Priority',
      value: '89.50',
      rating: 4,
      deliveryTime: '4 days'
    },
    {
      id: 'SH-2024-143',
      description: 'Furniture Package',
      status: 'Delivered',
      shippedDate: 'Nov 25, 2024',
      deliveredDate: 'Nov 30, 2024',
      destination: 'Chicago, IL',
      carrier: 'UPS Freight',
      value: '2,150.00',
      rating: 5,
      deliveryTime: '5 days'
    },
    {
      id: 'SH-2024-139',
      description: 'Art Supplies',
      status: 'Cancelled',
      shippedDate: 'Nov 20, 2024',
      deliveredDate: null,
      destination: 'Miami, FL',
      carrier: 'DHL Express',
      value: '234.75',
      rating: null,
      deliveryTime: null
    },
    {
      id: 'SH-2024-135',
      description: 'Sports Equipment',
      status: 'Delivered',
      shippedDate: 'Nov 10, 2024',
      deliveredDate: 'Nov 14, 2024',
      destination: 'Seattle, WA',
      carrier: 'FedEx Ground',
      value: '567.25',
      rating: 4,
      deliveryTime: '4 days'
    },
    {
      id: 'SH-2024-128',
      description: 'Kitchen Appliances',
      status: 'Delivered',
      shippedDate: 'Oct 28, 2024',
      deliveredDate: 'Nov 2, 2024',
      destination: 'Austin, TX',
      carrier: 'UPS Ground',
      value: '1,456.00',
      rating: 5,
      deliveryTime: '5 days'
    }
  ];

  // Filter and sort shipments
  const filteredShipments = historicalShipments.filter(shipment => {
    // Date filter logic would go here
    // For demo, we'll just use status filter
    const matchesStatus = statusFilter === 'all' || 
      shipment.status.toLowerCase() === statusFilter.toLowerCase();
    return matchesStatus;
  }).sort((a, b) => {
    if (sortBy === 'newest') {
      return new Date(b.shippedDate) - new Date(a.shippedDate);
    } else if (sortBy === 'oldest') {
      return new Date(a.shippedDate) - new Date(b.shippedDate);
    } else if (sortBy === 'value_high') {
      return parseFloat(b.value) - parseFloat(a.value);
    } else if (sortBy === 'value_low') {
      return parseFloat(a.value) - parseFloat(b.value);
    }
    return 0;
  });

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered': return 'text-green-600 bg-green-100';
      case 'cancelled': return 'text-red-600 bg-red-100';
      case 'returned': return 'text-orange-600 bg-orange-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  const renderStars = (rating) => {
    if (!rating) return null;
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    );
  };

  // Calculate stats
  const totalShipments = historicalShipments.length;
  const deliveredShipments = historicalShipments.filter(s => s.status === 'Delivered').length;
  const totalValue = historicalShipments.reduce((sum, s) => sum + parseFloat(s.value), 0);
  const avgRating = historicalShipments
    .filter(s => s.rating)
    .reduce((sum, s, _, arr) => sum + s.rating / arr.length, 0);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Shipment History</h1>
            <p className="text-gray-600 mt-2">Review your past shipments and track your shipping patterns</p>
          </div>
          <button className="mt-4 lg:mt-0 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center space-x-2">
            <Download className="w-4 h-4" />
            <span>Export History</span>
          </button>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Shipments</p>
                <p className="text-2xl font-bold text-gray-900">{totalShipments}</p>
              </div>
              <div className="p-3 rounded-full bg-blue-100">
                <Archive className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Delivered</p>
                <p className="text-2xl font-bold text-gray-900">{deliveredShipments}</p>
                <p className="text-sm text-green-600">
                  {Math.round((deliveredShipments / totalShipments) * 100)}% success rate
                </p>
              </div>
              <div className="p-3 rounded-full bg-green-100">
                <Package className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Value</p>
                <p className="text-2xl font-bold text-gray-900">${totalValue.toLocaleString()}</p>
              </div>
              <div className="p-3 rounded-full bg-purple-100">
                <TrendingUp className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg. Rating</p>
                <p className="text-2xl font-bold text-gray-900">{avgRating.toFixed(1)}</p>
                <div className="mt-1">
                  {renderStars(Math.round(avgRating))}
                </div>
              </div>
              <div className="p-3 rounded-full bg-yellow-100">
                <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Date Range
              </label>
              <select
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="last_30">Last 30 Days</option>
                <option value="last_90">Last 90 Days</option>
                <option value="last_year">Last Year</option>
                <option value="all_time">All Time</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="delivered">Delivered</option>
                <option value="cancelled">Cancelled</option>
                <option value="returned">Returned</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Sort By
              </label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="newest">Newest First</option>
                <option value="oldest">Oldest First</option>
                <option value="value_high">Highest Value</option>
                <option value="value_low">Lowest Value</option>
              </select>
            </div>
          </div>
        </div>

        {/* Shipments Table */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Shipment</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Dates</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Destination</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Carrier</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Value</th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-900">Rating</th>
                  <th className="px-6 py-4 text-right text-sm font-medium text-gray-900">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredShipments.map((shipment) => (
                  <tr key={shipment.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <div>
                        <div className="font-medium text-gray-900">#{shipment.id}</div>
                        <div className="text-sm text-gray-600">{shipment.description}</div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(shipment.status)}`}>
                        {shipment.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm">
                        <div className="text-gray-900">Shipped: {shipment.shippedDate}</div>
                        {shipment.deliveredDate && (
                          <div className="text-gray-600">Delivered: {shipment.deliveredDate}</div>
                        )}
                        {shipment.deliveryTime && (
                          <div className="text-blue-600">({shipment.deliveryTime})</div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900">{shipment.destination}</td>
                    <td className="px-6 py-4 text-sm text-gray-900">{shipment.carrier}</td>
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">${shipment.value}</td>
                    <td className="px-6 py-4">
                      {renderStars(shipment.rating)}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <div className="flex items-center justify-end space-x-2">
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          View
                        </button>
                        <button className="text-gray-600 hover:text-gray-700">
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="bg-gray-50 px-6 py-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Showing {filteredShipments.length} of {totalShipments} shipments
              </div>
              <div className="flex items-center space-x-2">
                <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50" disabled>
                  Previous
                </button>
                <span className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md">1</span>
                <button className="px-3 py-1 text-sm border border-gray-300 rounded-md hover:bg-gray-100 disabled:opacity-50" disabled>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentHistory;