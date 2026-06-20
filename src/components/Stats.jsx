import { useState, useEffect, useRef } from "react";
// Import icons individually
import { Award, Users, CheckCircle, TrendingUp } from "lucide-react";

export default function Stats() {
  const [counts, setCounts] = useState({
    years: 0,
    clients: 0,
    projects: 0,
    satisfaction: 0
  });
  
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    { 
      id: "years",
      number: 25, 
      label: "Years Experience", 
      suffix: "+",
      icon: Award,
      color: "from-orange-400 to-orange-600"
    },
    { 
      id: "clients",
      number: 500, 
      label: "Clients Served", 
      suffix: "+",
      icon: Users,
      color: "from-orange-400 to-orange-600"
    },
    { 
      id: "projects",
      number: 1000, 
      label: "Projects Completed", 
      suffix: "+",
      icon: CheckCircle,
      color: "from-orange-400 to-orange-600"
    },
    { 
      id: "satisfaction",
      number: 99, 
      label: "Customer Satisfaction", 
      suffix: "%",
      icon: TrendingUp,
      color: "from-orange-400 to-orange-600"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          startCounting();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const startCounting = () => {
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;

    stats.forEach((stat) => {
      let currentStep = 0;
      const increment = stat.number / steps;

      const timer = setInterval(() => {
        currentStep++;
        if (currentStep === steps) {
          setCounts(prev => ({ ...prev, [stat.id]: stat.number }));
          clearInterval(timer);
        } else {
          setCounts(prev => ({ 
            ...prev, 
            [stat.id]: Math.floor(increment * currentStep)
          }));
        }
      }, interval);
    });
  };

  return (
    <section ref={sectionRef} className="relative bg-gradient-to-br from-orange-700 via-orange-600 to-orange-500 text-white py-16 md:py-20 overflow-hidden">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-400 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Achievements
          </h2>
          <div className="w-24 h-1 bg-white/30 mx-auto"></div>
          <p className="text-orange-200 mt-4 max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {stats.map((stat) => {
            const IconComponent = stat.icon;
            const currentValue = counts[stat.id] || 0;
            
            return (
              <div
                key={stat.id}
                className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 text-center hover:bg-white/10 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-white/10"
              >
                <div className={`inline-flex p-3 bg-gradient-to-r ${stat.color} rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-8 h-8 text-white" />
                </div>

                <div className="flex items-baseline justify-center gap-1">
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                    {currentValue}
                  </h3>
                  <span className="text-2xl md:text-3xl font-bold">
                    {stat.suffix}
                  </span>
                </div>

                <p className="text-orange-100 mt-2 text-sm md:text-base font-medium tracking-wide">
                  {stat.label}
                </p>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-16 h-0.5 bg-white/50 transition-all duration-300"></div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-sm font-medium">Trusted by 500+ businesses worldwide</span>
          </div>
        </div>
      </div>
    </section>
  );
}