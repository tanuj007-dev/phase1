import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/final logo.png';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const navLinkBase =
        'inline-flex items-center gap-1.5 rounded-lg px-3 py-2.5 text-[15px] font-medium text-white transition-colors hover:text-emerald-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900';

    return (
        <header className="fixed left-0 right-0 top-0 z-1000 border-b border-white/10 bg-slate-900">
            <nav className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10 xl:px-12">
                {/* Logo: circle icon + brand name */}
                <Link
                    to="/"
                    className="flex shrink-0 items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-emerald-500/20 ring-1 ring-emerald-400/30">
                        <img
                            src={logo}
                            alt=""
                            className="h-6 w-6 object-contain"
                        />
                    </div>
                    <span className="text-lg font-bold text-white">
                        WellTalk
                    </span>
                </Link>

                {/* Nav links: Home, Pages, Classes, Our Blog, Contact */}
                <ul className="flex flex-1 list-none items-center justify-center gap-1 p-0 m-0 max-[900px]:hidden">
                    <li
                        className="relative"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <button
                            type="button"
                            className={`${navLinkBase} inline-flex border-0 bg-transparent`}
                            aria-expanded={dropdownOpen}
                            aria-haspopup="true"
                        >
                            Home Pages
                            <ChevronDownIcon />
                        </button>
                        <ul
                            className={`absolute left-1/2 top-full z-1001 mt-1 min-w-[180px] -translate-x-1/2 list-none rounded-xl border border-white/10 bg-slate-800 p-1.5 shadow-xl ${
                                dropdownOpen ? 'visible opacity-100' : 'invisible opacity-0'
                            } transition-[opacity,visibility] duration-150 origin-top`}
                        >
                            <li>
                                <Link to="/" className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/#wellness-overview" className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white">
                                    Initiatives
                                </Link>
                            </li>
                            <li>
                                <Link to="/#events" className="block rounded-lg px-4 py-2.5 text-sm font-medium text-slate-200 hover:bg-white/10 hover:text-white">
                                    Events
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/#wellness-overview" className={navLinkBase}>
                            Classes
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" className={navLinkBase}>
                            Our Blog
                        </Link>
                    </li>
                    <li>
                        <a href="/#contact" className={navLinkBase}>
                            Contact
                        </a>
                    </li>
                </ul>

                {/* Right: phone + CTA */}
                <div className="flex shrink-0 items-center gap-4">
                    <a
                        href="tel:+1234567890"
                        className="hidden items-center gap-2.5 sm:flex rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                        aria-label="Call us"
                    >
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-500/30 text-white">
                            <PhoneIcon />
                        </span>
                        <span className="text-sm font-medium text-white">
                            +1-234-567-89
                        </span>
                    </a>
                    <Link
                        to="/#wellness-overview"
                        className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition hover:bg-emerald-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
                    >
                        Join us Today
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 text-white">
                            <ArrowRightIcon />
                        </span>
                    </Link>
                </div>
            </nav>
        </header>
    );
};

const ChevronDownIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-80" aria-hidden>
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

const PhoneIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
);

const ArrowRightIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
    </svg>
);

export default Navbar;
