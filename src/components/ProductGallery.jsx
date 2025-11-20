import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductGallery = () => {
  const images = [
    "/api/placeholder/400/400",
    "/api/placeholder/400/400",
    "/api/placeholder/400/400",
    "/api/placeholder/400/400",
    "/api/placeholder/400/400",
    "/api/placeholder/400/400",
  ];

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative bg-white rounded-lg border border-gray-200 p-8 flex items-center justify-center aspect-square">
        <img
          src="/api/placeholder/400/400"
          alt="Product"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Thumbnail Navigation */}
      <div className="relative flex items-center gap-2">
        <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shrink-0">
          <ChevronLeft size={20} />
        </button>

        <div className="flex-1 overflow-hidden">
          <div className="flex gap-2">
            {images.map((img, index) => (
              <div
                key={index}
                className={`w-16 h-16 sm:w-20 sm:h-20 border-2 rounded-lg cursor-pointer overflow-hidden shrink-0 ${
                  index === 0
                    ? "border-black"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <img
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <button className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors shrink-0">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default ProductGallery;
