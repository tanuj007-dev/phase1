import React, { useRef, useState, useEffect } from 'react';
import { EVENTS } from '../../data/events';

/** Lightweight: single Intersection Observer for section scroll-in */
function useScrollVisible(threshold = 0.08) {
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

export default function EventsSection() {
  const [sectionRef, isVisible] = useScrollVisible(0.08);

  return (
    <section
      id="events"
      ref={sectionRef}
      className="relative bg-slate-50/80 py-20 md:py-28"
      aria-labelledby="events-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
      <div
        className={`transition-all duration-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h2
          id="events-heading"
          className="section-heading mb-3 text-slate-800"
        >
          Events & Activities
        </h2>
        <p className="mt-1 text-base text-slate-600 md:text-lg">
          Event Cards / Timeline
        </p>
        <div className="mb-10 mt-4 h-0.5 w-16 rounded-full bg-emerald-500" aria-hidden />

        {/* Timeline: vertical line + event cards */}
        <div className="relative mt-12 md:mt-16">
          {/* Vertical line */}
          <div
            className="absolute left-5.5 top-0 bottom-0 w-0.5 bg-linear-to-b from-emerald-500 via-emerald-400/50 to-slate-200 md:left-8"
            aria-hidden
          />

          <ul className="space-y-0">
            {EVENTS.map((event, index) => (
              <li
                key={event.id}
                className="relative flex gap-6 pb-12 last:pb-0 md:gap-8"
                style={{
                  transitionDelay: isVisible ? `${index * 90}ms` : '0ms',
                }}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-4 top-10 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-white bg-emerald-500 shadow-[0_0_0_4px_rgba(16,185,129,0.3)] md:left-8 ${
                    isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
                  } transition-all duration-500`}
                  aria-hidden
                />

                {/* Card content */}
                <div className="ml-10 flex min-w-0 flex-1 flex-col gap-4 rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_1px_3px_rgba(0,0,0,0.05),0_6px_20px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 hover:shadow-[0_4px_6px_-2px_rgba(0,0,0,0.05),0_12px_32px_-8px_rgba(0,0,0,0.1)] md:ml-20 md:flex-row md:items-center md:gap-8 md:p-0 md:border-0 md:bg-transparent md:shadow-none md:ring-0 md:hover:shadow-none">
                  <div className="relative h-44 w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 md:h-36 md:w-56 md:max-w-56">
                    <img
                      src={event.image}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex flex-1 flex-col md:py-5">
                    <time
                      dateTime={event.date.replace(/ /g, '-')}
                      className="text-sm font-semibold uppercase tracking-wide text-emerald-600"
                    >
                      {event.date}
                    </time>
                    <h3 className="mt-1 text-xl font-bold text-slate-800 md:text-2xl">
                      {event.title}
                    </h3>
                    <p className="mt-2 text-slate-600">{event.description}</p>
                    <p className="mt-2 text-sm font-medium text-slate-500">{event.time}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      </div>
    </section>
  );
}
