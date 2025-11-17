import janeImg from "../assets/janeSmith.png";
import tomImg from "../assets/tomWilliams.png";
import michealImg from "../assets/michealBrown.png";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "I've been using this web hosting service for over a year and I'm really impressed with the uptime and support. The website has never gone down and the customer service is always quick to help with any issues I have. Highly recommend!",
      rating: 5,
      name: "Jane Smith",
      image: janeImg,
    },
    {
      id: 2,
      text: "I've been using this web hosting service for a few months now and overall it's been fine. The uptime has been good and I haven't had any major issues. The pricing is also reasonable. Nothing particularly stands out as exceptional, but it gets the job done.",
      rating: 3,
      name: "Tom Williams",
      image: tomImg,
    },
    {
      id: 3,
      text: "I've been using this web hosting service for a few months and it's been nothing but problems. My website has gone down multiple times and the customer service has been unresponsive. I would not recommend this company.",
      rating: 1,
      name: "Michael Brown",
      image: michealImg,
    },
  ];

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        size={20}
        className={
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }
      />
    ));
  };

  return (
    <div className="bg-gray-50 py-8 sm:py-12 lg:py-16">
      <div className="max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="">
          {/* Header */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Testimonials
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Don't just take our word for it - see what actual users of our
              service have to say about their experience.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white border-[#E0E0E0] border rounded-lg p-6 flex flex-col"
              >
                {/* Testimonial Text */}
                <p className="text-gray-700 text-sm leading-relaxed mb-6 flex-grow">
                  "{testimonial.text}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-6">
                  {renderStars(testimonial.rating)}
                </div>

                {/* User Info */}
                <div className="flex flex-col items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mb-3"
                  />
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
