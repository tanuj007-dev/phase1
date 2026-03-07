import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


/** Lightweight scroll-in observer */
function useHeroVisible() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1, rootMargin: '0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

export default function HeroSection() {
  const [contentRef, isVisible] = useHeroVisible();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const contentVisible = isVisible && isLoaded;

  return (
    <section
      ref={contentRef}
      className="relative flex h-[calc(100vh-76px)] min-h-[480px] sm:min-h-[600px] md:min-h-[800px] w-full items-center overflow-hidden bg-sky-100"
      aria-labelledby="hero-heading"
    >
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://res.cloudinary.com/dpelqhchv/image/upload/v1772543014/ChatGPT_Image_Mar_3_2026_02_28_09_PM_z2xwj6.png"
          alt=""
          className="h-full w-full object-cover object-[8%_50%] md:object-left"
        />
        <div className="absolute inset-0 bg-slate-900/10" />
        <div className="absolute inset-0 bg-linear-to-r from-transparent via-sky-900/10 to-sky-900/50" />
      </div>

      {/* Content: bottom-center on mobile, right-aligned on desktop */}
      <div className="absolute inset-0 z-10 flex items-end justify-center md:items-center md:justify-end">
        <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 xl:px-12 h-full flex items-end justify-center pb-12 md:pb-0 md:items-center md:justify-end">
          <div className="max-w-xl text-center flex flex-col items-center w-full md:max-w-2xl md:text-left md:items-start md:w-auto">
            <h1
              id="hero-heading"
              className={`text-3xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl leading-[1.2] sm:leading-[1.15] transition-all duration-700 ease-out ${contentVisible ? 'translate-x-0 opacity-100' : 'translate-x-8 md:translate-x-16 opacity-0'}`}
              style={{ transitionDelay: contentVisible ? '100ms' : '0ms' }}
            >
              We are a nationwide <br />
              virtual platform for <br />
              wellness and health <br />
              services.
            </h1>
            <p
              className={`mt-4 sm:mt-6 max-w-lg text-sm font-normal leading-relaxed text-white/95 sm:text-lg transition-all duration-700 ease-out ${contentVisible ? 'translate-x-0 opacity-100' : 'translate-x-6 md:translate-x-12 opacity-0'}`}
              style={{ transitionDelay: contentVisible ? '280ms' : '0ms' }}
            >
              We create personalized wellness experiences that evolve with you. Reflect on your growth and set new intentions as your well-being improves.
            </p>
            <Link
              to="/services"
              className={`mt-6 sm:mt-8 inline-flex cursor-pointer uppercase items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-semibold text-slate-800 transition-all duration-500 hover:bg-white/95 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent ${contentVisible ? 'translate-x-0 opacity-100' : 'translate-x-6 md:translate-x-12 opacity-0'}`}
              style={{ transitionDelay: contentVisible ? '450ms' : '0ms' }}
            >
              Learn More
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
