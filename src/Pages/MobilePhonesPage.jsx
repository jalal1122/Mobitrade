import React from "react";
import Navbar from "../components/Navbar";
import Breadcrumb from "../components/Breadcrumb";
import PriceFilter from "../components/PriceFilter";
import BrandFilter from "../components/BrandFilter";
import ProductHeader from "../components/ProductHeader";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import Footer from "../components/Footer";
import img1 from "../assets/products/1.png"
import img2 from "../assets/products/2.png"
import img3 from "../assets/products/3.jpg"
import img4 from "../assets/products/4.jpg"
import img5 from "../assets/products/5.jpg"
import img8 from "../assets/products/8.png"
import img9 from "../assets/products/9.png"
import img10 from "../assets/products/10.jpg"
import img11 from "../assets/products/11.png"
import img12 from "../assets/products/12.jpg"

const MobilePhonesPage = () => {
  const products = [
    {
      id: 1,
      name: "TOZO T6 True Wireless Earbuds Bluetooth Headphon...",
      price: 70,
      rating: 5,
      reviews: 738,
      image: img1,
      badge: "SALE",
    },
    {
      id: 2,
      name: "Samsung Electronics Samsung Galaxy S21 5G",
      price: 2300,
      rating: 4,
      reviews: 536,
      image: img2,
    },
    {
      id: 3,
      name: "Amazon Basics High-Speed HDMI Cable (18 Gbps, 4K/6...",
      price: 360,
      rating: 5,
      reviews: 423,
      image: img3,
    },
    {
      id: 4,
      name: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
      price: 80,
      rating: 4,
      reviews: 816,
      image: img4,
      badge: "25% OFF",
    },
    {
      id: 5,
      name: "Wired Over-Ear Gaming Headphones with USB",
      price: 1500,
      rating: 4,
      reviews: 578,
      image: img5,
      badge: "HOT",
    },
    {
      id: 6,
      name: "Polaroid 57-Inch Photo/Video Tripod with Deluxe Tripod Ca...",
      price: 1200,
      rating: 5,
      reviews: 423,
      image: img4,
      badge: "25% OFF",
    },
    {
      id: 7,
      name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
      price: 250,
      rating: 4,
      reviews: 823,
      image: img3,
    },
    {
      id: 8,
      name: "4K UHD LED Smart TV with Chromecast Built-in",
      price: 865,
      rating: 5,
      reviews: 738,
      image: img8,
      badge: "BEST",
    },
    {
      id: 9,
      name: "Samsung Galaxy A32 5G | Factory Unlocked Android Cell...",
      price: 1600,
      rating: 4,
      reviews: 536,
      image: img9,
      badge: "BEST DEALS",
    },
    {
      id: 10,
      name: "Dell Optiplex 7000x7480 All-in-One Computer Monitor",
      price: 250,
      rating: 5,
      reviews: 434,
      image: img10,
    },
    {
      id: 11,
      name: "Portable Wshing Machine, 11lbs capacity Model 18NMF...",
      price: 80,
      rating: 3,
      reviews: 816,
      image: img11,
    },
    {
      id: 12,
      name: "TOZO T6 True Wireless Bluetooth Headphones IPX8",
      price: 70,
      rating: 5,
      reviews: 834,
      image: img12,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <Breadcrumb />

      <div className="max-w-[90%] mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar Filters */}
          <div className="lg:col-span-1 space-y-4">
            <PriceFilter />
            <BrandFilter />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <ProductHeader />

            {/* Products Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
              {products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <Pagination />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default MobilePhonesPage;
