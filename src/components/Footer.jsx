import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNewsletter = (e) => {
    e.preventDefault();
    console.log("Newsletter signup:", email);
    setEmail("");
    alert("Thank you for subscribing!");
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
    { name: "Team", path: "/team" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  const products = [
    "Compression Springs",
    "Extension Springs",
    "Torsion Springs",
    "Leaf Springs",
    "Wire Forms",
    "Custom Springs",
  ];

  return (
    <>
      <footer className="bg-gradient-to-br from-orange-600 via-orange-700 to-orange-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info Section */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-orange-200 bg-clip-text text-transparent">
                Sai Spring Works
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Quality you can trust, springs you can rely on. Precision-engineered spring solutions since 2001.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-110 text-xl">
                  📘
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-110 text-xl">
                  🐦
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-110 text-xl">
                  🔗
                </a>
                <a href="#" className="bg-white/10 p-2 rounded-full hover:bg-orange-600 transition-all duration-300 hover:scale-110 text-xl">
                  📷
                </a>
              </div>
            </div>

            {/* Quick Links Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4 relative inline-block">
                Quick Links
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500 mt-1"></div>
              </h4>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <Link 
                      to={link.path}
                      className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Section */}
            <div>
              <h4 className="text-lg font-semibold mb-4 relative inline-block">
                Our Products
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500 mt-1"></div>
              </h4>
              <ul className="space-y-2">
                {products.map((product, index) => (
                  <li key={index}>
                    <Link 
                      to="/products"
                      className="text-gray-300 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
                    >
                      {product}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Newsletter Section */}
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-4 relative inline-block">
                  Contact Info
                  <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-orange-500 mt-1"></div>
                </h4>
                <div className="space-y-3">
                  <p className="text-gray-300 text-sm">📍 123 Industrial Area, Mumbai, Maharashtra 400001</p>
                  <p className="text-gray-300 text-sm">📞 +91 98765 43210</p>
                  <p className="text-gray-300 text-sm">✉️ info@saispringworks.com</p>
                  <p className="text-gray-300 text-sm">🕐 Mon-Sat: 9:00 AM - 6:00 PM</p>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div>
                <h4 className="text-lg font-semibold mb-3">Newsletter</h4>
                <form onSubmit={handleNewsletter} className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors"
                  />
                  <button
                    type="submit"
                    className="bg-orange-700 hover:bg-orange-700 px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <span>Subscribe</span>
                    <span>📧</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/10 mt-10 pt-8 text-center">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-sm">
                © 2001 - {new Date().getFullYear()} Sai Spring Works. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      
    </>
  );
}