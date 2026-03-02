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

const YOGA_OPTIONS = [
  {
    id: 1,
    title: 'Baddha Konasana',
    description: 'This helps clients understand what to expect and builds confidence.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 2,
    title: 'Namaskara Yoga',
    description: 'This boosts confidence and helps clients know what to anticipate.',
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 3,
    title: 'Urdhva Hastasana',
    description: 'It gives clients belief and helps them know what to anticipate.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 4,
    title: 'Ardha Uttanasana',
    description: 'It allows clients know what to expect and provides them faith.',
    image: 'https://images.unsplash.com/photo-1512438248247-f0f2a5a8b7f0?auto=format&fit=crop&q=80&w=600'
  },
  {
    id: 5,
    title: 'Vrikshasana',
    description: 'Tree pose for balance and focus; builds stability and calm.',
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=600'
  }
];

export default function WellnessInitiativeOverview() {
  const [sectionRef, isVisible] = useScrollVisible(0.12);

  return (
    <section
      id="wellness-overview"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[linear-gradient(180deg,rgba(54,216,184,0.06)_0%,rgba(69,149,238,0.04)_50%,#f8fafc_100%)] py-24 md:py-32"
      aria-labelledby="wellness-overview-heading"
    >
      <div className="mx-auto w-full max-w-[1300px] px-4 sm:px-6 lg:px-8">
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
              OUR SERVICES
            </span>
          </div>
          <div
            className={`mb-4 h-0.5 w-12 rounded-full bg-[#36D8B8] transition-all duration-600 ease-out ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
              }`}
            style={{ transitionDelay: isVisible ? '80ms' : '0ms' }}
            aria-hidden
          />
          <h2
            id="wellness-overview-heading"
            className={`text-4xl font-medium leading-tight tracking-tight text-[#1A3A32] transition-all duration-700 ease-out md:text-5xl lg:text-[54px] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            style={{ transitionDelay: isVisible ? '120ms' : '0ms' }}
          >
            Check out our yoga and <br className="hidden md:block" /> exercise options.
          </h2>
        </div>

        {/* Carousel: 4 cards visible, infinite loop (5 cards duplicated) */}
        <div
          className={`group/carousel relative mt-16 w-full overflow-hidden transition-opacity duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
        >
          {/* Fog Fades */}
          <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-linear-to-r from-[#EEF8F9] to-transparent sm:w-5" />
          <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-linear-to-l from-[#EEF8F9] to-transparent sm:w-5" />

          <div className="flex w-[250%] animate-wellness-carousel group-hover/carousel:[animation-play-state:paused]">
            {[...YOGA_OPTIONS, ...YOGA_OPTIONS].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="group flex w-[10%] shrink-0 flex-col px-2"
              >
                <div className="flex flex-col rounded-t-[180px] rounded-b-[40px] bg-white p-4 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.06)] ring-1 ring-slate-100/80 transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.12)] hover:ring-[#36D8B8]/30">
                  <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-t-[160px] rounded-b-[24px] bg-slate-100 transition-transform duration-500 ease-out group-hover:scale-[1.02] sm:h-64">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                      loading={index < 5 ? 'lazy' : 'lazy'}
                    />
                  </div>
                  <div className="flex flex-1 flex-col px-2 pt-5 pb-2 text-center">
                    <h3 className="mb-2 text-lg font-bold text-[#1A3A32] sm:text-[22px]">{item.title}</h3>
                    <p className="mb-6 flex-1 text-[12px] font-medium leading-relaxed text-[#939598] sm:text-[13px]">
                      {item.description}
                    </p>
                    <Link
                      to="/#wellness-overview"
                      className="flex w-full items-center justify-between rounded-full bg-[#4595EE] py-1.5 pl-5 pr-1.5 text-white shadow-[0_4px_14px_rgba(54,216,184,0.35)] transition-all duration-300 ease-out hover:shadow-[0_6px_20px_rgba(54,216,184,0.4)] focus:outline-none focus:ring-2 focus:ring-[#36D8B8] focus:ring-offset-2"
                    >
                      <span className="text-[12px] font-bold sm:text-[13px]">Read More</span>
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/25 transition-transform duration-300 ease-out group-hover:translate-x-0.5 sm:h-8 sm:w-8">
                        <ChevronRight />
                      </span>
                    </Link>
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
