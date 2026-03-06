import React from 'react';

const FounderNote = () => {
  return (
    /* Reduced vertical padding from min-h-screen to py-12/20 */
    <section className="relative w-full flex items-center justify-center py-12 md:py-20 px-6">
      {/* Background Image with Blur Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=2000')` 
        }}
      >
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm"></div>
      </div>

      {/* Main Content Card - Max-w-3xl for a more compact feel */}
      <div className="relative z-10 w-full max-w-3xl bg-white rounded-[2.5rem] shadow-xl shadow-gray-200/40 p-10 md:p-14 lg:p-16">
        
        <header className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
            A Note from Our Founder
          </h2>
          <p className="text-slate-400 font-medium text-sm mt-1">Medicare</p>
        </header>

        <div className="space-y-5 text-slate-600 leading-relaxed text-base md:text-lg">
          <p>
            At Medicare, we believe healthcare should feel human.
          </p>
          
          <p>
            Too often, patients, doctors, and clinics are caught in a maze of systems that slow everything 
            down. We saw a world where access was uneven, communication was fragmented, and trust was 
            too rare.
          </p>
          
          <p>
            So we built Medicare to change that.
          </p>

          <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100">
            <p className="font-semibold text-slate-800 mb-3">Our mission is simple:</p>
            <ul className="space-y-2 list-disc pl-5 marker:text-blue-400 text-sm md:text-base">
              <li>Put patients, doctors, and clinics on the same page</li>
              <li>Deliver care that's faster, clearer, and more personal</li>
              <li>Turn healthcare from a process into a partnership</li>
            </ul>
          </div>

          <p className="text-sm md:text-base italic">
            We're not just building a platform. We're building a healthier future.
          </p>
        </div>

        {/* Signature Section */}
        <div className="mt-10 pt-4 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex items-center gap-4">
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150" 
              alt="Anantaraya Prahasta" 
              className="w-12 h-12 rounded-full object-cover grayscale-[0.2]"
            />
            <div>
              <h4 className="font-bold text-slate-900 leading-none">Anantaraya Prahasta</h4>
              <p className="text-slate-400 text-xs mt-1 uppercase tracking-wider">CEO Medicare</p>
            </div>
          </div>

          {/* Signature SVG/Font style */}
          <div className="opacity-80">
            <span className="text-4xl font-signature text-slate-800" style={{ fontFamily: "'Dancing Script', cursive" }}>
              Prahasta
            </span>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@600&display=swap');
      `}</style>
    </section>
  );
};

export default FounderNote;