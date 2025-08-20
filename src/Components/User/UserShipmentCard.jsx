import React from 'react';
import { Package, Calendar, MapPin, Truck } from 'lucide-react';

const UserShipmentCard = ({ shipment, onClick }) => {
  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'delivered': return 'text-green-600 bg-green-100';
      case 'in transit': return 'text-blue-600 bg-blue-100';
      case 'pending': return 'text-orange-600 bg-orange-100';
      case 'delayed': return 'text-red-600 bg-red-100';
      default: return 'text-gray-600 bg-gray-100';
    }
  };

  return (
    <div 
      className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200"
      onClick={() => onClick && onClick(shipment)}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-3">
          <div className="p-2 bg-blue-100 rounded-lg">
            <Package className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-900">#{shipment.id}</h3>
            <p className="text-sm text-gray-600">{shipment.description}</p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(shipment.status)}`}>
          {shipment.status}
        </span>
      </div>

      <div className="space-y-3">
        <div className="flex items-center text-sm text-gray-600">
          <Calendar className="w-4 h-4 mr-2" />
          <span>Shipped: {shipment.shippedDate}</span>
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-2" />
          <span>To: {shipment.destination}</span>
        </div>

        <div className="flex items-center text-sm text-gray-600">
          <Truck className="w-4 h-4 mr-2" />
          <span>Carrier: {shipment.carrier}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-900">
            Expected: {shipment.expectedDate}
          </span>
          <span className="text-lg font-semibold text-blue-600">
            ${shipment.value}
          </span>
        </div>
      </div>
    </div>
  );
};

export default UserShipmentCard;