import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/final logo.png';

export default function Navbar() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinkBase =
        'text-[15px] font-medium text-[#939598] transition-colors hover:text-[#36D8B8] focus-visible:outline-none';

    return (
        <div className={`fixed left-0 right-0 z-[1000] flex justify-center transition-all duration-500 ${scrolled ? 'top-2' : 'top-6'}`}>
            <nav className={`flex w-[90%] max-w-5xl items-center justify-between rounded-full bg-white px-4 py-2.5 transition-shadow duration-500 border ${scrolled ? 'shadow-lg border-slate-200' : 'shadow-sm border-slate-100'}`}>
                {/* Logo */}
                <Link
                    to="/"
                    className="flex h-10 w-18 shrink-0 items-center justify-center bg-white transition-transform hover:scale-105"
                    aria-label="Home"
                >
                    <img src={logo} alt="" className="h-15 w-18 object-contain" />
                </Link>

                {/* Nav Links */}
                <ul className="hidden flex-1 list-none items-center justify-center gap-8 md:flex m-0 p-0">
                    <li
                        className="relative"
                        onMouseEnter={() => setDropdownOpen(true)}
                        onMouseLeave={() => setDropdownOpen(false)}
                    >
                        <button
                            type="button"
                            className={`${navLinkBase} flex items-center gap-1 bg-transparent border-0 cursor-pointer`}
                            aria-expanded={dropdownOpen}
                        >
                            Pages
                            <ChevronDownIcon />
                        </button>
                        <ul
                            className={`absolute left-1/2 top-full mt-4 min-w-[120px] -translate-x-1/2 rounded-xl border border-slate-100 bg-white p-2 shadow-xl m-0 list-none transition-all duration-300 ${dropdownOpen ? 'translate-y-0 opacity-100 visible' : 'translate-y-2 opacity-0 invisible'
                                }`}
                        >
                            <li>
                                <Link to="/" className="block rounded-lg px-3 py-2 text-sm text-[#939598] hover:bg-slate-50 hover:text-[#36D8B8]">
                                    Home
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/#features" className={navLinkBase}>
                            Features
                        </Link>
                    </li>
                    <li>
                        <Link to="/#about" className={navLinkBase}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link to="/#pricing" className={navLinkBase}>
                            Pricing
                        </Link>
                    </li>
                    <li>
                        <Link to="/blog" className={navLinkBase}>
                            Blog
                        </Link>
                    </li>
                </ul>

                {/* Right: Cart & Get a demo */}
                <div className="flex shrink-0 items-center gap-4">
                    <button className="text-[#939598] hover:text-[#36D8B8] transition-colors focus-visible:outline-none bg-transparent border-0 cursor-pointer p-0 mr-2" aria-label="Cart">
                        <CartIcon />
                    </button>
                    <Link
                        to="/#demo"
                        className="rounded-full bg-[#4595EE] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-[#4595EE] focus-visible:outline-none"
                    >
                        Get a demo
                    </Link>
                </div>
            </nav>
        </div>
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
