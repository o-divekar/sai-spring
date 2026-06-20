import { 
  Package, 
  PenTool, 
  Factory, 
  Flame, 
  Search, 
  Truck,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import { useState, useEffect, useRef } from "react";

export default function Process() {
  const [visibleSteps, setVisibleSteps] = useState({});
  const sectionRef = useRef(null);

  const steps = [
    {
      title: "Raw Material Selection",
      description: "Sourcing premium-grade spring steel and alloys from certified suppliers",
      icon: Package,
      details: ["High-carbon steel", "Stainless steel", "Alloy steel", "Quality certification"]
    },
    {
      title: "Spring Design",
      description: "Precision engineering using advanced CAD software for optimal performance",
      icon: PenTool,
      details: ["3D modeling", "Stress analysis", "Prototype testing", "Custom specifications"]
    },
    {
      title: "Manufacturing",
      description: "State-of-the-art CNC coiling and forming with tight tolerances",
      icon: Factory,
      details: ["CNC coiling", "Precision grinding", "End finishing", "Tolerance control"]
    },
    {
      title: "Heat Treatment",
      description: "Controlled thermal processing for enhanced strength and durability",
      icon: Flame,
      details: ["Tempering", "Annealing", "Stress relieving", "Hardening"]
    },
    {
      title: "Quality Inspection",
      description: "Rigorous testing and quality control at every production stage",
      icon: Search,
      details: ["Load testing", "Dimensional check", "Fatigue testing", "Surface inspection"]
    },
    {
      title: "Packaging & Delivery",
      description: "Secure packaging and timely delivery to your location",
      icon: Truck,
      details: ["Anti-rust coating", "Secure packaging", "Inventory management", "Just-in-time delivery"]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleSteps(prev => ({ ...prev, [index]: true }));
          }
        });
      },
      { threshold: 0.3 }
    );

    const stepElements = document.querySelectorAll('.step-card');
    stepElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-1 bg-orange-100 rounded-full text-orange-600 font-semibold text-sm mb-4">
            Our Workflow
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Manufacturing Process
          </h2>
          <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Precision engineering through a systematic 6-step manufacturing process
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-200 via-orange-300 to-orange-200 transform -translate-y-1/2"></div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-6 relative">
            {steps.map((step, index) => {
              const StepIcon = step.icon;
              const isVisible = visibleSteps[index];

              return (
                <div
                  key={index}
                  data-index={index}
                  className={`step-card relative transform transition-all duration-700 ${
                    isVisible ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'
                  }`}
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 z-10">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {index + 1}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 md:p-8 group hover:transform hover:-translate-y-2">
                    {/* Icon */}
                    <div className="mb-5">
                      <div className="inline-flex p-3 bg-gradient-to-br from-orange-100 to-orange-50 rounded-xl group-hover:from-orange-500 group-hover:to-orange-600 transition-all duration-300">
                        <StepIcon className="w-8 h-8 text-orange-600 group-hover:text-white transition-colors duration-300" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {step.description}
                    </p>

                    {/* Details List */}
                    <div className="space-y-2 mb-6">
                      {step.details.map((detail, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Link */}
                    <a 
                      href="/contact" 
                      className="inline-flex items-center gap-1 text-orange-600 font-semibold text-sm hover:gap-2 transition-all duration-300"
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>

                  {/* Connector Arrow (Mobile/Tablet) */}
                  {index < steps.length - 1 && (
                    <div className="lg:hidden flex justify-center my-4">
                      <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                        <ArrowRight className="w-5 h-5 text-orange-500" />
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Quality Assurance Banner */}
        <div className="mt-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-2xl p-6 md:p-8 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                100% Quality Assured
              </h3>
              <p className="text-orange-100">
                Every spring undergoes rigorous testing before leaving our facility
              </p>
            </div>
            <div className="flex gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full font-semibold">
                ISO 9001:2015
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full font-semibold">
                IATF 16949
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Want to see our process in action?
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <span>Request a Factory Tour</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}