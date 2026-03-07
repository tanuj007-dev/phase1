import React from "react";
import { services } from "../../data/servicesData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ServicesSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="relative bg-gray-50 pb-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 pt-12 text-center">
        
        <motion.p 
          initial={{ opacity: 0, tracking: "0.1em" }}
          whileInView={{ opacity: 1, tracking: "0.2em" }}
          viewport={{ once: true }}
          className="text-green-600 font-bold uppercase text-xs mb-3"
        >
          Our Services
        </motion.p>

        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-extrabold mb-6 text-slate-900"
        >
          Our Senior Care Services
        </motion.h2>

        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "64px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-1.5 bg-green-500 mx-auto mb-8 rounded-full"
        />

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-gray-600 mb-16 max-w-2xl mx-auto text-lg leading-relaxed"
        >
          Discover a wide range of personalized services designed to meet
          the unique needs of seniors.
        </motion.p>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.slug}
              variants={itemVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.2 }
              }}
              className="group relative p-8 rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow duration-300 text-left"
            >

              <div className="text-4xl mb-6 flex items-center justify-center w-16 h-16 rounded-2xl bg-green-50 text-green-600 group-hover:scale-110 group-hover:bg-green-600 group-hover:text-white transition-all duration-300">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-green-700 transition-colors">
                {service.title}
              </h3>

              <p className="text-gray-500 mb-6 text-sm leading-relaxed line-clamp-3">
                {service.description}
              </p>

              <Link
                to={`/services/${service.slug}`}
                className="inline-flex items-center font-bold text-sm text-green-600 group/link"
              >
                Learn More
                <motion.span 
                  className="ml-2"
                  animate={{ x: [0, 4, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                >
                  →
                </motion.span>
              </Link>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;