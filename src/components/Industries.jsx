import { 
  Car, 
  Zap, 
  Cpu, 
  Factory, 
  Settings, 
  Wrench,
  ArrowRight,
  X
} from "lucide-react";
import { useState } from "react";

import automationImage from "../assets/images/industries_card/automation.jpg";
import electronicImage from "../assets/images/industries_card/electronic.jpg";
import engineeringImage from "../assets/images/industries_card/engineering.jpg";
import industrialImage from "../assets/images/industries_card/industrial_machine.jpeg";
import shippingImage from "../assets/images/industries_card/shipping.jpg";
import switchImage from "../assets/images/industries_card/switch_gear.png";

// ─── INDUSTRY DATA ──────────────────────────────────────────────────────────
const industries = [
  { 
    id: 1,
    name: "Automotive", 
    icon: Car,
    image: automationImage,
    description: "Precision springs for vehicles, suspension systems, and engine components",
    applications: ["Suspension Springs", "Engine Valves", "Clutch Systems"],
    fullDescription: "We supply high-performance springs for the automotive industry, including suspension systems, engine components, and clutch mechanisms. Our springs are engineered to withstand extreme conditions and provide consistent performance.",
    keyFeatures: ["High fatigue strength", "Corrosion resistant", "Precision tolerances", "SAE compliant"]
  },
  { 
    id: 2,
    name: "Electrical", 
    icon: Zap,
    image: switchImage,
    description: "High-conductivity springs for electrical components and switchgear",
    applications: ["Contact Springs", "Switchgear", "Circuit Breakers"],
    fullDescription: "Our electrical springs are designed for high conductivity and reliability in switchgear, circuit breakers, and electrical contact systems. They ensure consistent electrical contact and long service life.",
    keyFeatures: ["High conductivity", "Low contact resistance", "High cycle life", "Arc resistant"]
  },
  { 
    id: 3,
    name: "Electronics", 
    icon: Cpu,
    image: electronicImage,
    description: "Miniature precision springs for electronic devices and equipment",
    applications: ["Connectors", "Battery Contacts", "Sensors"],
    fullDescription: "We manufacture miniature precision springs for electronic devices including connectors, battery contacts, and sensor applications. Our springs are designed for compact spaces and reliable performance.",
    keyFeatures: ["Miniature size", "Precise force control", "High fatigue life", "Custom designs"]
  },
  { 
    id: 4,
    name: "Industrial Machinery", 
    icon: Factory,
    image: industrialImage,
    description: "Heavy-duty springs for industrial equipment and machinery",
    applications: ["Press Machines", "Conveyors", "Vibration Systems"],
    fullDescription: "Our heavy-duty springs are engineered for industrial machinery applications including press machines, conveyor systems, and vibration isolation. They provide reliable performance in demanding environments.",
    keyFeatures: ["High load capacity", "Vibration resistance", "Long service life", "Custom specifications"]
  },
  { 
    id: 5,
    name: "Manufacturing", 
    icon: Settings,
    image: shippingImage,
    description: "Custom spring solutions for diverse manufacturing processes",
    applications: ["Assembly Lines", "Automation", "Tooling"],
    fullDescription: "We provide custom spring solutions for manufacturing processes including assembly lines, automation systems, and tooling applications. Our springs are designed to improve efficiency and productivity.",
    keyFeatures: ["Custom designs", "Rapid prototyping", "Cost-effective", "Bulk production"]
  },
  { 
    id: 6,
    name: "Engineering", 
    icon: Wrench,
    image: engineeringImage,
    description: "Technical spring solutions for specialized engineering applications",
    applications: ["Prototyping", "R&D", "Custom Designs"],
    fullDescription: "We offer technical spring solutions for specialized engineering applications including prototyping, R&D, and custom designs. Our team works closely with engineers to develop optimal solutions.",
    keyFeatures: ["Precision engineering", "Custom materials", "Advanced testing", "Technical support"]
  }
];

