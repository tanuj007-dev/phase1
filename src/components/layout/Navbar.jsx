import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/final logo.png';
import logoHero from '../../assets/Untitled design (25).png';
import { INITIATIVE_OPTIONS } from '../../data/initiatives';

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

    const isOnHomeWithHeroVisible =
        location.pathname === '/' && scrollY < HERO_SCROLL_THRESHOLD;

    const useHeroLogo = isOnHomeWithHeroVisible;

    const useDarkNav = scrolled || location.pathname !== '/';

    const isActive = (path) => {
        if (path === '/') return location.pathname === '/' && location.hash === '';
        if (path === '/blog') return location.pathname === '/blog' || location.pathname.startsWith('/blog/');
        return location.hash === path || location.pathname === path;
    };

    const getLinkClass = (path) => {

        const active = isActive(path);

        if (active)
            return `text-[15px] font-semibold transition-colors ${
                useDarkNav ? 'text-[#2A8CF0]' : 'text-white'
            }`;

        return `text-[15px] font-semibold transition-colors ${
            useDarkNav
                ? 'text-[#9FB3C8] hover:text-[#2A8CF0]'
                : 'text-white hover:text-[#CDE3FF]'
        }`;
    };

    return (
        <header className="fixed top-0 z-1000 w-full border-b border-[#0B1F44] bg-[#030E2F] py-2 shadow-lg backdrop-blur-lg">

            <nav className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10 xl:px-12">

                <Link
                    to="/"
                    className="flex h-14 w-auto max-w-[180px] shrink-0 items-center justify-center transition-transform hover:scale-105 md:h-16"
                >
                    <img
                        src={logoHero}
                        alt="WellTalk"
                        className="h-full w-auto object-contain object-left brightness-110 contrast-110"
                    />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden flex-1 md:flex md:justify-center">
                    <ul
                        className={`flex items-center rounded-full px-6 py-2.5 backdrop-blur-xl shadow-xl md:px-8 ${
                            useDarkNav
                                ? 'gap-8 border border-[#0B1F44] bg-[#07163A]/80'
                                : 'gap-6 border border-white/25 bg-white/15'
                        }`}
                    >

                        {/* HOME */}
                        <li>
                            <Link to="/" className={`${getLinkClass('/')} flex items-center gap-1`}>
                                Home
                            </Link>
                        </li>


                        {/* WELLNESS INITIATIVES */}
<li
  className="relative"
  onMouseEnter={() => setDropdownOpen(true)}
  onMouseLeave={() => setDropdownOpen(false)}
>

  <button
    className={`${getLinkClass('/initiatives')} flex items-center gap-1`}
  >
    Wellness Initiatives
    <ChevronDownIcon />
  </button>

  {/* DROPDOWN */}
  <div
    className={`absolute left-1/2 top-10 w-[280px] -translate-x-1/2 rounded-2xl border border-[#0B1F44] bg-[#07163A]/95 backdrop-blur-xl shadow-2xl transition-all duration-300 ${
      dropdownOpen
        ? 'opacity-100 translate-y-0 visible'
        : 'opacity-0 -translate-y-3 invisible'
    }`}
  >

    <div className="py-2">

      {INITIATIVE_OPTIONS.map((item) => (
        <Link
          key={item.id}
          to={`/initiative/${item.slug || item.id}`}
          className="flex items-center justify-between px-5 py-3 text-sm font-medium text-[#9FB3C8] transition-all hover:bg-[#0D224F] hover:text-white"
        >

          {item.title}

          <svg
            className="h-4 w-4 opacity-70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M5 19L19 5M5 5h14v14" />
          </svg>

        </Link>
      ))}

    </div>

  </div>

</li>


                        <li>
                            <Link to="/events" className={getLinkClass('#events')}>
                                Events
                            </Link>
                        </li>

                        <li>
                            <Link to="/about-us" className={getLinkClass('/about')}>
                                About
                            </Link>
                        </li>

                        <li>
                            <Link to="/contact" className={getLinkClass('/contact')}>
                                Contact
                            </Link>
                        </li>

                        <li>
                            <Link to="/blog" className={getLinkClass('/blog')}>
                                Blog
                            </Link>
                        </li>

                    </ul>
                </div>

                {/* Right Buttons */}
                <div className="flex items-center gap-3">

                    <button
                        onClick={() => setMobileMenuOpen((prev) => !prev)}
                        className={`md:hidden flex h-10 w-10 items-center justify-center rounded-lg border backdrop-blur-sm ${
                            useDarkNav
                                ? 'border-[#2A8CF0]/40 bg-[#07163A] text-white'
                                : 'border-[#2A8CF0]/40 bg-[#2A8CF0]/30 text-white'
                        }`}
                    >
                        {mobileMenuOpen ? (
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M18 6L6 18M6 6l12 12" />
                            </svg>
                        ) : (
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M3 12h18M3 6h18M3 18h18" />
                            </svg>
                        )}
                    </button>

                    <Link
                        to="/contact"
                        className={`hidden md:inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold border shadow-lg transition-all ${
                            useDarkNav
                                ? 'border-[#2A8CF0]/40 bg-[#07163A] text-white hover:bg-[#0D224F]'
                                : 'border-white/25 bg-white/15 text-white hover:bg-white/25'
                        }`}
                    >
                        Enquire Now
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                        </svg>
                    </Link>

                </div>
            </nav>

        </header>
    );
}


const ChevronDownIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="6 9 12 15 18 9" />
    </svg>
);