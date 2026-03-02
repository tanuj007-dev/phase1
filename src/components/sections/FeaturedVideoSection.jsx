import React, { useRef, useState, useEffect } from 'react';

/** Optional: set your YouTube video ID (from url youtu.be/VIDEO_ID or youtube.com/watch?v=VIDEO_ID) */
const YOUTUBE_VIDEO_ID = '1vx8iUvfyCY';

/** Lightweight: single Intersection Observer for scroll-in */
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

const DEFAULT_DESCRIPTION =
  'Discover how small daily habits can transform your wellbeing. This short guide covers mindfulness, movement, and connection—core pillars of a balanced life.';

export default function FeaturedVideoSection({ title = 'Featured Video Section', description = DEFAULT_DESCRIPTION, videoId = YOUTUBE_VIDEO_ID }) {
  const [sectionRef, isVisible] = useScrollVisible(0.1);

  return (
    <section
      id="featured-video"
      ref={sectionRef}
      className="relative bg-slate-50/80 py-20 md:py-28"
      aria-labelledby="featured-video-heading"
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 xl:px-12">
      <div
        className={`transition-all duration-700 ease-out ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
        }`}
      >
        <h2
          id="featured-video-heading"
          className="section-heading mb-3 text-slate-800"
        >
          {title}
        </h2>
        <div className="mb-10 h-0.5 w-16 rounded-full bg-emerald-500" aria-hidden />

        <div className="mt-12 grid min-w-0 grid-cols-1 gap-8 md:grid-cols-[1.2fr_1fr] md:items-start md:gap-10 lg:gap-14">
          {/* Embedded Video */}
          <div className="relative min-w-0 overflow-hidden rounded-2xl border border-slate-200/60 bg-slate-900 shadow-[0_4px_6px_-2px_rgba(0,0,0,0.05),0_12px_40px_-8px_rgba(0,0,0,0.1)]">
            <div className="relative aspect-video w-full">
              <iframe
                src={`https://www.youtube.com/embed/${videoId}?rel=0`}
                title="Featured video"
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 pointer-events-none rounded-2xl ring-1 ring-inset ring-white/10" aria-hidden />
          </div>

          {/* Short Description */}
          <div className="flex min-w-0 flex-col justify-center md:pt-2">
            <p className="text-base leading-relaxed text-slate-600 md:text-lg md:leading-8">
              {description}
            </p>
            <a
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 transition hover:text-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 rounded-lg w-fit"
            >
              Watch on YouTube
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
