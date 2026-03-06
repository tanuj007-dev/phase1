import React, { useState } from 'react';

const FAQ_ITEMS = [
  {
    question: 'What is wellness and why does it matter?',
    answer:
      'Wellness is the active pursuit of activities and choices that lead to a state of holistic health—physical, mental, emotional, and social. It matters because it helps you prevent illness, manage stress, build resilience, and live a more fulfilling life. Investing in wellness supports not only you but also your community and workplace.',
  },
  {
    question: 'How can I support mental health awareness?',
    answer:
      'You can support mental health awareness by talking openly about mental health, listening without judgment, sharing reliable resources, and challenging stigma. Supporting workplace mental health programs, volunteering with mental health organizations, and advocating for better access to care also make a real difference.',
  },
  {
    question: 'What healthcare resources does this initiative offer?',
    answer:
      'We offer access to wellness programs, mental health resources, preventive care information, and connections to qualified healthcare providers. Our initiatives focus on holistic care—from physical health and nutrition to stress management and emotional support—so you can make informed decisions about your health.',
  },
  {
    question: 'How does social awareness improve community health?',
    answer:
      'Social awareness helps communities recognize shared health challenges, reduce stigma, and create supportive environments. When people understand issues like mental health, addiction, and chronic disease, they are more likely to seek help, support others, and advocate for policies that improve access to care and equity.',
  },
  {
    question: 'Where can I get help in a mental health crisis?',
    answer:
      'If you or someone you know is in crisis, reach out immediately to a crisis helpline (e.g., national suicide prevention lifeline), go to the nearest emergency room, or contact a mental health professional. Many organizations offer 24/7 support. We also list trusted resources on our platform for ongoing support and referrals.',
  },
  {
    question: 'How do I start a wellness routine that sticks?',
    answer:
      'Start small: choose one or two habits (e.g., short walks, better sleep, or mindfulness) and build from there. Set realistic goals, track progress, and connect with others for accountability. Our programs offer structured guidance and support so you can create a sustainable routine that fits your life.',
  },
];

function FAQItem({ index, question, answer, isOpen, onToggle }) {
  const num = String(index + 1).padStart(2, '0');

  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center gap-4 py-5 text-left transition-colors hover:opacity-80 sm:gap-6 md:py-6"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span className="shrink-0 text-sm font-medium text-slate-400 sm:text-base" aria-hidden>
          [{num}]
        </span>
        <span className="min-w-0 flex-1 text-base font-normal text-slate-800 sm:text-lg">
          {question}
        </span>
        <span
          className="shrink-0 text-slate-400 transition-transform duration-200"
          aria-hidden
        >
          <svg
            className={`h-5 w-5 sm:h-6 sm:w-6 ${isOpen ? 'rotate-45' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
        </span>
      </button>
      <div
        id={`faq-answer-${index}`}
        role="region"
        aria-labelledby={`faq-question-${index}`}
        className="overflow-hidden transition-all duration-200 ease-out"
        style={{
          maxHeight: isOpen ? 500 : 0,
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div className="pb-5 pl-0 pr-12 sm:pl-[4.5rem] sm:pr-14 md:pl-[5.5rem] md:pb-6">
          <p className="text-sm leading-relaxed text-slate-600 sm:text-base">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex((prev) => (prev === index ? -1 : index));
  };

  return (
    <section
      id="faq"
      className="w-full bg-[#fafafa] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-7xl">
        {/* Two-column header */}
        <div className="mb-10 grid gap-8 sm:mb-12 md:grid-cols-[1fr,1fr] md:items-start md:gap-12 lg:mb-14">
          <h2
            id="faq-heading"
            className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-4xl lg:text-5xl"
          >
            Frequently asked questions
          </h2>
          <p className="text-base leading-relaxed text-slate-700 sm:text-lg">
            Find quick answers about wellness, mental health, healthcare, and how we help you and
            your community grow into your best self.
          </p>
        </div>

        {/* FAQ list */}
        <div className="rounded-lg bg-white px-4 shadow-sm ring-1 ring-slate-200/80 sm:px-6 md:px-8">
          {FAQ_ITEMS.map((item, index) => (
            <FAQItem
              key={index}
              index={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
