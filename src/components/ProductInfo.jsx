import React from 'react'
import { Star, ShoppingCart } from 'lucide-react'

const ProductInfo = () => {
  return (
    <div className="space-y-6">
      {/* Rating */}
      <div className="flex items-center gap-2">
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={20} className="fill-orange-400 text-orange-400" />
          ))}
        </div>
        <span className="text-sm text-gray-600">4.7 Star Rating</span>
        <span className="text-sm text-gray-400">(10 User feedback)</span>
      </div>

      {/* Product Title */}
      <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
        iPhone 14 Pro Max with A16 Bionic Chip (6.7-inch) display, 6GB RAM, 128GB storage) - Deep Purple
      </h1>

      {/* Availability and Brand */}
      <div className="flex flex-wrap items-center gap-4 text-sm">
        <div>
          <span className="text-gray-600">Availability: </span>
          <span className="text-green-600 font-semibold">Remaining 3 in Stock</span>
        </div>
        <div>
          <span className="text-gray-600">Brand: </span>
          <span className="text-gray-900 font-semibold">Apple</span>
        </div>
        <div>
          <span className="text-gray-600">Category: </span>
          <span className="text-gray-900 font-semibold">Mobile Phones</span>
        </div>
      </div>

      {/* Warranty */}
      <div>
        <span className="text-gray-600 text-sm">Warranty: </span>
        <span className="text-gray-900 font-medium">12 Month</span>
      </div>

      {/* Price */}
      <div className="text-4xl font-bold text-gray-900">
        $1699
      </div>

      {/* Specifications Table */}
      <div className="grid grid-cols-2 gap-4 py-4 border-t border-b border-gray-200">
        <div>
          <p className="text-gray-600 text-sm mb-1">Colors</p>
          <p className="text-gray-900 font-medium">Black</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm mb-1">Ram Size</p>
          <p className="text-gray-900 font-medium">6 GB</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm mb-1">Keyboard layout</p>
          <p className="text-gray-900 font-medium">Storage</p>
        </div>
        <div>
          <p className="text-gray-600 text-sm mb-1">Storage Size</p>
          <p className="text-gray-900 font-medium">256 Storage</p>
        </div>
      </div>

      {/* Add to Cart Button */}
      <button className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-900 transition-colors flex items-center justify-center gap-2">
        <span>ADD TO CARD</span>
        <ShoppingCart size={20} />
      </button>
    </div>
  )
}

export default ProductInfo
