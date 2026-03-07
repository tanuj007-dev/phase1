import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
  {
    id: "hBdpugh5kkE",
    title: "Understanding Midlife Crisis | মাঝ বয়েসের সংস্কৃতি",
    thumbnail: "https://img.youtube.com/vi/hBdpugh5kkE/maxresdefault.jpg",
  },
  {
    id: "20_OquX77mg",
    title: "Detailed Health Guide to Diabetes & Its Cure",
    thumbnail: "https://img.youtube.com/vi/20_OquX77mg/maxresdefault.jpg",
  },
  {
    id: "YXJtebHhQZQ",
    title: "Knee Replacement Surgery: Risks & Benefits",
    thumbnail: "https://img.youtube.com/vi/YXJtebHhQZQ/maxresdefault.jpg",
  },
  {
    id: "XEVyn-UE_cQ",
    title: "Balanced Diet and Its Importance | সুষম খাদ্য",
    thumbnail: "https://img.youtube.com/vi/XEVyn-UE_cQ/maxresdefault.jpg",
  },
  {
    id: "XEVyn-UE_cQ",
    title: "Balanced Diet and Its Importance | সুষম খাদ্য",
    thumbnail: "https://img.youtube.com/vi/XEVyn-UE_cQ/maxresdefault.jpg",
  },
  
];

export default function FeaturedVideoSection() {

  const [activeVideo, setActiveVideo] = useState(null);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * videos.length);
    setActiveVideo(videos[randomIndex]);
  }, []);

  if (!activeVideo) return null;

  return (
    <section className="w-full bg-white py-10">

      <div className="max-w-7xl mx-auto px-6">

        {/* SECTION HEADING */}

        <div className="text-center mb-14">

          <h2 className="text-4xl font-extrabold text-slate-900">
            Our YouTube Health Library
          </h2>

          <p className="text-slate-500 mt-3 text-sm max-w-xl mx-auto">
            Watch expert health insights, medical guides and wellness tips
            directly from our YouTube channel.
          </p>

          <div className="w-20 h-1 bg-indigo-600 mx-auto mt-6 rounded-full"></div>

        </div>


        {/* GRID */}

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">


          {/* LEFT VIDEO */}

          <div className="lg:col-span-8">

            <motion.div
              layout
              className="relative w-full h-full min-h-[420px] rounded-[2.5rem] overflow-hidden shadow-2xl border-[6px] border-white ring-1 ring-slate-200 bg-black"
            >

              <AnimatePresence mode="wait">

                <motion.div
                  key={activeVideo.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >

                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${activeVideo.id}?autoplay=1&mute=1&rel=0&modestbranding=1&playsinline=1`}
                    title={activeVideo.title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />

                </motion.div>

              </AnimatePresence>

            </motion.div>

          </div>


          {/* RIGHT PLAYLIST */}

          <div className="lg:col-span-4">

            <div className="bg-white rounded-[2.5rem] shadow-xl border border-slate-100 h-full flex flex-col overflow-hidden">


              {/* HEADER */}

              <div className="p-8 pb-4">

                <div className="flex justify-between items-center mb-2">

                  <h4 className="font-extrabold text-slate-900 text-xl tracking-tight">
                    Health Hub
                  </h4>

                  <span className="bg-indigo-600 text-white text-[10px] font-bold py-1 px-3 rounded-full uppercase">
                    {videos.length} Videos
                  </span>

                </div>

                <div className="h-1.5 w-12 bg-indigo-500 rounded-full mb-6" />

                <motion.div
                  key={activeVideo.title}
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                >

                  <p className="text-[13px] font-bold text-slate-800 line-clamp-1 italic">
                    Now Playing: {activeVideo.title}
                  </p>

                  <p className="text-[10px] text-indigo-500 font-bold uppercase tracking-widest mt-1">
                    ● Premium Expert Insights
                  </p>

                </motion.div>

              </div>


              {/* PLAYLIST */}

              <div className="flex-1 overflow-y-auto custom-scrollbar px-4 pb-8 space-y-3">

                {videos.map((video, index) => (

                  <motion.div
                    key={video.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setActiveVideo(video)}
                    whileHover={{ scale: 1.02 }}
                    className={`relative flex gap-4 p-3.5 rounded-[1.8rem] cursor-pointer transition-all duration-300
                    ${activeVideo.id === video.id
                        ? "bg-indigo-600 shadow-xl shadow-indigo-100"
                        : "hover:bg-indigo-50/50"
                      }`}
                  >

                    {/* THUMB */}

                    <div className="relative flex-shrink-0 w-20 h-14 rounded-xl overflow-hidden shadow-sm">

                      <img
                        src={video.thumbnail}
                        alt=""
                        className="w-full h-full object-cover"
                      />

                    </div>


                    {/* TITLE */}

                    <div className="flex flex-col justify-center overflow-hidden">

                      <p className={`text-[12px] font-bold leading-tight line-clamp-2
                      ${activeVideo.id === video.id
                          ? "text-white"
                          : "text-slate-700"
                        }`}>

                        {video.title}

                      </p>

                    </div>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </div>


      <style jsx>{`

      .custom-scrollbar::-webkit-scrollbar{
      width:0px;
      }

      @media (min-width:1024px){

      .custom-scrollbar::-webkit-scrollbar{
      width:4px;
      }

      .custom-scrollbar::-webkit-scrollbar-thumb{
      background:#e2e8f0;
      border-radius:10px;
      }

      .custom-scrollbar:hover::-webkit-scrollbar-thumb{
      background:#cbd5e1;
      }

      }

      `}</style>

    </section>
  );
}