import { ArrowLeft } from "lucide-react";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import Footer from "../components/Footer";

const ShoppingCartPage = () => {
  const cartItems = [
    {
      id: 1,
      name: "4K UHD LED Smart TV with Chromecast Built-in",
      price: 70,
      quantity: 1,
      subtotal: 70,
      image: "/api/placeholder/80/80",
    },
    {
      id: 2,
      name: "Wired Over-Ear Gaming Headphones with USB",
      price: 250,
      quantity: 3,
      subtotal: 250,
      image: "/api/placeholder/80/80",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Breadcrumb />

      <div className="max-w-[90%] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h1 className="text-2xl font-bold text-gray-900 mb-6">
                Shopping Card
              </h1>

              {/* Table Header - Desktop Only */}
              <div className="hidden sm:grid sm:grid-cols-12 sm:gap-4 pb-4 border-b border-gray-200 text-xs font-semibold text-gray-700 uppercase tracking-wide">
                <div className="col-span-1 text-center">PRODUCTS</div>
                <div className="col-span-4"></div>
                <div className="col-span-2 text-center">PRICE</div>
                <div className="col-span-3 text-center">QUANTITY</div>
                <div className="col-span-2 text-right">SUB-TOTAL</div>
              </div>

              {/* Cart Items */}
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-6 pt-6 border-t border-gray-200">
                <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  <ArrowLeft size={20} />
                  <span>RETURN TO SHOP</span>
                </button>
                <button className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-blue-500 text-blue-500 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  <span>UPDATE CART</span>
                </button>
              </div>
            </div>
          </div>

          {/* Cart Summary Section */}
          <div className="lg:col-span-1">
            <CartSummary />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ShoppingCartPage;
