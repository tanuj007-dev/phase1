import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import slide1 from '../../assets/68e7981cbf8ca2c1d0b413b4_slider1-slide-01.jpg';
import slide2 from '../../assets/68ece8675f8509d07458640a_slider1-slide-02-min.jpg';
import slide3 from '../../assets/690437b16af47a7d08c5be8d_slider1-slide-02.jpg';

const HERO_SLIDES = [slide1, slide2, slide3];

const BENEFITS = [
  { text: 'A kind mind' },
  { text: 'Stress Mitigation' },
  { text: 'Mental Wellness' },
];

/** Lightweight: single Intersection Observer for scroll-in animation */
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
      { threshold: 0.2, rootMargin: '0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [contentRef, isVisible] = useHeroVisible();

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      className="relative flex min-h-[85vh] w-full items-center overflow-hidden bg-slate-900"
      aria-labelledby="hero-heading"
    >
      {/* Full-bleed background: current slide + dark left overlay for text */}
      <div className="absolute inset-0">
        {HERO_SLIDES.map((src, i) => (
          <img
            key={i}
            src={src}
            alt=""
            className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
              i === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            fetchPriority={i === 0 ? 'high' : 'low'}
          />
        ))}
      </div>
      <div
        className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent"
        aria-hidden
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col items-stretch gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:flex-row lg:items-center lg:justify-between lg:gap-12 lg:px-10 xl:px-12">
        {/* Left: text + CTAs + benefits */}
        <div
          ref={contentRef}
          className={`min-w-0 flex-1 transition-all duration-700 ease-out lg:max-w-xl ${
            isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          <p className="text-sm font-medium text-white/95 sm:text-base">
            Align, breathe, meditate
          </p>
          <h1
            id="hero-heading"
            className="mt-2 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          >
            Calm yourself{' '}
            <span className="text-emerald-300">on the ground</span>
          </h1>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              to="/#wellness-overview"
              className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_2px_8px_rgba(16,185,129,0.35)] transition hover:bg-emerald-400 hover:shadow-[0_4px_12px_rgba(16,185,129,0.4)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Join a Class Today
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20">
                <ArrowRightIcon />
              </span>
            </Link>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 rounded-xl border-2 border-emerald-400/90 bg-white/10 px-6 py-3.5 text-sm font-semibold text-emerald-300 backdrop-blur-sm transition hover:bg-white/20 hover:border-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
            >
              Book Your Free Trial Session
              <span className="flex h-6 w-6 items-center justify-center rounded-full text-emerald-400">
                <ArrowRightIcon />
              </span>
            </Link>
          </div>
          <ul className="mt-8 space-y-2">
            {BENEFITS.map(({ text }) => (
              <li key={text} className="flex items-center gap-2 text-white">
                <span className="text-emerald-400" aria-hidden>
                  <StarIcon />
                </span>
                <span className="text-sm font-medium sm:text-base">{text}</span>
              </li>
            ))}
          </ul>
          {/* Mobile: slide thumbnails row */}
          <div className="mt-8 flex justify-center gap-3 lg:hidden">
            {HERO_SLIDES.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentSlide(i)}
                className={`relative h-14 w-14 overflow-hidden rounded-full border-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 ${
                  i === currentSlide
                    ? 'border-emerald-400 ring-2 ring-emerald-400/50'
                    : 'border-white/40 hover:border-white/70'
                }`}
                aria-label={`View slide ${i + 1}`}
                aria-current={i === currentSlide ? 'true' : undefined}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Right: main hero image + circular thumbnails (desktop) */}
        <div className="hidden min-w-0 shrink-0 items-end gap-4 lg:flex">
          <div className="relative h-[280px] w-[240px] shrink-0 overflow-hidden rounded-2xl shadow-2xl ring-2 ring-white/20 xl:h-[320px] xl:w-[280px]">
            <img
              src={HERO_SLIDES[currentSlide]}
              alt=""
              className="h-full w-full object-cover object-center"
            />
          </div>
          <div className="flex shrink-0 flex-col gap-3">
            {HERO_SLIDES.map((src, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setCurrentSlide(i)}
                className={`relative h-16 w-16 overflow-hidden rounded-full border-2 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 ${
                  i === currentSlide
                    ? 'border-emerald-400 ring-2 ring-emerald-400/50'
                    : 'border-white/40 hover:border-white/70'
                }`}
                aria-label={`View slide ${i + 1}`}
                aria-current={i === currentSlide ? 'true' : undefined}
              >
                <img
                  src={src}
                  alt=""
                  className="h-full w-full object-cover"
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
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );
}
