import React from 'react';
import { motion } from 'framer-motion';

/**
 * HeroSectionHealthcare.jsx
 * A refined hero section with 5 high-quality healthcare images and smooth animations.
 */
const HeroSectionHealthcare = () => {
  const images = [
  { 
    src: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80", 
    alt: "Doctor Consultation" 
  },
  { 
    src: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=400&q=80", 
    alt: "Hospital Equipment" 
  },
  { 
    src: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=400&q=80", 
    alt: "Medical Team Working" 
  },
  { 
    src: "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=400&q=80", 
    alt: "Patient Support" 
  },
  { 
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=400&q=80", 
    alt: "Healthcare Technology" 
  }
];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section className="bg-[#F4F6F8] py-16 px-4 flex flex-col items-center justify-center min-h-[85vh] font-[Poppins] overflow-hidden">
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-[1000px] w-full mx-auto"
      >
        
        {/* Five Image Row */}
        <div className="grid grid-cols-5 gap-4 mb-12">
          {images.map((img, i) => (
            <motion.div 
              key={i} 
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              className="relative h-[110px] md:h-[150px] w-full overflow-hidden rounded-2xl shadow-md border border-white bg-white"
            >
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover grayscale-[0.2] hover:grayscale-0 transition-all duration-500"
              />
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center text-center">
          {/* Status Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-100 mb-8"
          >
            <motion.span 
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-2 h-2 rounded-full bg-[#4A8FD8]"
            ></motion.span>
            <span className="text-[11px] font-bold text-[#4A8FD8] uppercase tracking-[0.1em]">Next-Gen Medical Systems</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1F2937] leading-[1.1] tracking-tight max-w-3xl mb-8"
          >
            Breaking Down Barriers <br />
            to Better <span className="italic font-serif text-[#4A8FD8]">Healthcare</span>
          </motion.h1>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="flex flex-col items-center gap-6">
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
              whileTap={{ scale: 0.98 }}
              className="bg-[#4A8FD8] hover:bg-[#3b76b3] text-white px-10 py-4 rounded-full font-semibold text-base shadow-lg transition-all"
            >
              Join 1,200+ Providers
            </motion.button>

            <p className="text-[#6B7280] text-sm md:text-base max-w-md leading-relaxed">
              We're reshaping medical workflows by making data accessible, secure, and human-centric.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSectionHealthcare;