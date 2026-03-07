import React, { useState, useMemo } from "react";
import { ChevronRight, ShieldCheck, FileText } from "lucide-react";

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState(1);

  const sections = useMemo(() => [
    {
      id: 1,
      title: "Introduction",
      icon: <FileText size={20} />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>
            At WellTalk, we respect your privacy and are committed to protecting
            your personal information. This Privacy Policy explains how we
            collect, use, and safeguard your data when you use our platform.
          </p>

          <p>
            By accessing our wellness programs, events, and digital content,
            you agree to the practices described in this policy.
          </p>
        </div>
      ),
    },

    {
      id: 2,
      title: "Information We Collect",
      icon: <ShieldCheck size={20} />,
      content: (
        <div className="space-y-4 text-slate-600">
          <p>
            We may collect different types of information to improve our
            services and provide a personalized experience.
          </p>

          <ul className="space-y-3">
            <li>• Personal details such as name, email address, and contact information.</li>
            <li>• Information provided when registering for wellness programs or events.</li>
            <li>• Usage data such as pages visited, session duration, and device type.</li>
            <li>• Feedback, comments, or messages submitted through the platform.</li>
          </ul>
        </div>
      ),
    },

    {
      id: 3,
      title: "How We Use Your Information",
      content: (
        <div className="space-y-4 text-slate-600">
          <p>
            The information we collect helps us deliver better wellness
            experiences and improve our services.
          </p>

          <ul className="space-y-3">
            <li>• To provide access to wellness programs and events.</li>
            <li>• To personalize user experience and recommend relevant content.</li>
            <li>• To communicate updates, newsletters, or event notifications.</li>
            <li>• To analyze platform usage and improve our services.</li>
          </ul>
        </div>
      ),
    },

    {
      id: 4,
      title: "Data Protection",
      content: (
        <div className="space-y-4 text-slate-600">
          <p>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, alteration, or disclosure.
          </p>

          <p>
            These measures include secure servers, encryption technologies,
            and restricted access to sensitive data.
          </p>
        </div>
      ),
    },

    {
      id: 5,
      title: "Cookies & Tracking",
      content: (
        <div className="space-y-4 text-slate-600">
          <p>
            Our platform may use cookies and similar technologies to enhance
            user experience.
          </p>

          <p>
            Cookies help us understand user preferences, track website
            performance, and improve functionality.
          </p>
        </div>
      ),
    },

    {
      id: 6,
      title: "Third-Party Services",
      content: (
        <div className="space-y-4 text-slate-600">
          <p>
            Some services on the platform may involve third-party tools such as
            event registration systems, analytics providers, or payment
            gateways.
          </p>

          <p>
            These services may collect limited information necessary to deliver
            their functionality.
          </p>
        </div>
      ),
    },

    {
      id: 7,
      title: "Your Rights",
      content: (
        <div className="space-y-4 text-slate-600">
          <p>
            You have the right to access, update, or request deletion of your
            personal data stored on our platform.
          </p>

          <p>
            If you wish to exercise these rights, you can contact our support
            team through the website.
          </p>
        </div>
      ),
    },

    {
      id: 8,
      title: "Policy Updates",
      content: (
        <p className="text-slate-600">
          We may update this Privacy Policy periodically to reflect changes in
          our services or legal requirements. Continued use of the platform
          indicates acceptance of the updated policy.
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
                <ShieldCheck size={20} />
              </div>
              <h2 className="font-semibold text-lg">
                Privacy Navigation
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
                  <span className="text-sm font-medium">
                    {item.title}
                  </span>

                  <ChevronRight size={16} />
                </button>
              ))}
            </nav>

            <div className="mt-8 p-6 rounded-xl bg-slate-900 text-white">
              <p className="text-xs text-slate-400 mb-3">
                Need a PDF version?
              </p>

              <button className="w-full py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-semibold">
                Download Policy
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

export default PrivacyPolicy;