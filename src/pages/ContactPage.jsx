import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      console.log("Form submitted:", formData);
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  // Google Maps embed URL for the specific location
  const mapLocation = "Murli+Upadhay+Estate,+Visheshwer+Nagar,+Near+Atithi+Hotel,+Off.+Aarey+Road,+Goregaon+East,+Mumbai-400063,+Maharashtra";
  const googleMapsLink = "https://maps.google.com/?q=Murli+Upadhay+Estate,+Visheshwer+Nagar,+Near+Atithi+Hotel,+Off.+Aarey+Road,+Goregaon+East,+Mumbai-400063,+Maharashtra";

  return (
    <div className="bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Contact Us
          </h1>
          <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            Get in touch with us for inquiries, quotes, or support
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Send us a Message
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                  className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 XXXXXXXXXX"
                  className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="What is this regarding?"
                  className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-200 outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Please describe your requirements or questions..."
                  className="w-full border-2 border-gray-200 p-3 rounded-lg focus:border-orange-500 focus:ring-2 focus:ring-orange-200 transition-all duration-200 outline-none resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-700 hover:to-orange-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Send Message →"}
              </button>
            </form>

            {isSubmitted && (
              <div className="mt-4 p-3 bg-green-50 border border-green-500 rounded-lg text-green-700 text-center">
                ✓ Thank you! We'll get back to you soon.
              </div>
            )}
          </div>

          {/* Office Information */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              Office Information
            </h2>
            
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-gray-800 mb-2">📍 Address</p>
                <p className="text-gray-600 leading-relaxed">
                  Murli Upadhay Estate,<br />
                  Visheshwer Nagar,<br />
                  Near Atithi Hotel,<br />
                  Off. Aarey Road, Goregaon East,<br />
                  Mumbai-400063, Maharashtra<br />
                  India
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-800 mb-2">📞 Phone</p>
                <p className="text-gray-600">+91 98765 43210</p>
                <p className="text-gray-600">+91 98765 43211</p>
              </div>

              <div>
                <p className="font-semibold text-gray-800 mb-2">✉️ Email</p>
                <p className="text-gray-600">info@saispringworks.com</p>
                <p className="text-gray-600">sales@saispringworks.com</p>
                <p className="text-gray-600">support@saispringworks.com</p>
              </div>

              <div>
                <p className="font-semibold text-gray-800 mb-2">🕐 Business Hours</p>
                <p className="text-gray-600">Monday - Friday: 9:00 AM - 7:00 PM</p>
                <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                <p className="text-gray-600">Sunday: Closed</p>
              </div>

              {/* Social Media Links */}
              <div className="pt-4 border-t border-gray-200">
                <p className="font-semibold text-gray-800 mb-3">Connect With Us</p>
                <div className="flex gap-3">
                  <a href="#" className="p-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                      <circle cx="4" cy="4" r="2" stroke="none"/>
                    </svg>
                  </a>
                  <a href="#" className="p-2 bg-orange-600 text-white rounded-full hover:bg-orange-700 transition-colors">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-12">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <iframe
              title="Office Location - Sai Spring Works"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.123456789!2d72.866!3d19.166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b9a5a5a5a5a5%3A0x5a5a5a5a5a5a5a5a!2sMurli%20Upadhay%20Estate%2C%20Visheshwer%20Nagar%2C%20Near%20Atithi%20Hotel%2C%20Off.%20Aarey%20Road%2C%20Goregaon%20East%2C%20Mumbai-400063%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890!5m2!1sen!2sin`}
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full"
            ></iframe>
            <div className="p-4 bg-gray-50 text-center">
              <a 
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-600 hover:text-orange-700 font-semibold inline-flex items-center gap-2"
              >
                <span>Open in Google Maps</span>
                <span>→</span>
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info Card */}
        <div className="mt-8 bg-orange-50 rounded-2xl p-6 border border-orange-100">
          <div className="flex items-start gap-4">
            <div className="text-3xl">🚗</div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-1">How to Reach Us</h3>
              <p className="text-gray-600 text-sm">
                Located near Atithi Hotel on Aarey Road, Goregaon East. 
                Easily accessible from Western Express Highway and near Goregaon Railway Station.
                Ample parking space available for visitors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}