import { 
  Car, 
  Zap, 
  Cpu, 
  Factory, 
  Settings, 
  Wrench,
  ArrowRight 
} from "lucide-react";
import { useState } from "react";

export default function Industries() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const industries = [
    { 
      name: "Automotive", 
      icon: Car,
      description: "Precision springs for vehicles, suspension systems, and engine components",
      applications: ["Suspension Springs", "Engine Valves", "Clutch Systems"]
    },
    { 
      name: "Electrical", 
      icon: Zap,
      description: "High-conductivity springs for electrical components and switchgear",
      applications: ["Contact Springs", "Switchgear", "Circuit Breakers"]
    },
    { 
      name: "Electronics", 
      icon: Cpu,
      description: "Miniature precision springs for electronic devices and equipment",
      applications: ["Connectors", "Battery Contacts", "Sensors"]
    },
    { 
      name: "Industrial Machinery", 
      icon: Factory,
      description: "Heavy-duty springs for industrial equipment and machinery",
      applications: ["Press Machines", "Conveyors", "Vibration Systems"]
    },
    { 
      name: "Manufacturing", 
      icon: Settings,
      description: "Custom spring solutions for diverse manufacturing processes",
      applications: ["Assembly Lines", "Automation", "Tooling"]
    },
    { 
      name: "Engineering", 
      icon: Wrench,
      description: "Technical spring solutions for specialized engineering applications",
      applications: ["Prototyping", "R&D", "Custom Designs"]
    }
  ];

  return (
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

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className={`group relative bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-500 transform hover:scale-105 hover:shadow-2xl ${
                hoveredIndex === index ? 'ring-2 ring-orange-500 shadow-xl' : ''
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Background Gradient Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Content */}
              <div className="relative p-6 md:p-8">
                {/* Icon Section */}
                <div className="mb-6">
                  <div className="inline-flex p-3 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl shadow-lg transform group-hover:rotate-6 transition-all duration-300">
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  {industry.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {industry.description}
                </p>

                {/* Applications */}
                <div className="space-y-2 mb-6">
                  <p className="text-sm font-semibold text-gray-700">Key Applications:</p>
                  <ul className="space-y-1">
                    {industry.applications.map((app, idx) => (
                      <li key={idx} className="text-sm text-gray-500 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-orange-400 rounded-full"></span>
                        {app}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Learn More Link */}
                <a 
                  href="/contact" 
                  className="inline-flex items-center gap-2 text-orange-600 font-semibold hover:gap-3 transition-all duration-300 group/link"
                >
                  <span>Get Solutions</span>
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-orange-500/10 to-transparent rounded-bl-2xl"></div>
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
  );
}