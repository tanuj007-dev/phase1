import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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

const Icons = {
  SocialAwareness: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  Wellness: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12" />
    </svg>
  ),
  MentalHealth: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
    </svg>
  ),
  Healthcare: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
    </svg>
  ),
  Meditation: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="7" r="2" />
      <path d="M12 10v6" />
      <path d="M9 14h6" />
      <path d="M6 21v-2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v2" />
      <path d="M5 10a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2" />
    </svg>
  ),
  Yoga: () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v5l-4 4" />
      <path d="M12 12l4 4" />
      <path d="M20 18h-4l-2-4" />
      <path d="M4 18h4l2-4" />
    </svg>
  ),
};

/** Core values for wellness marquee (duplicated for seamless loop) */
const CORE_VALUES = [
  { label: "Social Awareness", icon: <Icons.SocialAwareness /> },
  { label: "Wellness", icon: <Icons.Wellness /> },
  { label: "Mental Health", icon: <Icons.MentalHealth /> },
  { label: "Healthcare", icon: <Icons.Healthcare /> },
  { label: "Meditation", icon: <Icons.Meditation /> },
  { label: "Yoga", icon: <Icons.Yoga /> },
];

export default function FeaturedVideoSection() {
  const [sectionRef, isVisible] = useScrollVisible(0.12);

  return (
    <section
      id="featured-video"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-slate-900"
    >
      {/* Full-width video / media block */}
      <div className="relative w-full min-h-[60vh] sm:min-h-[75vh] md:min-h-[90vh] flex flex-col">
        {/* Video: full width, autoplay (muted for browser policy) */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
            aria-label="Wellness and activity"
          >
            <source src="https://res.cloudinary.com/dpelqhchv/video/upload/v1772531954/129423-744370596_wm9rrc.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-slate-900/10 pointer-events-none" aria-hidden />
        </div>

        {/* Bottom gradient overlay for text readability */}
        <div
          className="absolute bottom-0 left-0 right-0 z-1 h-[50%] min-h-[180px] sm:min-h-[200px] md:h-[45%] md:min-h-[220px] bg-linear-to-t from-slate-900/95 via-slate-900/50 to-transparent pointer-events-none"
          aria-hidden
        />

        {/* Content: stacked on mobile, row on larger screens */}
        <div
          className={`relative z-10 flex w-full min-h-[60vh] sm:min-h-[75vh] md:min-h-[90vh] flex-col justify-end px-4 pb-8 pt-24 sm:px-6 sm:pb-12 sm:pt-32 md:px-10 md:pb-14 lg:px-12 lg:pb-16 transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 sm:flex-row sm:flex-wrap sm:items-end sm:justify-between">
            <div className="max-w-3xl text-left">
              <h2 className="mb-3 text-2xl font-bold tracking-tight text-white sm:mb-4 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                Nurturing Your Mind & Spirit
              </h2>
              <p className="text-base font-medium leading-relaxed text-white/90 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl xl:leading-snug">
                Discover the transformative power of meditation to elevate your mental health. Find inner peace, manage stress, and cultivate a resilient mind for a more balanced life.
              </p>
            </div>
            <Link
              to="/#learn-more"
              className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 transition-all duration-300 hover:bg-white/95 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent sm:w-auto sm:py-4 sm:text-base"
            >
              GET STARTED
              <ArrowRightIcon />
            </Link>
          </div>
        </div>
      </div>

      {/* Core Values Marquee – contained below full-width block */}
      <div className="relative z-10 bg-white pb-16 pt-8 sm:pb-20 sm:pt-10 md:pb-24 md:pt-12">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
          <div
            className={`pt-4 transition-all duration-700 ease-out sm:pt-6 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
            style={{ transitionDelay: isVisible ? '300ms' : '0ms' }}
          >
            <p className="mb-4 text-center text-xs font-bold uppercase tracking-widest text-[#4595EE] sm:mb-6 sm:text-[13px] md:text-left">
              Our Core Focus Areas
            </p>

            <div className="relative overflow-hidden group/marquee py-3 sm:py-4">
              {/* Fog Fades – narrower on mobile */}
              <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-8 bg-linear-to-r from-white to-transparent sm:w-16 md:w-32" />
              <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-8 bg-linear-to-l from-white to-transparent sm:w-16 md:w-32" />

              <div className="flex w-max items-center gap-4 animate-scroll-trusted py-2 sm:gap-6 md:gap-8 group-hover/marquee:[animation-play-state:paused]">
                {[...CORE_VALUES, ...CORE_VALUES, ...CORE_VALUES].map((item, i) => (
                  <div
                    key={`${item.label}-${i}`}
                    className="flex items-center gap-2 shrink-0 rounded-full border border-slate-200 bg-slate-50/50 px-4 py-2.5 transition-all duration-300 hover:-translate-y-1 hover:border-[#4595EE] hover:bg-white hover:shadow-lg hover:shadow-[#4595EE]/15 cursor-default sm:gap-3 sm:px-6 sm:py-3"
                  >
                    <div className="flex shrink-0 text-[#4595EE]/80 transition-colors duration-300 group-hover:text-[#4595EE] [&_svg]:h-4 [&_svg]:w-4 sm:[&_svg]:h-5 sm:[&_svg]:w-5">
                      {item.icon}
                    </div>
                    <span className="text-sm font-semibold tracking-wide text-[#1A3A32] whitespace-nowrap sm:text-[16px]">
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
