import React, { useRef, useState, useEffect } from 'react';

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

const PlayIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-[#939598]">
    <path d="M8 5v14l11-7z" />
  </svg>
);

const ArrowDownIcon = ({ className = 'text-white' }) => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19" />
    <polyline points="19 12 12 19 5 12" />
  </svg>
);

const ArrowRightIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

/** Logo items for trusted carousel (duplicated for seamless loop) */
const TRUSTED_ITEMS = [
  { label: 'xerox', className: 'text-xl font-bold tracking-tighter text-[#1A3A32]' },
  {
    label: 'REUTERS', render: () => (
      <span className="text-lg font-bold font-serif text-[#1A3A32] flex items-center gap-1">
        <span className="w-5 h-5 rounded-full border-[1.5px] border-[#1A3A32] grid place-items-center text-[11px]">R</span>
        REUTERS
      </span>
    )
  },
  { label: 'BESTSELLER', className: 'text-xs font-black tracking-[0.2em] text-[#1A3A32]' },
  { label: 'zoom', className: 'text-2xl font-black text-[#1A3A32] tracking-tighter lowercase' },
  {
    label: 'Teleperformance', render: () => (
      <span className="text-sm font-bold text-[#1A3A32] flex items-center gap-1.5">
        <span className="w-[18px] h-[18px] bg-[#1A3A32] rounded-sm" />
        Teleperformance
      </span>
    )
  },
  {
    label: 'Heineken', render: () => (
      <span className="text-lg font-bold text-[#1A3A32] flex items-center gap-1">
        <span className="text-[#36D8B8]">★</span> Heineken
      </span>
    )
  },
];

export default function FeaturedVideoSection() {
  const [sectionRef, isVisible] = useScrollVisible(0.12);

  return (
    <section
      id="featured-video"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[linear-gradient(180deg,rgba(69,149,238,0.06)_0%,rgba(54,216,184,0.04)_40%,#f8fafc_100%)] pt-40 pb-32"
    >
      {/* Soft gradient overlay */}
      <div className="absolute top-0 inset-x-0 h-[420px] bg-linear-to-b from-[#4595EE]/6 to-transparent pointer-events-none" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
        {/* Two columns: video left, content right – aligned and balanced */}
        <div
          className={`grid grid-cols-1 gap-10 transition-all duration-700 ease-out md:grid-cols-2 md:gap-12 lg:gap-16 lg:items-center ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
            }`}
        >
          {/* Left: Video */}
          <div className="group relative min-w-0 overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-900 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] ring-1 ring-slate-100/80 md:rounded-3xl">
            <div className="relative aspect-video w-full">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&q=80&w=1200"
                alt="Community Connection"
                className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-slate-900/20 transition-opacity duration-300 hover:bg-slate-900/10">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 shadow-lg backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 md:h-16 md:w-16">
                  <PlayIcon />
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content – aligned to start, comfortable reading width */}
          <div className="flex min-w-0 flex-col justify-center md:pt-0">
            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#1A3A32] sm:text-4xl md:text-[42px] lg:text-[48px]">
              Welcome to the Future of{' '}
              <span className="text-[#4595EE]">Social Awareness</span>
            </h2>

            <p className="mt-4 text-xs font-bold uppercase tracking-wider text-[#4595EE] md:text-sm">
              WELLTALK – Fostering Inclusive Communities & Social Wellbeing
            </p>

            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#939598] md:mt-5 md:text-base md:leading-8">
              Empowering individuals with the tools to build empathy, understanding, and meaningful relationships. From community workshops to global initiatives, we're redefining social awareness and human connection across the globe.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#4595EE] px-7 py-4 text-sm font-semibold text-white shadow-[#4595EE] transition-all duration-300 ease-out hover:shadow-[#4595EE] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#36D8B8] focus:ring-offset-2"
              >
                Start Now
                <ArrowRightIcon />
              </button>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#4595EE] transition-colors hover:text-[#4595EE] focus:outline-none focus:ring-2 focus:ring-[#4595EE] focus:ring-offset-2 rounded-lg"
              >
                Watch on YouTube
                <ArrowRightIcon />
              </a>
            </div>
          </div>
        </div>

        {/* Floating CTA – smooth scroll-in */}


        {/* Trusted By – smooth carousel */}
        <div
          className={`mt-24 pt-6 transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
          style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}
        >
          <p className="mb-6 text-center text-[13px] font-medium leading-relaxed text-[#939598] md:text-left">
            Trusted by over 50,000 companies of all sizes
          </p>

          <div className="relative overflow-hidden group/trusted">
            {/* Fog Fades */}
            <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-linear-to-r from-[#f8fafc] to-transparent sm:w-32" />
            <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-linear-to-l from-[#f8fafc] to-transparent sm:w-32" />

            <div className="flex w-max items-center gap-10 animate-scroll-trusted md:gap-14 group-hover/trusted:[animation-play-state:paused]">
              {[...TRUSTED_ITEMS, ...TRUSTED_ITEMS].map((item, i) => (
                <div
                  key={`${item.label}-${i}`}
                  className="shrink-0 opacity-80 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                >
                  {item.render ? item.render() : <span className={item.className}>{item.label}</span>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
