import React from "react";
import { Heart, ShoppingCart, User, Search, Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-[90%] mx-auto px-2 sm:px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 sm:w-10 sm:h-10 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white text-xl sm:text-2xl font-bold">
                M
              </span>
            </div>
            <span className="text-lg sm:text-xl font-semibold">Mobitrade</span>
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm xl:text-base"
            >
              About Us
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm xl:text-base"
            >
              Sell
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-gray-900 transition-colors text-sm xl:text-base"
            >
              Help
            </a>
          </div>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex flex-1 max-w-xs xl:max-w-md mx-4 xl:mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="I'm looking for..."
                className="w-full px-3 xl:px-4 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 text-sm"
              />
              <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <Search size={18} />
              </button>
            </div>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-3 sm:gap-4 lg:gap-6">
            <button className="hidden sm:block text-gray-700 hover:text-gray-900 transition-colors">
              <Heart size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button className="hidden sm:block text-gray-700 hover:text-gray-900 transition-colors">
              <User size={20} className="sm:w-6 sm:h-6" />
            </button>
            <button className="relative text-gray-700 hover:text-gray-900 transition-colors">
              <ShoppingCart size={20} className="sm:w-6 sm:h-6" />
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs w-4 h-4 sm:w-5 sm:h-5 rounded-full flex items-center justify-center font-medium">
                0
              </span>
            </button>
            <button className="lg:hidden text-gray-700 hover:text-gray-900">
              <Menu size={24} />
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="lg:hidden pb-3">
          <div className="relative w-full">
            <input
              type="text"
              placeholder="I'm looking for..."
              className="w-full px-3 py-2 pr-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-gray-400 text-sm"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
              <Search size={18} />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
