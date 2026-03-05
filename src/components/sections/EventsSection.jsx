import React, { useRef, useState, useEffect, useLayoutEffect } from 'react';
import eventsBg from '../../assets/360_F_1069669843_IOcJmZP7iIpg9i6xqMdMOPrhj1jFBluM.jpg';

/** Leaf icon for "Engagement & Connection" label */
function LeafIcon({ className = 'h-5 w-5' }) {
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

const CLASSES_DATA = [
  {
    id: 1,
    image: 'https://res.cloudinary.com/dpelqhchv/image/upload/v1772702525/Black_and_White_Minimalist_Yoga_Class_Flyer_1_gwvksl.png',
    time: 'FRI, 10:00 AM',
    students: 'OPEN EVENT',
    title: 'Community Mindfulness & Meditation',
    desc: 'Join us for guided meditation and group reflection to foster emotional resilience and inner calm. Perfect for beginners and regular practitioners alike.'
  },
  {
    id: 2,
    image: 'https://res.cloudinary.com/dpelqhchv/image/upload/v1772702525/Black_and_White_Minimalist_Yoga_Class_Flyer_2_urjtkc.png',
    time: 'SAT, 9:00 AM',
    students: 'ALL LEVELS',
    title: 'Morning Yoga & Stretch',
    desc: 'Start your weekend with gentle yoga and stretching. Build flexibility, reduce stress, and connect body and mind in a supportive group setting.'
  },
  {
    id: 3,
    image: 'https://res.cloudinary.com/dpelqhchv/image/upload/v1772702524/Black_and_White_Minimalist_Yoga_Class_Flyer_3_xsgkly.png',
    time: 'SUN, 11:30 AM',
    students: 'VIRTUAL',
    title: 'Social Wellness & Awareness Talk',
    desc: 'Learn how social connections impact mental health. Experts share insights on building awareness, reducing stigma, and nurturing inclusive communities.'
  },
  {
    id: 4,
    image: 'https://res.cloudinary.com/dpelqhchv/image/upload/v1772702525/Black_and_White_Minimalist_Yoga_Class_Flyer_4_iem7vc.png',
    time: 'TUE, 6:00 PM',
    students: 'COMMUNITY',
    title: 'Inclusivity & Awareness Roundtable',
    desc: 'A community-led discussion on social wellness and awareness—creating safe, inclusive spaces and supporting mental health for everyone.'
  },
  {
    id: 5,
    image: 'https://res.cloudinary.com/dpelqhchv/image/upload/v1772702524/Black_and_White_Minimalist_Yoga_Class_Flyer_5_c6ekng.png',
    time: 'THU, 5:30 PM',
    students: 'ALL WELCOME',
    title: 'Outdoor Yoga & Social Mixer',
    desc: 'Connect with others through outdoor yoga and mindful conversation. Boost social wellbeing and physical wellness in a relaxed, nature-filled setting.'
  },
  {
    id: 6,
    image: 'https://res.cloudinary.com/dpelqhchv/image/upload/v1772702526/Black_and_White_Minimalist_Yoga_Class_Flyer_6_ssyryj.png',
    time: 'MON, 8:00 AM',
    students: 'GROUP ACTIVITY',
    title: 'Mental Health Awareness Walk',
    desc: 'A group walk dedicated to raising awareness for mental health, ending stigma, and promoting social wellness—together.'
  },
  {
    id: 7,
    image: 'https://res.cloudinary.com/dpelqhchv/image/upload/v1772702525/Black_and_White_Minimalist_Yoga_Class_Flyer_7_qe1cvk.png',
    time: 'WED, 7:00 PM',
    students: 'BEGINNERS',
    title: 'Breathwork & Meditation Circle',
    desc: 'Explore breathing techniques and seated meditation for stress relief and clarity. No experience needed—just an open mind.'
  },
  {
    id: 8,
    image: 'https://res.cloudinary.com/dpelqhchv/image/upload/v1772702527/Black_and_White_Minimalist_Yoga_Class_Flyer_8_goh5q0.png',
    time: 'FRI, 5:00 PM',
    students: 'OPEN EVENT',
    title: 'Sound Healing & Meditation Bath',
    desc: 'Immerse yourself in therapeutic soundscapes and guided meditation to relieve stress and rebalance your energy.'
  },
  {
    id: 9,
    image: 'https://res.cloudinary.com/dpelqhchv/image/upload/v1772702525/Black_and_White_Minimalist_Yoga_Class_Flyer_9_lmkyqu.png',
    time: 'SAT, 10:00 AM',
    students: 'COMMUNITY',
    title: 'Restorative Yoga & Mindfulness',
    desc: 'Slow, supported poses and mindfulness practices to restore body and mind. Ideal for relaxation and self-care.'
  },
  {
    id: 10,
    image: 'https://res.cloudinary.com/dpelqhchv/image/upload/v1772702524/Black_and_White_Minimalist_Yoga_Class_Flyer_10_huhdzn.png',
    time: 'SUN, 4:00 PM',
    students: 'ALL AGES',
    title: 'Yoga for Wellness Awareness',
    desc: 'A family-friendly session linking yoga with wellness awareness. Learn simple poses and habits that support mental and physical health.'
  },
  {
    id: 11,
    image: 'https://res.cloudinary.com/dpelqhchv/image/upload/v1772702526/Black_and_White_Minimalist_Yoga_Class_Flyer_11_cgw4qb.png',
    time: 'MON, 6:30 PM',
    students: 'VIRTUAL',
    title: 'Empathy & Social Connection Workshop',
    desc: 'An interactive workshop on social wellness: break down barriers, build empathy, and create meaningful connections in daily life.'
  },
  {
    id: 12,
    image: 'https://res.cloudinary.com/dpelqhchv/image/upload/v1772702524/Black_and_White_Minimalist_Yoga_Class_Flyer_12_kgbdga.png',
    time: 'WED, 12:00 PM',
    students: 'LUNCHTIME',
    title: 'Midweek Meditation Break',
    desc: 'A short, guided meditation session to reset your day. Perfect for busy schedules—recharge in 30 minutes.'
  }
];

const SLIDE_DURATION_MS = 320;
const DESKTOP_FADE_DURATION_MS = 350;

export default function EventsSection() {
  const [sectionRef, isVisible] = useScrollVisible(0.12);
  const [currentPage, setCurrentPage] = useState(1);
  const [isChangingPage, setIsChangingPage] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(() => {
    if (typeof window === 'undefined') return 3;
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  });
  const [slidePhase, setSlidePhase] = useState('idle');
  const [slideDirection, setSlideDirection] = useState('left');
  const [slideEnterActive, setSlideEnterActive] = useState(false);
  const isMobileSlider = itemsPerPage === 1;

  useEffect(() => {
    const updateItemsPerPage = () => {
      if (window.innerWidth < 640) setItemsPerPage(1);
      else if (window.innerWidth < 1024) setItemsPerPage(2);
      else setItemsPerPage(3);
    };
    updateItemsPerPage();
    window.addEventListener('resize', updateItemsPerPage);
    return () => window.removeEventListener('resize', updateItemsPerPage);
  }, []);

  const totalPages = Math.ceil(CLASSES_DATA.length / itemsPerPage);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [totalPages, currentPage]);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const visibleItems = CLASSES_DATA.slice(startIndex, startIndex + itemsPerPage);

  const changePageWrapper = (updater) => {
    setIsChangingPage(true);
    setTimeout(() => {
      updater();
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setTimeout(() => setIsChangingPage(false), 20);
        });
      });
    }, DESKTOP_FADE_DURATION_MS);
  };

  useLayoutEffect(() => {
    if (slidePhase !== 'entering' || !isMobileSlider) return;
    const raf = requestAnimationFrame(() => {
      setSlideEnterActive(true);
    });
    return () => cancelAnimationFrame(raf);
  }, [slidePhase, isMobileSlider]);

  const runMobileSlideNext = () => {
    setSlideDirection('left');
    setSlidePhase('exiting');
    setIsChangingPage(true);
    setSlideEnterActive(false);
    setTimeout(() => {
      setCurrentPage((prev) => Math.min(prev + 1, totalPages));
      setSlideDirection('right');
      setSlidePhase('entering');
      setTimeout(() => {
        setSlidePhase('idle');
        setSlideEnterActive(false);
        setIsChangingPage(false);
      }, SLIDE_DURATION_MS);
    }, SLIDE_DURATION_MS);
  };

  const runMobileSlidePrev = () => {
    setSlideDirection('right');
    setSlidePhase('exiting');
    setIsChangingPage(true);
    setSlideEnterActive(false);
    setTimeout(() => {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
      setSlideDirection('left');
      setSlidePhase('entering');
      setTimeout(() => {
        setSlidePhase('idle');
        setSlideEnterActive(false);
        setIsChangingPage(false);
      }, SLIDE_DURATION_MS);
    }, SLIDE_DURATION_MS);
  };

  const handlePrevPage = () => {
    if (currentPage <= 1 || isChangingPage) return;
    if (isMobileSlider) runMobileSlidePrev();
    else changePageWrapper(() => setCurrentPage((prev) => prev - 1));
  };

  const handleNextPage = () => {
    if (currentPage >= totalPages || isChangingPage) return;
    if (isMobileSlider) runMobileSlideNext();
    else changePageWrapper(() => setCurrentPage((prev) => prev + 1));
  };

  return (
    <section
      id="events"
      ref={sectionRef}
      className="relative w-full overflow-hidden pt-16 pb-20 sm:pt-20 sm:pb-24 md:pt-24 md:pb-32"
      aria-labelledby="events-heading"
    > 
      <div className="absolute inset-0 z-1 bg-[#D6E9FF]" aria-hidden />
      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8">
        {/* Heading – staged scroll-in */}
        <div className="mx-auto mb-10 flex max-w-5xl flex-col items-center text-center sm:mb-12 md:mb-16">
          <div
            className={`flex items-center justify-center gap-2 transition-all duration-600 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
              }`}
          >
            <LeafIcon className="h-4 w-4 text-[#4595EE] sm:h-5 sm:w-5" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#4595EE]">
              Engagement & Connection
            </span>
          </div>
          <div
            className={`my-2 h-0.5 w-12 rounded-full bg-[#36D8B8] transition-all duration-600 ease-out sm:my-3 ${isVisible ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
              }`}
            style={{ transitionDelay: isVisible ? '80ms' : '0ms' }}
            aria-hidden
          />
          <h2
            id="events-heading"
            className={`max-w-7xl mx-auto text-3xl font-bold tracking-tight leading-[1.2] text-[#1A3A32] transition-all duration-700 ease-out sm:text-4xl md:text-5xl lg:text-6xl ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            style={{ transitionDelay: isVisible ? '120ms' : '0ms' }}
          >
            Upcoming Gatherings
          </h2>
          <p
            className={`mt-3 max-w-7xl mx-auto text-justify text-sm leading-relaxed transition-all duration-700 ease-out sm:mt-4 sm:text-left sm:text-[15px] ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
              }`}
            style={{ transitionDelay: isVisible ? '200ms' : '0ms' }}
          >
            Discover upcoming events focused on social wellness and awareness, meditation, yoga, mindfulness, and more. Join workshops, guided sessions, and community gatherings designed to empower, educate, and connect—and find your space to grow and contribute to holistic wellbeing.
          </p>
        </div>

        {/* Cards – with mobile-only left/right nav in center */}
        <div className="relative">
          {/* Mobile-only: prev/next buttons at vertical center of cards */}
          {totalPages > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrevPage}
                disabled={currentPage === 1 || isChangingPage}
                className="group absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#1A3A32] bg-white text-[#1A3A32] shadow-md transition-all duration-300 ease-out hover:border-[#4595EE] hover:bg-[#4595EE] hover:text-white active:scale-95 disabled:pointer-events-none disabled:opacity-40 sm:hidden"
                aria-label="Previous events"
              >
                <ChevronLeftIcon className="h-5 w-5 transition-transform duration-300 ease-out group-hover:-translate-x-0.5" />
              </button>
              <button
                type="button"
                onClick={handleNextPage}
                disabled={currentPage === totalPages || isChangingPage}
                className="group absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border-2 border-[#1A3A32] bg-white text-[#1A3A32] shadow-md transition-all duration-300 ease-out hover:border-[#4595EE] hover:bg-[#4595EE] hover:text-white active:scale-95 disabled:pointer-events-none disabled:opacity-40 sm:hidden"
                aria-label="Next events"
              >
                <ChevronRightIcon className="h-5 w-5 transition-transform duration-300 ease-out group-hover:translate-x-0.5" />
              </button>
            </>
          )}

          <div className={`relative z-10 min-h-[200px] sm:min-h-0 ${isMobileSlider ? 'overflow-hidden' : ''} sm:block`}>
            <div
              className={`grid grid-cols-1 items-stretch gap-0 sm:gap-6 md:grid-cols-2 md:gap-6 lg:grid-cols-3 lg:gap-8 ${isMobileSlider
                ? 'w-full min-w-full transition-transform'
                : `transition-all ${isChangingPage ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'}`
                }`}
              style={
                isMobileSlider
                  ? {
                    transform: (() => {
                      if (slidePhase === 'idle') return 'translateX(0)';
                      if (slidePhase === 'exiting')
                        return slideDirection === 'left' ? 'translateX(-100%)' : 'translateX(100%)';
                      if (slidePhase === 'entering') {
                        if (!slideEnterActive)
                          return slideDirection === 'right' ? 'translateX(100%)' : 'translateX(-100%)';
                        return 'translateX(0)';
                      }
                      return 'translateX(0)';
                    })(),
                    transition: slidePhase === 'entering' && !slideEnterActive
                      ? 'none'
                      : `transform ${SLIDE_DURATION_MS}ms cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
                  }
                  : {
                    transitionDuration: `${DESKTOP_FADE_DURATION_MS}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  }
              }
            >
              {visibleItems.map((item, index) => {
                const colIndex = index % Math.max(itemsPerPage, 1);
                const translateYAmount = colIndex === 1 ? 'translateY(48px)' : 'translateY(32px)';
                const showCard = isVisible || isMobileSlider;

                return (
                  <div
                    key={item.id}
                    className={`group relative flex items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl md:rounded-[32px] transition-all duration-800 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:-translate-y-2 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.2)] ${isMobileSlider ? 'min-w-full' : ''}`}
                    style={{
                      transitionDelay: showCard ? `${250 + (index * 120)}ms` : '0ms',
                      opacity: showCard ? 1 : 0,
                      transform: showCard ? 'translateY(0) scale(1)' : `${translateYAmount} scale(0.96)`,
                    }}
                  >
                    <img
                      src={item.image}
                      alt={`Class ${item.id}`}
                      className="w-full h-auto object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pagination Controls – hidden on mobile, visible from sm */}
        {totalPages > 1 && (
          <div
            className={`mt-10 hidden items-center justify-center gap-2 transition-all duration-700 ease-out sm:mt-12 sm:flex sm:gap-3 md:mt-16 md:gap-4 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
            style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}
          >
            {/* Prev Button */}
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1 || isChangingPage}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#4595EE] hover:text-[#4595EE] hover:shadow-[0_8px_20px_rgba(69,149,238,0.2)] active:scale-95 disabled:pointer-events-none disabled:opacity-40 sm:h-12 sm:w-12"
              aria-label="Previous events"
            >
              <ChevronLeftIcon className="h-4 w-4 transition-transform duration-300 ease-out group-hover:-translate-x-0.5 sm:h-5 sm:w-5" />
            </button>

            {/* Page Indicators */}
            <div className="flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2 py-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.03)] sm:gap-1.5 sm:px-3 sm:py-2">
              {Array.from({ length: totalPages }).map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (currentPage !== i + 1) {
                      changePageWrapper(() => setCurrentPage(i + 1));
                    }
                  }}
                  disabled={isChangingPage}
                  className={`flex h-8 w-8 items-center justify-center rounded-full text-xs font-semibold transition-all duration-300 ease-out active:scale-95 sm:h-[34px] sm:w-[34px] sm:text-[14px] ${currentPage === i + 1
                    ? 'bg-[#4595EE] text-white shadow-md ring-2 ring-[#4595EE]/40 ring-offset-1'
                    : 'bg-transparent text-slate-400 hover:bg-slate-50 hover:text-[#1A3A32]'
                    }`}
                  aria-label={`Go to page ${i + 1}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages || isChangingPage}
              className="group flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 shadow-[0_4px_12px_rgba(0,0,0,0.03)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#4595EE] hover:text-[#4595EE] hover:shadow-[0_8px_20px_rgba(69,149,238,0.2)] active:scale-95 disabled:pointer-events-none disabled:opacity-40 sm:h-12 sm:w-12"
              aria-label="Next events"
            >
              <ChevronRightIcon className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 sm:h-5 sm:w-5" />
            </button>
          </div>
        )}
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

function ChevronLeftIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  );
}

function ChevronRightIcon({ className }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <polyline points="9 18 15 12 9 6"></polyline>
    </svg>
  );
}
