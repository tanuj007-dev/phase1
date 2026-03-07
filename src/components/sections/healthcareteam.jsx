import React from "react";

const HealthcareTeam = () => {
  const teamMembers = [
    {
      name: "Dr. Amelia Tan",
      role: "CEO, Medicare",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&h=500&auto=format&fit=crop",
    },
    {
      name: "Michael Wong",
      role: "CTO",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&h=500&auto=format&fit=crop",
    },
    {
      name: "Dr. Sarah Lee",
      role: "CMO",
      image: "https://images.unsplash.com/photo-1559839734-2b71f1536783?q=80&w=400&h=500&auto=format&fit=crop",
    },
    {
      name: "Jonathan Reyes",
      role: "Head of Marketing",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&h=500&auto=format&fit=crop",
    },
    {
      name: "Tobey Maguire",
      role: "CPO",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&h=500&auto=format&fit=crop",
    },
    {
      name: "Priya Sharma",
      role: "Head of Partnerships",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&h=500&auto=format&fit=crop",
    },
  ];

  return (
    <section className="bg-[#F4F6F8] py-24 px-6 font-[Poppins] overflow-hidden">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        
        {/* Left Content */}
        <div className="lg:col-span-4 lg:sticky lg:top-24">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white rounded-full shadow-sm mb-8 border border-gray-100 transform transition hover:scale-105 duration-300">
            <span className="w-2 h-2 bg-[#4A8FD8] rounded-full animate-pulse"></span>
            <span className="text-xs font-bold tracking-wider uppercase text-[#4A8FD8]">
              Our Team
            </span>
          </div>

          <h2 className="text-[52px] font-bold leading-[1.1] text-[#1F2937] mb-6">
            Meet the People <br />
            Behind the <span className="italic font-serif text-[#4A8FD8]">Vision</span>
          </h2>

          <p className="text-[#6B7280] text-lg leading-relaxed mb-10 max-w-[400px]">
            A dedicated team working together to make healthcare <span className="text-[#1F2937] font-medium">simpler, faster,</span> and more accessible for everyone.
          </p>

          <button className="group relative bg-[#4A8FD8] hover:bg-[#3F7FCC] text-white px-9 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-1">
            Join Us Now
            <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

        {/* Team Grid */}
        <div className="lg:col-span-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">

            {teamMembers.map((member, index) => (
              <div key={index} className="group cursor-pointer">
                
                {/* Card Container */}
                <div className="relative bg-[#E9EEF5] rounded-3xl p-4 flex items-end justify-center h-[300px] transition-all duration-500 ease-out group-hover:bg-[#DEE6F0] group-hover:shadow-xl group-hover:shadow-gray-200/50 group-hover:-translate-y-2 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="h-full w-full object-cover rounded-2xl transition-transform duration-700 ease-in-out group-hover:scale-110"
                  />
                  {/* Subtle Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Text Content */}
                <div className="mt-6 px-2">
                  <h3 className="text-xl font-bold text-[#1F2937] group-hover:text-[#4A8FD8] transition-colors duration-300">
                    {member.name}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="w-4 h-[1px] bg-[#BDC3C7]"></span>
                    <p className="text-[#6B7280] text-sm font-medium tracking-wide italic">
                      {member.role}
                    </p>
                  </div>
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