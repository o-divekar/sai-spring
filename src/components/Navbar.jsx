import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Team", path: "/team" },
    { name: "Testimonials", path: "/testimonials" },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav className="bg-orange-500/80 backdrop-blur-md text-white px-3 sm:px-6 py-1.5 sticky top-0 z-50 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo – slightly smaller to fit compact navbar */}
          <Link to="/" className="flex items-center">
            <img
              src="/favicon.svg"
              alt="Sai Spring Works"
              className="h-12 w-12 md:h-14 md:w-14 object-contain transition-transform duration-300 hover:scale-105"
            />
          </Link>

          {/* Desktop Menu – smaller text */}
          <div className="hidden md:flex space-x-4 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-white after:transition-all after:duration-300 hover:after:w-full ${
                  isActive(link.path) ? "after:w-full font-semibold" : ""
                }`}
              >
                {link.name}
              </Link>
            ))}
            
            {/* Contact Button – smaller */}
            <Link
              to="/contact"
              className={`bg-white text-orange-600 px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl ml-3 ${
                isActive("/contact") ? "ring-2 ring-white" : ""
              }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-1.5 rounded-lg hover:bg-white/10 transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div className={`fixed top-0 right-0 h-full w-64 bg-orange-500/95 backdrop-blur-md z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
        <div className="flex flex-col pt-20 px-6 space-y-4">
          <button
            onClick={closeMenu}
            className="absolute top-4 right-4 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            <X size={24} />
          </button>
          
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={closeMenu}
              className={`py-3 px-4 hover:bg-white/10 rounded-lg transition-all duration-200 text-lg ${
                isActive(link.path) ? "bg-white/10 font-semibold" : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
          
          <Link
            to="/contact"
            onClick={closeMenu}
            className={`bg-white text-orange-500 px-5 py-3 rounded-full font-semibold hover:bg-orange-50 hover:scale-105 transition-all duration-300 shadow-lg text-center mt-4 ${
              isActive("/contact") ? "ring-2 ring-white" : ""
            }`}
          >
            Contact Us
          </Link>
        </div>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={closeMenu}
        />
      )}
    </>
  );
}