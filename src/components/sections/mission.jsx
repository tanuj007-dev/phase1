import React, { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";

/* ---------------- CountUp Animation ---------------- */

const CountUp = ({ to, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = parseInt(to);
    const total = duration * 1000;
    const increment = total / end;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, increment);

    return () => clearInterval(timer);
  }, [isInView, to, duration]);

  return <span ref={ref}>{count}</span>;
};

/* ---------------- Mission Section ---------------- */

export default function MissionSection() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12 }
    }
  };

  const item = {
    hidden: { y: 30, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="bg-[#f5f5f5] py-20 px-4 md:px-10 lg:px-16">
      <div className="max-w-[1200px] mx-auto">

        {/* Header */}

        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <h2 className="text-[40px] font-bold tracking-tight text-black">
            Our Mission
          </h2>

          <p className="max-w-md text-gray-500 text-sm leading-relaxed">
            Transforming healthcare access from Indonesia to the world,
            creating pathways that connect people everywhere to better
            care, advanced solutions, and healthier futures.
          </p>
        </div>

        {/* Grid */}

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >

          {/* Card 1 */}

          <motion.div
            variants={item}
            className="bg-white rounded-2xl p-8 flex flex-col justify-between shadow-sm border border-gray-100 lg:row-span-2"
          >
            <div>
              <h3 className="text-2xl font-semibold text-black">
                Connecting{" "}
                <span className="text-gray-400">Care Globally</span>
              </h3>
            </div>

            <div className="mt-8 overflow-hidden rounded-xl">
              <img
  src="https://source.unsplash.com/600x800/?doctor,medical"
  alt="Doctor"
  className="w-full h-[340px] object-cover"
/>
            </div>
          </motion.div>

          {/* Card 2 */}

          <motion.div
            variants={item}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <div className="text-green-700 text-4xl mb-4">“</div>

            <p className="text-gray-800 text-sm leading-relaxed mb-6">
              Medicare is transforming healthcare in Indonesia by linking
              clinics and hospitals to provide faster, more efficient
              patient care.
            </p>

            <div className="flex items-center gap-3">
              <img
                src="https://i.pravatar.cc/100?u=jordan"
                className="w-9 h-9 rounded-full"
              />

              <div>
                <p className="text-sm font-semibold text-black">
                  Jordan Blake
                </p>
                <p className="text-xs text-gray-400">
                  CEO Medicare
                </p>
              </div>
            </div>
          </motion.div>

          {/* Card 3 */}

          <motion.div
            variants={item}
            className="bg-[#2f7d57] text-white rounded-2xl p-10 flex flex-col justify-end"
          >
            <h3 className="text-5xl font-bold">
              <CountUp to="25" />+
            </h3>

            <p className="mt-2 text-sm opacity-80">
              Industry Recognition
            </p>
          </motion.div>

          {/* Card 4 */}

          <motion.div
            variants={item}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <h3 className="text-5xl font-bold text-black">
              <CountUp to="92" />%
            </h3>

            <p className="text-gray-500 mt-2 text-sm">
              Customer satisfaction rate
            </p>
          </motion.div>

          {/* Card 5 */}

          <motion.div
            variants={item}
            className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
          >
            <h4 className="text-lg font-semibold text-black mb-3">
              3 Years
            </h4>

            <p className="text-gray-500 text-sm leading-relaxed">
              Medicare empowers healthcare networks worldwide,
              making quality medical services accessible anytime,
              anywhere.
            </p>

            <p className="text-gray-400 mt-4 text-sm">
              $60B global market potential.
            </p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}