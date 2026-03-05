import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiPhone, FiArrowUpRight } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const SECTION_BG = '#4595EE'; // Dark green
const ACCENT_GREEN = 'white'; // Light green
const FORM_BG = '#DAE9FC'; // Light beige/green
const FORM_HEADING = '#4595EE'; // Dark green

const SERVICE_OPTIONS = [
  'Wellness Consultation',
  'Mental Health Support',
  'Fitness Program',
  'Nutrition Guidance',
  'Other',
];

function CircularCTA() {
  return (
    <a
      href="#contact-form"
      className="group relative mt-8 lg:mt-12 inline-flex items-center justify-center rounded-full bg-transparent p-0 no-underline focus:outline-none"
      style={{ width: 'clamp(120px, 15vw, 150px)', height: 'clamp(120px, 15vw, 150px)' }}
      aria-label="Get free consultation"
    >
      <svg
        viewBox="0 0 200 200"
        className="absolute inset-0 h-full w-full animate-[spin_10s_linear_infinite]"
        aria-hidden
      >
        <defs>
          <path
            id="journey-cta-path-expanded"
            d="M100,100 m-70,0 a70,70 0 1,1 140,0 a70,70 0 1,1 -140,0"
          />
        </defs>
        <text fill="white" fontSize="14" fontWeight="500" letterSpacing="0.1em">
          <textPath href="#journey-cta-path-expanded" startOffset="0">
            GET FREE CONSULTATION - GET FREE CONSULTATION -
          </textPath>
        </text>
      </svg>
      {/* Centered Arrow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="bg-white text-[#4595EE] rounded-full p-3 transition-transform duration-300 group-hover:scale-110">
          <FiArrowUpRight className="text-2xl" strokeWidth={2.5} />
        </div>
      </div>
    </a>
  );
}

export default function JourneyContactSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    serviceType: '',
    message: '',
  });

  const sectionRef = useRef(null);
  const formSectionRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      // Desktop animation: Left/Right simple slide-in from bounds
      mm.add("(min-width: 1024px)", () => {
        gsap.fromTo([leftColRef.current, rightColRef.current],
          {
            xPercent: i => i === 0 ? -100 : 100,
            opacity: 0
          },
          {
            xPercent: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 60%", // Triggers precisely when green section intersects
              toggleActions: "play none none none", // Does not reverse to avoid glitchy layouts on rapid scroll
            }
          }
        );
      });

      // Mobile animation: Standard sequential fade slide up
      mm.add("(max-width: 1023px)", () => {
        gsap.fromTo([leftColRef.current, rightColRef.current],
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            scrollTrigger: {
              trigger: formSectionRef.current,
              start: 'top 85%',
              toggleActions: "play none none none"
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const meditationImage = 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=800&q=80';

  return (
    <section
      id="contact"
      className="w-full relative bg-white pb-16 lg:pb-32 overflow-hidden"
    >
      {/* Background Dark Green Content */}
      <div
        ref={sectionRef}
        className="w-full px-4 pt-14 pb-28 lg:pt-20 lg:pb-36 text-center rounded-b-[2rem] lg:rounded-b-[4rem]"
        style={{ backgroundColor: SECTION_BG }}
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          <p
            className="mb-2 lg:mb-3 text-xs sm:text-sm font-bold uppercase tracking-[0.15em]"
            style={{ color: ACCENT_GREEN }}
          >
            BEGIN YOUR JOURNEY WITHIN.
          </p>
          <h2 className="mb-4 text-4xl sm:text-5xl lg:text-[48px] font-bold leading-tight text-white tracking-tight">
            Find balance, strength, and peace through every breath.
          </h2>
          <p className="max-w-3xl mb-2 text-sm sm:text-base md:text-lg leading-relaxed text-white/90 px-4">
            During the Industrial Revolution, manufacturing emerged as a major driver of labor and
            production in both European and North American nations, upending earlier feudal and
            mercantile economies.
          </p>
          <CircularCTA />
        </div>
      </div>

      {/* Overlapping Form Wrapper */}
      <div
        ref={formSectionRef}
        className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative -mt-28 lg:-mt-20 z-10 w-full"
      >
        <div className="flex flex-col lg:flex-row bg-[#f5f5f5] rounded-3xl lg:rounded-[3rem] shadow-[0_20px_60px_rgba(0,0,0,0.15)] overflow-hidden w-full items-stretch">

          {/* Left Column (Form) */}
          <div
            ref={leftColRef}
            className="w-full lg:w-[50%] p-6 sm:p-10 lg:p-14 xl:p-20 flex flex-col justify-center will-change-transform"
            style={{ backgroundColor: FORM_BG }}
          >
            <div className="max-w-full lg:max-w-md xl:max-w-xl mx-auto w-full">
              <p className="text-xs font-bold uppercase tracking-[0.15em] mb-3" style={{ color: FORM_HEADING }}>
                GET A QUOTE
              </p>
              <h2
                className="mb-6 lg:mb-8 text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight"
                style={{ color: FORM_HEADING }}
              >
                Bring nature in your home.
              </h2>

              <form onSubmit={handleSubmit} className="flex flex-col gap-3 lg:gap-4">
                <div className="grid gap-3 lg:gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 lg:px-5 py-3.5 text-sm lg:text-base text-slate-800 placeholder-slate-500 outline-none focus:ring-2 focus:ring-[#135029]"
                  />
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 lg:px-5 py-3.5 text-sm lg:text-base text-slate-800 placeholder-slate-500 outline-none focus:ring-2 focus:ring-[#135029]"
                  />
                </div>

                <div className="grid gap-3 lg:gap-4 sm:grid-cols-2">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white border border-gray-200 rounded-xl px-4 lg:px-5 py-3.5 text-sm lg:text-base text-slate-800 placeholder-slate-500 outline-none focus:ring-2 focus:ring-[#135029]"
                  />
                  <div className="relative">
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleChange}
                      className="w-full bg-white border border-gray-200 rounded-xl px-4 lg:px-5 py-3.5 text-sm lg:text-base text-slate-500 outline-none focus:ring-2 focus:ring-[#135029] cursor-pointer appearance-none"
                    >
                      <option value="" disabled hidden>Service type</option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-600">
                      <svg className="h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" /></svg>
                    </div>
                  </div>
                </div>

                <textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full resize-none bg-white border border-gray-200 rounded-xl px-4 lg:px-5 py-3.5 text-sm lg:text-base text-slate-800 placeholder-slate-500 outline-none focus:ring-2 focus:ring-[#135029]"
                />

                <div className="mt-2 text-left">
                  <button
                    type="submit"
                    className="rounded-full px-8 py-4 text-sm lg:text-base font-semibold text-white transition-all hover:scale-105 active:scale-95 inline-block w-full sm:w-auto"
                    style={{ backgroundColor: FORM_HEADING }}
                  >
                    Submit Now
                  </button>
                </div>

                <div className="mt-4 lg:mt-6 flex flex-col sm:flex-row sm:items-center gap-3 text-sm font-medium text-slate-700">
                  <span>If you have any questions, contact our office at:</span>
                  <a
                    href="tel:+1234567890"
                    className="inline-flex items-center gap-2 text-base font-bold whitespace-nowrap group"
                    style={{ color: FORM_HEADING }}
                  >
                    <span className="bg-white p-2 text-[#135029] rounded-full shadow-sm border border-gray-100 group-hover:bg-[#a3e635] transition-colors flex items-center justify-center">
                      <FiPhone className="shrink-0" strokeWidth={2.5} size={14} />
                    </span>
                    +1-234-567-89
                  </a>
                </div>
              </form>
            </div>
          </div>

          {/* Right Column (Image) - 45% width to balance form out better */}
          <div
            ref={rightColRef}
            className="w-full lg:w-[50%] lg:h-auto min-h-[350px] sm:min-h-[450px] relative will-change-transform bg-gray-200"
          >
            <img
              src={meditationImage}
              alt="Person meditating in nature"
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-[10s] hover:scale-110"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
