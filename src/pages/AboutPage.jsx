import { 
  Calendar, 
  Factory, 
  Award, 
  Users, 
  CheckCircle,
  TrendingUp,
  Shield,
  Truck
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AboutPage() {
  const milestones = [
    { year: "2001", title: "Company Founded", description: "Started our journey in spring manufacturing" },
    { year: "2005", title: "ISO Certified", description: "Achieved ISO 9001:2000 certification" },
    { year: "2010", title: "Expansion", description: "New manufacturing facility established" },
    { year: "2015", title: "Global Reach", description: "Started exporting to international markets" },
    { year: "2020", title: "Automation", description: "Implemented advanced CNC machinery" },
    { year: "2024", title: "Industry Leader", description: "Recognized as top spring manufacturer" }
  ];

  const values = [
    {
      title: "Quality First",
      description: "Never compromise on quality, every product meets international standards",
      icon: Shield,
      color: "orange"
    },
    {
      title: "Innovation",
      description: "Continuously evolving processes with cutting-edge technology",
      icon: TrendingUp,
      color: "orange"
    },
    {
      title: "Customer Focus",
      description: "Your satisfaction is our priority, working closely to meet specific needs",
      icon: Users,
      color: "orange"
    },
    {
      title: "Excellence",
      description: "Striving for perfection in everything we do, from design to delivery",
      icon: Award,
      color: "orange"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-orange-600 to-orange-500 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Sai Spring Works
            </h1>
            <div className="w-24 h-1 bg-orange-400 mx-auto mb-6"></div>
            <p className="text-xl text-orange-100 max-w-3xl mx-auto">
              Precision engineering excellence since 2001
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        
        {/* Company Overview */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          <div>
            <div className="inline-block px-4 py-1 bg-orange-100 rounded-full text-orange-600 font-semibold text-sm mb-4">
              Our Story
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Trusted Manufacturer of Precision Springs
            </h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Established in <span className="font-semibold text-orange-600">2001</span>, Sai Spring Works has grown to become a 
                trusted leader in manufacturing precision-engineered springs and metal components. 
                With over two decades of experience, we've built a reputation for delivering 
                high-quality, durable, and reliable spring solutions for diverse industrial applications.
              </p>
              <p>
                Our state-of-the-art manufacturing facility is equipped with the latest technology, 
                allowing us to produce springs that meet the most demanding specifications. From 
                automotive to aerospace, agricultural to industrial machinery, our products power 
                critical applications across multiple sectors.
              </p>
              <p>
                We pride ourselves on our commitment to quality, innovation, and customer satisfaction. 
                Our team of skilled engineers and technicians work tirelessly to ensure every spring 
                that leaves our facility meets the highest standards of precision and performance.
              </p>
            </div>
            
            <div className="mt-6 flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">24/7 Customer Support</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Pan India Delivery</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-8 text-white shadow-2xl">
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-orange-400 rounded-full opacity-20"></div>
              <div className="relative z-10">
                <Factory className="w-16 h-16 mb-6 text-white/90" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed mb-8">
                  To deliver exceptional quality spring solutions that drive industrial efficiency 
                  while maintaining the highest standards of precision and reliability.
                </p>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg leading-relaxed">
                  To be the global leader in spring manufacturing, known for innovation, quality, 
                  and customer-centric solutions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Company Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Calendar className="w-10 h-10 text-orange-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-800">24+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Users className="w-10 h-10 text-orange-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-800">500+</div>
            <div className="text-gray-600">Happy Clients</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Factory className="w-10 h-10 text-orange-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-800">1000+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-md">
            <Truck className="w-10 h-10 text-orange-600 mx-auto mb-3" />
            <div className="text-3xl font-bold text-gray-800">50+</div>
            <div className="text-gray-600">Cities Served</div>
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Core Values
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="group bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
                >
                  <div className="inline-flex p-3 bg-orange-100 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Milestones Timeline */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Journey
            </h2>
            <div className="w-24 h-1 bg-orange-600 mx-auto"></div>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Key milestones in our company's growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-orange-200 hover:border-orange-500 transition-colors duration-300">
                <div className="absolute -left-3 top-0 w-6 h-6 bg-orange-600 rounded-full"></div>
                <div className="text-2xl font-bold text-orange-600 mb-2">{milestone.year}</div>
                <h3 className="text-lg font-bold text-gray-800 mb-1">{milestone.title}</h3>
                <p className="text-gray-600 text-sm">{milestone.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg mb-6 opacity-95 max-w-2xl mx-auto">
            Let's discuss how our spring solutions can benefit your business
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-block bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get in Touch
            </Link>
            <Link 
              to="/products" 
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transform hover:scale-105 transition-all duration-300"
            >
              View Our Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}