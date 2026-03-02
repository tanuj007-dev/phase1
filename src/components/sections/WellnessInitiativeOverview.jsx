import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { INITIATIVES } from '../../data/initiatives';

/** Lightweight scroll-in animation using a single Intersection Observer */
function useScrollVisible(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold, rootMargin: '0px 0px -40px 0px' }
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
      className="relative bg-white py-20 md:py-28"
      aria-labelledby="wellness-overview-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
      <h2
        id="wellness-overview-heading"
        className="section-heading mb-3 text-slate-800"
      >
        Wellness Initiative Overview
      </h2>
      <div className="mb-10 h-0.5 w-16 rounded-full bg-emerald-500" aria-hidden />

     

      <ul
        className={`grid grid-cols-1 gap-6 transition-all duration-700 ease-out sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        {INITIATIVES.map((item, index) => (
          <li key={item.slug} className="flex">
            <Link
              to={`/initiative/${item.slug}`}
              className="group flex w-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white text-left shadow-[0_1px_3px_rgba(0,0,0,0.05),0_6px_20px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1 hover:border-slate-200 hover:shadow-[0_4px_6px_-2px_rgba(0,0,0,0.05),0_12px_32px_-8px_rgba(0,0,0,0.12)] focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              style={{ transitionDelay: isVisible ? `${index * 60}ms` : '0ms' }}
            >
              <div className="relative aspect-4/3 w-full overflow-hidden bg-[#939598]/10">
                <img
                  src={item.image}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="mb-2 font-semibold text-slate-800 group-hover:text-emerald-600 group-hover:underline group-hover:underline-offset-2">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-500">{item.shortDesc}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      </div>
    </section>
  );
}
