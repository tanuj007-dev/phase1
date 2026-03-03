import React, { useEffect, useRef, useState } from 'react';

const STATS = [
    { label: 'Consultations', value: 500, suffix: '+' },
    { label: 'Trusted Clients', value: 97, suffix: '%' },
    { label: 'Trained Staff', value: 100, suffix: '' },
    { label: 'Years Experience', value: 28, suffix: '+' },
];

function Counter({ end, duration = 2000, suffix = '', label, delay = 0 }) {
    const [count, setCount] = useState(0);
    const [hasTriggered, setHasTriggered] = useState(false);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasTriggered) {
                    setHasTriggered(true);
                }
            },
            { threshold: 0.2 }
        );
        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [hasTriggered]);

    useEffect(() => {
        if (!hasTriggered) return;

        let startTime = null;
        let animationFrame;

        const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const elapsed = timestamp - startTime;

            if (elapsed < delay) {
                animationFrame = window.requestAnimationFrame(step);
                return;
            }

            const progress = Math.min((elapsed - delay) / duration, 1);
            // easeOutQuart
            const easeOut = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOut * end));

            if (progress < 1) {
                animationFrame = window.requestAnimationFrame(step);
            } else {
                setCount(end); // Ensure it ends exactly at 'end'
            }
        };
        animationFrame = window.requestAnimationFrame(step);

        return () => window.cancelAnimationFrame(animationFrame);
    }, [hasTriggered, end, duration, delay]);

    return (
        <div
            ref={ref}
            className={`flex flex-col items-center justify-center transition-all duration-1000 transform ${hasTriggered ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
                }`}
        >
            <div className="flex items-baseline mb-2">
                <span className="text-5xl md:text-6xl font-extrabold text-[#110B29] tracking-tight leading-none">
                    {count}
                </span>
                {suffix && (
                    <span className="text-5xl md:text-6xl font-extrabold text-[#110B29] tracking-tight leading-none">
                        {suffix}
                    </span>
                )}
            </div>
            <span className="text-[16px] font-medium text-slate-600">
                {label}
            </span>
        </div>
    );
}

export default function StatsSection() {
    return (
        <section className="w-full bg-[linear-gradient(180deg,rgba(54,216,184,0.05)_0%,rgba(69,149,238,0.04)_50%,#f8fafc_100%)] py-20 px-4 sm:px-6 z-10 relative border-t-2 border-transparent">
            <div className="mx-auto max-w-7xl">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 justify-items-center">
                    {STATS.map((stat, i) => (
                        <Counter
                            key={stat.label}
                            end={stat.value}
                            suffix={stat.suffix}
                            label={stat.label}
                            delay={i * 200}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
