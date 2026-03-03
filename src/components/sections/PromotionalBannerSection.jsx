import React, { useRef, useState, useEffect } from 'react';
import bannerImage from '../../assets/Untitled design (24).png';

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

export default function PromotionalBannerSection() {
    const [sectionRef, isVisible] = useScrollVisible();

    return (
        <section
            ref={sectionRef}
            className="relative w-full overflow-hidden bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:pb-16 lg:pt-8"
        >
            <div className="mx-auto max-w-[1240px]">
                <div
                    className={`group relative overflow-hidden rounded-2xl bg-[#4595EE] shadow-[0_20px_50px_-12px_rgba(26,58,50,0.25)] transition-all duration-1000 ease-[cubic-bezier(0.25,0.8,0.25,1)] sm:rounded-3xl lg:rounded-[32px] ${isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-95'
                        }`}
                >
                    {/* Decorative Background Glows – scaled down on mobile */}
                    <div className="absolute -bottom-16 -left-16 z-0 h-40 w-40 rounded-full bg-linear-to-tr from-[#36D8B8]/30 to-[#4595EE]/20 blur-[60px] sm:-bottom-24 sm:-left-24 sm:h-64 sm:w-64 sm:blur-[80px]" />
                    <div className="absolute top-0 right-0 z-0 h-[280px] w-[280px] rounded-full bg-linear-to-bl from-[#36D8B8]/10 via-[#4595EE]/5 to-transparent blur-[60px] sm:h-[400px] sm:w-[400px] md:h-[500px] md:w-[500px] md:blur-[80px]" />

                    <div className="relative z-10 flex flex-col items-center justify-between gap-6 px-4 py-6 sm:gap-8 sm:px-10 sm:py-12 md:p-12 lg:flex-row lg:gap-10 lg:py-14">

                        {/* Left: Text Content */}
                        <div className="flex w-full flex-col justify-center text-justify lg:w-1/2 lg:pr-10 lg:text-left">
                            

                            <h2 className="mb-4 text-2xl font-bold leading-tight tracking-tight text-white sm:mb-5 sm:text-3xl md:text-4xl lg:text-5xl">
                                Break the Stigma. <br className="hidden sm:block" />
                                <span className="text-[#36D8B8]">Stand For Mental Health.</span>
                            </h2>

                            <p className="mb-5 max-w-xl text-sm leading-relaxed text-slate-300 text-justify sm:mx-auto sm:mb-6 sm:text-[15px] md:mx-0 md:text-base md:leading-8 lg:text-left">
                                Join thousands of individuals pledging to prioritize mental wellbeing, support inclusivity, and build compassionate societies. Your voice has the power to spark meaningful change. Let's make wellness accessible for everyone.
                            </p>

                            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center sm:gap-4 lg:justify-start">
                                <button
                                    type="button"
                                    className="inline-flex h-11 w-full items-center justify-center rounded-full bg-[#4595EE] px-6 text-[13px] font-bold text-white shadow-[0_4px_14px_rgba(69,149,238,0.35)] transition-all duration-300 ease-out hover:bg-white hover:text-[#4595EE] hover:shadow-[0_6px_20px_rgba(255,255,255,0.4)] hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1A3A32] sm:h-12 sm:w-auto sm:px-8 md:h-14 md:text-sm"
                                >
                                    Join the Campaign
                                </button>

                                <button
                                    type="button"
                                    className="group flex h-11 w-full items-center justify-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 text-[13px] font-bold text-white backdrop-blur-sm transition-all duration-300 ease-out hover:bg-white/10 hover:border-white/40 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1A3A32] sm:h-12 sm:w-auto sm:px-8 md:h-14 md:text-sm"
                                >
                                    <span>Read Real Stories</span>
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Right: Image */}
                        <div className="relative flex w-full shrink-0 justify-center lg:w-1/2">
                            <div className="relative w-full max-w-[280px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[560px]">
                                {/* Subtle backlight behind the image */}
                                <div className="absolute inset-0 scale-75 animate-pulse rounded-full bg-[#36D8B8]/10 blur-2xl duration-1000 sm:blur-[60px]" />
                                <img
                                    src={bannerImage}
                                    alt="Community and Mental Health"
                                    className="relative z-10 h-auto w-full rounded-xl object-cover drop-shadow-[0_20px_40px_rgba(0,0,0,0.3)] transition-transform duration-1000 group-hover:-translate-y-3 group-hover:scale-[1.02] sm:rounded-2xl"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
