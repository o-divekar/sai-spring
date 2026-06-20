import { 
  Calendar, 
  Ruler, 
  Settings, 
  Shield, 
  Truck, 
  Trophy,
  CheckCircle,
  Star
} from "lucide-react";

const features = [
  {
    id: 1,
    title: "Established in 2001",
    description: "Over two decades of experience in precision spring manufacturing",
    icon: Calendar,
    color: "from-orange-400 to-orange-600"
  },
  {
    id: 2,
    title: "Precision Engineering",
    description: "State-of-the-art machinery and skilled engineers for exact specifications",
    icon: Ruler,
    color: "from-orange-400 to-orange-600"
  },
  {
    id: 3,
    title: "Custom Manufacturing",
    description: "Tailored solutions to meet your unique spring requirements",
    icon: Settings,
    color: "from-orange-400 to-orange-600"
  },
  {
    id: 4,
    title: "Quality Assurance",
    description: "Rigorous testing and quality control at every production stage",
    icon: Shield,
    color: "from-orange-400 to-orange-600"
  },
  {
    id: 5,
    title: "Timely Delivery",
    description: "Reliable supply chain management ensuring on-time delivery",
    icon: Truck,
    color: "from-orange-400 to-orange-600"
  },
  {
    id: 6,
    title: "Industrial Expertise",
    description: "Deep understanding of diverse industry requirements and applications",
    icon: Trophy,
    color: "from-orange-400 to-orange-600"
  }
];

export default function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-1 bg-orange-100 rounded-full text-orange-600 font-semibold text-sm mb-4">
            Why Choose Us
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Why Choose{" "}
            <span className="bg-gradient-to-r from-orange-600 to-orange-800 bg-clip-text text-transparent">
              Sai Spring Works
            </span>
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Setting industry standards through quality, precision, and reliability
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            
            return (
              <div
                key={feature.id}
                className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
              >
                {/* Decorative Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative p-6 md:p-8">
                  {/* Icon */}
                  <div className={`mb-5 inline-flex p-3 bg-gradient-to-br ${feature.color} rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-300">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>

                  {/* Checkmark indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <CheckCircle className="w-5 h-5 text-orange-500" />
                  </div>
                </div>

                {/* Bottom Border */}
                <div className={`h-1 bg-gradient-to-r ${feature.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
              </div>
            );
          })}
        </div>

        {/* Stats/Trust Indicators */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl p-8 md:p-10 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">24+</div>
              <div className="text-sm text-orange-100">Years of Excellence</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">500+</div>
              <div className="text-sm text-orange-100">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">1000+</div>
              <div className="text-sm text-orange-100">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold mb-1">99%</div>
              <div className="text-sm text-orange-100">Satisfaction Rate</div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>Request a Quote</span>
              <span className="text-lg">→</span>
            </a>
            <a
              href="/products"
              className="inline-flex items-center justify-center gap-2 border-2 border-orange-600 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-lg font-semibold transition-all duration-300"
            >
              <span>View Our Products</span>
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}