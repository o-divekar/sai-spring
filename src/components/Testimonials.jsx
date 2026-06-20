import { useState, useEffect, useRef } from "react";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    company: "ABC Industries",
    clientName: "Rajesh Kumar",
    position: "Operations Director",
    text: "Sai Spring Works consistently delivers high-quality products on time. Their attention to detail and commitment to excellence has made them our preferred spring supplier.",
    rating: 5,
    image: "🏭",
    date: "March 2024"
  },
  {
    id: 2,
    company: "XYZ Engineering",
    clientName: "Priya Sharma",
    position: "Procurement Manager",
    text: "Excellent service and reliable spring manufacturing solutions. Their team is very professional and always goes the extra mile to meet our requirements.",
    rating: 5,
    image: "🔧",
    date: "January 2024"
  },
  {
    id: 3,
    company: "PQR Manufacturing",
    clientName: "Amit Patel",
    position: "Quality Head",
    text: "Their quality and precision exceed our expectations. We've been working with them for 5+ years and have never been disappointed with their products.",
    rating: 4,
    image: "⚙️",
    date: "December 2023"
  },
  {
    id: 4,
    company: "LMN Automotives",
    clientName: "Suresh Mehta",
    position: "Plant Manager",
    text: "The best spring manufacturer we've worked with. Their technical support and after-sales service is outstanding.",
    rating: 5,
    image: "🚗",
    date: "February 2024"
  },
  {
    id: 5,
    company: "RST Electronics",
    clientName: "Anjali Desai",
    position: "R&D Director",
    text: "Precision springs that exactly match our specifications. Highly recommended for any precision engineering needs.",
    rating: 5,
    image: "📱",
    date: "November 2023"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleTestimonials, setVisibleTestimonials] = useState([]);
  const sectionRef = useRef(null);

  // Handle responsive number of testimonials to show
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleTestimonials(testimonials.slice(currentIndex, currentIndex + 3));
      } else if (window.innerWidth >= 768) {
        setVisibleTestimonials(testimonials.slice(currentIndex, currentIndex + 2));
      } else {
        setVisibleTestimonials(testimonials.slice(currentIndex, currentIndex + 1));
      }
    };

    updateVisibleCount();
    window.addEventListener('resize', updateVisibleCount);
    return () => window.removeEventListener('resize', updateVisibleCount);
  }, [currentIndex]);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + 1 >= testimonials.length - 2 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - 1 < 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-orange-400 fill-orange-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <section ref={sectionRef} className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-1 bg-orange-100 rounded-full text-orange-600 font-semibold text-sm mb-4">
            Testimonials
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Trusted by industry leaders for quality and reliability
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -ml-4 lg:-ml-6 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 -mr-4 lg:-mr-6 z-10 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100 transition-all duration-300 hover:scale-110"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Quote Icon */}
                <div className="relative pt-6 px-6">
                  <Quote className="absolute w-12 h-12 text-orange-100 -top-2 -left-2 opacity-50" />
                  
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4 relative z-10">
                    {renderStars(testimonial.rating)}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-gray-600 leading-relaxed mb-6 italic relative z-10">
                    "{testimonial.text}"
                  </p>
                </div>

                {/* Client Info */}
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-6 border-t border-orange-100">
                  <div className="flex items-center gap-4">
                    {/* Avatar Placeholder */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center text-2xl shadow-lg">
                      {testimonial.image}
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-800">
                        {testimonial.clientName}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {testimonial.position}
                      </p>
                      <p className="text-xs text-gray-400">
                        {testimonial.company} • {testimonial.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-8">
          {[...Array(Math.ceil(testimonials.length / 3))].map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx * 3)}
              className={`h-2 rounded-full transition-all duration-300 ${
                Math.floor(currentIndex / 3) === idx
                  ? "w-8 bg-orange-500"
                  : "w-2 bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Auto-play Toggle */}
        <div className="text-center mt-6">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="text-sm text-gray-500 hover:text-orange-600 transition-colors duration-300"
          >
            {isAutoPlaying ? "Pause Auto-play" : "Resume Auto-play"}
          </button>
        </div>

        {/* Trust Badge */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-orange-50 rounded-full px-6 py-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-sm font-medium text-gray-700">
              Join 500+ satisfied clients worldwide
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}