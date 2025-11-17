import bgHeroImage from "../assets/heroBgImage.jpg";
import heroMobileImage from "../assets/heroMobilePhones.png";
import heroAccessoriesImage from "../assets/heroAccessories.png";
import { Truck, RotateCcw, ShieldCheck, Leaf } from "lucide-react";

const Hero = () => {
  return (
    <div className="w-[90%] mx-auto">
      {/* Promo Bar */}
      <div className="bg-linear-to-r from-[#000000] to-[#666666] text-white text-center py-2.5 px-4">
        <p className="text-sm">
          <span className="mr-1">🎉</span>
          Save big 5% EXTRA on iPhones & Oppo - Code: MACPAD5
        </p>
      </div>

      {/* Hero Banner */}
      <div className="relative bg-[#212121] overflow-hidden min-h-[60vh] sm:min-h-[70vh] lg:h-[80vh]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 bg-black">
          <img
            src={bgHeroImage}
            alt="Hero background"
            className="w-full h-full object-cover opacity-50"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-16">
          <div className="flex flex-col items-center text-center gap-6 sm:gap-8 lg:gap-10">
            <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-4 sm:mb-8 lg:mb-12 px-2">
              Mobitrade products with at least a 12-month warranty
            </h1>

            {/* Category Cards */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto px-4 sm:px-0">
              <div className="bg-[#212121]/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-[#212121]/90 transition-all cursor-pointer w-full sm:w-48 lg:w-56">
                <div className="mb-4 flex justify-center">
                  <img
                    src={heroMobileImage}
                    alt="Mobile Phone"
                    className="h-32 sm:h-36 lg:h-40 object-contain"
                  />
                </div>
                <p className="text-white text-center font-medium text-base sm:text-lg">
                  Mobile Phones
                </p>
              </div>

              <div className="bg-[#212121]/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 hover:bg-[#212121]/90 transition-all cursor-pointer w-full sm:w-48 lg:w-56">
                <div className="mb-4 flex justify-center">
                  <img
                    src={heroAccessoriesImage}
                    alt="Accessories"
                    className="h-32 sm:h-36 lg:h-40 object-contain"
                  />
                </div>
                <p className="text-white text-center font-medium text-base sm:text-lg">
                  Accessories
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-4 sm:py-6">
        <div className="mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {/* Feature 1 */}
            <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
              <Truck
                size={32}
                strokeWidth={1.5}
                className="text-gray-900 sm:w-10 sm:h-10 shrink-0"
              />
              <p className="text-xs sm:text-sm text-gray-900">
                Shipping costs included
              </p>
            </div>

            {/* Feature 2 */}
            <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
              <RotateCcw
                size={32}
                strokeWidth={1.5}
                className="text-gray-900 sm:w-10 sm:h-10 shrink-0"
              />
              <p className="text-xs sm:text-sm text-gray-900">
                30-day money-back guarantee
              </p>
            </div>

            {/* Feature 3 */}
            <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
              <ShieldCheck
                size={32}
                strokeWidth={1.5}
                className="text-gray-900 sm:w-10 sm:h-10 shrink-0"
              />
              <p className="text-xs sm:text-sm text-gray-900">
                Minimum 12-month warranty
              </p>
            </div>

            {/* Feature 4 */}
            <div className="flex items-center gap-2 sm:gap-3 justify-center sm:justify-start">
              <Leaf
                size={32}
                strokeWidth={1.5}
                className="text-gray-900 sm:w-10 sm:h-10 shrink-0"
              />
              <p className="text-sm text-gray-900">
                More environmentally friendly than new
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
