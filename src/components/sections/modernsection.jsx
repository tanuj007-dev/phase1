import React from 'react';

/**
 * HeroSectionHealthcare.jsx
 * A compact, modern healthcare hero section with shrunken elements
 * and precise typography.
 */
const HeroSectionHealthcare = () => {
  const images = [
    { src: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=300", alt: "Doctor with patient" },
    { src: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=300", alt: "Hospital equipment" },
    { src: "https://images.unsplash.com/photo-1576091160550-2173bdd9962a?auto=format&fit=crop&q=80&w=300", alt: "Doctor writing prescription" },
    { src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=300", alt: "Wheelchair near window" },
    { src: "https://images.unsplash.com/photo-1584515202961-7734208a0e30?auto=format&fit=crop&q=80&w=300", alt: "Nurse helping patient" },
  ];

  return (
    <section className="bg-[#f5f5f5] py-12 px-4 flex flex-col items-center justify-center min-h-[80vh]">
      <div className="max-w-[1000px] w-full mx-auto">
        
        {/* Shrunken Image Row - Reduced height and gap */}
        <div className="grid grid-cols-5 gap-3 mb-10">
          {images.map((img, i) => (
            <div key={i} className="h-[100px] md:h-[120px] w-full overflow-hidden rounded-2xl shadow-sm border border-white/50">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center">
          {/* Small Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2d7a5e]"></span>
            <span className="text-[12px] font-semibold text-gray-700 uppercase tracking-wider">Modern Healthcare</span>
          </div>

          {/* Reduced Heading Size */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-[#111827] leading-[1.15] tracking-tight max-w-2xl mb-8">
            Breaking Down Barriers <br />
            to Better <span className="italic font-serif opacity-90">Healthcare</span>
          </h1>

          {/* Compact CTA Button */}
          <button className="bg-[#2d7a5e] hover:bg-[#235e48] text-white px-6 py-2.5 rounded-full font-medium text-sm shadow-md transition-all active:scale-95">
            Join 1200+ Others
          </button>

          {/* Subtext - Reduced font size */}
          <p className="mt-6 text-gray-400 text-sm md:text-base text-center max-w-md leading-relaxed">
            Innovating the way data works for patients and providers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionHealthcare;