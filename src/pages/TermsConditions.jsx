import React, { useState, useMemo } from "react";
import { ChevronRight, CheckCircle2, FileText } from "lucide-react";

const TermsConditions = () => {
  const [activeSection, setActiveSection] = useState(1);

  const sections = useMemo(() => [
    {
      id: 1,
      title: "Definitions",
      icon: <FileText size={20} />,
      content: (
        <div className="space-y-6">
          <p className="text-slate-600">
            The following terms help explain how our wellness platform operates
            and how users interact with our services.
          </p>

          <div className="grid gap-4">
            {[
              {
                term: "Platform",
                desc: "The WellTalk website and digital services offering wellness programs and resources.",
              },
              {
                term: "User",
                desc: "Any individual accessing or participating in WellTalk programs, events, or content.",
              },
              {
                term: "Programs",
                desc: "Wellness sessions such as meditation, yoga, health workshops, and community activities.",
              },
              {
                term: "Content",
                desc: "Articles, videos, guides, and educational materials available on the platform.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="p-5 rounded-xl border border-blue-100 bg-blue-50 flex gap-4"
              >
                <span className="text-blue-600 font-semibold min-w-[140px]">
                  {item.term}
                </span>
                <span className="text-slate-600 text-sm">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    {
      id: 2,
      title: "Platform Usage",
      icon: <CheckCircle2 size={20} />,
      content: (
        <div className="space-y-4">
          <p className="text-slate-600">
            By accessing WellTalk, you agree to use the platform responsibly
            and respectfully.
          </p>

          <div className="space-y-3">
            {[
              "Users must provide accurate information when registering.",
              "The platform should not be used for unlawful activities.",
              "Users must respect other community members.",
              "Unauthorized copying or redistribution of content is prohibited.",
            ].map((item, index) => (
              <div key={index} className="flex gap-3">
                <CheckCircle2 className="text-blue-600 mt-1" size={16} />
                <span className="text-slate-600 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      ),
    },

    {
      id: 3,
      title: "Programs & Events",
      content: (
        <div className="space-y-4 text-slate-600">
          <p>
            WellTalk offers wellness programs, workshops, and community
            gatherings designed to support mental and physical wellbeing.
          </p>

          <p>
            Participation in events may require prior registration. Some events
            may have limited seats and are offered on a first-come,
            first-served basis.
          </p>

          <p>
            Event schedules, speakers, or locations may change when necessary
            to improve the experience for participants.
          </p>
        </div>
      ),
    },

    {
      id: 4,
      title: "Health Disclaimer",
      content: (
        <div className="space-y-4 text-slate-600">
          <p>
            The wellness information provided on WellTalk is intended for
            educational purposes only.
          </p>

          <p>
            Our programs do not replace professional medical advice,
            diagnosis, or treatment.
          </p>

          <p>
            Always consult a qualified healthcare professional before starting
            any wellness or fitness program.
          </p>
        </div>
      ),
    },

    {
      id: 5,
      title: "Privacy & Data",
      content: (
        <div className="space-y-4 text-slate-600">
          <p>
            We respect your privacy and are committed to protecting your
            personal information.
          </p>

          <p>
            Data collected on the platform helps us improve services and
            provide personalized wellness experiences.
          </p>

          <p>
            Please review our Privacy Policy for detailed information on how
            your data is handled.
          </p>
        </div>
      ),
    },

    {
      id: 6,
      title: "Limitation of Liability",
      content: (
        <p className="text-slate-600">
          WellTalk is not responsible for injuries or damages that may occur
          during participation in wellness activities. Users participate at
          their own discretion and assume responsibility for their wellbeing.
        </p>
      ),
    },

    {
      id: 7,
      title: "Changes to Terms",
      content: (
        <p className="text-slate-600">
          We may update these Terms & Conditions periodically to reflect
          improvements or changes in our services. Continued use of the
          platform indicates acceptance of the updated terms.
        </p>
      ),
    },
  ], []);

  const currentContent =
    sections.find((section) => section.id === activeSection) || sections[0];

  return (
    <div className="min-h-screen bg-white text-slate-800 pt-32">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 py-12">

        {/* Sidebar */}
        <aside className="lg:col-span-4">
          <div className="sticky top-32">

            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-50 text-blue-600 p-2 rounded-lg">
                <FileText size={20} />
              </div>
              <h2 className="font-semibold text-lg">
                Policy Navigation
              </h2>
            </div>

            <nav className="flex flex-col gap-2">
              {sections.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex justify-between items-center px-4 py-3 rounded-xl transition ${
                    activeSection === item.id
                      ? "bg-blue-600 text-white"
                      : "text-slate-600 hover:bg-blue-50"
                  }`}
                >
                  <span className="text-sm font-medium">{item.title}</span>
                  <ChevronRight size={16} />
                </button>
              ))}
            </nav>

            <div className="mt-8 p-6 rounded-xl bg-slate-900 text-white">
              <p className="text-xs text-slate-400 mb-3">
                Need a PDF version?
              </p>

              <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-semibold">
                Download Terms
              </button>
            </div>

          </div>
        </aside>

        {/* Content */}
        <main className="lg:col-span-8">
          <div className="max-w-2xl">

            <div className="text-xs font-semibold text-blue-600 mb-3">
              Legal Document • Updated March 2026
            </div>

            <header className="mb-10">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">
                {currentContent.title}
              </h1>

              <div className="w-16 h-1 bg-blue-600 rounded-full" />
            </header>

            <div className="space-y-6">
              {currentContent.content}
            </div>

            <div className="mt-16 pt-6 border-t border-slate-100 flex justify-between text-xs text-slate-400">
              <p>Confidential & Proprietary</p>
              <p>© 2026 WellTalk Ltd.</p>
            </div>

          </div>
        </main>

      </div>
    </div>
  );
};

export default TermsConditions;