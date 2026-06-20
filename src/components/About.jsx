import { Factory, Award, Users, Calendar, CheckCircle, TrendingUp } from "lucide-react";

export default function About() {
  const stats = [
    { icon: Calendar, label: "Years of Excellence", value: "24+", color: "orange" },
    { icon: Factory, label: "Products Delivered", value: "10M+", color: "orange" },
    { icon: Users, label: "Happy Clients", value: "500+", color: "orange" },
    { icon: Award, label: "Industry Awards", value: "15+", color: "orange" },
  ];

  const values = [
    {
      title: "Quality First",
      description: "We never compromise on quality, ensuring every product meets international standards.",
      icon: CheckCircle
    },
    {
      title: "Innovation",
      description: "Continuously evolving our processes and products with cutting-edge technology.",
      icon: TrendingUp
    },
    {
      title: "Customer Focus",
      description: "Your satisfaction is our priority. We work closely with clients to meet specific needs.",
      icon: Users
    },
    {
      title: "Excellence",
      description: "Striving for perfection in everything we do, from design to delivery.",
      icon: Award
    }
  ];

  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-1 bg-orange-100 rounded-full text-orange-600 font-semibold text-sm mb-4">
            Our Story
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4">
            About <span className="text-orange-600">Sai Spring Works</span>
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg md:text-xl">
            Precision engineering excellence since 2001
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
              Trusted Manufacturer of Precision Springs
            </h3>
            <p className="text-gray-600 leading-relaxed text-lg">
              Established in <span className="font-semibold text-orange-600">2001</span>, Sai Spring Works has grown to become a 
              trusted leader in manufacturing precision-engineered springs and metal components. 
              With over two decades of experience, we've built a reputation for delivering 
              <span className="font-semibold"> high-quality, durable, and reliable spring solutions</span> for diverse 
              industrial applications.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our state-of-the-art manufacturing facility is equipped with the latest technology, 
              allowing us to produce springs that meet the most demanding specifications. From 
              automotive to aerospace, agricultural to industrial machinery, our products power 
              critical applications across multiple sectors.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">ISO 9001:2015 Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">24/7 Customer Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Pan India Delivery</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-2xl p-8 text-white shadow-2xl">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-400 rounded-full opacity-20"></div>
              <div className="relative z-10">
                <Factory className="w-16 h-16 mb-6 text-white/90" />
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg leading-relaxed mb-6">
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

        {/* Statistics Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-all duration-300"
            >
              <div className="inline-flex p-3 rounded-full bg-orange-100 mb-4">
                <stat.icon className="w-8 h-8 text-orange-600" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Core Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-4">
            Our Core Values
          </h3>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-12"></div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="bg-orange-100 rounded-full w-14 h-14 flex items-center justify-center mb-4 group-hover:bg-orange-600 transition-colors duration-300">
                  <value.icon className="w-7 h-7 text-orange-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-orange-600 to-orange-800 rounded-2xl p-8 md:p-12 text-center text-white">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to Work Together?
          </h3>
          <p className="text-lg mb-6 opacity-95">
            Let's discuss how our spring solutions can benefit your business
          </p>
          <a 
            href="/contact" 
            className="inline-block bg-white text-orange-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}