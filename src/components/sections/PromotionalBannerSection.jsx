import React, { useRef, useState, useEffect } from 'react';

// Using a professional mental health themed background
const BANNER_URL = "https://images.unsplash.com/photo-1506126613408-eca07ce68773?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80";

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
            className="relative w-full overflow-hidden bg-white px-4 py-12 sm:px-6 lg:px-8"
        >
            <div className="mx-auto max-w-7xl">
                <div
                    className={`group relative min-h-[550px] overflow-hidden rounded-[2.5rem] bg-slate-900 shadow-2xl transition-all duration-1000 ease-out ${
                        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-12 opacity-0 scale-[0.98]'
                    }`}
                >
                    {/* Background Image Layer */}
                    <div className="absolute inset-0 z-0">
                        <img
                            src={BANNER_URL}
                            alt="Supportive community atmosphere"
                            className="h-full w-full object-cover opacity-60 transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/70 to-transparent" />
                    </div>

                    {/* Content Layer */}
                    <div className="relative z-10 flex h-full flex-col justify-center px-6 py-16 sm:px-12 md:p-20 lg:w-2/3">
                        
                        <div className="inline-flex items-center gap-2 rounded-full bg-[#36D8B8]/20 px-4 py-1.5 text-xs font-bold tracking-wider text-[#36D8B8] uppercase mb-6 w-fit backdrop-blur-md border border-[#36D8B8]/30">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#36D8B8] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#36D8B8]"></span>
                            </span>
                            New Campaign
                        </div>

                        <h2 className="mb-6 text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                            Break the Stigma. <br />
                            <span className="bg-gradient-to-r from-[#36D8B8] to-[#4595EE] bg-clip-text text-transparent">
                                Stand For Mental Health.
                            </span>
                        </h2>

                        <p className="mb-8 max-w-xl text-lg leading-relaxed text-slate-200">
                            Join thousands of individuals pledging to prioritize mental wellbeing. 
                            Your voice has the power to spark meaningful change. 
                        </p>

                        <div className="flex flex-col gap-4 sm:flex-row">
                            {/* Redirect to Contact Page */}
                            <a
                                href="/contact"
                                className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[#36D8B8] px-8 py-4 text-sm font-bold text-slate-900 transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(54,216,184,0.4)]"
                            >
                                <span className="relative z-10">Join the Campaign</span>
                                <div className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-300 group-hover:translate-x-0" />
                            </a>

                            {/* Redirect to Blog Page */}
                            <a
                                href="/blog"
                                className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-sm font-bold text-white backdrop-blur-md transition-all hover:bg-white/20"
                            >
                                Read Real Stories
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="h-4 w-4">
                                    <path d="M5 12h14m-7-7 7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>

                    <div className="absolute -bottom-20 -right-20 hidden lg:block">
                         <div className="h-80 w-80 rounded-full border border-white/5 animate-pulse" />
                    </div>
                </div>
            </div>
        </section>
    );
}