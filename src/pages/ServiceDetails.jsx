import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion"; 
import { services } from "../data/servicesData";
import { 
  ArrowRightCircle, 
  UserCircle, 
  Heart, 
  Utensils, 
  Home, 
  Brain,
  Activity,
  Stethoscope,
  Users
} from "lucide-react";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const getIcon = (feature) => {
  const f = feature.toLowerCase();
  if (f.includes("personal")) return <UserCircle className="text-emerald-800 w-6 h-6" />;
  if (f.includes("respite")) return <Heart className="text-emerald-800 w-6 h-6" />;
  if (f.includes("meal")) return <Utensils className="text-emerald-800 w-6 h-6" />;
  if (f.includes("housekeeping")) return <Home className="text-emerald-800 w-6 h-6" />;
  if (f.includes("cognitive") || f.includes("memory")) return <Brain className="text-emerald-800 w-6 h-6" />;
  if (f.includes("mobility") || f.includes("exercise")) return <Activity className="text-emerald-800 w-6 h-6" />;
  if (f.includes("nursing") || f.includes("medical")) return <Stethoscope className="text-emerald-800 w-6 h-6" />;
  if (f.includes("social") || f.includes("companionship")) return <Users className="text-emerald-800 w-6 h-6" />;
  return <ArrowRightCircle className="text-emerald-800 w-6 h-6" />;
};

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) return <h2 className="text-center mt-40 font-bold">Service not found</h2>;

  return (
    <div className="bg-white min-h-screen text-slate-800 font-sans overflow-x-hidden">
      
      {/* HERO SECTION - Full Width Background */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="relative py-24 px-6 text-center bg-[#f4f7f5]"
      >
        <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/topography.png')]"></div>
        <div className="relative z-10 max-w-4xl mx-auto"> {/* Centered and wider content */}
          <motion.span 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-block bg-white px-4 py-1 rounded shadow-sm text-xs font-semibold text-emerald-800 uppercase tracking-wider"
          >
            Service Details
          </motion.span>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mt-6 mb-6 text-slate-900 leading-tight"
          >
            {service.title}
          </motion.h1>
          <motion.p 
            className="text-gray-500 text-lg md:text-xl leading-relaxed"
          >
            {service.description}
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Featured Image - Full Width of Container */}
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          src={service.image}
          alt={service.title}
          className="w-full h-[300px] md:h-[550px] object-cover rounded-[2.5rem] shadow-2xl mb-16"
        />

        {/* GRID LAYOUT */}
        <div className="grid lg:grid-cols-12 gap-16">
          
          {/* LEFT SIDE: Main Description & Features */}
          <div className="lg:col-span-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="text-3xl font-bold mb-8 text-slate-900 flex items-center gap-3">
                <div className="w-8 h-1 bg-emerald-600 rounded-full"></div>
                Service Overview
              </h2>
              <p className="text-gray-600 leading-9 mb-16 text-lg md:text-xl">
                {service.content}
              </p>
            </motion.div>

            {/* Feature Grid - Part of the main flow */}
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-x-10 gap-y-12"
            >
              {service.features.map((item, index) => (
                <motion.div 
                  key={index} 
                  variants={fadeInUp}
                  className="flex flex-col gap-3 group p-6 rounded-2xl border border-transparent hover:border-emerald-100 hover:bg-emerald-50/30 transition-all"
                >
                  <div className="flex items-center gap-4">
                    <motion.div 
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="p-3 bg-white shadow-sm rounded-xl"
                    >
                      {getIcon(item)}
                    </motion.div>
                    <h3 className="text-xl font-bold text-slate-800">{item}</h3>
                  </div>
                  <p className="text-gray-500 leading-relaxed">
                    Our dedicated professionals provide top-tier support for {item.toLowerCase()} to ensure safety and comfort.
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* RIGHT SIDE: Sidebar (Sticky) */}
          <aside className="lg:col-span-4">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="sticky top-10 space-y-8"
            >
              <div className="bg-[#f8faf9] p-8 rounded-[2rem] border border-emerald-50">
                <h3 className="text-2xl font-bold mb-6 text-slate-900">Other Services</h3>
                <div className="space-y-3">
                  {services.map((item) => (
                    <Link
                      key={item.slug}
                      to={`/services/${item.slug}`}
                      className="block"
                    >
                      <motion.div
                        whileHover={{ x: 5 }}
                        className={`flex items-center justify-between p-4 rounded-xl transition-all font-semibold ${
                          slug === item.slug
                            ? "bg-[#0a4a3c] text-white shadow-lg"
                            : "bg-white text-slate-700 hover:bg-emerald-50"
                        }`}
                      >
                        <span className="truncate mr-2">{item.title}</span>
                        <ArrowRightCircle className={`w-5 h-5 flex-shrink-0 ${slug === item.slug ? "text-white" : "text-emerald-600"}`} />
                      </motion.div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Optional Call to Action Widget */}
              <div className="bg-emerald-900 p-8 rounded-[2rem] text-white">
                <h4 className="text-xl font-bold mb-2">Need Help?</h4>
                <p className="text-emerald-100 mb-6 text-sm">Contact us today to discuss a custom care plan.</p>
                <Link to="/contact">
  <button className="w-full bg-white text-emerald-900 py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors">
    Contact Us
  </button>
</Link>
              </div>
            </motion.div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetails;