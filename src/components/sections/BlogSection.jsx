import React, { useRef, useState, useEffect } from 'react';

/** Leaf icon for "LATEST NEWS" label */
function NewsIcon({ className = 'h-5 w-5' }) {
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

const NEWS_ARTICLES = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    dateStr: 'Oct 27, 2025',
    showBullet: true,
    categoryStr: 'Health',
    title: 'Week-long program for full-body strength training',
    showLeftDot: false
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1588286840104-8957b019727f?auto=format&fit=crop&q=80&w=800',
    dateStr: 'Oct 27, 2025',
    showBullet: false,
    categoryStr: 'Training',
    title: 'Morning Routine: Begin the Day in a Healthful Way',
    showLeftDot: true
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1566501206188-5dd0cf160a0e?auto=format&fit=crop&q=80&w=800',
    dateStr: '27 Oct 2025',
    showBullet: false,
    categoryStr: 'Training',
    title: "Unlock Yoga's Complete Potential for Physical Wellness",
    showLeftDot: true
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800',
    dateStr: '28 Oct 2025',
    showBullet: true,
    categoryStr: 'Mindfulness',
    title: "Movement as Medicine: Easing Stress Through Gentle Exercise",
    showLeftDot: false
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1531353826977-0941b4779a1c?auto=format&fit=crop&q=80&w=800',
    dateStr: '29 Oct 2025',
    showBullet: true,
    categoryStr: 'Sleep',
    title: "From Restless to Restful: A Guide to Better Sleep and Wellness",
    showLeftDot: true
  }
];

export default function BlogSection() {
  const [sectionRef, isVisible] = useScrollVisible(0.12);
  const sliderRef = useRef(null);

  const scroll = (dir) => {
    const el = sliderRef.current;
    if (!el) return;

    // Adjusted scroll amount to match new compact wrapper (width + gap)
    const scrollAmount = window.innerWidth < 640 ? 276 : 296;
    const maxScroll = el.scrollWidth - el.clientWidth;

    if (dir === 'next') {
      if (el.scrollLeft >= maxScroll - 10) {
        // Wrap around to start smoothly
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    } else {
      if (el.scrollLeft <= 10) {
        // Wrap around to end smoothly
        el.scrollTo({ left: maxScroll, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      }
    }
  };

  // Auto-scroll infinite loop
  useEffect(() => {
    const interval = setInterval(() => {
      scroll('next');
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[linear-gradient(180deg,rgba(54,216,184,0.05)_0%,rgba(69,149,238,0.04)_50%,#f8fafc_100%)] pt-24 pb-32"
    >
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Top Header Row */}
        <div className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          {/* Heading */}
          <div
            className={`flex flex-col items-start text-left transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
          >
            <div className="flex items-center gap-2">
              <NewsIcon className="h-4 w-4 text-[#4595EE]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#4595EE]">
                LATEST NEWS
              </span>
            </div>
            <h2 className="mt-3 text-4xl font-bold leading-tight tracking-tight text-[#1A3A32] md:text-[50px]">
              Check our latest news
            </h2>
          </div>

          {/* View All Button */}
          <div
            className={`transition-all duration-700 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
              }`}
            style={{ transitionDelay: isVisible ? '100ms' : '0ms' }}
          >
            <a
              href="/blog"
              className="inline-flex rounded-full bg-[#4595EE] px-8 py-3.5 text-sm font-bold tracking-wide text-white shadow-[0_4px_14px_rgba(54,216,184,0.35)] transition-all duration-300 ease-out hover:scale-105 hover:bg-[#2bc4a4] hover:shadow-[0_6px_20px_rgba(54,216,184,0.4)] focus:outline-none focus:ring-2 focus:ring-[#36D8B8] focus:ring-offset-2"
            >
              View All Articles
            </a>
          </div>
        </div>

        {/* Carousel Area */}
        <div className="relative group">
          {/* Left Navigation Arrow */}
          <button
            type="button"
            onClick={() => scroll('prev')}
            className="absolute -left-2 sm:-left-4 lg:-left-6 top-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#1A3A32] bg-white text-[#1A3A32] shadow-sm transition-all duration-300 ease-out hover:border-[#36D8B8] hover:bg-[#36D8B8] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#36D8B8] focus:ring-offset-2"
            aria-label="Previous articles"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:-translate-x-0.5"><polyline points="15 18 9 12 15 6" /></svg>
          </button>

          {/* Slider */}
          <div
            ref={sliderRef}
            className="relative z-10 -mx-2 flex gap-4 overflow-x-auto overflow-y-hidden px-2 pb-8 pt-4 scroll-smooth scrollbar-hide snap-x snap-mandatory [-webkit-overflow-scrolling:touch]"
            aria-label="Latest news carousel"
          >
            {NEWS_ARTICLES.map((article, index) => (
              <div
                key={article.id}
                className="relative flex w-[260px] shrink-0 flex-col rounded-3xl bg-white p-3.5 shadow-sm transition-all duration-700 ease-out hover:-translate-y-2 hover:shadow-xl sm:w-[280px] snap-center sm:snap-start"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  transitionDelay: isVisible ? `${120 + index * 80}ms` : '0ms',
                }}
              >
                {article.showLeftDot && (
                  <div className="absolute -left-1.5 top-1/2 z-10 hidden h-5 w-1.5 -translate-y-1/2 rounded-r-md bg-[#36D8B8] md:block" aria-hidden />
                )}

                <div className="relative mb-4 aspect-4/3 w-full shrink-0 overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                    loading="lazy"
                  />
                </div>

                <div className="flex flex-col justify-between px-1.5 pb-2">
                  <div className="flex items-center text-[12px] font-bold tracking-wide text-[#939598] mb-2">
                    {article.dateStr}
                    {article.showBullet && (
                      <span className="mx-2 text-[16px] leading-0 text-[#36D8B8]">•</span>
                    )}
                    {article.categoryStr}
                  </div>
                  <h3 className="text-[17px] font-bold leading-[1.35] text-[#1A3A32] pr-1">
                    {article.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {/* Right Navigation Arrow */}
          <button
            type="button"
            onClick={() => scroll('next')}
            className="absolute -right-2 sm:-right-4 lg:-right-6 top-1/2 z-20 flex h-10 w-10 sm:h-12 sm:w-12 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#1A3A32] bg-white text-[#1A3A32] shadow-sm transition-all duration-300 ease-out hover:border-[#36D8B8] hover:bg-[#36D8B8] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#36D8B8] focus:ring-offset-2"
            aria-label="Next articles"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-0.5"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
        </div>
      </div>

    </section >
  );
}
