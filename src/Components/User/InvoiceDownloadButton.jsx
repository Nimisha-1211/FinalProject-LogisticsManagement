import React, { useState } from 'react';
import { Download, FileText, CheckCircle } from 'lucide-react';

const InvoiceDownloadButton = ({ shipmentId, invoiceData }) => {
  const [isDownloading, setIsDownloading] = useState(false);
  const [isDownloaded, setIsDownloaded] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    // Simulate download process
    setTimeout(() => {
      // In a real app, this would trigger actual file download
      const element = document.createElement('a');
      const file = new Blob([JSON.stringify(invoiceData, null, 2)], { type: 'application/json' });
      element.href = URL.createObjectURL(file);
      element.download = `invoice-${shipmentId}.json`;
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
      
      setIsDownloading(false);
      setIsDownloaded(true);
      
      // Reset downloaded state after 3 seconds
      setTimeout(() => setIsDownloaded(false), 3000);
    }, 1500);
  };

  return (
    <div className="space-y-3">
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className={`w-full flex items-center justify-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
          isDownloaded
            ? 'bg-green-100 text-green-700 cursor-default'
            : isDownloading
            ? 'bg-gray-100 text-gray-600 cursor-not-allowed'
            : 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md'
        }`}
      >
        {isDownloaded ? (
          <>
            <CheckCircle className="w-5 h-5" />
            <span>Downloaded Successfully</span>
          </>
        ) : isDownloading ? (
          <>
            <div className="animate-spin w-5 h-5 border-2 border-gray-400 border-t-transparent rounded-full"></div>
            <span>Downloading...</span>
          </>
        ) : (
          <>
            <Download className="w-5 h-5" />
            <span>Download Invoice</span>
          </>
        )}
      </button>

      <div className="bg-gray-50 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <FileText className="w-5 h-5 text-gray-600 mt-0.5" />
          <div>
            <h4 className="font-medium text-gray-900 text-sm">Invoice Details</h4>
            <div className="mt-2 space-y-1 text-xs text-gray-600">
              <p>Invoice ID: INV-{shipmentId}</p>
              <p>Amount: ${invoiceData?.amount || '0.00'}</p>
              <p>Date: {invoiceData?.date || new Date().toLocaleDateString()}</p>
              <p>Format: PDF</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceDownloadButton;