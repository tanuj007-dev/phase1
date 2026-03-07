import React, { useRef, useState, useEffect } from 'react';

/** Leaf icon – line-art style */
function LeafIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 22v-8" />
      <path d="M7 14c-1.5 0-3-.5-4-1.5-1.2-1.3-1.4-3.5-.5-5.2 1-1.8 3.2-2.4 5.5-2 1.2.2 2.4.7 3.3 1.3.4-.6.9-1 1.5-1.3 1.2-.5 2.6-.4 3.8.2 2 1 2.9 3 2.5 5-.3 1.5-1.2 2.7-2.4 3.4" />
      <path d="M17 14c1.5 0 3-.5 4-1.5 1.2-1.3 1.4-3.5.5-5.2-1-1.8-3.2-2.4-5.5-2-1.2.2-2.4.7-3.3 1.3-.4-.6-.9-1-1.5-1.3-1.2-.5-2.6-.4-3.8.2-2 1-2.9 3-2.5 5 .3 1.5 1.2 2.7 2.4 3.4" />
    </svg>
  );
}

function useScrollVisible(threshold = 0.08) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold, rootMargin: '0px 0px -24px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

const DARK_GREEN = '#1A3A32';
const ACCENT_GREEN = '#4595EE';

export default function ContactPage() {
  const [headerRef, headerVisible] = useScrollVisible(0.15);
  const [cardRef, cardVisible] = useScrollVisible(0.06);
  const [mapRef, mapVisible] = useScrollVisible(0.05);
  const [footerRef, footerVisible] = useScrollVisible(0.08);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: 'general',
    message: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Placeholder: could wire to API later
  };

 const handleChange = (e) => {
  const { name, value } = e.target;

  // If the input is the phone field, only update if the value is empty or numeric
  if (name === 'phone') {
    const onlyNums = value.replace(/[^0-9]/g, ''); // Removes anything not 0-9
    setFormData((prev) => ({ ...prev, [name]: onlyNums }));
  } else {
    // Standard update for all other fields
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
};

  return (
    <main className="min-h-screen bg-[#fafaf8] pt-20 pb-0">
      {/* ─── Header: Connect with us / Contact us ─── */}
      <header
        ref={headerRef}
        className="relative overflow-hidden bg-[#fafaf8] px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24"
      >
        {/* Decorative leaves – corners */}
        <div className="pointer-events-none absolute left-0 top-0 h-24 w-24 opacity-20 sm:h-32 sm:w-32" aria-hidden>
          <LeafIcon className="h-full w-full text-[#36D8B8]" />
        </div>
        <div className="pointer-events-none absolute right-0 top-0 h-24 w-24 opacity-20 sm:h-32 sm:w-32" aria-hidden>
          <LeafIcon className="h-full w-full rotate-180 text-[#36D8B8]" />
        </div>

        <div className="relative mx-auto max-w-7xl text-center">
          <p
            className={`text-sm font-medium uppercase tracking-widest transition-all duration-600 ease-out sm:text-base ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}
            style={{ color: ACCENT_GREEN }}
          >
            Connect with us
          </p>
          <h1
            className={`mt-2 text-4xl font-bold tracking-tight transition-all duration-700 ease-out sm:text-5xl md:text-6xl ${headerVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
            style={{ color: DARK_GREEN, transitionDelay: headerVisible ? '80ms' : '0ms' }}
          >
            Contact us
          </h1>
        </div>
      </header>

      {/* ─── Main card: Form + Info ─── */}
      <section ref={cardRef} className="px-4 pb-12 sm:px-5 md:pb-16">
        <div
          className={`mx-auto max-w-7xl overflow-hidden rounded-2xl bg-white shadow-[0_20px_60px_-12px_rgba(0,0,0,0.15)] transition-all duration-700 ease-out sm:rounded-3xl ${cardVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
          style={{ transitionDelay: cardVisible ? '120ms' : '0ms' }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr]">
            {/* Left: Form */}
            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
              <div className="flex items-center gap-2 text-slate-500">
                <LeafIcon className="h-4 w-4" style={{ color: ACCENT_GREEN }} />
                <span className="text-xs font-semibold uppercase tracking-widest">Get a quote</span>
              </div>
              <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl" style={{ color: DARK_GREEN }}>
                Bring nature in your home.
              </h2>

              <form onSubmit={handleSubmit} className="mt-6 space-y-4 sm:mt-8 sm:space-y-5">
                {/* Row 1: Your Name | Phone Number */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                  <label className="block">
                    <span className="sr-only">Your Name</span>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-[#1A3A32] outline-none transition placeholder:text-[#1A3A32]/70 focus:border-slate-300 focus:ring-2 focus:ring-[#36D8B8]/20"
                      placeholder="Your Name"
                    />
                  </label>
                  <label className="block">
                    <span className="sr-only">Phone Number</span>
                    <input
  type="tel" // Keeps the numeric keypad on mobile
  name="phone"
  value={formData.phone}
  onChange={handleChange}
  inputMode="numeric" // Forces numeric keyboard on many mobile browsers
  pattern="[0-9]*"    // Extra hint for browsers
  className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-[#1A3A32] outline-none transition placeholder:text-[#1A3A32]/70 focus:border-slate-300 focus:ring-2 focus:ring-[#36D8B8]/20"
  placeholder="Phone Number"
/>
                  </label>
                </div>
                {/* Row 2: Email Address | Subject Type */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
                  <label className="block">
                    <span className="sr-only">Email Address</span>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-[#1A3A32] outline-none transition placeholder:text-[#1A3A32]/70 focus:border-slate-300 focus:ring-2 focus:ring-[#36D8B8]/20"
                      placeholder="Email Address"
                    />
                  </label>
                  <label className="block">
                    <span className="sr-only">Subject Type</span>
                    <select
  name="subject"
  value={formData.subject}
  onChange={handleChange}
  className="contact-input w-full appearance-none rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-[#1A3A32] outline-none transition focus:border-slate-300 focus:ring-2 focus:ring-[#36D8B8]/20 [&>option]:text-[#1A3A32]"
  style={{ 
    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%231A3A32' stroke-width='2'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' d='M19 9l-7 7-7-7'/%3E%3C/svg%3E")`, 
    backgroundRepeat: 'no-repeat', 
    backgroundPosition: 'right 0.75rem center', 
    backgroundSize: '1.25rem', 
    paddingRight: '2.5rem' 
  }}
>
  {/* Optional: keeps the label visible if the user clears the selection elsewhere */}
  <option value="" disabled>Subject Type</option> 
  <option value="general">General enquiry</option>
  <option value="wellness">Wellness programs</option>
  <option value="events">Events & workshops</option>
  <option value="support">Support</option>
</select>
                  </label>
                </div>
                {/* Row 3: Message (full width) */}
                <label className="block">
                  <span className="sr-only">Message</span>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full resize-y rounded-lg border border-slate-200 bg-white px-4 py-3.5 text-[#1A3A32] outline-none transition placeholder:text-[#1A3A32]/70 focus:border-slate-300 focus:ring-2 focus:ring-[#36D8B8]/20"
                    placeholder="Message"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-xl px-6 py-3.5 text-base font-semibold text-white transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto sm:px-8"
                  style={{ backgroundColor: ACCENT_GREEN }}
                >
                  Submit Now
                </button>
              </form>

              <p className="mt-6 text-sm text-slate-500">
                If you have any questions, contact our office at:{' '}
                <span className="inline-flex items-center gap-1.5 font-medium text-slate-700">
                  <PhoneIcon className="h-4 w-4" style={{ color: ACCENT_GREEN }} />
                  +1-234-567-89
                </span>
              </p>
            </div>

            {/* Right: Dark green info panel – 2x2 grid with icon circles & separators */}
            <div
              className="flex flex-col rounded-b-2xl p-6 sm:p-8 md:p-10 lg:rounded-b-none lg:rounded-r-3xl"
              style={{ backgroundColor: '#4595EE' }}
            >
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-8 md:gap-8">
                <ContactBlock
                  icon={<EnvelopeIcon className="h-6 w-6 shrink-0 text-white" />}
                  title="Mail us 24/7"
                  lines={['contact@example.com', 'support@example.com']}
                />
                <ContactBlock
                  icon={<MapPinIcon className="h-6 w-6 shrink-0 text-white" />}
                  title="Our Location"
                  lines={['85 Preston, Ingle Maine', '98380, HoofNoord- 2132']}
                />
                <ContactBlock
                  icon={<PhoneIcon className="h-6 w-6 shrink-0 text-white" />}
                  title="Call US 24/7"
                  lines={['+001 236-895-4732', '+9123 895-4732-236']}
                />
                <ContactBlock
                  icon={<CalendarIcon className="h-6 w-6 shrink-0 text-white" />}
                  title="Working Days"
                  lines={['Mon to Fri - 09am to 06pm', 'Sat to Sun - Closed']}
                />
              </div>

              {/* Social strip */}
              <div
                className="mt-8 flex flex-col gap-4 rounded-xl px-5 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
              >
                <p className="text-sm font-semibold text-white">Connect with social media:</p>
                <div className="flex items-center gap-3">
                  {[
                    { label: 'Facebook', href: 'https://facebook.com', Icon: FacebookIcon },
                    { label: 'Twitter', href: 'https://twitter.com', Icon: TwitterIcon },
                    { label: 'Instagram', href: 'https://instagram.com', Icon: InstagramIcon },
                    { label: 'YouTube', href: 'https://youtube.com', Icon: YoutubeIcon },
                  ].map(({ label, href, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-white transition hover:opacity-90 sm:h-12 sm:w-12"
                      style={{ backgroundColor: 'rgba(255, 255, 255, 0.28)' }}
                      aria-label={label}
                    >
                      <Icon className="h-5 w-5 sm:h-6 sm:w-6" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Map ─── */}
      <section ref={mapRef} className="px-4 pb-12 sm:px-6 md:pb-16">
        <div
          className={`mx-auto max-w-7xl overflow-hidden rounded-2xl transition-all duration-700 ease-out sm:rounded-3xl ${mapVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}
          style={{ transitionDelay: mapVisible ? '100ms' : '0ms', boxShadow: '0 10px 40px -10px rgba(0,0,0,0.15)' }}
        >
          <iframe
            title="Jersey City map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.914950508!2d-74.062645!3d40.717206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2578a9c2b3c3b%3A0x7a1b8b0b0b0b0b0b!2sJersey%20City%2C%20NJ%2C%20USA!5e0!3m2!1sen!2sin!4v1640000000000!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-2xl sm:rounded-3xl"
          />
        </div>
      </section>

      {/* ─── Footer strip (logo placeholders) ─── */}
      <footer
        ref={footerRef}
        className="border-t border-slate-200 bg-white py-8 sm:py-10 md:py-12"
      >
        <div
          className={`mx-auto max-w-7xl px-4 transition-all duration-700 ease-out sm:px-5 ${footerVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
          style={{ transitionDelay: footerVisible ? '80ms' : '0ms' }}
        >
          <div className="grid grid-cols-2 place-items-center gap-x-4 gap-y-6 sm:flex sm:flex-wrap sm:justify-center sm:gap-x-8 sm:gap-y-4 md:gap-x-12 lg:gap-x-16">
            {[
              { Icon: LeafIcon, label: 'Wellness Programs' },
              { Icon: MindfulnessIcon, label: 'Mind & Body' },
              { Icon: UsersIcon, label: 'Community' },
              { Icon: HeartIcon, label: 'Care & Support' },
            ].map(({ Icon, label }, i) => (
              <div key={i} className="flex items-center gap-2 sm:gap-2.5" style={{ color: DARK_GREEN }}>
                <Icon className="h-7 w-7 shrink-0 opacity-90 sm:h-8 sm:w-8" />
                <span className="text-sm font-semibold sm:text-base md:text-lg">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </main>
  );
}

function ContactBlock({ icon, title, lines }) {
  return (
    <div className="flex flex-col items-start">
      <div
        className="mb-3 flex h-14 w-14 shrink-0 items-center justify-center rounded-full sm:mb-4 sm:h-16 sm:w-16"
        style={{ backgroundColor: 'rgba(255, 255, 255, 0.28)' }}
      >
        {icon}
      </div>
      <p className="text-base font-bold text-white sm:text-lg">{title}</p>
      <div className="mt-2 w-full border-b border-slate-400/50 pb-3 sm:mt-2.5 sm:pb-4" aria-hidden />
      <div className="mt-2 space-y-1 text-sm text-white/95 sm:mt-2.5 sm:text-[15px]">
        {lines.map((line, i) => (
          <p key={i}>{line}</p>
        ))}
      </div>
    </div>
  );
}

function EnvelopeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function MapPinIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function PhoneIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function CalendarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function FacebookIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function TwitterIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.691-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YoutubeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function EyeIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}

function StarIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

function TargetIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function MindfulnessIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <circle cx="12" cy="6" r="3" />
      <path d="M12 9v10M8 22c2-2 4-4 4-8s-2-6-4-6M16 22c-2-2-4-4-4-8s2-6 4-6" />
    </svg>
  );
}

function UsersIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function HeartIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  );
}
