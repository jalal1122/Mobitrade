import React from "react";

const PriceFilter = () => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <h3 className="font-semibold text-gray-900 mb-4">PRICE RANGE</h3>

      {/* Price Range Slider */}
      <div className="mb-4">
        <div className="relative h-1 bg-gray-200 rounded">
          <div
            className="absolute h-1 bg-black rounded"
            style={{ left: "20%", right: "30%" }}
          ></div>
          <div
            className="absolute w-4 h-4 bg-black rounded-full -top-1.5"
            style={{ left: "20%" }}
          ></div>
          <div
            className="absolute w-4 h-4 bg-black rounded-full -top-1.5"
            style={{ right: "30%" }}
          ></div>
        </div>
      </div>

      <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
        <span>$0 (min)</span>
        <span>Max price</span>
      </div>

      {/* Price Checkboxes */}
      <div className="space-y-2">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="price" className="w-4 h-4 accent-black" />
          <span className="text-sm text-gray-700">All Price</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="price" className="w-4 h-4 accent-black" />
          <span className="text-sm text-gray-700">Under $20</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="price" className="w-4 h-4 accent-black" />
          <span className="text-sm text-gray-700">$25 to $100</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="price" className="w-4 h-4 accent-black" />
          <span className="text-sm text-gray-700">$100 to $300</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="price" className="w-4 h-4 accent-black" defaultChecked />
          <span className="text-sm text-gray-700">$300 to $500</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="price" className="w-4 h-4 accent-black" />
          <span className="text-sm text-gray-700">$500 to $1,000</span>
        </label>
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="radio" name="price" className="w-4 h-4 accent-black" />
          <span className="text-sm text-gray-700">$1,000 to $10,000</span>
        </label>
      </div>
    </div>
  );
};

export default PriceFilter;