export default function Industries() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <style>{`
        /* Card Styles */
        .industry-card {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          aspect-ratio: 1 / 1;
          background: #1a1a1a;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }
        .industry-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(234,88,12,0.25);
        }
        
        /* Image */
        .industry-card .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.6s ease;
        }
        .industry-card:hover .card-image {
          transform: scale(1.08);
        }
        
        /* Overlay - Hidden by default, shows on hover */
        .industry-card .hover-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          padding: 24px 20px;
        }
        .industry-card:hover .hover-overlay {
          opacity: 1;
        }
        
        /* Glow Effect on Image */
        .industry-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(234,88,12,0.3) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 1;
          pointer-events: none;
        }
        .industry-card:hover::before {
          opacity: 1;
        }
        
        /* Glow Border */
        .industry-card::after {
          content: '';
          position: absolute;
          inset: 3px;
          border: 2px solid transparent;
          border-radius: 13px;
          background: linear-gradient(135deg, rgba(234,88,12,0.5), rgba(234,88,12,0.05)) border-box;
          -webkit-mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease;
          z-index: 2;
          pointer-events: none;
        }
        .industry-card:hover::after {
          opacity: 1;
        }
        
        /* Overlay Content */
        .hover-overlay .overlay-icon {
          display: inline-flex;
          background: rgba(234,88,12,0.3);
          border-radius: 12px;
          padding: 8px;
          margin-bottom: 10px;
          width: 44px;
          height: 44px;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(4px);
          border: 1px solid rgba(234,88,12,0.2);
        }
        .hover-overlay .overlay-icon svg {
          color: #EA580C;
        }
        
        .hover-overlay .overlay-name {
          color: #fff;
          font-size: 20px;
          font-weight: 700;
          margin-bottom: 4px;
          letter-spacing: -0.02em;
        }
        .hover-overlay .overlay-desc {
          color: rgba(255,255,255,0.7);
          font-size: 13px;
          line-height: 1.5;
          margin-bottom: 10px;
          max-width: 90%;
        }
        .hover-overlay .overlay-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 4px;
        }
        .hover-overlay .overlay-tags span {
          background: rgba(234,88,12,0.25);
          color: #EA580C;
          padding: 2px 10px;
          border-radius: 12px;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.03em;
          border: 1px solid rgba(234,88,12,0.15);
        }
        .hover-overlay .overlay-arrow {
          position: absolute;
          bottom: 20px;
          right: 20px;
          color: #EA580C;
          opacity: 0;
          transform: translateX(-10px);
          transition: opacity 0.4s ease, transform 0.4s ease;
        }
        .industry-card:hover .overlay-arrow {
          opacity: 1;
          transform: translateX(0);
        }
        
        /* Responsive Grid */
        .industries-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 1024px) {
          .industries-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }
        }
        @media (max-width: 640px) {
          .industries-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          .industry-card {
            aspect-ratio: 16 / 10;
          }
        }
      `}</style>

      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-block px-4 py-1 bg-orange-100 rounded-full text-orange-600 font-semibold text-sm mb-4">
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              Industries We Serve
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Providing precision spring solutions across diverse industrial sectors
            </p>
          </div>

          {/* Industries Grid - Image Only Cards */}
          <div className="industries-grid">
            {industries.map((industry) => (
              <div
                key={industry.id}
                className="industry-card"
                onMouseEnter={() => setHoveredId(industry.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Image */}
                <img src={industry.image} alt={industry.name} className="card-image" />
                
                {/* Hover Overlay - Shows info on hover */}
                <div className="hover-overlay">
                  {/* Icon */}
                  <div className="overlay-icon">
                    <industry.icon size={20} />
                  </div>
                  
                  {/* Name */}
                  <div className="overlay-name">{industry.name}</div>
                  
                  {/* Description */}
                  <div className="overlay-desc">{industry.description}</div>
                  
                  {/* Tags / Applications */}
                  <div className="overlay-tags">
                    {industry.applications.slice(0, 3).map((app, idx) => (
                      <span key={idx}>{app}</span>
                    ))}
                    {industry.applications.length > 3 && (
                      <span>+{industry.applications.length - 3} more</span>
                    )}
                  </div>
                  
                  {/* Arrow Indicator */}
                  <div className="overlay-arrow">
                    <ArrowRight size={20} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl p-8 md:p-10 text-white">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Not Sure Which Spring Solution You Need?
              </h3>
              <p className="text-lg mb-6 opacity-95 max-w-2xl mx-auto">
                Our team of experts will help you find the perfect spring solution for your specific industry requirements.
              </p>
              <a 
                href="/contact" 
                className="inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <span>Consult Our Experts</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}