import React from "react";
import { X, Plus, Minus } from "lucide-react";

const CartItem = ({ item }) => {
  return (
    <div className="py-4 border-b border-gray-200">
      {/* Desktop Layout */}
      <div className="hidden sm:grid sm:grid-cols-12 sm:gap-4 sm:items-center">
        {/* Remove Button + Image */}
        <div className="col-span-1 flex items-center justify-center">
          <button className="text-red-500 hover:text-red-700 transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Product Image + Name */}
        <div className="col-span-4 flex items-center gap-3">
          <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-sm font-medium text-gray-900 line-clamp-2">
            {item.name}
          </h3>
        </div>

        {/* Price */}
        <div className="col-span-2 text-center">
          <span className="text-gray-900 font-medium text-base">
            ${item.price}
          </span>
        </div>

        {/* Quantity Controls */}
        <div className="col-span-3 flex items-center justify-center gap-3">
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition-colors">
            <Minus size={16} />
          </button>
          <input
            type="text"
            value={String(item.quantity).padStart(2, "0")}
            readOnly
            className="w-12 text-center border border-gray-300 rounded py-1 text-sm font-medium"
          />
          <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition-colors">
            <Plus size={16} />
          </button>
        </div>

        {/* Subtotal */}
        <div className="col-span-2 text-right">
          <span className="text-gray-900 font-semibold text-base">
            ${item.subtotal}
          </span>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="sm:hidden space-y-3">
        {/* Top Row: Image + Info + Remove */}
        <div className="flex gap-3">
          <div className="w-20 h-20 bg-gray-100 rounded-lg overflow-hidden shrink-0">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-sm font-medium text-gray-900 line-clamp-2 mb-2">
              {item.name}
            </h3>
            <p className="text-base font-semibold text-gray-900">
              ${item.price}
            </p>
          </div>
          <button className="text-red-500 hover:text-red-700 transition-colors h-fit">
            <X size={20} />
          </button>
        </div>

        {/* Bottom Row: Quantity + Subtotal */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition-colors">
              <Minus size={16} />
            </button>
            <input
              type="text"
              value={String(item.quantity).padStart(2, "0")}
              readOnly
              className="w-12 text-center border border-gray-300 rounded py-1 text-sm font-medium"
            />
            <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition-colors">
              <Plus size={16} />
            </button>
          </div>
          <div>
            <span className="text-xs text-gray-600 mr-2">Subtotal:</span>
            <span className="text-base font-bold text-gray-900">
              ${item.subtotal}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
