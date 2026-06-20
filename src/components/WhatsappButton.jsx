import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";

export default function WhatsappButton() {
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after scrolling a bit
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Show tooltip after 3 seconds
    const timer = setTimeout(() => {
      setShowTooltip(true);
      setTimeout(() => setShowTooltip(false), 5000);
    }, 3000);

    window.addEventListener("scroll", handleScroll);
    
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const phoneNumber = "9769425755";
  const message = "Hello! I'm interested in your spring products. Can you please provide more information?";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <>
      {/* WhatsApp Button */}
      <div
        className={`fixed bottom-6 right-6 z-50 transition-all duration-500 transform ${
          isVisible ? 'translate-x-0 opacity-100' : 'translate-x-20 opacity-0'
        }`}
      >
        {/* Tooltip */}
        {showTooltip && (
          <div className="absolute bottom-16 right-0 mb-2 animate-bounce">
            <div className="bg-gray-800 text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap relative">
              Need help? Chat with us!
              <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-2 h-2 bg-gray-800"></div>
            </div>
          </div>
        )}

        {/* Pulsing Effect */}
        <div className="absolute inset-0 rounded-full animate-ping bg-green-500 opacity-75"></div>
        
        {/* Main Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="relative flex items-center justify-center bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 group"
        >
          {isHovered ? (
            <MessageCircle className="w-6 h-6 animate-pulse" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </a>

        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
          1
        </div>
      </div>

      {/* Alternative: Sticky Side Button (Optional) */}
      <div className="hidden lg:block fixed left-0 top-1/2 transform -translate-y-1/2 z-40 -ml-2 hover:ml-0 transition-all duration-300">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-green-500 text-white px-4 py-3 rounded-r-lg shadow-lg hover:bg-green-600 transition-all duration-300 group"
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-sm font-semibold hidden group-hover:inline transition-all duration-300">
            WhatsApp
          </span>
        </a>
      </div>
    </>
  );
}