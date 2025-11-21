import React from "react";
import { ArrowRight } from "lucide-react";

const CartSummary = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 sticky top-4">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Card Totals</h2>

      <div className="space-y-4 mb-6">
        {/* Sub-total */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Sub-total:</span>
          <span className="text-gray-900 font-semibold">$320</span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Shipping:</span>
          <span className="text-gray-900 font-semibold">Free</span>
        </div>

        {/* Discount */}
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Discount:</span>
          <span className="text-gray-900 font-semibold">-</span>
        </div>

        {/* Tax */}
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <span className="text-gray-600">Tax:</span>
          <span className="text-gray-900 font-semibold">$61.99</span>
        </div>

        {/* Total */}
        <div className="flex justify-between items-center pt-2">
          <span className="text-lg font-semibold text-gray-900">Total:</span>
          <span className="text-xl font-bold text-gray-900">$357.99 USD</span>
        </div>
      </div>

      {/* Checkout Button */}
      <button className="w-full bg-black text-white py-3.5 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2">
        <span>PROCEED TO CHECKOUT</span>
        <ArrowRight size={20} />
      </button>
    </div>
  );
};

export default CartSummary;
