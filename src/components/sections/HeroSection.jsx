import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import slide1 from '../../assets/68e7981cbf8ca2c1d0b413b4_slider1-slide-01.jpg';
import slide2 from '../../assets/68ece8675f8509d07458640a_slider1-slide-02-min.jpg';
import slide3 from '../../assets/690437b16af47a7d08c5be8d_slider1-slide-02.jpg';
import mentalHealthImage from '../../assets/9b2aa95a0cbc075bb8a5fcc7cf8f52e0.jpg';

const HERO_SLIDES = [mentalHealthImage, slide1, slide2, slide3];

const BENEFITS = [
  { text: 'A kind mind', icon: '✨' },
  { text: 'Stress Mitigation', icon: '🌿' },
  { text: 'Mental Wellness', icon: '🧠' },
];

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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [contentRef, isVisible] = useHeroVisible();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6500);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative flex min-h-[100vh] w-full items-center justify-center overflow-hidden bg-slate-900"
      aria-labelledby="hero-heading"
    >
      {/* Cinematic Background Slider */}
      <div className="absolute inset-0 z-0">
        {HERO_SLIDES.map((src, i) => (
          <div
            key={i}
            className={`absolute inset-0 h-full w-full transition-all duration-[2000ms] ease-in-out ${i === currentSlide ? 'opacity-100 z-10 scale-100' : 'opacity-0 z-0 scale-110'
              }`}
          >
            <img
              src={src}
              alt=""
              className="h-full w-full object-cover object-center"
              fetchPriority={i === 0 ? 'high' : 'low'}
            />
            {/* Dramatic precise gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="relative z-20 mx-auto flex w-full max-w-7xl flex-col px-4 pt-32 pb-16 sm:px-6 md:pt-40 lg:px-10 xl:px-12">

        <div
          ref={contentRef}
          className={`max-w-3xl transition-all duration-1000 delay-300 ease-out flex flex-col items-start ${isVisible && isLoaded ? 'translate-y-0 opacity-100 blur-0' : 'translate-y-12 opacity-0 blur-sm'
            }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 py-1.5 px-4 backdrop-blur-md mb-8 shadow-xl">
            <span className="flex h-2 w-2 rounded-full bg-[#36D8B8] animate-pulse"></span>
            <span className="text-xs font-semibold tracking-wider text-white uppercase">
              Align, breathe, meditate
            </span>
          </div>

          {/* Headline */}
          <h1
            id="hero-heading"
            className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-[80px] leading-[1.1]"
          >
            Calm yourself <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#36D8B8] to-[#4595EE]">
              on the ground
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-300 leading-relaxed font-medium">
            Discover a sanctuary for your mind and body. Build resilience and find your center with our immersive wellness programs and expert-led classes.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link
              to="/#wellness-overview"
              className="group relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-full bg-[#36D8B8] px-8 py-4 text-sm font-bold text-white shadow-[0_4px_20px_rgba(54,216,184,0.4)] transition-all duration-300 hover:scale-105 hover:bg-[#2bc4a4] hover:shadow-[0_6px_25px_rgba(54,216,184,0.5)] focus:outline-none"
            >
              <span className="relative z-10">Join a Class Today</span>
              <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowRightIcon />
              </span>
            </Link>

            <Link
              to="/#contact"
              className="group inline-flex items-center justify-center gap-3 rounded-full border-2 border-white/20 bg-white/5 backdrop-blur-md px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-white/40 hover:bg-white/10 focus:outline-none"
            >
              <span>Book Free Trial</span>
              <span className="transition-transform duration-300 group-hover:translate-x-1 text-[#4595EE]">
                <ArrowRightIcon />
              </span>
            </Link>
          </div>

          {/* Benefits List */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-3 gap-6 pt-8 border-t border-white/10 w-full max-w-2xl">
            {BENEFITS.map(({ text, icon }, i) => (
              <div
                key={text}
                className={`flex items-center gap-3 transition-all duration-700 ease-out`}
                style={{ transitionDelay: `${800 + (i * 150)}ms`, opacity: isVisible ? 1 : 0, transform: isVisible ? 'translateY(0)' : 'translateY(10px)' }}
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 backdrop-blur-md text-[#36D8B8] shadow-inner border border-white/5">
                  <span className="text-[16px]">{icon}</span>
                </div>
                <span className="text-sm font-semibold text-slate-200">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Modern Slide Navigation Controls */}
        <div className="absolute right-6 sm:right-10 bottom-10 z-30 flex flex-col items-end gap-5">
          <div className="flex flex-col gap-3">
            {HERO_SLIDES.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentSlide(i)}
                className="group relative flex items-center justify-end focus:outline-none h-4"
                aria-label={`View slide ${i + 1}`}
              >
                <span
                  className={`absolute right-8 text-xs font-bold text-white transition-all duration-300 ${i === currentSlide ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                    }`}
                >
                  0{i + 1}
                </span>
                <span
                  className={`h-[3px] rounded-full transition-all duration-500 ease-in-out ${i === currentSlide
                      ? 'w-10 bg-[#36D8B8] shadow-[0_0_10px_rgba(54,216,184,0.6)]'
                      : 'w-4 bg-white/30 group-hover:bg-white/60 group-hover:w-6'
                    }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}
