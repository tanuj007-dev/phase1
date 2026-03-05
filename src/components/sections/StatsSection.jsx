import React, { useEffect, useRef, useState } from 'react';
import { FiUsers, FiBriefcase, FiBookOpen, FiGlobe } from 'react-icons/fi';

const STATS = [
  {
    label: 'Satisfied Clients',
    value: 900,
    suffix: '+',
    Icon: FiUsers,
  },
  {
    label: 'Years in Business',
    value: 25,
    suffix: '+',
    Icon: FiBriefcase,
  },
  {
    label: 'Classes Conducted',
    value: 5000,
    suffix: '+',
    Icon: FiBookOpen,
  },
  {
    label: 'Countries Reached',
    value: 30,
    suffix: '+',
    Icon: FiGlobe,
  },
];

function Counter({ end, duration = 2000, suffix = '', label, delay = 0, Icon }) {
  const [count, setCount] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasTriggered) setHasTriggered(true);
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
      const easeOut = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) animationFrame = window.requestAnimationFrame(step);
      else setCount(end);
    };
    animationFrame = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(animationFrame);
  }, [hasTriggered, end, duration, delay]);

  return (
    <div
      ref={ref}
      className={`flex flex-row items-center gap-4 text-left transition-all duration-1000 sm:gap-5 ${hasTriggered ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
    >
      <div className="shrink-0 text-[#4595EE] [&>svg]:h-14 [&>svg]:w-14 [&>svg]:shrink-0 sm:[&>svg]:h-16 sm:[&>svg]:w-16 lg:[&>svg]:h-18 lg:[&>svg]:w-18">
        <Icon aria-hidden />
      </div>
      <div className="flex min-w-0 flex-col">
        <div className="flex items-baseline">
          <span
            className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
            style={{ color: '#4595EE' }}
          >
            {count}
          </span>
          {suffix && (
            <span
              className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl"
              style={{ color: '#4595EE' }}
            >
              {suffix}
            </span>
          )}
        </div>
        <span className="mt-0.5 text-sm font-normal sm:text-base" style={{ color: '#4595EE' }}>
          {label}
        </span>
      </div>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative z-10 w-full border-t-2 border-transparent bg-white py-16 px-4 sm:py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 text-[#4595EE] gap-10 justify-items-start sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:gap-x-12">
          {STATS.map((stat, i) => (
            <Counter
              key={stat.label}
              end={stat.value}
              suffix={stat.suffix}
              label={stat.label}
              delay={i * 150}
              Icon={stat.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
