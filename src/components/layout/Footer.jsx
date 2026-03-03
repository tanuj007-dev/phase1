import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/final logo.png';

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/#wellness-overview' },
  { label: 'Programs & Treatments', to: '/#featured-video' },
  { label: 'Wellness Blog', to: '/blog' },
];

const TREATMENTS_LINKS = [
  { label: 'Weight Loss', to: '/#wellness-overview' },
  { label: 'Hormone Balance', to: '/#wellness-overview' },
  { label: 'Sleep Optimization', to: '/#wellness-overview' },
  { label: 'Stress & Mind Wellness', to: '/#wellness-overview' },
];

const SUPPORT_LINKS = [
  { label: 'FAQ', to: '/#contact' },
  { label: 'Careers', to: '/#contact' },
  { label: 'Privacy Policy', to: '/#contact' },
  { label: 'Terms & Conditions', to: '/#contact' },
];

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://facebook.com', icon: FacebookIcon },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: LinkedInIcon },
  { label: 'Instagram', href: 'https://instagram.com', icon: InstagramIcon },
  { label: 'Twitter', href: 'https://twitter.com', icon: TwitterIcon },
];

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setEmail('');
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <footer
      id="contact"
      className="relative mt-auto w-full overflow-hidden bg-sky-200 text-slate-800"
      role="contentinfo"
    >
      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 sm:py-10 lg:px-10 lg:py-12 xl:px-12">
        {/* Top section: Newsletter */}
        <div className="flex flex-col gap-6 border-b border-slate-400/60 pb-8 sm:gap-8 sm:pb-10 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
          <div className="max-w-xl">
            <h2 className="text-xl font-bold tracking-tight text-slate-800 sm:text-2xl md:text-3xl lg:text-4xl">
              Get Our News And Updates
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-800 sm:mt-2 sm:text-base">
              Empowering Your Projects, Enhancing Your Success, Every Step of the Way.
            </p>
          </div>
          <form
            onSubmit={handleSubscribe}
            className="flex w-full max-w-md shrink-0 flex-col gap-2 rounded-2xl bg-white/80 p-1.5 ring-1 ring-slate-300 backdrop-blur-sm focus-within:ring-2 focus-within:ring-sky-600 sm:flex-row sm:gap-0 sm:rounded-full sm:p-0"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your mail"
              required
              className="min-w-0 flex-1 rounded-xl bg-transparent px-4 py-3 text-sm text-slate-800 placeholder-slate-500 outline-none sm:rounded-none sm:px-5 sm:py-3.5 sm:text-base lg:px-6 lg:py-4"
            />
            <button
              type="submit"
              className="w-full rounded-xl bg-sky-600 px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-sky-700 sm:w-auto sm:rounded-full sm:px-6 sm:py-3.5 sm:text-base lg:px-8 lg:py-4"
            >
              {submitted ? 'Subscribed!' : 'Subscribe'}
            </button>
          </form>
        </div>

        {/* Main columns: Logo + description + social | Quick Links | Treatments | Support */}
        <div className="grid grid-cols-1 gap-8 py-8 sm:grid-cols-2 sm:gap-8 sm:py-10 lg:grid-cols-4 lg:gap-8 lg:py-12">
          {/* Column 1: Logo, description, social */}
          <div className="flex flex-col sm:col-span-2 lg:col-span-1">
            <Link to="/" className="inline-flex items-center gap-2.5 rounded focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 focus:ring-offset-sky-200">
              <img src={logo} alt="WellTalk" className="h-14 w-28 object-contain sm:h-16 sm:w-32 lg:h-20 lg:w-40" />
            </Link>
            <p className="mt-3 text-sm leading-relaxed text-slate-800 sm:mt-4">
              Our trusted partner in holistic health and well-being. We bring science, care, and compassion together.
            </p>
            <ul className="mt-4 flex gap-2.5 sm:mt-6 sm:gap-3">
              {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-700 text-white transition-colors hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-sky-600 sm:h-10 sm:w-10"
                    aria-label={label}
                  >
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 sm:text-sm">Quick Links</h3>
            <ul className="mt-3 flex flex-col gap-1.5 sm:mt-4 sm:gap-2">
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-sm text-slate-800 transition-colors hover:text-slate-900">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Treatments */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 sm:text-sm">Treatments</h3>
            <ul className="mt-3 flex flex-col gap-1.5 sm:mt-4 sm:gap-2">
              {TREATMENTS_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-sm text-slate-800 transition-colors hover:text-slate-900">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Support */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-800 sm:text-sm">Support</h3>
            <ul className="mt-3 flex flex-col gap-1.5 sm:mt-4 sm:gap-2">
              {SUPPORT_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to} className="text-sm text-slate-800 transition-colors hover:text-slate-900">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar: Copyright | Privacy & Terms */}
        <div className="flex flex-col items-center justify-between gap-3 border-t border-slate-400/60 pt-5 text-center text-xs text-slate-800 sm:flex-row sm:gap-4 sm:pt-6 sm:text-left sm:text-sm">
          <p>© {new Date().getFullYear()} WellTalk. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <Link to="/#contact" className="transition-colors hover:text-slate-900">
              Privacy Policy
            </Link>
            <Link to="/#contact" className="transition-colors hover:text-slate-900">
              Terms of Services
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
