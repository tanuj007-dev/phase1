import React from 'react';
import { motion } from 'framer-motion';

const HeroSectionAbout = () => {
  const avatars = [
    "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop"
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-[#f0faf5] min-h-screen font-sans overflow-x-hidden pt-28">
      {/* pt-28 added for overlay navbar */}

      <section className="pb-12 px-4">
        <motion.div
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="max-w-6xl mx-auto text-center"
        >

          {/* Badge */}
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center gap-2 bg-white px-3 py-1 rounded-full shadow-sm border border-gray-100 mb-6"
          >
            <div className="flex -space-x-1.5">
              {avatars.map((src, i) => (
                <motion.img
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: i * 0.1 + 0.5 }}
                  key={i}
                  src={src}
                  className="w-5 h-5 rounded-full border border-white object-cover"
                  alt="user"
                />
              ))}
            </div>
            <span className="text-[10px] font-bold text-gray-800 uppercase tracking-wider">
              Joined 2k+ Members
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold text-black tracking-tight leading-[1.05] mb-4"
          >
            Changing How <br /> Healthcare{" "}
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="italic font-serif font-medium text-gray-800"
            >
              Works
            </motion.span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeInUp}
            className="max-w-lg mx-auto text-gray-500 text-sm md:text-base leading-snug mb-10"
          >
            We're reimagining healthcare with smarter systems and compassionate care.
            Our focus is on making every step simpler and truly people-centered.
          </motion.p>

          {/* Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[360px]"
          >

            {/* Left Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="md:col-span-3 bg-white rounded-3xl p-6 flex flex-col justify-end text-left relative overflow-hidden group"
            >
              <motion.div
                animate={{ rotate: [12, 20, 12] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-4 right-4 opacity-5"
              >
                <div className="w-16 h-16 bg-black rounded-lg" />
              </motion.div>

              <h2 className="text-4xl font-bold text-black leading-none mb-1">25M+</h2>
              <p className="text-gray-400 text-[11px] font-semibold uppercase tracking-wide">
                Trusted Worldwide
              </p>
            </motion.div>

            {/* Middle Card */}
            <motion.div
              whileHover={{ scale: 0.99 }}
              className="md:col-span-6 relative overflow-hidden rounded-3xl group"
            >
              <motion.img
                src="https://images.unsplash.com/photo-1581056771107-24ca5f033842?auto=format&fit=crop&q=80&w=1000"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Doctor"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-6 text-left">
                <p className="text-white text-lg font-medium leading-tight mb-2 max-w-[280px]">
                  "We're here to make healthcare simpler, faster, and more connected."
                </p>
                <p className="text-white/60 text-[9px] font-bold uppercase tracking-widest">
                  Founder, Medicare
                </p>
              </div>
            </motion.div>

            {/* Right Card */}
            <motion.div
              whileHover={{ y: -5 }}
              className="md:col-span-3 bg-white rounded-3xl p-6 flex flex-col justify-between text-left"
            >
              <div className="relative w-fit">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80"
                  className="w-10 h-10 rounded-full object-cover"
                  alt="user"
                />

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 1.2, type: "spring" }}
                  className="absolute -right-2 top-0 bg-black text-[8px] text-white font-black px-1.5 py-0.5 rounded-full border border-white"
                >
                  12+
                </motion.div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-2 text-lg font-bold">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 bg-blue-600 rounded-sm"
                  />
                  Logoipsum
                </div>

                <div>
                  <h2 className="text-4xl font-bold text-black leading-none mb-1">4.9</h2>
                  <p className="text-gray-400 text-[11px] font-semibold uppercase tracking-wide">
                    User Rating
                  </p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>
      </section>
    </div>
  );
};

export default HeroSectionAbout;