import React from "react";
import { Star } from "lucide-react";

const ProductCard = ({ product }) => {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={14}
        className={
          index < rating ? "fill-orange-400 text-orange-400" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <div className="relative bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
      {/* Badge */}
      {product.badge && (
        <div
          className={`absolute top-2 left-2 px-2 py-1 rounded text-xs font-semibold text-white z-10 ${
            product.badge === "SALE"
              ? "bg-red-500"
              : product.badge === "BEST DEALS"
              ? "bg-blue-500"
              : product.badge === "25% OFF"
              ? "bg-orange-400"
              : "bg-green-500"
          }`}
        >
          {product.badge}
        </div>
      )}

      {/* Product Image */}
      <div className="relative aspect-square bg-gray-50 flex items-center justify-center p-4">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform"
        />
      </div>

      {/* Product Info */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center gap-1 mb-2">
          {renderStars(product.rating)}
          <span className="text-xs text-gray-500 ml-1">
            ({product.reviews})
          </span>
        </div>

        {/* Product Name */}
        <h3 className="text-sm text-gray-900 mb-2 line-clamp-2 min-h-10">
          {product.name}
        </h3>

        {/* Price */}
        <p className="text-lg font-semibold text-gray-900">${product.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
