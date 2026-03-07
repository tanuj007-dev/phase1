import React, { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { getInitiative } from "../data/initiatives";
import BlogSection from "../components/sections/BlogSection";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function InitiativePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const initiative = getInitiative(slug);

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!initiative) return null;

  const { title, image } = initiative;

  return (
    <motion.main
      initial="hidden"
      animate="visible"
      // Updated background to a softer off-white/ice-blue tint
      className="flex-1 bg-[#F8FAFC] text-[#2D3748] selection:bg-[#4A90E2]/30"
    >
      {/* 1. PARALLAX HERO SECTION */}
      <section className="relative h-[70vh] min-h-[600px] w-full overflow-hidden flex items-center justify-center">
        <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
          <img
            src={image}
            alt={title}
            // Slightly warmer brightness to match the soft-focus image style
            className="w-full h-[120%] object-cover brightness-[0.85] contrast-[1.05]"
          />
        </motion.div>

        {/* Gradient overlay adjusted for the airy cloud feel */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#F8FAFC] z-10" />

        <div className="relative z-20 text-center px-6">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            // Changed to a clean, heavy Sans style (Inter/Montserrat feel)
            className="text-6xl md:text-8xl font-[800] text-white tracking-tight drop-shadow-lg"
          >
            {title}
          </motion.h1>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "80px" }}
            transition={{ delay: 0.5, duration: 0.8 }}
            // Primary Brand Blue from image
            className="h-1.5 bg-[#4A90E2] mx-auto mt-8 rounded-full shadow-lg shadow-[#4A90E2]/40"
          />
        </div>

        <div className="absolute bottom-0 left-0 w-full leading-[0] z-20">
          <svg className="relative block w-full h-[80px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58.47,113.13,129.58,110.19,190.41,92.83,255.43,74.24,261,67.73,321.39,56.44Z" fill="#F8FAFC"></path>
          </svg>
        </div>
      </section>

      {/* 2. OVERVIEW WITH STICKY CONTENT */}
     <section className="max-w-7xl mx-auto px-6 py-32">

        <div className="grid lg:grid-cols-2 gap-20 items-start">

          <div className="lg:sticky lg:top-32">

            <button
              onClick={() => navigate(-1)}
              className="group text-xs tracking-widest text-[#4A90E2] font-black mb-8 flex items-center gap-2"
            >
              <span className="group-hover:-translate-x-1 transition-transform">
                ←
              </span>
              BACK TO INITIATIVES
            </button>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-[#1A1C2E]">

              A <span className="text-[#4A90E2]">Holistic Approach</span>
              <br />
              to Personal Growth.

            </h2>

            <p className="text-lg text-[#4A5568] leading-relaxed mb-6">

              The <strong>{title}</strong> initiative is designed to empower
              individuals and communities to unlock their full potential.
              Through a combination of education, mentorship, and practical
              experiences, we aim to bridge the gap between knowledge and real
              world transformation.

            </p>

            <p className="text-lg text-[#4A5568] leading-relaxed mb-6">

              Our programs are built around sustainable growth, meaning the
              benefits extend beyond temporary motivation. Participants gain
              skills, habits, and perspectives that allow them to grow
              continuously both personally and professionally.

            </p>

            <p className="text-lg text-[#4A5568] leading-relaxed">

              Whether you're seeking mental clarity, career direction, physical
              wellbeing, or deeper community connection, this initiative offers
              a comprehensive support system to help you thrive in every area
              of life.

            </p>

          </div>

          {/* FEATURES */}

          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">

            {[
              {
                t: "Holistic Wellbeing",
                d: "A balanced focus on physical, mental, and emotional wellness.",
                icon: "🌱",
              },
              {
                t: "Community Support",
                d: "A strong network of like minded individuals who motivate each other.",
                icon: "🤝",
              },
              {
                t: "Expert Guidance",
                d: "Mentorship from industry experts, coaches, and professionals.",
                icon: "💎",
              },
              {
                t: "Skill Development",
                d: "Practical workshops and training programs for personal growth.",
                icon: "📚",
              },
              {
                t: "Sustainable Growth",
                d: "Long term systems that help maintain positive life changes.",
                icon: "🚀",
              },
              {
                t: "Leadership Training",
                d: "Programs that cultivate leadership and decision making skills.",
                icon: "🧭",
              },
              {
                t: "Global Perspective",
                d: "Exposure to diverse ideas and modern approaches to wellbeing.",
                icon: "🌍",
              },
              {
                t: "Innovation Mindset",
                d: "Encouraging creative thinking and problem solving skills.",
                icon: "💡",
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                whileInView="visible"
                initial="hidden"
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="p-10 bg-white border border-[#EBF4FF] rounded-[2rem] shadow-sm hover:shadow-xl transition-all duration-500"
              >
                <div className="text-4xl mb-6">{feature.icon}</div>

                <h4 className="font-bold text-xl text-[#1A1C2E] mb-3">
                  {feature.t}
                </h4>

                <p className="text-[#718096] leading-relaxed text-sm">
                  {feature.d}
                </p>

              </motion.div>
            ))}
          </div>

        </div>

      </section>
      {/* 4. STATS WITH DEEP NAVY BACKGROUND (Matches Dark Section in Image) */}
      <section className="relative py-28 bg-[#1A1C2E] overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(circle_at_center,_#4A90E2_0%,_transparent_70%)]" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-12 text-center relative z-10">
          {[
            { l: "Participants", v: "900+" },
            { l: "Sessions", v: "5,000+" },
            { l: "Expert Coaches", v: "25+" },
            { l: "Communities", v: "30+" },
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeInUp} whileInView="visible" initial="hidden">
              <p className="text-5xl md:text-6xl font-[800] text-white mb-2">{stat.v}</p>
              <p className="text-[#4A90E2] font-bold uppercase tracking-[0.2em] text-[10px]">{stat.l}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. VIDEO SECTION WITH SOFT ACCENTS */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            // Softening the video frame with a cleaner blue border
            className="relative p-1.5 bg-[#4A90E2]/20 rounded-[2.5rem]"
          >
            <div className="rounded-[2.2rem] overflow-hidden bg-white shadow-2xl shadow-[#1A1C2E]/10">
              <iframe
                className="w-full aspect-video"
                src="https://www.youtube.com/embed/6Af6b_wyiwI"
                title="Wellness Video"
                allowFullScreen
              />
            </div>
          </motion.div>

          <div>
            <h3 className="text-4xl font-extrabold mb-10 text-[#1A1C2E]">
              Transform Your <br/> Perspective
            </h3>
            <div className="space-y-4">
              {[
                "Guided meditation and mindfulness sessions",
                "Accessible online wellness resources",
                "Community events and workshops",
              ].map((txt, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-5 p-6 bg-[#F8FAFC] rounded-2xl border border-[#EBF4FF] hover:border-[#4A90E2]/30 transition-all cursor-default"
                >
                  <div className="w-6 h-6 rounded-full bg-[#4A90E2] flex items-center justify-center text-white text-[10px]">✓</div>
                  <span className="font-semibold text-[#4A5568]">{txt}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 6. CALL TO ACTION: THE "GLOW" SECTION (Matches "Break the Stigma" Blue) */}
      <section className="pb-32 px-6">
        <div className="max-w-6xl mx-auto bg-[#4A90E2] rounded-[3.5rem] p-16 md:p-24 text-center text-white relative overflow-hidden shadow-3xl shadow-[#4A90E2]/30">
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full -mr-40 -mt-40 blur-[100px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#1A1C2E]/20 rounded-full -ml-40 -mb-40 blur-[80px]" />
          
          <h2 className="text-4xl md:text-7xl font-[800] mb-12 relative z-10 leading-tight">
            Ready to rewrite <br/> your story?
          </h2>
          
          <Link
            to="/contact"
            // Button style updated to the "rounded, bold, white" look from image
            className="inline-block relative z-10 bg-white text-[#4A90E2] font-black px-14 py-6 rounded-2xl shadow-xl hover:bg-[#F8FAFC] transition-all text-xl uppercase tracking-tighter"
          >
            Join the {title} Initiative
          </Link>
        </div>
      </section>

      {/* 7. BLOG FEED SECTION (Matches "Latest News" in image) */}
      <section className="py-24 bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-6">
          {/* <div className="flex flex-col md:flex-row justify-between items-baseline mb-16 gap-4">
            <div>
              <span className="text-[#4A90E2] font-black text-xs uppercase tracking-[0.3em]">Insights</span>
              <h2 className="text-5xl font-extrabold text-[#1A1C2E] mt-4">Check our latest news</h2>
            </div>
            <Link to="/blog" className="bg-[#4A90E2] text-white px-6 py-2 rounded-full text-xs font-bold hover:brightness-110 transition-all">
              VIEW ALL
            </Link>
          </div> */}
          <BlogSection />
        </div>
      </section>
    </motion.main>
  );
}