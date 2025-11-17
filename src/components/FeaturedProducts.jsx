import earBudsImg from "../assets/featuredEarbuds.jpg"
import mobileCaseImg from "../assets/featuredMobileCase.jpg"
import iphone15Img from "../assets/featuredIphone15.jpg"
import iphone17Img from "../assets/featuredIphone17.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: "Ear Buds (E2216HV)",
      price: 442.12,
      rating: 5,
      reviews: 56767,
      image: earBudsImg,
    },
    {
      id: 2,
      name: "Mobile Case (E2216HV)",
      price: 442.12,
      rating: 5,
      reviews: 56767,
      image: mobileCaseImg,
    },
    {
      id: 3,
      name: "IPhone 15 Pro max (E2216HV)",
      price: 442.12,
      rating: 5,
      reviews: 56767,
      image: iphone15Img,
    },
    {
      id: 4,
      name: "IPhone 17 Latest (E2216HV)",
      price: 442.12,
      rating: 5,
      reviews: 56767,
      image: iphone17Img,
    },
    {
      id: 5,
      name: "Wireless Headphones (E2216HV)",
      price: 442.12,
      rating: 5,
      reviews: 56767,
      image: "/api/placeholder/200/200",
    },
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-[90%] mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Featured Products
        </h2>

        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
            className="featured-products-swiper"
          >
            {products.map((product) => (
              <SwiperSlide key={product.id}>
                <div className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-6 cursor-pointer">
                  {/* Product Image */}
                  <div className="mb-4 flex justify-center items-center bg-gray-50 rounded-lg h-48">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-contain p-4"
                    />
                  </div>

                  {/* Rating */}
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        size={16}
                        className={
                          index < product.rating
                            ? "fill-black text-black"
                            : "text-gray-300"
                        }
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-1">
                      ({product.reviews.toLocaleString()})
                    </span>
                  </div>

                  {/* Product Name */}
                  <h3 className="text-gray-900 font-medium mb-3 text-sm">
                    {product.name}
                  </h3>

                  {/* Price */}
                  <p className="text-blue-600 font-semibold text-lg">
                    ${product.price}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors shadow-lg">
            <ChevronLeft size={24} />
          </button>
          <button className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:bg-gray-800 transition-colors shadow-lg">
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProducts;
