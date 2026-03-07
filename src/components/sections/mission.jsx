import React, { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

/* ---------------- Smoother CountUp ---------------- */

const CountUp = ({ to }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });

  useEffect(() => {
    if (isInView) motionValue.set(parseInt(to));
  }, [isInView, to, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current) ref.current.textContent = Math.floor(latest);
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
};

/* ---------------- Mission Section ---------------- */

export default function MissionSection() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    // Reduced py-24 to py-12 for section height
    <section className="bg-[#F8FAFC] py-12 px-6 md:px-10 lg:px-16 font-[Poppins] overflow-hidden">
      <div className="max-w-[1200px] mx-auto">

        {/* Header - Reduced mb-16 to mb-10 */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-8">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-[#1F2937]">
            Our Mission
          </h2>
          <p className="max-w-md text-[#6B7280] text-sm leading-relaxed border-l-2 border-[#4A8FD8] pl-6">
            Transforming healthcare access from Indonesia to the world,
            creating pathways that connect people everywhere to better
            care.
          </p>
        </div>

        {/* Grid - Gap reduced from 8 to 5 */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid gap-5 md:grid-cols-2 lg:grid-cols-3"
        >

          {/* Card 1: Reduced p-8 to p-6 and img height to 280px */}
          <motion.div
            variants={item}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-6 flex flex-col justify-between shadow-sm border border-gray-100 lg:row-span-2 overflow-hidden"
          >
            <h3 className="text-2xl font-semibold text-[#1F2937]">
              Connecting <span className="text-[#94A3B8] block">Care Globally</span>
            </h3>
            <div className="mt-6 overflow-hidden rounded-xl">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=600&h=800"
                alt="Doctor"
                className="w-full h-[280px] object-cover" 
              />
            </div>
          </motion.div>

          {/* Card 2: Reduced p-10 to p-6 */}
          <motion.div
            variants={item}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          >
            <div className="text-[#4A8FD8] text-4xl mb-1">“</div>
            <p className="text-[#374151] text-sm italic leading-relaxed mb-4">
              Medicare is transforming healthcare in Indonesia by linking
              clinics and hospitals for faster care.
            </p>
            <div className="flex items-center gap-3">
              <img src="https://i.pravatar.cc/100?u=jordan" className="w-8 h-8 rounded-full" />
              <div>
                <p className="text-xs font-bold text-[#1F2937]">Jordan Blake</p>
                <p className="text-[10px] text-[#4A8FD8] uppercase">CEO Medicare</p>
              </div>
            </div>
          </motion.div>

          {/* Card 3: Reduced p-10 to p-6 */}
          <motion.div
            variants={item}
            className="bg-[#4A8FD8] text-white rounded-2xl p-6 flex flex-col justify-end shadow-lg shadow-blue-100"
          >
            <h3 className="text-5xl font-bold tracking-tighter">
              <CountUp to="25" />+
            </h3>
            <p className="mt-1 text-blue-100 text-[10px] uppercase font-medium">Industry Recognition</p>
          </motion.div>

          {/* Card 4: Reduced p-10 to p-6 */}
          <motion.div
            variants={item}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 flex flex-col justify-center"
          >
            <h3 className="text-5xl font-bold text-[#1F2937] tracking-tighter">
              <CountUp to="92" />%
            </h3>
            <p className="text-[#6B7280] mt-1 text-xs font-medium">Customer satisfaction rate</p>
          </motion.div>

          {/* Card 5: Reduced p-10 to p-6 */}
          <motion.div
            variants={item}
            whileHover={{ y: -5 }}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
          >
            <h4 className="text-base font-bold text-[#1F2937] mb-2">3 Years of Impact</h4>
            <p className="text-[#6B7280] text-xs leading-relaxed mb-4">
              Making quality medical services accessible anytime, anywhere.
            </p>
            <p className="text-[#4A8FD8] font-bold text-[10px] uppercase">$60B global potential</p>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}