import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { INITIATIVE_OPTIONS } from '../../data/initiatives';

/** * We slice to 4 items as per your original logic, 
 * but we will triple them for a seamless loop.
 */
const BASE_OPTIONS = INITIATIVE_OPTIONS.slice(0, 4);
const TRIPLE_OPTIONS = [...BASE_OPTIONS, ...BASE_OPTIONS, ...BASE_OPTIONS];

function ServicesIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M12 22v-8" /><path d="M7 14c-1.5 0-3-.5-4-1.5-1.2-1.3-1.4-3.5-.5-5.2 1-1.8 3.2-2.4 5.5-2 1.2.2 2.4.7 3.3 1.3.4-.6.9-1 1.5-1.3 1.2-.5 2.6-.4 3.8.2 2 1 2.9 3 2.5 5-.3 1.5-1.2 2.7-2.4 3.4" /><path d="M17 14c1.5 0 3-.5 4-1.5 1.2-1.3 1.4-3.5.5-5.2-1-1.8-3.2-2.4-5.5-2-1.2.2-2.4.7-3.3 1.3-.4-.6-.9-1-1.5-1.3-1.2-.5-2.6-.4-3.8.2-2 1-2.9 3-2.5 5 .3 1.5 1.2 2.7 2.4 3.4" />
    </svg>
  );
}

function useScrollVisible(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold, rootMargin: '0px 0px -30px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export default function WellnessInitiativeOverview() {
  const [sectionRef, isVisible] = useScrollVisible(0.12);

  return (
    <section
      id="wellness-overview"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[linear-gradient(180deg,rgba(54,216,184,0.05)_0%,rgba(69,149,238,0.04)_50%,#f8fafc_100%)] py-7 sm:py-20 md:py-15"
    >
      {/* Injecting Keyframes for Seamless Loop */}
      <style>{`
        @keyframes infinite-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-100% / 3)); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 40s linear infinite;
        }
      `}</style>

      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Header Section */}
        <div className={`mx-auto max-w-2xl flex flex-col items-center text-center transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="mb-3 flex items-center justify-center gap-2">
            <ServicesIcon className="h-5 w-5 text-[#4595EE]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#4595EE]">OUR INITIATIVES</span>
          </div>
          <div className={`mb-4 h-0.5 w-12 rounded-full bg-[#36D8B8] transition-all duration-700 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} />
          <h2 className="text-3xl font-bold tracking-tight text-[#1A3A32] sm:text-4xl md:text-6xl">
            Explore our holistic wellness initiatives
          </h2>
        </div>

        {/* Desktop Seamless Slider */}
        <div 
          className={`relative mt-16 hidden md:block transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Edge Fades for Depth */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#f8fafc] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#f8fafc] to-transparent" />

          <div className="flex overflow-hidden">
            <div className="flex animate-infinite-scroll hover:[animation-play-state:paused] py-10">
              {TRIPLE_OPTIONS.map((item, index) => (
                <div key={`${item.id}-${index}`} className="w-[350px] shrink-0 px-4">
                  <div className="group/card relative h-[460px] w-full overflow-hidden rounded-[32px] bg-slate-200 shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 group-hover/card:scale-110"
                    />
                    
                    {/* Overlays */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A32]/95 via-[#1A3A32]/40 to-transparent opacity-80" />
                    
                    {/* Glass Content Card */}
                    <div className="absolute bottom-6 left-4 right-4 z-20 rounded-2xl border border-white/20 bg-[#021A44]/70 p-5 backdrop-blur-md transition-all duration-500 group-hover/card:bg-[#021A44]/90">
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-bold text-white">{item.title}</h3>
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 text-white transition-transform group-hover/card:rotate-45">
                          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path d="M5 19L19 5M5 5h14v14" />
                          </svg>
                        </div>
                      </div>

                      {/* Expandable description on Hover */}
                      <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 group-hover/card:grid-rows-[1fr] group-hover/card:opacity-100">
                        <div className="overflow-hidden">
                          <p className="mt-4 text-sm leading-relaxed text-slate-200">
                            {item.shortDesc || item.description.slice(0, 100) + '...'}
                          </p>
                          <Link 
                            to={`/initiative/${item.slug || item.id}`} 
                            className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white/10 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#36D8B8] hover:text-[#1A3A32]"
                          >
                            Explore Initiative
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile View: Standard scroll with snaps */}
        <div className="mt-12 flex w-full gap-4 overflow-x-auto pb-8 snap-x snap-mandatory md:hidden scrollbar-hide">
          {BASE_OPTIONS.map((item) => (
            <div key={`mobile-${item.id}`} className="w-[85vw] shrink-0 snap-center">
               <div className="relative h-[400px] w-full overflow-hidden rounded-3xl">
                  <img src={item.image} className="absolute inset-0 h-full w-full object-cover" alt={item.title} />
                  <div className="absolute inset-0 bg-black/40" />
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold">{item.title}</h3>
                  </div>
               </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}