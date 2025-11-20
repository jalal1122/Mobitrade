import React from "react";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import ProductGallery from "../components/ProductGallery";
import ProductInfo from "../components/ProductInfo";
import ProductTabs from "../components/ProductTabs";
import SubmitReview from "../components/SubmitReview";
import Footer from "../components/Footer";

const ProductDetailPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Breadcrumb />

      <div className="max-w-[90%] mx-auto px-4 py-8">
        {/* Product Main Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left: Image Gallery */}
          <div>
            <ProductGallery />
          </div>

          {/* Right: Product Info */}
          <div>
            <ProductInfo />
          </div>
        </div>

        {/* Product Description & Specifications Tabs */}
        <ProductTabs />

        {/* Submit Review Section */}
        <SubmitReview />
      </div>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;
