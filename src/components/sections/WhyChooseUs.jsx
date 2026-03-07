import React from "react";
import { motion } from "framer-motion";
import { Users, Lightbulb, Sprout } from "lucide-react";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.6, 0.05, 0.01, 0.9] } 
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const WhyChooseUs = () => {
  return (
    <section className="relative py-24 px-6 bg-[#f4f7f5] overflow-hidden">
      {/* Topographic Background Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            At Eldero, we understand that selecting a senior care provider is a significant decision.
          </p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {/* Card 1: Community Engagement */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="bg-[#dae1dd] p-10 rounded-[2.5rem] flex flex-col items-center text-center shadow-sm"
          >
            <div className="w-20 h-20 bg-white/50 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <Sprout className="w-10 h-10 text-[#0a4a3c]" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Community Engagement</h4>
            <p className="text-slate-700 leading-relaxed">
              We are actively involved in our community & strive to make a positive impact wherever we can.
            </p>
          </motion.div>

          {/* Card 2: Trusted Partner (Highlighted Center) */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -12, scale: 1.02 }}
            className="bg-[#0a4a3c] p-12 rounded-[2.5rem] flex flex-col items-center text-center shadow-2xl relative"
          >
            {/* Subtle Inner Glow */}
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 pointer-events-none"></div>
            
            <div className="w-24 h-24 bg-[#1a5a4c] rounded-[2rem] flex items-center justify-center mb-8 shadow-lg">
              <Users className="w-12 h-12 text-white" />
            </div>
            <h4 className="text-3xl font-bold text-white mb-4">Trusted Partner</h4>
            <p className="text-emerald-50/80 text-lg leading-relaxed">
              As your trusted partner in senior care, we are here to support you and your loved ones every step of the way.
            </p>
          </motion.div>

          {/* Card 3: Compassionate Team */}
          <motion.div 
            variants={fadeInUp}
            whileHover={{ y: -10 }}
            className="bg-[#dae1dd] p-10 rounded-[2.5rem] flex flex-col items-center text-center shadow-sm"
          >
            <div className="w-20 h-20 bg-white/50 rounded-2xl flex items-center justify-center mb-8 shadow-sm">
              <Lightbulb className="w-10 h-10 text-[#0a4a3c]" />
            </div>
            <h4 className="text-2xl font-bold text-slate-900 mb-4">Compassionate Team</h4>
            <p className="text-slate-700 leading-relaxed">
              Our team of caregivers is not only highly experienced but also genuinely compassionate individuals who are dedicated.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;