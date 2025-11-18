import React from "react";
import { Search } from "lucide-react";

const ProductHeader = () => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 mb-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        {/* Search */}
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search for anything..."
            className="w-full px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
            <Search size={18} />
          </button>
        </div>

        {/* Filters */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Active Filter:</label>
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>iPhone</option>
              <option>Samsung</option>
              <option>Google</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <label className="text-sm text-gray-600">Show:</label>
            <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>$300 to $500</option>
              <option>Under $20</option>
              <option>$25 to $100</option>
            </select>
          </div>

          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors flex items-center gap-2">
            <span className="text-lg">☰</span>
            Results found
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
