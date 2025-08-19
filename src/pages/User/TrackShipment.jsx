import React, { useState } from 'react';
import { Search, Package, MapPin, Clock } from 'lucide-react';
import UserStatusTracker from '../../components/user/UserStatusTracker';
import InvoiceDownloadButton from '../../components/user/InvoiceDownloadButton';
import AddressUpdateForm from '../../components/user/AddressUpdateForm';

const TrackShipment = () => {
  const [trackingNumber, setTrackingNumber] = useState('');
  const [shipmentData, setShipmentData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showAddressUpdate, setShowAddressUpdate] = useState(false);

  // Mock tracking data
  const mockShipmentData = {
    id: 'SH-2025-001',
    trackingNumber: 'TRK123456789',
    description: 'Electronics Package',
    status: 'In Transit',
    shippedDate: 'Jan 15, 2025',
    expectedDate: 'Jan 18, 2025',
    origin: 'San Francisco, CA',
    destination: 'New York, NY',
    carrier: 'FedEx Express',
    weight: '2.5 lbs',
    dimensions: '12" x 8" x 6"',
    value: '899.00',
    currentLocation: 'Denver, CO',
    trackingSteps: [
      {
        title: 'Order Confirmed',
        description: 'Your shipment has been prepared and confirmed',
        timestamp: 'Jan 15, 2025 09:00 AM',
        location: 'San Francisco, CA',
        completed: true,
        status: 'confirmed'
      },
      {
        title: 'Picked Up',
        description: 'Package picked up by carrier',
        timestamp: 'Jan 15, 2025 02:30 PM',
        location: 'San Francisco, CA',
        completed: true,
        status: 'picked_up'
      },
      {
        title: 'In Transit',
        description: 'Package is on its way to destination',
        timestamp: 'Jan 16, 2025 08:15 AM',
        location: 'Denver, CO',
        completed: false,
        status: 'in_transit'
      },
      {
        title: 'Out for Delivery',
        description: 'Package is out for final delivery',
        timestamp: '',
        location: 'New York, NY',
        completed: false,
        status: 'out_for_delivery'
      },
      {
        title: 'Delivered',
        description: 'Package has been delivered successfully',
        timestamp: '',
        location: 'New York, NY',
        completed: false,
        status: 'delivered'
      }
    ]
  };

  const mockInvoiceData = {
    amount: 899.00,
    date: 'Jan 15, 2025',
    invoiceNumber: 'INV-SH-2025-001'
  };

  const handleTrack = async () => {
    if (!trackingNumber.trim()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (trackingNumber.toLowerCase().includes('trk') || trackingNumber.includes('123')) {
        setShipmentData(mockShipmentData);
      } else {
        setShipmentData(null);
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleAddressUpdate = (newAddress) => {
    console.log('Address updated:', newAddress);
    setShowAddressUpdate(false);
    // In a real app, you would update the shipment data here
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Track Shipment</h1>
          <p className="text-gray-600 mt-2">Enter your tracking number to get real-time updates</p>
        </div>

        {/* Search Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tracking Number
              </label>
              <input
                type="text"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                placeholder="Enter tracking number (try: TRK123456789)"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && handleTrack()}
              />
            </div>
            <div className="sm:self-end">
              <button
                onClick={handleTrack}
                disabled={isLoading || !trackingNumber.trim()}
                className={`w-full sm:w-auto px-6 py-3 rounded-md font-medium transition-colors flex items-center justify-center space-x-2 ${
                  isLoading || !trackingNumber.trim()
                    ? 'bg-gray-100 text-gray-600 cursor-not-allowed'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full"></div>
                    <span>Tracking...</span>
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    <span>Track</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Shipment Results */}
        {shipmentData && (
          <div className="space-y-8">
            {/* Shipment Info */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Package className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">#{shipmentData.id}</h2>
                    <p className="text-gray-600">{shipmentData.description}</p>
                  </div>
                </div>
                <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full font-medium">
                  {shipmentData.status}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Shipment Details</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="text-gray-600">Weight:</span> {shipmentData.weight}</p>
                      <p><span className="text-gray-600">Dimensions:</span> {shipmentData.dimensions}</p>
                      <p><span className="text-gray-600">Value:</span> ${shipmentData.value}</p>
                      <p><span className="text-gray-600">Carrier:</span> {shipmentData.carrier}</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Journey</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-gray-400" />
                        <span><span className="text-gray-600">From:</span> {shipmentData.origin}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-blue-600" />
                        <span><span className="text-gray-600">Currently:</span> {shipmentData.currentLocation}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-green-600" />
                        <span><span className="text-gray-600">To:</span> {shipmentData.destination}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Timeline</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span><span className="text-gray-600">Shipped:</span> {shipmentData.shippedDate}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4 text-blue-600" />
                        <span><span className="text-gray-600">Expected:</span> {shipmentData.expectedDate}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-6 pt-6 border-t border-gray-200 flex flex-wrap gap-3">
                <button
                  onClick={() => setShowAddressUpdate(true)}
                  className="px-4 py-2 bg-orange-600 text-white rounded-md hover:bg-orange-700 transition-colors"
                >
                  Update Address
                </button>
                <button className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors">
                  Contact Carrier
                </button>
                <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors">
                  Share Tracking
                </button>
              </div>
            </div>

            {/* Address Update Form */}
            {showAddressUpdate && (
              <AddressUpdateForm
                currentAddress={{
                  street: '123 Main Street',
                  city: 'New York',
                  state: 'NY',
                  zipCode: '10001',
                  country: 'United States'
                }}
                onSave={handleAddressUpdate}
                onCancel={() => setShowAddressUpdate(false)}
              />
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Status Tracker */}
              <div className="lg:col-span-2">
                <UserStatusTracker 
                  trackingSteps={shipmentData.trackingSteps}
                  currentStatus={shipmentData.status.toLowerCase().replace(' ', '_')}
                />
              </div>

              {/* Actions Sidebar */}
              <div className="space-y-6">
                <InvoiceDownloadButton 
                  shipmentId={shipmentData.id}
                  invoiceData={mockInvoiceData}
                />

                {/* Quick Info */}
                <div className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Need Help?</h3>
                  <div className="space-y-3">
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <h4 className="font-medium text-blue-900 text-sm">Track by Email</h4>
                      <p className="text-xs text-blue-700 mt-1">Get updates sent to your email</p>
                    </div>
                    
                    <div className="p-3 bg-green-50 rounded-lg">
                      <h4 className="font-medium text-green-900 text-sm">SMS Notifications</h4>
                      <p className="text-xs text-green-700 mt-1">Receive text message updates</p>
                    </div>
                    
                    <button className="w-full text-left p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                      <h4 className="font-medium text-gray-900 text-sm">Contact Support</h4>
                      <p className="text-xs text-gray-600 mt-1">Get help with your shipment</p>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* No Results */}
        {trackingNumber && !shipmentData && !isLoading && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <Package className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Shipment Not Found</h3>
            <p className="text-gray-600 mb-6">
              We couldn't find a shipment with tracking number "{trackingNumber}".
              Please check the number and try again.
            </p>
            <p className="text-sm text-gray-500">
              Try using: TRK123456789 for demo purposes
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TrackShipment;