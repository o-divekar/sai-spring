import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Add animations
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll {
        0% { transform: translateY(0); opacity: 1; }
        100% { transform: translateY(8px); opacity: 0; }
      }
      .animate-scroll {
        animation: scroll 1.5s infinite;
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <section className="relative text-white min-h-[90vh] flex items-center overflow-hidden">
      
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(0.6)' }}
        >
          <source src="/src/assets/videos/istockphoto-2228192872-640_adpp_is.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Dark Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Background Pattern - Removed blue, kept orange */}
      <div className="absolute inset-0 opacity-20 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className={`transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Since 2001 Badge - Orange theme */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-400/40 rounded-full px-4 py-2 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <p className="text-orange-400 font-semibold text-sm uppercase tracking-wider">
              Since 2001 • Trusted For 2+ Decades
            </p>
          </div>

          {/* Main Heading - Orange gradient */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-white via-orange-200 to-orange-300 bg-clip-text text-transparent">
              Precision Engineered
            </span>
            <br />
            <span className="relative inline-block">
              Spring Solutions
              <svg className="absolute bottom-2 left-0 w-full h-3 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
              </svg>
            </span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-200 max-w-2xl mb-10 leading-relaxed">
            Trusted manufacturer of industrial springs and metal components delivering 
            <span className="text-orange-400 font-semibold"> quality, durability,</span> 
            and <span className="text-orange-400 font-semibold">consistent performance</span> for over two decades.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 shadow-lg"
            >
              <span>Request Quote</span>
              <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
            </Link>

            <Link 
              to="/products" 
              className="group border-2 border-white/40 hover:border-orange-500 px-8 py-3.5 rounded-lg font-semibold transition-all duration-300 hover:bg-orange-500/20 backdrop-blur-sm flex items-center justify-center gap-2"
            >
              <span>View Products</span>
              <span className="text-lg group-hover:translate-x-1 transition-transform">›</span>
            </Link>
          </div>

          {/* Statistics / Trust Indicators - Orange theme */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/10">
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400">24+</div>
              <div className="text-sm text-gray-300">Years of Excellence</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400">10M+</div>
              <div className="text-sm text-gray-300">Products Delivered</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400">500+</div>
              <div className="text-sm text-gray-300">Happy Clients</div>
            </div>
            <div className="transform hover:scale-105 transition-transform duration-300">
              <div className="text-2xl sm:text-3xl font-bold text-orange-400">15+</div>
              <div className="text-sm text-gray-300">Industry Awards</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}