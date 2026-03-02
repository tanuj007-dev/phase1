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

const CLASSES_DATA = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    time: '12:00-12:50 PM',
    students: '10 STUDENTS',
    title: 'Sunrise Yoga Session',
    desc: 'A class dedicated to mindfulness and meditation for improved mental health.'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&q=80&w=800',
    time: '12:00-12:50 PM',
    students: '18 STUDENTS',
    title: 'Yoga & Wellness Retreat',
    desc: 'A class dedicated to mindfulness and meditation for improved mental health.'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&q=80&w=800',
    time: '12:00-12:50 PM',
    students: '8 STUDENTS',
    title: 'Chakra Balancing Class',
    desc: 'An energetic cardio dance class that makes fitness enjoyable and engaging.'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1603988363607-e1e4a66962c6?auto=format&fit=crop&q=80&w=800',
    time: '12:00-12:50 PM',
    students: '15 STUDENTS',
    title: 'Candlelight Yin Yoga',
    desc: 'A beginner-friendly class focusing on the fundamentals of strength training.'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
    time: '12:00-12:50 PM',
    students: '20 STUDENTS',
    title: "Women's Yoga Circle",
    desc: 'Explore advanced Pilates techniques to deepen your practice and enhance your strength.'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&q=80&w=800',
    time: '12:00-12:50 PM',
    students: '12 STUDENTS',
    title: 'Outdoor Yoga Festival',
    desc: 'A comprehensive introduction to the practice of yoga, focusing on its benefits and techniques.'
  }
];

export default function EventsSection() {
  const [sectionRef, isVisible] = useScrollVisible(0.12);

  return (
    <section
      id="events"
      ref={sectionRef}
      className="relative w-full overflow-hidden bg-[linear-gradient(180deg,rgba(69,149,238,0.05)_0%,rgba(54,216,184,0.04)_50%,#f8fafc_100%)] pt-24 pb-32"
      aria-labelledby="events-heading"
    >
      <div className="mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Heading – staged scroll-in */}
        <div className="mx-auto mb-16 flex max-w-2xl flex-col items-center text-center">
          <span
            className={`text-xs font-bold uppercase tracking-widest text-[#4595EE] transition-all duration-600 ease-out ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
            }`}
          >
            Explore our classes
          </span>
          <div
            className={`my-3 h-0.5 w-12 rounded-full bg-[#36D8B8] transition-all duration-600 ease-out ${
              isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
            }`}
            style={{ transitionDelay: isVisible ? '80ms' : '0ms' }}
            aria-hidden
          />
          <h2
            id="events-heading"
            className={`text-4xl font-bold leading-tight tracking-tight text-[#1A3A32] transition-all duration-700 ease-out md:text-[50px] ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
            }`}
            style={{ transitionDelay: isVisible ? '120ms' : '0ms' }}
          >
            Classes Page
          </h2>
        </div>

        {/* Cards – staggered scroll-in */}
        <div className="relative z-10 grid grid-cols-1 items-start gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          {CLASSES_DATA.map((item, index) => (
            <div
              key={item.id}
              className="relative flex flex-col rounded-[32px] border border-slate-100 bg-white p-[18px] shadow-sm ring-1 ring-slate-100/80 transition-all duration-600 ease-out hover:-translate-y-2 hover:shadow-[0_16px_48px_-12px_rgba(0,0,0,0.12)] hover:ring-[#36D8B8]/20"
              style={{
                transitionDelay: isVisible ? `${180 + index * 100}ms` : '0ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.98)',
              }}
            >
              <div className="relative mb-6 aspect-4/3 w-full shrink-0 overflow-hidden rounded-[24px] bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="mb-4 flex items-center justify-center gap-5 text-[10px] font-bold uppercase tracking-wider text-[#939598] sm:text-xs">
                <span className="flex items-center">
                  <CalendarIcon className="mr-1.5 h-4 w-4 text-[#36D8B8]" />
                  {item.time}
                </span>
                <span className="flex items-center">
                  <UsersIcon className="mr-1.5 h-4 w-4 text-[#36D8B8]" />
                  {item.students}
                </span>
              </div>

              <div className="mx-2 mb-5 border-t border-slate-100" aria-hidden />

              <div className="mb-3 flex flex-1 flex-col px-4">
                <h3 className="mb-3 text-center text-[22px] font-bold leading-[1.35] text-[#1A3A32]">
                  {item.title}
                </h3>
                <p className="flex-1 text-center text-[13px] leading-[1.8] text-[#939598]">
                  {item.desc}
                </p>
              </div>

              <div className="mt-2 flex justify-center pb-2">
                <button
                  type="button"
                  className="group flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#36D8B8] focus:ring-offset-2 rounded-lg"
                >
                  <span className="text-[13px] font-bold text-[#1A3A32] transition-colors group-hover:text-[#36D8B8]">
                    Contact Now
                  </span>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#36D8B8] text-white transition-transform duration-300 ease-out group-hover:scale-110">
                    <ArrowRightIcon className="w-3 h-3 text-white" />
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CalendarIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
      <line x1="16" y1="2" x2="16" y2="6"></line>
      <line x1="8" y1="2" x2="8" y2="6"></line>
      <line x1="3" y1="10" x2="21" y2="10"></line>
    </svg>
  );
}

function UsersIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
      <circle cx="9" cy="7" r="4"></circle>
      <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
    </svg>
  );
}

function ArrowRightIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}
