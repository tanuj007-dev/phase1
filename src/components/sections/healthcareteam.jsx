import React from "react";

const HealthcareTeam = () => {
  const teamMembers = [
    {
      name: "Dr. Amelia Tan",
      role: "CEO, Medicare",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=500&auto=format&fit=crop",
    },
    {
      name: "Michael Wong",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=500&auto=format&fit=crop",
    },
    {
      name: "Dr. Sarah Lee",
      role: "CMO",
      image:
        "https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=400&h=500&auto=format&fit=crop",
    },
    {
      name: "Jonathan Reyes",
      role: "Head of Marketing",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&auto=format&fit=crop",
    },
    {
      name: "Tobey Maguire",
      role: "CPO",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&auto=format&fit=crop",
    },
    {
      name: "Priya Sharma",
      role: "Head of Partnerships",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=500&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-[#f6f6f6] py-24 px-6 font-sans">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Content */}
        <div className="lg:col-span-4">
          <div className="inline-flex items-center gap-2 px-4 py-1 bg-white rounded-full shadow-sm mb-6 border border-gray-100">
            <span className="w-2 h-2 bg-green-600 rounded-full"></span>
            <span className="text-sm font-medium text-gray-700">
              Our Team
            </span>
          </div>

          <h2 className="text-[48px] font-semibold leading-[1.1] text-black mb-6">
            Meet the People <br />
            Behind the <span className="italic font-serif">Vision</span>
          </h2>

          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-[420px]">
            A dedicated team working together to make healthcare simpler,
            faster, and more accessible for everyone.
          </p>

          <button className="bg-[#2D7A5E] hover:bg-[#235d48] text-white px-7 py-3 rounded-full font-medium transition">
            Join Us Now
          </button>
        </div>

        {/* Team Grid */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">

            {teamMembers.map((member, index) => (
              <div key={index}>
                
                {/* Card */}
                <div className="bg-[#eeeeee] rounded-2xl p-6 flex items-center justify-center h-[260px]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full object-contain"
                  />
                </div>

                {/* Text */}
                <div className="mt-4">
                  <h3 className="text-lg font-semibold text-black">
                    {member.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    {member.role}
                  </p>
                </div>

              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default HealthcareTeam;