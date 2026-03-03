import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/** Leaf icon for "OUR SERVICES" label */
function ServicesIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 22v-8" />
      <path d="M7 14c-1.5 0-3-.5-4-1.5-1.2-1.3-1.4-3.5-.5-5.2 1-1.8 3.2-2.4 5.5-2 1.2.2 2.4.7 3.3 1.3.4-.6.9-1 1.5-1.3 1.2-.5 2.6-.4 3.8.2 2 1 2.9 3 2.5 5-.3 1.5-1.2 2.7-2.4 3.4" />
      <path d="M17 14c1.5 0 3-.5 4-1.5 1.2-1.3 1.4-3.5.5-5.2-1-1.8-3.2-2.4-5.5-2-1.2.2-2.4.7-3.3 1.3-.4-.6-.9-1-1.5-1.3-1.2-.5-2.6-.4-3.8.2-2 1-2.9 3-2.5 5 .3 1.5 1.2 2.7 2.4 3.4" />
    </svg>
  );
}

function ChevronRight({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
    </svg>
  );
}

/** Lightweight: single Intersection Observer for smooth scroll-in */
function useScrollVisible(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold, rootMargin: '0px 0px -30px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

const INITIATIVE_OPTIONS = [
  {
    id: 1,
    title: 'Environment',
    description: 'Green spaces and sustainable habits support your wellbeing. We help you connect with nature and adopt eco-friendly practices that benefit both you and the planet.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    title: 'Health',
    description: 'From nutrition to movement, our programs support your physical health and energy. Partner with us for personalized plans that fit your lifestyle and goals.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    title: 'Mental',
    description: 'Build resilience and calm with mindfulness and emotional wellness tools. Our resources help you manage stress and nurture a healthier mind.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 4,
    title: 'Social Awareness',
    description: 'Strong connections and inclusive communities are part of wellness. Join workshops and initiatives that foster empathy and belonging.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 5,
    title: 'News & Articles',
    description: 'Evidence-based insights and stories to support your journey. Stay informed with our latest articles on wellness, habits, and holistic health.',
    image: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=600'
  },
 
];

/** Desktop only: 5 cards for auto-slider (Environment, Health, Mental, Social Awareness, News & Articles) */
const DESKTOP_SLIDER_OPTIONS = INITIATIVE_OPTIONS.slice(0, 4);

export default function WellnessInitiativeOverview() {
  const [sectionRef, isVisible] = useScrollVisible(0.12);

  return (
    <section
      id="wellness-overview"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[linear-gradient(180deg,rgba(54,216,184,0.05)_0%,rgba(69,149,238,0.04)_50%,#f8fafc_100%)] py-16 sm:py-20 md:py-32"
      aria-labelledby="wellness-overview-heading"
    >
      <div className="mx-auto w-full max-w-[1600px] px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Heading – smooth scroll-in with staged reveal */}
        <div
          className={`mx-auto max-w-2xl flex flex-col items-center text-center transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
        >
          <div
            className={`mb-3 flex items-center justify-center gap-2 transition-all duration-600 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
          >
            <ServicesIcon className="h-5 w-5 text-[#4595EE]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#4595EE]">
              OUR INITIATIVES
            </span>
          </div>
          <div
            className={`mb-4 h-0.5 w-12   rounded-full bg-[#36D8B8] transition-all duration-600 ease-out ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
              }`}
            style={{ transitionDelay: isVisible ? '80ms' : '0ms' }}
            aria-hidden
          />
          <h2
            id="wellness-overview-heading"
            className={`whitespace-normal text-3xl font-bold tracking-tight leading-[1.2] text-[#1A3A32] transition-all duration-700 ease-out sm:whitespace-nowrap sm:text-4xl md:leading-[1.15] md:text-6xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            style={{ transitionDelay: isVisible ? '120ms' : '0ms' }}
          >
            Explore our holistic wellness initiatives
          </h2>
        </div>

        {/* News & Articles title – desktop only (matches card style: dark text + yellow line) */}
        

        {/* Mobile/tablet: swipeable carousel (6 cards) */}
        <div
          className={`group/carousel relative mt-10 sm:mt-12 md:mt-0 md:hidden w-full transition-opacity duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'
            } overflow-x-auto overflow-y-hidden overscroll-x-contain snap-x snap-mandatory scrollbar-hide`}
          style={{ transitionDelay: isVisible ? '200ms' : '0ms', WebkitOverflowScrolling: 'touch' }}
          aria-label="Wellness initiatives carousel"
        >
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-2 bg-linear-to-r from-[#f8fafc] via-[#f8fafc]/50 to-transparent sm:w-8" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-2 bg-linear-to-l from-[#f8fafc] via-[#f8fafc]/50 to-transparent sm:w-8" />

          <div className="flex w-[1000%] py-6 sm:w-[500%] sm:py-8">
            {[...INITIATIVE_OPTIONS, ...INITIATIVE_OPTIONS].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="group/card flex w-[10%] shrink-0 flex-col snap-start px-3 sm:px-4"
              >
                <div className="relative flex h-[400px] sm:h-[380px] w-full flex-col justify-end overflow-hidden rounded-2xl sm:rounded-[28px] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.1)] transition-transform duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]">
                  {/* Background Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover/card:scale-110"
                    loading={index < 5 ? 'eager' : 'lazy'}
                  />

                  {/* Gradient overlay: theme colors for readability and brand consistency (#1A3A32, #4595EE) */}
                  <div className="absolute inset-0 bg-linear-to-t from-[#1A3A32]/92 via-[#1A3A32]/50 to-transparent opacity-75 transition-opacity duration-500 group-hover/card:opacity-90" />
                  <div className="absolute inset-0 bg-linear-to-br from-[#4595EE]/20 via-transparent to-[#36D8B8]/15 pointer-events-none" aria-hidden />

                  {/* Glass Panel – pill-style bar; compact on desktop only */}
                  <div className={`absolute bottom-5 left-3 right-3 sm:bottom-6 sm:left-4 sm:right-4 z-10 overflow-hidden rounded-2xl sm:rounded-[24px] md:rounded-xl border backdrop-blur-md p-4 sm:p-5 md:px-4 md:py-2.5 transition-all duration-500 ease-out shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] ${item.titleStyle === 'yellow-underline' ? 'border-slate-200/80 bg-white/95 group-hover/card:bg-white' : 'border-white/25 bg-white/10 group-hover/card:bg-white/20'}`}>
                    <div className="flex min-w-0 items-center justify-between gap-4 md:gap-2">
                      <div className="min-w-0 flex-1">
                        <h3 className={`min-w-0 truncate text-base font-bold leading-tight drop-shadow-sm sm:text-lg md:text-base ${item.titleStyle === 'yellow-underline' ? 'text-slate-800' : 'text-white'}`}>{item.title}</h3>
                        {item.titleStyle === 'yellow-underline' && (
                          <div className="mt-1.5 h-0.5 w-full max-w-full rounded-full bg-amber-400 md:mt-1" aria-hidden />
                        )}
                      </div>
                      <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 sm:h-9 sm:w-9 md:h-7 md:w-7 group-hover/card:rotate-45 ${item.titleStyle === 'yellow-underline' ? 'bg-slate-200/80 text-slate-700 group-hover/card:bg-slate-300/80' : 'bg-white/25 text-white group-hover/card:bg-white/35'}`}>
                        <svg className="h-4 w-4 md:h-3.5 md:w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 19L19 5M5 5h14v14" />
                        </svg>
                      </div>
                    </div>

                    {/* Expandable Content Area */}
                    <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover/card:grid-rows-[1fr] group-hover/card:opacity-100">
                      <div className="overflow-hidden">
                        <p className={`mt-4 text-[13px] leading-relaxed ${item.titleStyle === 'yellow-underline' ? 'text-slate-600' : 'text-slate-100 text-opacity-95'}`}>
                          {item.description}
                        </p>
                        <div className={`mt-4 pt-4 border-t ${item.titleStyle === 'yellow-underline' ? 'border-slate-200' : 'border-white/20'}`}>
                          <Link
                            to="/#wellness-overview"
                            className={`inline-flex w-full items-center justify-center font-medium transition-colors ${item.titleStyle === 'yellow-underline' ? 'text-slate-800 hover:text-[#4595EE]' : 'text-white hover:text-[#36D8B8]'}`}
                          >
                            <span className="text-sm font-semibold tracking-wide">Explore Wellness</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop only: 5-card auto-slider with infinite loop */}
        <div
          className={`group/carousel wellness-carousel-fade relative mt-10 hidden w-full overflow-hidden md:mt-16 md:block ${isVisible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
          aria-label="Wellness initiatives carousel"
        >
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-20 w-24 bg-linear-to-r from-[#f8fafc] via-[#f8fafc]/70 to-transparent lg:w-5" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-20 w-24 bg-linear-to-l from-[#f8fafc] via-[#f8fafc]/70 to-transparent lg:w-5" />

          <div className="flex w-[250%] py-10 animate-wellness-carousel group-hover/carousel:[animation-play-state:paused]">
            {[...DESKTOP_SLIDER_OPTIONS, ...DESKTOP_SLIDER_OPTIONS].map((item, index) => (
              <div
                key={`desktop-${item.id}-${index}`}
                className="group/card flex w-[10%] shrink-0 flex-col px-4"
              >
                <div className="relative flex h-[460px] w-full flex-col justify-end overflow-hidden rounded-[32px] shadow-[0_4px_24px_-8px_rgba(0,0,0,0.1)] transition-transform duration-700 ease-out hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-1000 ease-out group-hover/card:scale-110"
                    loading={index < 5 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#1A3A32]/92 via-[#1A3A32]/50 to-transparent opacity-75 transition-opacity duration-500 group-hover/card:opacity-90" />
                  <div className="absolute inset-0 bg-linear-to-br from-[#4595EE]/20 via-transparent to-[#36D8B8]/15 pointer-events-none" aria-hidden />

                  <div className="absolute bottom-5 left-3 right-3 z-10 overflow-hidden rounded-xl border border-white/25 bg-white/10 p-4 py-2.5 backdrop-blur-md shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] transition-all duration-500 ease-out group-hover/card:bg-white/20">
                    <div className="flex min-w-0 items-center justify-between gap-2">
                      <h3 className="min-w-0 truncate text-base font-bold leading-tight text-white drop-shadow-sm">{item.title}</h3>
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/25 text-white transition-all duration-300 group-hover/card:rotate-45 group-hover/card:bg-white/35">
                        <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 19L19 5M5 5h14v14" />
                        </svg>
                      </div>
                    </div>
                    <div className="grid grid-rows-[0fr] opacity-0 transition-all duration-500 ease-out group-hover/card:grid-rows-[1fr] group-hover/card:opacity-100">
                      <div className="overflow-hidden">
                        <p className="mt-4 text-[13px] leading-relaxed text-slate-100 text-opacity-95">{item.description}</p>
                        <div className="mt-4 border-t border-white/20 pt-4">
                          <Link to="/#wellness-overview" className="inline-flex w-full items-center justify-center font-medium text-white transition-colors hover:text-[#36D8B8]">
                            <span className="text-sm font-semibold tracking-wide">Explore Wellness</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
