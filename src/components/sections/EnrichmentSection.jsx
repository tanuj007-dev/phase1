import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const EnrichmentSection = () => {
  // Animation Variants defined outside for cleaner JSX
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, staggerChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="relative py-12 px-4 md:px-6 bg-[#f8faf9] overflow-hidden">
      {/* Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]"></div>

      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="bg-white rounded-[2rem] md:rounded-[3rem] p-6 md:p-12 shadow-xl shadow-emerald-900/5 border border-emerald-50 relative z-10"
        >
          {/* Decorative Blur Background */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-emerald-100/40 rounded-full blur-3xl -z-10"></div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-center">
            
            {/* Left Content Area */}
            <div className="lg:col-span-3 space-y-6">
              <motion.div 
                variants={itemVariants}
                className="inline-flex items-center gap-2 bg-emerald-50 px-4 py-1.5 rounded-full text-[#0a4a3c] text-xs md:text-sm font-bold tracking-wide"
              >
                <Sparkles className="w-4 h-4" />
                <span>PREMIUM HOME CARE</span>
              </motion.div>

              <motion.h2 
                variants={itemVariants}
                className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] md:leading-tight"
              >
                Enriching Lives of Seniors <br /> 
                <span className="text-[#0a4a3c]">Through Empowerment</span>
              </motion.h2>

              <motion.p 
                variants={itemVariants}
                className="text-slate-600 text-base md:text-lg max-w-xl leading-relaxed"
              >
                We provide more than just assistance; we provide companionship and 
                dignity, ensuring your loved ones thrive in the comfort of their own home.
              </motion.p>

              <motion.div variants={itemVariants} className="pt-2">
                <Link to="/contact">
  <motion.button
    whileHover={{ scale: 1.05, backgroundColor: "#0e5a4a" }}
    whileTap={{ scale: 0.95 }}
    className="group flex items-center gap-3 bg-[#0a4a3c] text-white px-8 py-4 rounded-2xl font-bold text-lg shadow-lg shadow-emerald-900/20 transition-all"
  >
    Free Consultation
    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
  </motion.button>
</Link>
              </motion.div>
            </div>

            {/* Right Image Area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-2 relative"
            >
              {/* Floating Container */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                {/* Fixed Image Source with fallback styling */}
                <img 
                  src="https://images.unsplash.com/photo-1516703991631-74d86cb4345d?auto=format&fit=crop&q=80&w=800" 
                  alt="Senior care interaction"
                  className="w-full h-[320px] md:h-[380px] object-cover rounded-[2.5rem] shadow-2xl border-4 border-white"
                />
                
                {/* Trust Badge */}
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-4 -right-2 md:-right-6 bg-white p-4 rounded-2xl shadow-xl border border-emerald-50 hidden sm:block"
                >
                  <div className="flex flex-col items-center">
                    <span className="text-[#0a4a3c] font-black text-2xl">100%</span>
                    <span className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">Trusted Care</span>
                  </div>
                </motion.div>
              </motion.div>

              {/* Decorative Geometric Element */}
              <div className="absolute -z-10 -top-4 -left-4 w-24 h-24 bg-emerald-50 rounded-full"></div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EnrichmentSection;