import { Link } from "react-router-dom";

const teamMembers = [
  {
    id: 1,
    name: "Mr. XYZ",
    role: "Founder & CEO",
    bio: "With over 25 years of experience in spring manufacturing, leading the company with vision and expertise.",
    email: "xyz@saispringworks.com",
    linkedin: "#",
    expertise: ["Strategic Planning", "Business Development", "Industry 4.0"]
  },
  {
    id: 2,
    name: "Mr. ABC",
    role: "Production Manager",
    bio: "Expert in optimizing manufacturing processes and ensuring operational excellence.",
    email: "abc@saispringworks.com",
    linkedin: "#",
    expertise: ["Lean Manufacturing", "Production Planning", "Quality Control"]
  },
  {
    id: 3,
    name: "Mr. PQR",
    role: "Quality Control Head",
    bio: "Dedicated to maintaining highest quality standards and ISO compliance.",
    email: "pqr@saispringworks.com",
    linkedin: "#",
    expertise: ["Quality Assurance", "ISO Standards", "Testing & Inspection"]
  }
];

export default function Team() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block px-4 py-1 bg-orange-100 rounded-full text-orange-600 font-semibold text-sm mb-4">
            Our Leadership
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Meet Our Team
          </h2>
          <div className="w-24 h-1 bg-orange-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            Dedicated professionals committed to delivering excellence in every spring we manufacture
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Image Placeholder */}
              <div className="relative h-64 bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>
                
                {/* Profile Icon Placeholder */}
                <div className="w-32 h-32 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-6xl">👤</span>
                </div>
                
                {/* Social Links Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a 
                    href={`mailto:${member.email}`}
                    className="p-3 bg-white rounded-full hover:bg-orange-500 transition-colors duration-300"
                    aria-label="Email"
                  >
                    <span className="text-xl">📧</span>
                  </a>
                  <a 
                    href={member.linkedin}
                    className="p-3 bg-white rounded-full hover:bg-orange-500 transition-colors duration-300"
                    aria-label="LinkedIn"
                  >
                    <span className="text-xl">🔗</span>
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-orange-600 font-semibold text-sm mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {member.bio}
                </p>
                
                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="text-xs bg-orange-50 text-orange-600 px-2 py-1 rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Contact Button */}
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 text-orange-600 font-semibold text-sm hover:gap-3 transition-all duration-300"
                >
                  <span>Contact {member.name.split('.')[1]?.trim() || member.name}</span>
                  <span className="text-lg">→</span>
                </Link>
              </div>

              {/* Decorative Border */}
              <div className="h-1 bg-gradient-to-r from-orange-500 to-orange-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        {/* Join Our Team CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-2xl p-8 md:p-10">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Want to Join Our Team?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals who are passionate about precision engineering
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              <span>View Open Positions</span>
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}