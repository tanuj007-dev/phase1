import React from 'react';
import { EVENTS_DATA } from '../../data/eventsData';

/** Header Icon */
const LeafIcon = ({ className = "h-5 w-5" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22v-8" />
    <path d="M7 14c-1.5 0-3-.5-4-1.5-1.2-1.3-1.4-3.5-.5-5.2 1-1.8 3.2-2.4 5.5-2 1.2.2 2.4.7 3.3 1.3.4-.6.9-1 1.5-1.3 1.2-.5 2.6-.4 3.8.2 2 1 2.9 3 2.5 5-.3 1.5-1.2 2.7-2.4 3.4" />
    <path d="M17 14c1.5 0 3-.5 4-1.5 1.2-1.3 1.4-3.5.5-5.2-1-1.8-3.2-2.4-5.5-2-1.2.2-2.4.7-3.3 1.3-.4-.6-.9-1 1.5-1.3 1.2-.5 2.6-.4-3.8.2-2 1-2.9 3-2.5 5 .3 1.5 1.2 2.7 2.4 3.4" />
  </svg>
);

export default function SmoothInfiniteEvents() {

  // Triple items for seamless loop
  const duplicatedEvents = [...EVENTS_DATA, ...EVENTS_DATA, ...EVENTS_DATA];

  return (
    <section className="w-full bg-white py-20 overflow-hidden">

      {/* Header Container */}
      <div className="mx-auto max-w-[1240px] px-6 mb-12">
        <div className="flex items-center gap-2 mb-3">
          <LeafIcon className="text-[#4595EE] w-5 h-5" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[#4595EE]">
            Engagement & Connection
          </span>
        </div>

        <h2 className="text-4xl font-semibold text-[#1A3A32] tracking-tight">
          Upcoming Events
        </h2>
      </div>

      {/* Slider Wrapper */}
      <div className="relative w-full overflow-hidden">

        {/* Side Blur */}
        <div className="absolute left-0 top-0 bottom-0 z-20 w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 z-20 w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />

        {/* Animated Track */}
        <div className="flex animate-smooth-scroll gap-6 w-max hover:[animation-play-state:paused] px-4">
          {duplicatedEvents.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="w-[320px] sm:w-[360px] flex-shrink-0 flex flex-col cursor-pointer transition-opacity duration-300 hover:opacity-90"
            >

              {/* Card Media */}
              <div className="relative aspect-[4/5] rounded-[20px] overflow-hidden shadow-sm border border-slate-100">

                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />

                {item.isPromoted && (
                  <div className="absolute right-3 top-3 bg-[#E13F51] text-white text-[10px] font-bold px-2 py-1 rounded-sm tracking-widest uppercase">
                    Promoted
                  </div>
                )}

                <div className="absolute bottom-0 left-0 right-0 bg-black/85 py-3 px-5">
                  <span className="text-lg font-medium text-white">
                    {item.day}, {item.date} {item.month}
                  </span>
                </div>

              </div>

              {/* Text Meta */}
              <div className="pt-5 px-1">

                <h3 className="text-[19px] font-semibold leading-snug text-[#002B49] line-clamp-2 mb-2">
                  {item.title}
                </h3>

                <div className="space-y-0.5">
                  <p className="text-[16px] font-normal text-[#7C91A1]">{item.venue}</p>
                  <p className="text-[16px] font-normal text-[#7C91A1]">{item.city}</p>
                </div>

              </div>

            </div>
          ))}
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes smooth-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }

        .animate-smooth-scroll {
          animation: smooth-scroll 50s linear infinite;
        }

        .mask-edges {
          mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%);
          -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 15%, rgba(0,0,0,1) 85%, rgba(0,0,0,0) 100%);
        }
      `
      }} />


    </section>
  );
}