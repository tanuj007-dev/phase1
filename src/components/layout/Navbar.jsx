import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/final logo.png';
import logoHero from '../../assets/Untitled design (25).png';

const HERO_SCROLL_THRESHOLD = 500;

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    const closeMobileMenu = () => setMobileMenuOpen(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setScrolled(window.scrollY > 20);
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (mobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [mobileMenuOpen]);

    const isOnHomeWithHeroVisible = location.pathname === '/' && scrollY < HERO_SCROLL_THRESHOLD;
    const useHeroLogo = isOnHomeWithHeroVisible;
    /** On blog (and other non-home) pages the background is white, so nav must use dark/visible style. */
    const useDarkNav = scrolled || location.pathname !== '/';

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/' && location.hash === '';
        if (path === '/blog') return location.pathname === '/blog' || location.pathname.startsWith('/blog/');
        return location.hash === path || location.pathname === path;
    };

    const getLinkClass = (path) => {
        const active = isActive(path);
        if (active) return `text-[15px] font-semibold transition-colors focus-visible:outline-none ${useDarkNav ? 'text-[#4595EE]' : 'text-white'}`;
        return `text-[15px] font-semibold transition-colors focus-visible:outline-none hover:text-slate-800 ${useDarkNav ? 'text-slate-600' : 'text-white'}`;
    };

    return (
        <header className={`fixed top-0 z-1000 w-full border-b transition-all duration-500 ${useDarkNav ? 'border-slate-200 bg-white/90 py-2 shadow-sm backdrop-blur-lg' : 'border-transparent bg-transparent py-4'}`}>
            <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-12">
                {/* Logo: hero logo when in hero section, default after scroll */}
                <Link
                    to="/"
                    className="flex h-14 w-auto max-w-[180px] shrink-0 items-center justify-center transition-transform hover:scale-105 md:h-16"
                    aria-label="Home"
                >
                    <img src={useHeroLogo ? logoHero : logo} alt="WellTalk" className="h-full w-auto object-contain object-left" />
                </Link>

                {/* Nav Links – glassmorphism pill */}
                <div className="hidden flex-1 md:flex md:justify-center">
                    <ul
                        className={`list-none m-0 flex items-center rounded-full px-6 py-2.5 backdrop-blur-xl shadow-lg md:px-8 md:gap-12 ${useDarkNav ? 'gap-8 border border-slate-200/80 bg-white/70' : 'gap-6 border border-white/25 bg-white/15'}`}
                    >
                    <li
                        className="relative"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <Link
                            to="/"
                            className={`${getLinkClass('/')} flex items-center gap-1 bg-transparent border-0 cursor-pointer`}
                            aria-expanded={dropdownOpen}
                        >
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to="#features" className={getLinkClass('#features')}>
                            Features
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" className={getLinkClass('/about')}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="#pricing" className={getLinkClass('#pricing')}>
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" className={getLinkClass('/blog')}>
                            Blog
                        </Link>
                    </li>
                </ul>
                </div>

                {/* Right: Hamburger (mobile only) + Enquire Now */}
                <div className="flex shrink-0 items-center gap-3">
                    {/* Hamburger button – mobile only */}
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-nav-menu"
                        className={`md:hidden flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#4595EE]/40 bg-[#4595EE]/25 backdrop-blur-sm transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4595EE] ${useDarkNav ? 'border-[#4595EE]/50 bg-[#4595EE]/30 text-slate-800' : 'text-white'}`}
                    >
                        {mobileMenuOpen ? (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                                <path d="M3 12h18M3 6h18M3 18h18" />
                            </svg>
                        )}
                    </button>

                    <Link
                        to="/#demo"
                        className={`hidden md:inline-flex group items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold backdrop-blur-xl border shadow-lg transition-all hover:-translate-y-0.5 focus-visible:outline-none ${useDarkNav ? 'border-slate-200/80 bg-white/70 text-slate-800 hover:bg-white/90' : 'border-white/25 bg-white/15 text-white hover:bg-white/25'}`}
                    >
                        <span>Enquire Now</span>
                        <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                </div>
            </nav>

            {/* Mobile menu – full-screen layout (screenshot style), same content */}
            <div
                id="mobile-nav-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
                className={`fixed inset-0 z-1001 md:hidden flex flex-col bg-slate-900/50 backdrop-blur-xl transition-opacity duration-300 ${mobileMenuOpen ? 'visible opacity-100' : 'invisible pointer-events-none opacity-0'}`}
            >
                {/* Top bar: Logo left, CLOSE right */}
                <div className="flex shrink-0 items-center justify-between px-4 sm:px-6 py-5 border-b border-white/15">
                    <Link to="/" className="flex items-center" onClick={closeMobileMenu} aria-label="Home">
                        <img src={useHeroLogo ? logoHero : logo} alt="WellTalk" className="h-10 w-auto object-contain object-left brightness-0 invert" />
                    </Link>
                    <button
                        type="button"
                        onClick={closeMobileMenu}
                        className="text-xl font-medium tracking-wider uppercase text-white hover:text-white/80 focus:outline-none focus:ring-2 focus:ring-white/50 focus:ring-offset-2 focus:ring-offset-transparent py-2"
                        aria-label="Close menu"
                    >
                        Close
                    </button>
                </div>

                {/* Centered nav links – vertical stack, generous spacing, larger font on mobile only */}
                <nav className="flex flex-1 flex-col items-center justify-center gap-8 py-10 px-4">
                    <Link
                        to="/"
                        className={`text-xl font-semibold tracking-wide uppercase focus:outline-none focus:ring-2 focus:ring-white/50 rounded ${isActive('/') ? 'text-[#4595EE]' : 'text-white hover:text-white/90'}`}
                        onClick={closeMobileMenu}
                    >
                        Home
                    </Link>
                    <Link
                        to="#features"
                        className={`text-xl font-semibold tracking-wide uppercase focus:outline-none focus:ring-2 focus:ring-white/50 rounded ${isActive('#features') ? 'text-[#4595EE]' : 'text-white hover:text-white/90'}`}
                        onClick={closeMobileMenu}
                    >
                        Features
                    </Link>
                    <Link
                        to="/about"
                        className={`text-xl font-semibold tracking-wide uppercase focus:outline-none focus:ring-2 focus:ring-white/50 rounded ${isActive('/about') ? 'text-[#4595EE]' : 'text-white hover:text-white/90'}`}
                        onClick={closeMobileMenu}
                    >
                        About
                    </Link>
                    <Link
                        to="#pricing"
                        className={`text-xl font-semibold tracking-wide uppercase focus:outline-none focus:ring-2 focus:ring-white/50 rounded ${isActive('#pricing') ? 'text-[#4595EE]' : 'text-white hover:text-white/90'}`}
                        onClick={closeMobileMenu}
                    >
                        Pricing
                    </Link>
                    <Link
                        to="/blog"
                            className={`text-xl font-semibold tracking-wide uppercase focus:outline-none focus:ring-2 focus:ring-white/50 rounded ${isActive('/blog') ? 'text-[#4595EE]' : 'text-white hover:text-white/90'}`}
                        onClick={closeMobileMenu}
                    >
                        Blog
                    </Link>
                    <Link
                        to="/#demo"
                        className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white/20 px-6 py-3 text-xl font-semibold uppercase tracking-wide text-white hover:bg-white/30 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
                        onClick={closeMobileMenu}
                    >
                        Enquire Now
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                </nav>
            </div>
        </header>
    );
}

const ChevronDownIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 opacity-80" aria-hidden>
        <polyline points="6 9 12 15 18 9" />
    </svg>
);

const CartIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
);
