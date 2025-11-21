import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ChevronRight, CheckCircle } from "lucide-react";

const OrderConfirmPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Breadcrumb */}
      <div className="border-b border-gray-200 bg-white">
        <div className="max-w-[90%] mx-auto py-4">
          <div className="flex items-center gap-2 text-sm">
            <a href="/" className="text-gray-600 hover:text-gray-900">
              Home
            </a>
            <ChevronRight size={16} className="text-gray-400" />
            <a href="/cart" className="text-gray-600 hover:text-gray-900">
              Shopping cart
            </a>
            <ChevronRight size={16} className="text-gray-400" />
            <span className="text-gray-900 font-medium">Checkout</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[90%] md:max-w-2xl mx-auto py-12 md:py-20">
        <div className="text-center">
          {/* Success Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-green-100 rounded-full flex items-center justify-center">
              <CheckCircle
                className="w-12 h-12 md:w-14 md:h-14 text-green-500"
                strokeWidth={2}
              />
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Your order is successfully place
          </h1>

          <p className="text-sm md:text-base text-gray-600 max-w-md mx-auto mb-8 px-4">
            Pellentesque sed lectus nec tortor tristique accumsan quis dictum
            risus. Donec volutpat mollis nulla non facilisis.
          </p>

          {/* Dashboard Button */}
          <button className="inline-flex items-center gap-3 px-8 py-3 bg-white border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition-colors">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            GO TO DASHBOARD
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default OrderConfirmPage;
